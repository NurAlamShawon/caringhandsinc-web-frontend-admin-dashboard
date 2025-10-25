"use client";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/FormField";
import { jobPostSchema } from "@/schemas/jobPost";
import CustomSelectField from "@/components/CustomSelect";
import { ArrayInput } from "@/components/ui/array-input";
import { CustomSkillsField } from "@/components/ui/custom-skills-field";
import CustomTextareaField from "@/components/CustomTextareaField";
import { interviewSchedulerSchema } from "@/schemas/interviewSchedulerSchema";

export default function Profile() {
  // React Hook Form
  const form = useForm({
    resolver: zodResolver(interviewSchedulerSchema),
    defaultValues: {
      interviewTitle: "",
      date: "", // e.g. "2025-06-25"
      time: "", // e.g. "08:52 AM"
      interviewPlatform: "", // e.g. "Google Meet"
      interviewLink: "", // auto-generated or user-provided
    },
  });

  //   Submit Form
  const onSubmit = (values: z.infer<typeof interviewSchedulerSchema>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div>
      <h2 className="text-h3 font-semibold text-black">
        Candidate Information
      </h2>
      <div className="flex-1 border border-neutral-300 rounded mt-10 p-6">
        <h1 className="text-h3 font-bold text-gray-900">Saifur Rahman</h1>
        <p className="text-gray-600 mb-4">Front End Developer</p>

        {/* Contact Details */}
        <div className="flex flex-wrap gap-6   md:h-10">
          <div className=" gap-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">Phone:</span>
            </div>
            <span className="text-gray-900 font-medium">23456785678</span>
          </div>
          <Separator orientation="vertical" />
          <div className=" gap-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">Email:</span>
            </div>
            <span className="text-gray-900 font-medium">
              mkamfaojf@gmail.copm
            </span>
          </div>
          <Separator orientation="vertical" />
          <div className=" gap-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">Location:</span>
            </div>
            <span className="text-gray-900 font-medium">Dhaka</span>
          </div>
        </div>
      </div>
      {/* Interview INformation */}
      <div className="mt-10">
        <h2 className="text-h3 font-semibold text-black">
          Candidate Information
        </h2>

        <Form {...form}>
          <form className="text-title mt-6" onSubmit={form.handleSubmit(onSubmit)}>
            {/* main Datas */}
            <CustomFormField
              control={form.control}
              name="interviewTitle"
              label="Interview Title"
              placeholder="Full Stack Developer"
            />
            <div className="md:flex space-x-4 mt-6">
              <CustomSelectField
                control={form.control}
                name="time"
                label="Time"
                placeholder="12:00 AM"
                options={[
                  { label: "12:00PM", value: "12" },
                  { label: "22:33PM", value: "13" },
                  { label: "12:30PM", value: "11" },
                  { label: "28:09AM", value: "other" },
                ]}
              />
              <CustomSelectField
                control={form.control}
                name="time"
                label="Time"
                placeholder="12:00 AM"
                options={[
                  { label: "12:00PM", value: "12" },
                  { label: "22:33PM", value: "13" },
                  { label: "12:30PM", value: "11" },
                  { label: "28:09AM", value: "other" },
                ]}
              />
            </div>
            {/* Links ANd Platform */}
            <div className="md:flex space-x-4 mt-6">
              <CustomSelectField
                control={form.control}
                name="interviewPlatform"
                label="Interview Platform"
                placeholder="Google Meet"
                options={[
                  { label: "Google Meet", value: "google" },
                  { label: "ZooM", value: "zoom" },
                ]}
              />
              <CustomFormField
                control={form.control}
                name="interviewLink"
                label="Interview Link  (Auto Generate) "
                placeholder="Links  "
              />
            </div>

            <div className="flex justify-end mt-6">
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="my-4  text-md font-semibold py-6"
                  type="button"
                >
                  Save as Draft
                </Button>
                <Button className="my-4  text-md font-semibold py-6">
                  Post A Job
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
