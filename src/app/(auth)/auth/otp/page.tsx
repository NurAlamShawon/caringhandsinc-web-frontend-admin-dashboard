"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import CountdownTimer from "@/components/shared/CountdownTimer";
import {
  useResendOtpMutation,
  useVerifyEmailMutation,
} from "@/redux/api/auth/authApi";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { Spinner } from "@/components/ui/spinner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const FormSchema = z.object({
  otpCode: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function InputOTPForm() {
  //Revice User Id
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  // Redux API Call
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [resendOtp, { isLoading: resendOtpLoading }] = useResendOtpMutation();

  // Otp expired Time
  const [expired, setExpired] = useState(false);

  // Set Error MSG
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);

  // Router
  const router = useRouter();

  // Init Hook form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otpCode: "",
    },
  });

  // Handle Submit
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const finalData = { userId: id, ...data };

      const res = await verifyEmail(finalData);

      // RTK Query puts non-2xx responses here
      if (res.error) {
        console.log("API Response in error:", res.error);
        // If your API returns success inside error.data
      } else if (res.data) {
        const token = res?.data?.data?.accessToken;

        // Set toekn
        Cookies.set("accessToken", `Bearer ${token}`, { expires: 7 });

        if (res.data?.data?.role == "EMPLOYEE") {
          router.push("/complete-profile");
        } else {
          router.push("/");
        }
      }

      setError(null);
    } catch (err) {
      console.log(err);
    }
  };

  // HAndle Resend OTP
  const handleResendOtp = async () => {
    console.log(id);
    try {
      // Submit Data In back
      const res = await resendOtp({ userId: id });
      console.log(res);
      setExpired(false);

      // Set Error
      if ("error" in res) {
        setError(res?.error ?? null);
      } else {
        setError(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex space-x-6 items-center justify-center min-h-screen ">
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
          <h1 className="text-h4 font-bold">
            Enter 6-Digit code sent to your gmail
          </h1>
          <p>
            {" "}
            Enter the 6-digit verification code sent to you email. This code
            will expired in 02:00
          </p>
        </div>
        <div className="my-4">
          <ErrorAlert error={error} />
        </div>
        {/* sign Up Form  */}
        <div className="mt-10">
          <Form {...form}>
            <form
              className="text-title "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Email */}
              <FormField
                control={form.control}
                name="otpCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot
                            className="h-16 w-14 rounded-lg border border-neutral-500 text-h2"
                            index={0}
                          />
                          <InputOTPSlot
                            className="h-16 w-14 rounded-lg border border-neutral-500 text-h2"
                            index={1}
                          />
                          <InputOTPSlot
                            className="h-16 w-14 rounded-lg border border-neutral-500 text-h2"
                            index={2}
                          />
                          <InputOTPSlot
                            className="h-16 w-14 rounded-lg border border-neutral-500 text-h2"
                            index={3}
                          />
                          <InputOTPSlot
                            className="h-16 w-14 rounded-lg border border-neutral-500 text-h2"
                            index={4}
                          />
                          <InputOTPSlot
                            className="h-16 w-14 rounded-lg border border-neutral-500 text-h2"
                            index={5}
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription className="text-lg text-destructive">
                      {!expired ? (
                        <>
                          <CountdownTimer onExpire={() => setExpired(true)} />
                        </>
                      ) : (
                        <div className="text-red-500 font-medium mt-2">
                          ⏰ OTP expired! Please request a new one.
                        </div>
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Resend Otp */}

              {expired && (
                <Button
                  type="button"
                  className="my-4 w-full text-md font-semibold py-6"
                  onClick={handleResendOtp}
                  disabled={resendOtpLoading}
                >
                  {resendOtpLoading && (
                    <Spinner className="mr-2 animate-spin" />
                  )}
                  Resent OTP
                </Button>
              )}

              <Button
                className="my-4 w-full text-md font-semibold py-6"
                disabled={isLoading}
              >
                {isLoading && <Spinner className="mr-2 animate-spin" />} Verify
              </Button>
            </form>
          </Form>
        </div>
      </div>
      {/* RIght side Image */}
      <div className="hidden md:block">
        <Image
          src="/auth/create-account.png"
          height={600}
          width={400}
          alt=" Register Image "
          className="mx-auto "
        />
      </div>
    </div>
  );
}
