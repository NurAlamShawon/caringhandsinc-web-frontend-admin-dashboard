import { TermsAndConditionsType } from "./jsonTypesConfig";

export const termsAndConditionData: TermsAndConditionsType = {
  title: "Terms & Conditions – DMVJobs.ai",
  lastUpdated: "September 12, 2025",
  introduction:
    "Welcome to DMVJobs.ai. By accessing or using our website and services, you agree to the following Terms & Conditions. Please read them carefully.",
  sections: [
    {
      id: 1,
      title: "Acceptance of Terms",
      content:
        "By creating an account or using DMVJobs.ai, you agree to be bound by these Terms & Conditions, our Privacy Policy, and any additional guidelines we may publish. If you do not agree, you must stop using our services.",
    },
    {
      id: 2,
      title: "Services Provided",
      content:
        "DMVJobs.ai is an online platform that connects job seekers with employers in Washington DC, Maryland, and Virginia through AI-powered job matching.",
      services: [
        "Job posting services for employers",
        "Job search and application services for candidates",
        "AI-based resume and job matching tools",
      ],
    },
    {
      id: 3,
      title: "User Accounts",
      responsibilities: [
        "Provide accurate and up-to-date information when creating an account",
        "Keep login credentials secure",
        "Responsible for all activity under your account",
      ],
    },
    {
      id: 4,
      title: "Use of Platform",
      prohibitedActions: [
        "Post false, misleading, or fraudulent job listings",
        "Upload resumes or profiles containing false information",
        "Use our platform for illegal, harmful, or abusive purposes",
        "Attempt to hack, disrupt, or misuse the website",
      ],
      note: "We reserve the right to suspend or terminate accounts that violate these rules.",
    },
    {
      id: 5,
      title: "Employer Responsibilities",
      responsibilities: [
        "Responsible for the accuracy of job postings",
        "Must comply with all applicable labor and employment laws",
        "DMVJobs.ai is not responsible for employment agreements made outside the platform",
      ],
    },
    {
      id: 6,
      title: "Job Seeker Responsibilities",
      responsibilities: [
        "Responsible for the accuracy of their resumes and profiles",
        "DMVJobs.ai does not guarantee employment or hiring outcomes",
      ],
    },
    {
      id: 7,
      title: "Fees & Payments",
      content: [
        "Some services (such as job postings or premium features) may require payment",
        "All fees are listed on the platform and are subject to change with notice",
        "Payments are non-refundable unless otherwise stated",
      ],
    },
    {
      id: 8,
      title: "Intellectual Property",
      content: [
        "All content on DMVJobs.ai, including text, graphics, logos, and software, is our property or licensed to us",
        "You may not copy, modify, or distribute our content without written permission",
      ],
    },
    {
      id: 9,
      title: "Limitation of Liability",
      content: [
        "DMVJobs.ai provides the platform “as is” without warranties of any kind",
        "We are not responsible for hiring outcomes, employment disputes, or third-party actions",
        "Our liability is limited to the maximum extent permitted by law",
      ],
    },
    {
      id: 10,
      title: "Indemnification",
      content:
        "You agree to indemnify and hold DMVJobs.ai harmless from any claims, damages, or losses resulting from your use of the platform or violation of these Terms.",
    },
    {
      id: 11,
      title: "Third-Party Links",
      content:
        "Our website may contain links to external websites. We are not responsible for the content or practices of third parties.",
    },
    {
      id: 12,
      title: "Changes to Terms",
      content:
        "We may update these Terms & Conditions at any time. Changes will be posted with the updated 'Last Updated' date. Continued use of DMVJobs.ai means you accept the updated terms.",
    },
    {
      id: 13,
      title: "Governing Law",
      content:
        "These Terms & Conditions are governed by the laws of the United States and the state where DMVJobs.ai operates.",
    },
  ],
  contact: {
    email: "support@dmvjobs.ai",
    address: "[Company Address]",
  },
};
