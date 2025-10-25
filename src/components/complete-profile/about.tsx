"use client";
import CustomFormField from "@/components/FormField";
import { UseFormReturn } from "react-hook-form";
import { CompanyProfile } from "@/schemas/companyProfile";
import CustomTextareaField from "../CustomTextareaField";
import CustomSelectField from "../CustomSelect";

interface Props {
  form: UseFormReturn<CompanyProfile>;
}

export default function CompleteProfileAbout({ form }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-h2 font-semibold">Tell Us About Your Company</h2>
        <p className="my-4">
          This is your company’s opportunity to shine. Provide some basic
          details to help potential candidates understand your business better.
        </p>
      </div>
      <CustomFormField
        control={form.control}
        name="companyName"
        label="Company Name"
        placeholder="Enter company name"
      />
      <div className="md:flex space-x-4 items-center">
        <CustomFormField
          control={form.control}
          name="industryType"
          label="Industry Type"
          placeholder="Software, Marketing..."
        />

        <CustomSelectField
          control={form.control}
          name="roleInCompany"
          label="Role in Company"
          placeholder="Your role"
          options={[
            { label: "Support", value: "support" },
            { label: "Feedback", value: "feedback" },
            { label: "Partnership", value: "partnership" },
            { label: "Other", value: "other" },
          ]}
        />
      </div>

      <CustomTextareaField
        control={form.control}
        name="description"
        label="Company Description"
        placeholder="Describe your company"
        rows={6}
      />

      <div className="md:flex space-x-4 items-center">
        <CustomSelectField
          control={form.control}
          name="country"
          label="Country"
          placeholder="Country"
          options={[
            { label: "Bangladesh", value: "Bangladesh" },
            { label: "US", value: "US" },
            { label: "Partnership", value: "partnership" },
            { label: "Other", value: "other" },
          ]}
        />

        <CustomFormField
          control={form.control}
          name="address"
          label="Address"
          placeholder="Address"
        />
      </div>

      <div className="md:flex space-x-4 items-center">
        <CustomFormField
          control={form.control}
          name="city"
          label="City"
          placeholder="City"
        />
        <CustomFormField
          control={form.control}
          name="state"
          label="State"
          placeholder="State"
        />
        <CustomFormField
          control={form.control}
          name="zipCode"
          label="ZIP Code"
          placeholder="ZIP Code"
        />
      </div>
    </div>
  );
}
