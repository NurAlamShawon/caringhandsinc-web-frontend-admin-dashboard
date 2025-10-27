"use client";

import { useState } from "react";
import { useGetJobsQuery } from "@/redux/api/jobApi/jobApi";



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
  const limit = 5; // Jobs per page

  // ✅ RTK Query call
  const { data, isLoading, isError } = useGetJobsQuery({ page: page.toString(), limit: limit.toString() });

  const jobs = data?.data || [];
  const totalPage = data?.meta?.totalPage || 1;

  if (isLoading) return <p>Loading jobs...</p>;
  if (isError) return <p>Error loading jobs</p>;

  return (
    <div>
      <div>
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border-b">
            <h2 className="font-bold">{job.title}</h2>
            <p>Company: {job.company?.companyName || ""}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salaryRange}</p>
            <p>Deadline: {job.formattedDeadline}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-3 py-1 border rounded">
          Page {page} of {totalPage}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
          disabled={page === totalPage}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
