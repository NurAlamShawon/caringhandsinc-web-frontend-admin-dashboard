"use client";

import { useState } from "react";
import { useGetJobsQuery } from "@/redux/api/jobApi/jobApi";


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



// API response interface
export interface JobsApiResponse {
  data: Job[];
  meta: {
    total: number;
    page: number;
    totalPage: number;
  };
}

export function JobsList() {
  const [page, setPage] = useState(1);
  const limit = 10; // Jobs per page

  // ✅ RTK Query call
  const { data, isLoading, isError } = useGetJobsQuery({ page: page.toString(), limit: limit.toString() });


  if (isLoading) return <p>Loading jobs...</p>;
  if (isError) return <p>Error loading jobs</p>;

  return (
    <div>
      

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

       
      </div>
    </div>
  );
}
