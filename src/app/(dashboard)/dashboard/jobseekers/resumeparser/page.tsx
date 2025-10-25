"use client";

import { ActionButtons } from "@/components/dashboard/jobseeker/resume/action-buttons";
import { AddMoreDetails } from "@/components/dashboard/jobseeker/resume/add-more-details";
import { CareerSummarySection } from "@/components/dashboard/jobseeker/resume/career-summary-section";
import { ContactSection } from "@/components/dashboard/jobseeker/resume/contact-section";
import { EducationSection } from "@/components/dashboard/jobseeker/resume/education-section";
import { ResumeParsedHeader } from "@/components/dashboard/jobseeker/resume/header";
import { LanguageSection } from "@/components/dashboard/jobseeker/resume/language-section";
import { MakeResumeStronger } from "@/components/dashboard/jobseeker/resume/make-resume-stronger";
import { ProfileSection } from "@/components/dashboard/jobseeker/resume/profile-section";
import { SkillsSection } from "@/components/dashboard/jobseeker/resume/skills-section";
import { WorkExperienceSection } from "@/components/dashboard/jobseeker/resume/work-experience-section";
import StartJobApply from "@/components/dashboard/jobseeker/startJobApplyModal";
import { FormProvider, useForm } from "react-hook-form";

interface ResumeData {
  profile: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    avatar?: string;
  };
  careerSummary: {
    jobTitle: string;
    summary: string;
  };
  workExperience: Array<{
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    summary: string;
  }>;
  skills: string[];
  education: Array<{
    id: string;
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    startDate: string;
    endDate: string;
  }>;
  languages: Array<{
    id: string;
    language: string;
  }>;
  contact: Array<{
    id: string;
    type: string;
    value: string;
  }>;
}

export default function Home() {
  const methods = useForm<ResumeData>({
    defaultValues: {
      profile: {
        name: "SAIFUR RAHMAN",
        title: "UI/UX Designer",
        phone: "+880 1455555555",
        email: "www.yoursite.com",
        location: "Dhaka, Bangladesh",
      },
      careerSummary: {
        jobTitle: "Senior Marketing Specialist",
        summary:
          "A results-oriented professional with 8+ years of experience in digital marketing, SEO, content creation, and data analysis. Passionate about driving growth through creative marketing strategies and data-driven decisions. Skilled in managing cross-functional teams and building strong brand presence through digital platforms.",
      },
      workExperience: [
        {
          id: "1",
          title: "Mid-Level UI/UX Designer",
          company: "XYZ Technology (Startup Group)",
          startDate: "01/08/2024",
          endDate: "Till Now",
          summary:
            "I am very happy to get the opportunity for UI/UX designer intern, I strive to bring creativity, diligence, and fresh perspectives to every project. Eager to learn, I embrace challenges and aim to exceed expectations with my innovative designs and user-centric approach.",
        },
        {
          id: "2",
          title: "Jr. UI/UX Designer",
          company: "ABC Corp (Startup Group)",
          startDate: "20/04/2024",
          endDate: "31/07/2024",
          summary:
            "I am very happy to get the opportunity for UI/UX designer intern, I strive to bring creativity, diligence, and fresh perspectives to every project. Eager to learn, I embrace challenges and aim to exceed expectations with my innovative designs and user-centric approach.",
        },
        {
          id: "3",
          title: "Intern UI/UX Designer",
          company: "XYZ Technology (Startup Group)",
          startDate: "20/01/2024",
          endDate: "19/04/2024",
          summary:
            "I am very happy to get the opportunity for UI/UX designer intern, I strive to bring creativity, diligence, and fresh perspectives to every project. Eager to learn, I embrace challenges and aim to exceed expectations with my innovative designs and user-centric approach.",
        },
      ],
      skills: [
        "UI Designer",
        "UX Designer",
        "Figma",
        "Social Media Marketing",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      education: [
        {
          id: "1",
          degree: "Master of Business Administration (MBA), Marketing",
          school: "University of Berlin | Berlin, Germany",
          startDate: "Jan 25, 2018",
          endDate: "Jan 25, 2018",
        },
        {
          id: "2",
          degree: "Bachelor of Arts in Communications",
          school: "University of Hamburg | Hamburg, Germany",
          startDate: "Jan 25, 2018",
          endDate: "Jan 25, 2018",
        },
      ],
      certifications: [
        {
          id: "1",
          name: "Google Analytics Certified",
          issuer: "Google",
          startDate: "Jan 25, 2018",
          endDate: "Jan 25, 2018",
        },
        {
          id: "2",
          name: "SEO Fundamentals - Coursera",
          issuer: "Apple Gadget",
          startDate: "Jan 25, 2018",
          endDate: "Jan 25, 2018",
        },
      ],
      languages: [
        { id: "1", language: "Bangla" },
        { id: "2", language: "English" },
      ],
      contact: [
        { id: "1", type: "LinkedIn", value: "www.yoursite.com" },
        { id: "2", type: "Portfolio", value: "www.yoursite.com" },
        { id: "3", type: "Facebook", value: "www.yoursite.com" },
      ],
    },
  });

  const onSubmit = (data: ResumeData) => {
    console.log("Resume Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="min-h-screen bg-background"
      >
        <div className="  mx-auto px-4 py-8">
          <ResumeParsedHeader />

          <div className="space-y-8">
            <ProfileSection />
            <CareerSummarySection />
            <WorkExperienceSection />
            <SkillsSection />
            <EducationSection />
            <LanguageSection />
            <ContactSection />
          </div>

          <ActionButtons />
        </div>

        <AddMoreDetails />

        <StartJobApply />
      </form>
    </FormProvider>
  );
}
