"use client";

import { useParams } from "next/navigation";
import { useGetMyProfileQuery } from "@/redux/api/userApi/useApi";
import { CandidateResumeCard } from "@/components/admin-dashboard/ViewCandidate-admin";

import type { Profile, UserData } from "@/types/userTypes/userTypes";

// Types for CandidateResumeCard
interface EducationCard {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

interface CertificationCard {
  title: string;
  issuer: string;
  startDate: string;
  endDate: string;
}

interface WorkExperienceCard {
  title: string;
  company: string;
  companyGroup?: string;
  startDate: string;
  endDate: string;
  summary: string;
}

interface CandidateResumeCardProps {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  jobTitle: string;
  professionalSummary: string;
  educations: EducationCard[];
  certifications: CertificationCard[];
  workExperiences: WorkExperienceCard[];
  skills: string[];
  socialLinks: Record<string, string>;
  onSelect?: () => void;
  onReject?: () => void;
}

// Type for API response

export default function ViewCandidateProfile() {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetMyProfileQuery({
    id: id as string,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data?.data) return <p>Failed to load profile.</p>;

  console.log("data", data);
  console.log("id", id);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Failed to load candidate profile.</p>;
  const user: UserData = data.data; // ✅ data already matches UserData

  console.log("userdata", user);
  const profile: Profile = user?.Profile; // ✅ profile info

  const candidate: CandidateResumeCardProps = {
    id: user?.id, // ✅ use `user.id` instead of `data.id`
    name: user?.fullName, // ✅ use `user.fullName`
    title: profile?.JobTitle || "N/A",
    phone: user?.phone || "N/A",
    email: user?.email || "N/A",
    location: [profile?.city, profile?.countryRegion]
      .filter(Boolean)
      .join(", "),
    jobTitle: profile?.JobTitle || "N/A",
    professionalSummary: profile?.aboutMe || profile?.jobDescription || "N/A",
    educations: (profile?.education || []).map<EducationCard>((edu) => ({
      degree: edu.degree,
      field: edu.major || "",
      institution: edu.institution,
      location: profile?.city || "",
      startDate: edu.startYear || "",
      endDate: edu.endYear || "",
    })),
    certifications: (profile?.certifications || []).map<CertificationCard>(
      (cert) => ({
        title: cert.title,
        issuer: cert.issuer,
        startDate: cert.year || "",
        endDate: cert.expiry_date || cert.year || "",
      })
    ),
    workExperiences: (profile?.jobExperience || []).map<WorkExperienceCard>(
      (job) => ({
        title: job.job_title,
        company: job.company_name,
        companyGroup: "", // API does not provide companyGroup
        startDate: job.start_date,
        endDate: job.end_date,
        summary: job.job_description,
      })
    ),
    skills: profile?.skills || [],
    socialLinks: (profile?.socialMedia || []).reduce<Record<string, string>>(
      (acc, link) => ({ ...acc, [link.link_type.toLowerCase()]: link.url }),
      { linkedin: "", portfolio: "", facebook: "" }
    ),
    onSelect: () => alert("Candidate Selected!"),
    onReject: () => alert("Candidate Rejected!"),
  };
  return <CandidateResumeCard {...candidate} />;
}
