"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import z from "zod";
import CustomFormField from "@/components/FormField";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRegisterMutation } from "@/redux/api/auth/authApi";
import { useState } from "react";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

// Regester zod Schema
export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function Register() {
  // Get State Info
  const { role, employeType } = useSelector((state: RootState) => state.auth);

  // Call Redux API
  const [register, { isLoading }] = useRegisterMutation();

  // Set Error MSG
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);

  // Get Router to send OTV verigy page
  const router = useRouter();

  // React Hook Form
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  //   Submit Form
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const { confirmPassword, ...data } = { ...values, role, employeType };

    try {
      const res = await register(data);

      // If Success then redirect into verify OTP page
      if (res?.data) {
        console.log(res);
        router.push(`/auth/otp?id=${res?.data?.data?.id}`);
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
          src="/auth/create-account.png"
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
        <div className="mt-8">
          <h1 className="text-h2 font-bold">Create your account!</h1>
          <p>
            Welcome to DMVJOBS, Please enter the information requested to create
            your account
          </p>
        </div>
        {/* sign Up Form  */}
        <div className="mt-10">
          {/* SHow Error Msg */}
          <ErrorAlert error={error} />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="text-title "
            >
              {/* Names Group */}
              <div className="w-full flex space-x-4 my-4">
                <CustomFormField
                  control={form.control}
                  name="firstName" // type-safe with Path<T>
                  label="First Name"
                  placeholder="John"
                />
                <CustomFormField
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Hasan"
                />
              </div>
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
              <CustomFormField
                control={form.control}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="••••••••"
                type="password"
              />
              <Button
                type="submit"
                className="my-4 w-full text-md font-semibold py-6"
                disabled={isLoading}
              >
                {isLoading && <Spinner className="mr-2 animate-spin" />}
                Register
              </Button>
            </form>
          </Form>
        </div>

        {/* Social Log In */}
        <div>
          {/* Log In Option */}
          <p className="text-caption text-lg">
            If you have an account please{" "}
            <Link href="/auth/login" className="font-bold text-secondary">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
