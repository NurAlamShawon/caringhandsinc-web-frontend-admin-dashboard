// src/types/userTypes/userTypes.ts
export interface UserTypes {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePic: string;
  role: string;
  isSubscribed: boolean;
  companyName: string;
  joiningDate: string | null;
  planExpiration: string | null;
  subscriptionType: string | null;
  planId: string | null;
  totalPayPerJobCount: number;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;

  // ✅ new optional fields
  phone?: string;
  city?: string;
  zipCode?: string;
  preferredContactMethod?: string;
  status?: string;
}

// types.ts
export interface UserMeta {
  total: number;
  page: number;
  totalPage: number;
}

export interface UserResponseDataType {
  data: UserTypes[];
  meta: UserMeta;
}

export interface SingleUserResponseDataType {
  data: UserTypes;
}

// Statistics types

export interface UsersStats {
  totalVerified: number;
  activeJobSeekers: number;
  activeEmployers: number;
}

export interface JobsStats {
  totalPostedToday: number;
  totalPosted: number;
}

export interface CompaniesStats {
  totalRegistered: number;
}

export interface SubscriptionsStats {
  total: number;
  active: number;
}

// ✅ New types for chart statistics
export interface JobChartStats {
  loginsThisMonth: number;
  loginsLastMonth: number;
  totalLogins: number;
}

export interface DashboardData {
  users: UsersStats;
  jobs: JobsStats;
  companies: CompaniesStats;
  subscriptions: SubscriptionsStats;
  jobSeekers: JobChartStats;
  employers: JobChartStats; 
}

export interface DashboardResponse {
  data: DashboardData;
}

// Company information
export interface CompanyInfo {
  companyName: string;
  industryType: string;
  roleInCompany: string;
  description: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  state: string;
  address: string;
  zipCode: string;
  website: string;
}

// User information
export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  profilePic: string;
  role: string;
  isSubscribed: boolean;
  planExpiration: string | null;
  subscriptionType: string | null;
  totalPayPerJobCount: number;
  createdAt: string;
  updatedAt: string;
}

// Job interface
export interface Job {
  id: string;
  jobId: string;
  title: string;
  experience: string;
  deadline: string;
  formattedDeadline: string;
  location: string;
  workingTime: string;
  description: string;
  salaryType: string;
  salaryRange: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  whyJoin: string[];
  userId: string;
  companyId: string;
  jobType: string;
  status: string;
  actualStatus: string;
  noOfApplicants: number;
  createdAt: string;
  updatedAt: string;
  remainingDays: number;
  isExpired: boolean;
  company: CompanyInfo;
  user: UserInfo;
}
