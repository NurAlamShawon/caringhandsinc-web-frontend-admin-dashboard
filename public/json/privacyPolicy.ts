import { PrivacyPolicyType } from "./jsonTypesConfig";

export const privacyPolicyData: PrivacyPolicyType = {
  title: "Privacy Policy – DMVJobs.ai",
  lastUpdated: "September 12, 2025",
  introduction:
    "DMVJobs.ai (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By using DMVJobs.ai, you agree to the terms described below.",
  sections: [
    {
      id: 1,
      title: "Information We Collect",
      content: "We may collect the following types of information:",
      types: {
        personalInformation: [
          "Name",
          "Email address",
          "Phone number",
          "Resume",
          "Job application details",
        ],
        accountInformation: ["Username", "Password", "Profile data"],
        usageData: [
          "IP address",
          "Browser type",
          "Device info",
          "Activity on our site (via analytics and cookies)",
        ],
        employerData: [
          "Company information",
          "Job postings",
          "Recruiter account details",
        ],
      },
    },
    {
      id: 2,
      title: "How We Use Your Information",
      uses: [
        "Match job seekers with relevant job opportunities",
        "Help employers connect with qualified candidates",
        "Improve our AI-powered job matching tools",
        "Send updates, job alerts, and promotional emails (with opt-out options)",
        "Protect our platform from fraudulent or unauthorized activities",
      ],
    },
    {
      id: 3,
      title: "Sharing of Information",
      content: "We do not sell your data. We only share information when:",
      conditions: [
        "You apply to jobs and employers need your profile/resume",
        "We use trusted third-party providers (hosting, analytics, payment, or email delivery)",
        "Required by law, regulation, or legal request",
      ],
    },
    {
      id: 4,
      title: "Cookies & Tracking",
      content: "We use cookies and similar technologies to:",
      purposes: [
        "Store preferences",
        "Analyze traffic and site performance",
        "Personalize your experience",
      ],
      note: "You may disable cookies in your browser settings, but some site features may not work properly.",
    },
    {
      id: 5,
      title: "Data Retention & Security",
      policies: [
        "We keep your data as long as needed to provide our services",
        "We apply industry-standard encryption and security measures",
        "You may request deletion of your account and data at any time",
      ],
    },
    {
      id: 6,
      title: "Your Rights",
      rights: [
        "Access, correct, or delete your personal data",
        "Opt out of marketing communications",
        "Request a copy of your stored data",
      ],
      note: "Rights may depend on your location.",
    },
    {
      id: 7,
      title: "Third-Party Links",
      content:
        "Our site may include links to third-party websites. We are not responsible for their privacy practices.",
    },
    {
      id: 8,
      title: "Children’s Privacy",
      content:
        "DMVJobs.ai is not intended for users under 16. We do not knowingly collect information from children.",
    },
    {
      id: 9,
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy from time to time. Changes will be posted here with an updated 'Last Updated' date.",
    },
  ],
  contact: {
    email: "support@dmvjobs.ai",
    address: "[Company Address]",
  },
};
