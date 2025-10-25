// Mock data for the job management dashboard

export interface Job {
  id: string
  jobId: string
  postingDate: string
  postingTime: string
  salaryRange: string
  position: string
  status: "active" | "expired"
  applicants: number
  deadline: string
  daysLeft: number
  CompanyName: string // Added company name
}

export interface Applicant {
  id: string
  name: string
  email: string
  CompanyName: string // Added company name
}


export const mockJobs: Job[] = [
  {
    id: "1",
    jobId: "#FGJ0112",
    postingDate: "Jun 25, 2025 | 08:52 AM",
    postingTime: "08:52 AM",
    salaryRange: "35,000 BDT",
    position: "UI/UX Designer",
    status: "active",
    applicants: 120,
    deadline: "Aug 25, 2025",
    daysLeft: 12,
    CompanyName: "TechWave Ltd.",
  },
  {
    id: "2",
    jobId: "#FGJ0113",
    postingDate: "Jun 24, 2025 | 10:30 AM",
    postingTime: "10:30 AM",
    salaryRange: "40,000 BDT",
    position: "UI/UX Designer",
    status: "active",
    applicants: 90,
    deadline: "Aug 25, 2025",
    daysLeft: 9,
    CompanyName: "NextGen Solutions",
  },
  {
    id: "3",
    jobId: "#FGJ0114",
    postingDate: "Jun 23, 2025 | 02:15 PM",
    postingTime: "02:15 PM",
    salaryRange: "38,000 BDT",
    position: "UI/UX Designer",
    status: "active",
    applicants: 70,
    deadline: "Aug 25, 2025",
    daysLeft: 15,
    CompanyName: "PixelPoint Technologies",
  },
  {
    id: "4",
    jobId: "#FGJ0115",
    postingDate: "Jun 22, 2025 | 09:45 AM",
    postingTime: "09:45 AM",
    salaryRange: "45,000 BDT",
    position: "UI/UX Designer",
    status: "expired",
    applicants: 99,
    deadline: "Aug 20, 2025",
    daysLeft: 8,
    CompanyName: "Innovatech Solutions",
  },
  {
    id: "5",
    jobId: "#FGJ0116",
    postingDate: "Jun 21, 2025 | 11:20 AM",
    postingTime: "11:20 AM",
    salaryRange: "42,000 BDT",
    position: "Frontend Developer",
    status: "active",
    applicants: 110,
    deadline: "Aug 28, 2025",
    daysLeft: 18,
    CompanyName: "CodeCrafters Ltd.",
  },
  {
    id: "6",
    jobId: "#FGJ0117",
    postingDate: "Jun 20, 2025 | 03:00 PM",
    postingTime: "03:00 PM",
    salaryRange: "50,000 BDT",
    position: "Backend Developer",
    status: "active",
    applicants: 85,
    deadline: "Aug 30, 2025",
    daysLeft: 20,
    CompanyName: "DevSphere Inc.",
  },
]

export const mockApplicants: Applicant[] = [
  { id: "1", name: "Saifur Rahman", email: "saifur.rahman@gmail.com", CompanyName: "TechWave Ltd." },
  { id: "2", name: "Rahim Ahmed", email: "rahim.ahmed@gmail.com", CompanyName: "NextGen Solutions" },
  { id: "3", name: "Tanvir Hossain", email: "tanvir.hossain@gmail.com", CompanyName: "PixelPoint Technologies" },
  { id: "4", name: "Jannatul Ferdous", email: "jannatul.ferdous@gmail.com", CompanyName: "Innovatech Solutions" },
  { id: "5", name: "Rakib Hasan", email: "rakib.hasan@gmail.com", CompanyName: "CodeCrafters Ltd." },
  { id: "6", name: "Anika Sultana", email: "anika.sultana@gmail.com", CompanyName: "DevSphere Inc." },
]





