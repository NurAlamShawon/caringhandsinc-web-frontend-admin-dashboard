// Mock data for the job management dashboard

export interface Job {
   id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePic: string;
  role: "ADMIN" | "JOB SEEKER" | "EMPLOYER"; // adjust according to your roles
  isSubscribed: boolean;
  companyName: string;
  joiningDate: string | null;
  planExpiration: string | null;
  subscriptionType: string | null;
  planId: string | null;
  totalPayPerJobCount: number;
  isVerified: boolean;
  createdAt: string;
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
}

export interface StatCard {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendDirection?: "up" | "down";
}

export interface ChartData {
  day: string;
  "Job Seeker": number;
  Employee: number;
}


export const mockApplicants: Applicant[] = [
  { id: "1", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "2", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "3", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "4", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "5", name: "Saifur Rahman", email: "yourmail@gmail.com" },
  { id: "6", name: "Saifur Rahman", email: "yourmail@gmail.com" },
];

export const mockStats: StatCard[] = [
  {
    label: "Total Registered Users",
    value: "06",
    icon: "/dashboard/1.png",
    trend: "+2.98%",
  },
  {
    label: "Active Job Seekers",
    value: "123",
    icon: "/dashboard/2.png",
    trend: "+2.98%",
    trendDirection: "up",
  },
  {
    label: "Active Employers",
    value: "09",
    trend: "+2.98%",
    icon: "/dashboard/4.png",
  }, {
    label: "Jobs Posted Today",
    value: "09",
    trend: "+2.98%",
    icon: "/dashboard/5.png",
  },
];

export const mockChartData: ChartData[] = [
  { day: "Sun", "Job Seeker": 400, Employee: 240 },
  { day: "Mon", "Job Seeker": 350, Employee: 220 },
  { day: "Tue", "Job Seeker": 300, Employee: 200 },
  { day: "Wed", "Job Seeker": 320, Employee: 280 },
  { day: "Thu", "Job Seeker": 380, Employee: 300 },
  { day: "Fri", "Job Seeker": 420, Employee: 350 },
  { day: "Sat", "Job Seeker": 450, Employee: 380 },
];
