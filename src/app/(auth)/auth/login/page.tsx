"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/FormField";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { useState } from "react";
import { useLoginMutation } from "@/redux/api/adminAuth/adminAuthApi";
import { Spinner } from "@/components/ui/spinner";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/redux/features/authSlice";
import Cookies from "js-cookie";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

// Regester zod Schema
export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LogIn() {
  // Call Redux API
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  // Get User Information from store
  const { loggedUser } = useSelector((state: RootState) => state.auth);

  // Set Error MSG
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);

  // Get Router to send OTV verigy page
  const router = useRouter();

  // React Hook Form
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   Submit Form
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await login(data);

      console.log("res",res)

      // If Success then redirect into verify OTP page
      if (res?.data) {
        console.log("Logged In", res?.data?.data?.accessToken);
        // Token
        const token = res?.data?.data?.accessToken;

        // Set toekn
        Cookies.set("accessToken", `Bearer ${token}`, { expires: 7 });

        console.log(loggedUser?.role);

        // Store Data Into Redux
        dispatch(setCredentials(token));
        router.push("/admin-dashboard");
      }

      // Set Error
      if ("error" in res) {
        setError(res?.error ?? null);
      } else {
        setError(null);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex space-x-6 items-center justify-center min-h-screen ">
      {/* Left side Image */}
      <div className="hidden md:block">
        <Image
          src="/auth/login.png"
          height={800}
          width={500}
          alt=" Register Image "
          className="mx-auto "
        />
      </div>
      {/* Content */}
      <div className="text-center max-w-md p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/auth/logo.png"
            height={100}
            width={100}
            alt="Logo Auth "
            className="mx-auto"
          />
          <h2 className="font-bold text-xl">DMVJOBS.ai</h2>
          <p className="text-[7px]">
            Empowering Careers — Strengthening the DMV
          </p>
        </Link>

        {/* Content */}
        <div className="mt-8 mb-4">
          <h1 className="text-h2 font-bold">Hi, Welcome Back!</h1>
          <p>Please enter your email and password below!</p>
        </div>
        {/* sign Up Form  */}

        {/* SHow Error Msg */}
        <ErrorAlert error={error} />

        <div className="mt-10">
          <Form {...form}>
            <form
              className="text-title "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Email */}
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="email@gmail.com"
              />
              {/* Passwords */}
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="••••••••"
                type="password"
              />
              {/* Forgot Pass */}
              <div className="flex justify-between items-center my-4">
                <div className="flex items-center space-x-2 text-caption">
                  <Checkbox id="checkBox" />
                  <label htmlFor="checkBox">Remember me</label>
                </div>
                <Link href="/" className="text-destructive ">
                  Forgot Password ?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="my-4 w-full text-md font-semibold py-6"
              >
                {isLoading && <Spinner className="mr-2 animate-spin" />}
                Log In
              </Button>
            </form>
          </Form>
        </div>

        {/* Social Log In */}
        <div>
          <div className="flex items-center gap-3 text-sm text-gray-500 my-4">
            <hr className="flex-1 h-px bg-neutral-300 border-0" />
            <span>or with</span>
            <hr className="flex-1 h-px bg-neutral-300 border-0" />
          </div>
          {/* Google Button */}
          <Button
            variant="outline"
            className="my-4 w-full text-md font-semibold py-6 flex justify-center items-cener"
          >
            <Image
              src="/auth/google.png"
              height={20}
              width={20}
              alt=" Register Image "
            />
            <span>Log In with Google</span>
          </Button>
          {/* Log In Option */}
          <p className="text-caption text-lg">
            If you don’t have any account please{" "}
            <Link href="/auth/register" className="font-bold text-secondary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
