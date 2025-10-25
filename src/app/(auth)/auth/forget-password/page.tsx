"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"; 
import Image from "next/image";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/FormField";

// Forget zod Schema
export const forgetPasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

export default function LogIn() {
  // React Hook Form
  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  //   Submit Form
  const onSubmit = (values: z.infer<typeof forgetPasswordSchema>) => {
    console.log("Form Submitted:", values);
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
          <h1 className="text-h2 font-bold">Forget Password</h1>
          <p> Enter email associated to your account</p>
        </div>
        {/* sign Up Form  */}
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
                label="Enter Email"
                placeholder="email@gmail.com"
              />

              <Button className="my-4 w-full text-md font-semibold py-6">
                Send OTP
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
