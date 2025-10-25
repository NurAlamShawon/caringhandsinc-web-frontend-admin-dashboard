"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyProfileSchema, CompanyProfile } from "@/schemas/companyProfile";
import { Button } from "@/components/ui/button";
import CompleteProfileAbout from "@/components/complete-profile/about";
import CompleteProfileLogoContact from "@/components/complete-profile/logoContact";
import { useRouter } from "next/navigation";
import { useCreateCompanyMutation } from "@/redux/api/company/companyApi";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Spinner } from "@/components/ui/spinner";

export default function CompleteProfileWrapper() {
  // Next navication
  const router = useRouter();

  // Redux API
  const [createCompany, { isLoading }] = useCreateCompanyMutation();

  // Set Error MSG
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);

  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<CompanyProfile>({
    resolver: zodResolver(companyProfileSchema),
    defaultValues: {
      companyName: "",
      industryType: "",
      roleInCompany: "",
      description: "",
      country: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
      website: "",
    },
  });

  const handleImage = (file: File) => {
    setFile(file);
  };

  const onSubmit = async (data: CompanyProfile) => {
    const formData = new FormData();

    // append image file
    if (file) {
      formData.append("file", file);
    }

    // append all other fields as JSON string
    formData.append("data", JSON.stringify(data));

    try {
      const res = await createCompany(formData).unwrap();

      // If Success  log Data
      if (res?.data) {
        console.log("company", res?.data);
        // redirect to
        router.push("/complete-profile/congrats");
      }

      // Set Error
      if ("error" in res) {
        setError(res?.error ?? null);
      } else {
        setError(null);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
              router.push("/complete-profile/congrats");

    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-4xl mx-auto p-4"
      >
        {step === 1 && <CompleteProfileAbout form={form} />}
        {step === 2 && (
          <CompleteProfileLogoContact form={form} handleImage={handleImage} />
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <Button type="button" onClick={prevStep} variant="outline">
              Back
            </Button>
          )}
          {step < 2 && (
            <Button type="button" className="w-full mt-10" onClick={nextStep}>
              Next
            </Button>
          )}
          {step === 2 && (
            <Button type="submit" className="w-full ml-4" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 animate-spin" />}
              Submit All Data
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
