"use client";

import CustomFormField from "@/components/FormField";
import { UseFormReturn } from "react-hook-form";
import { CompanyProfile } from "@/schemas/companyProfile";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";
import Image from "next/image";
 

interface Props {
  form: UseFormReturn<CompanyProfile>;
  handleImage: (file: File) => void;
}

export default function CompleteProfileLogoContact({
  form,
  handleImage,
}: Props) {
  const [files, setFiles] = useState<File[] | undefined>();
  const [filePreview, setFilePreview] = useState<string | undefined>();

  const handleDrop = (files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      handleImage(file);
      setFiles(files);

      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFilePreview(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-h2 font-semibold">
          Add Logo & Contact Information
        </h2>
        <p className="my-4">
          Branding your profile with your logo helps candidates recognize and
          connect with your company. Plus, providing contact details makes it
          easy for candidates to reach out.
        </p>
      </div>

      <div className="md:flex items-center justify-center w-full space-x-4">
        <div className="w-full px-2">
          <p className="text-lg text-black">Upload Company Logo</p>
          <Dropzone
            accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
            onDrop={handleDrop}
            onError={console.error}
            src={files}
          >
            <DropzoneEmptyState className="h-[200px]" />
            <DropzoneContent>
              {filePreview && (
                <div className="h-[200px] w-full relative">
                  <Image
                    src={filePreview}
                    alt="Preview"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </DropzoneContent>
          </Dropzone>
        </div>

        <div className="w-full px-2 flex flex-col space-y-4">
          <CustomFormField
            control={form.control}
            name="phoneNumber"
            label="Company Number"
            placeholder="+880123456789"
          />
          <CustomFormField
            control={form.control}
            name="email"
            label="Company Email"
            placeholder="email@company.com"
          />
          <CustomFormField
            control={form.control}
            name="website"
            label="Website"
            placeholder="https://example.com"
          />
        </div>
      </div>
    </div>
  );
}
