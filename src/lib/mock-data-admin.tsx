// Mock data for the job management dashboard

export interface Job {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePic: string;
  role: "ADMIN" | "JOB_SEEKER" | "EMPLOYEE"; // adjust according to your roles
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

export interface ChartData {
  day: string;
  "Job Seeker": number;
  Employee: number;
}








// const {data:mockStats ,isLoading}=useGetStatisticQuery({});


