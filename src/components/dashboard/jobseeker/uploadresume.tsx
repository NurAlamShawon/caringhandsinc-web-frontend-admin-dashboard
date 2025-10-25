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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  form: UseFormReturn<CompanyProfile>;
}

export default function UploadResume() {
  const [files, setFiles] = useState<File[] | undefined>();
  const [filePreview, setFilePreview] = useState<string | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFilePreview(e.target?.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div>
      {/* Title */}
      <div className="border border-neutral-200 text-center  p-10 rounded">
        <div>
          <h1 className="text-h2 font-semibold">Upload Your Resume </h1>
          <p>
            PDF or DOC — no extra forms needed. AI will parse your resume
            automatically.
          </p>
        </div>

        <div className="w-full px-2 mt-6">
          <Dropzone
            accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
            onDrop={handleDrop}
            onError={console.error}
            src={files}
          >
            <DropzoneEmptyState className="h-[200px]" />
            <DropzoneContent>
              {filePreview && (
                <div className="h-[200px] w-full">
                  <Image
                    height={300}
                    width={200}
                    src={filePreview}
                    alt="Preview"
                    className="absolute top-0 left-0 h-full w-full object-cover"
                  />
                </div>
              )}
            </DropzoneContent>
          </Dropzone>
        </div>
      </div>
      {/* footer Contents */}
      <div className=" flex justify-center w-full my-10">
        <Button className="bg-primary ">
          Parse Resume & Continue <ArrowRight />{" "}
        </Button>
      </div>
      <div className="mt-20 flex  flex-col md:flex-row md:justify-between items-center space-x-4   w-full ">
        <div className="text-center max-w-sm w-full ">
          <Image
            src="/dashboard/joobseekers/1.png"
            height={80}
            width={80}
            alt="image"
            className="mx-auto mb-2"
          />
          <h4 className="text-xl font-semibold py-2">Smart Analysis</h4>
          <p className="">Al -powered resume parsing and Ekiti extraction</p>
        </div>
        <div className="text-center max-w-sm w-full">
          <Image
            src="/dashboard/joobseekers/2.png"
            height={80}
            width={80}
            alt="image"
            className="mx-auto mb-2"
          />
          <h4 className="text-xl font-semibold py-2">Smart Analysis</h4>
          <p className="">Al -powered resume parsing and Ekiti extraction</p>
        </div>
        <div className="text-center max-w-sm w-full">
          <Image
            src="/dashboard/joobseekers/3.png"
            height={80}
            width={80}
            alt="image"
            className="mx-auto mb-2"
          />
          <h4 className="text-xl font-semibold py-2">Smart Analysis</h4>
          <p className="">Al -powered resume parsing and Ekiti extraction</p>
        </div>
      </div>
      {/* Bottom  */}
      <div className="flex items-center justify-center gap-2 w-full  py-2 text-black text-lg mt-20">
        <Image
          src="/dashboard/joobseekers/4.png"
          height={30}
          width={30}
          alt="image"
          className="mb-1"
        />
        <p>Your resume is private—used only for matching and never shared.</p>
      </div>
    </div>
  );
}
