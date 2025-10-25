"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/FormField";

import { startJobApplySchema } from "@/schemas/startJobApply";

export default function StartJobApply() {
  // React Hook Form
  const form = useForm({
    resolver: zodResolver(startJobApplySchema),
    defaultValues: {
      name: "",
      email: "",
      expectedSalary: "",
      phone: "",
      presentSalary: "",
    },
  });

  //   Submit Form
  const onSubmit = (values: z.infer<typeof startJobApplySchema>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="   max-w-2xl mx-auto ">
      {/* JOb Post   Form  */}

      <div>
        <h2 className="text-h2 font-semibold">Post a New Job Opening</h2>
        <p className="my-4">
          Create job listings that attract top talent. Fill in the details below
          to post your job and start receiving applications today.
        </p>
      </div>
      <div className="mt-10">
        <Form {...form}>
          <form className="text-title " onSubmit={form.handleSubmit(onSubmit)}>
            {/* mame phone */}
            <div className="md:flex space-x-4">
              <CustomFormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Caring Hands   "
              />

              <CustomFormField
                control={form.control}
                name="phone"
                label="Phone"
                placeholder="+1243 5345345 "
              />
            </div>
            {/* email */}
            <div className="md:flex space-x-4 mt-10">
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="mkmks@gmail.com"
              />
            </div>

            {/* main Datas */}
            <div className="md:flex space-x-4">
              <CustomFormField
                control={form.control}
                name="presentSalary"
                label="Present Salary"
                placeholder="$ 150,000   "
              />

              <CustomFormField
                control={form.control}
                name="expectedSalary"
                label="Expected Salary"
                placeholder="$182398 3u884 "
              />
            </div>

            <div className="flex justify-end mt-6">
              <div className="flex space-x-4">
                <Button className="my-4  text-md font-semibold py-6">
                  Post A Job
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>

      {/* Social Log In */}
    </div>
  );
}
