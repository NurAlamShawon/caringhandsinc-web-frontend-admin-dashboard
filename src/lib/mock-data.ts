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
}

export interface Applicant {
  id: string
  name: string
  email: string
}

export interface StatCard {
  label: string
  value: string | number
  icon: string
  trend?: string
  trendDirection?: "up" | "down"
}

export interface ChartData {
  day: string
  "UI/UX Design": number
  "Font-End Dev": number
  "Back-End Dev": number
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
  },
]

export const mockApplicants: Applicant[] = [
  { id: "1", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "2", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "3", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "4", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "5", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "6", name: "Saifur Rahman", email: "yourmail@gmail.com" },
]

export const mockStats: StatCard[] = [
  {
    label: "Live Job",
    value: "06",
    icon: "🛒",
  },
  {
    label: "Total Applications Received",
    value: "123",
    icon: "👤",
    trend: "+2.98%",
    trendDirection: "up",
  },
  {
    label: "Total Job Posts",
    value: "09",
    icon: "📋",
  },
]

export const mockChartData: ChartData[] = [
  { day: "Sun", "UI/UX Design": 400, "Font-End Dev": 240, "Back-End Dev": 120 },
  { day: "Mon", "UI/UX Design": 350, "Font-End Dev": 220, "Back-End Dev": 150 },
  { day: "Tue", "UI/UX Design": 300, "Font-End Dev": 200, "Back-End Dev": 180 },
  { day: "Wed", "UI/UX Design": 320, "Font-End Dev": 280, "Back-End Dev": 200 },
  { day: "Thu", "UI/UX Design": 380, "Font-End Dev": 300, "Back-End Dev": 220 },
  { day: "Fri", "UI/UX Design": 420, "Font-End Dev": 350, "Back-End Dev": 250 },
  { day: "Sat", "UI/UX Design": 450, "Font-End Dev": 380, "Back-End Dev": 210 },
]
