"use client";
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

 
export default function JobPosting() {
  // React Hook Form
  const form = useForm({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      jobTitle: "",
      applicationDeadline: "", // e.g. "2025-08-25"
      location: "",
      salaryType: "",
      salaryRange: "",
      jobType: "",
      skillsNeeded: [],

      description: "",
      responsibilities: [""], // you can start with one empty row if UI expects it
      requirements: [""],
      whyJoin: [""],
      additionalFeatures: [],
    },
  });

  //   Submit Form
  const onSubmit = (values: z.infer<typeof jobPostSchema>) => {
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
            {/* main Datas */}
            <div className="md:flex space-x-4">
              <CustomFormField
                control={form.control}
                name="jobTitle"
                label="Job Title"
                placeholder="Full Stack Developer"
              />
              <CustomSelectField
                control={form.control}
                name="experienceNeed"
                label="Experience Need"
                placeholder="Experience Need"
                options={[
                  { label: "Support", value: "support" },
                  { label: "Feedback", value: "feedback" },
                  { label: "Partnership", value: "partnership" },
                  { label: "Other", value: "other" },
                ]}
              />
            </div>
            {/* Deadline and location */}
            <div className="md:flex space-x-4 mt-10">
              <CustomFormField
                control={form.control}
                name="applicationDeadline"
                label="Application Deadline"
                placeholder="Application Deadline"
              />
              <CustomFormField
                control={form.control}
                name="location"
                label="Location"
                placeholder="DHaka"
              />
            </div>
            {/* Sallary  */}
            <div className="md:flex space-x-4 mt-10">
              <CustomSelectField
                control={form.control}
                name="salaryType"
                label="Salary Type"
                placeholder="monthly"
                options={[
                  { label: "Support", value: "support" },
                  { label: "Feedback", value: "feedback" },
                  { label: "Partnership", value: "partnership" },
                  { label: "Other", value: "other" },
                ]}
              />
              <CustomFormField
                control={form.control}
                name="salaryRange"
                label="Salary Range"
                placeholder="100k~120k"
              />
              <CustomSelectField
                control={form.control}
                name="jobType"
                label="job Type"
                placeholder="Full Time"
                options={[
                  { label: "Full-Time", value: "fulltime" },
                  { label: "Part-Time", value: "parttime" },
                  { label: "Contract", value: "contract" },
                  { label: "W2", value: "w2" },
                ]}
              />
            </div>
            {/* Skills Needed */}
            <div className="mt-4">
              <CustomSkillsField
                control={form.control}
                name="skillsNeeded"
                label="Skills Needed"
                placeholder="e.g., React, TypeScript, Tailwind CSS..."
                maxSkills={15}
                addButton={false}
              />
            </div>
            {/* Job Description: */}
            <div className="mt-4">
              <h3 className="text-h3 font-semibold">Job Description:</h3>

              <CustomTextareaField
                control={form.control}
                name="description"
                label="Description"
                placeholder="We are looking for a talented UI/UX Designer to join our onsite team in Dhaka. You'll work closely with product managers and developers to create intuitive, user-friendly digital experiences."
                rows={6}
              />
            </div>
            {/* Responsibilities: */}
            <div className="mt-4">
              <h3 className="text-h3 font-semibold">Responsibilities:</h3>

              <CustomSkillsField
                control={form.control}
                name="responsibilities"
                placeholder="responsibilities..."
                maxSkills={15}
                addButton={true}
              />
            </div>
            {/* Requirements:: */}
            <div className="mt-4">
              <h3 className="text-h3 font-semibold">Requirements:</h3>

              <CustomSkillsField
                control={form.control}
                name="requirements"
                placeholder="requirements..."
                maxSkills={15}
                addButton={true}
              />
            </div>
            {/* Why Join XYZ Technology?:: */}
            <div className="mt-4">
              <h3 className="text-h3 font-semibold">
                Why Join XYZ Technology?
              </h3>

              <CustomSkillsField
                control={form.control}
                name="whyJoin"
                placeholder="Why Join XYZ Technology..."
                maxSkills={15}
                addButton={true}
              />
            </div>

            <div className="flex justify-end mt-6" >
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

      {/* Social Log In */}
    </div>
  );
}
