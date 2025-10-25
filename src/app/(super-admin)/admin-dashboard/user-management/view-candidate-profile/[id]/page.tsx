"use client"
import { CandidateResumeCard } from "@/components/admin-dashboard/ViewCandidate-admin";
const exampleCandidate = {
  id:"5546sfe",
  name: "SAIFUR RAHMAN",
  title: "UI/UX Designer",
  phone: "+880 1255555555",
  email: "www.yoursite.com",
  location: "Dhaka, Bangladesh",
  jobTitle: "Senior Marketing Specialist",
  professionalSummary:
    "A results-oriented marketing professional with 8+ years of experience in digital marketing, SEO, content creation, and data analysis. Passionate about driving growth through creative marketing strategies and data-driven decisions. Skilled in managing cross-functional teams and building strong brand presence through digital platforms.",
  educations: [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Marketing",
      institution: "University of Berlin",
      location: "Berlin, Germany",
      startDate: "Jun 25, 2016",
      endDate: "Jun 25, 2018",
    },
    {
      degree: "Bachelor of Arts in Communications",
      institution: "University of Hamburg",
      location: "Hamburg, Germany",
      startDate: "Jun 25, 2016",
      endDate: "Jun 25, 2018",
      field: "",
    },
  ],
  certifications: [
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      startDate: "Jun 25, 2016",
      endDate: "Jun 25, 2018",
    },
    {
      title: "SEO Fundamentals - Coursera",
      issuer: "Apple Gadget",
      startDate: "Jun 25, 2016",
      endDate: "Jun 25, 2018",
    },
  ],
  workExperiences: [
    {
      title: "Mid-Level UI/UX Designer",
      company: "XYZ Technology",
      companyGroup: "Betopia Group",
      startDate: "01/08/2024",
      endDate: "Till Now",
      summary:
        "I am very happy to get the opportunity for UI/UX designer intern, I strive to bring creativity, diligence, and fresh perspectives to every project. Eager to learn, I embrace challenges and aim to exceed expectations with my innovative designs and user-centric approach.",
    },
    {
      title: "Jr. UI/UX Designer",
      company: "XYZ Technology",
      companyGroup: "Betopia Group",
      startDate: "20/04/2024",
      endDate: "31/07/2024",
      summary:
        "I am very happy to get the opportunity for UI/UX designer intern, I strive to bring creativity, diligence, and fresh perspectives to every project. Eager to learn, I embrace challenges and aim to exceed expectations with my innovative designs and user-centric approach.",
    },
    {
      title: "Intern UI/UX Designer",
      company: "XYZ Technology",
      companyGroup: "Betopia Group",
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
  socialLinks: {
    linkedin: "www.yoursite.com",
    portfolio: "www.yoursite.com",
    facebook: "www.yoursite.com",
  },
  onSelect: () => alert("Candidate Selected!"),
  onReject: () => alert("Candidate Rejected!"),
};

export default function ViewCandidateProfile() {
  return (
    <div>
      <CandidateResumeCard {...exampleCandidate } />
    </div>
  );
}
