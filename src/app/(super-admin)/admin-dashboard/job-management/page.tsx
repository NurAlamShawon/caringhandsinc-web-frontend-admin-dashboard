"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DataTable,
  type ColumnDef,
} from "@/components/ui/custom-data-table-admin-job";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SelectIcon } from "@radix-ui/react-select";
import { useGetJobsQuery } from "@/redux/api/jobApi/jobApi";
import { JobsApiResponse } from "@/types/userTypes/userTypes";
// 🔹 Import your RTK Query API hook
// ✅ Adjust path to your job API file

export default function JobManagement() {
  // 🔹 Filter and pagination states
  const [filterStatus, setFilterStatus] = useState<
    "ALL" | "ACTIVE" | "EXPIRED"
  >("ALL");
  const [page, setPage] = useState(1);
  const limit = 10;

  // 🔹 Fetch paginated job data from API
  const { isLoading, data, isFetching } = useGetJobsQuery({
    page: String(page),
    limit: String(limit),
  });

  console.log(data);

  // 🔹 Extract pagination meta

  const jobsResponse: JobsApiResponse | undefined = data;

  const pagination = jobsResponse?.data?.meta || {
    total: 0,
    page: 1,
    totalPage: 1,
  };

  // 🔹 Transform API data into table-friendly format
const jobsData = useMemo(() => {
  return jobsResponse?.data?.data.map(job => ({
    id: job.id,
    jobId: job.jobId,
    postingDate: job.createdAt,
    companyName: job.company?.companyName ?? "N/A",
    position: job.title,
    salaryRange: job.salaryRange ?? "N/A",
    status: job.status?.toUpperCase() === "ACTIVE" ? "ACTIVE" : "EXPIRED",
    applicants: job.noOfApplicants ?? 0,
    deadline: job.formattedDeadline ?? "N/A",
    remainingDays: job.remainingDays ?? 0,
  })) ?? [];
}, [jobsResponse]);


  // 🔹 Filter jobs based on dropdown
  const filteredJobs = useMemo(() => {
    if (filterStatus === "ALL") return jobsData;
    return jobsData.filter((job) => job.status === filterStatus.toUpperCase());
  }, [filterStatus, jobsData]);

  // 🔹 Table columns
  const jobColumns: ColumnDef<(typeof jobsData)[0]>[] = [
    { key: "jobId", label: "Job ID", sortable: true },
    { key: "postingDate", label: "Posting Date", sortable: true },
    { key: "companyName", label: "Company Name", sortable: true },
    { key: "position", label: "Position", sortable: true },
    { key: "salaryRange", label: "Salary Range", sortable: true },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value) => (
        <Badge
          variant="outline"
          className={
            value === "ACTIVE"
              ? "bg-emerald-50 text-[#28C76F] border-[#28C76F] text-xs py-2 px-4 rounded-xl"
              : "bg-yellow-50 text-[#FFAA00] border-[#FFAA00] text-xs py-2 px-4 rounded-xl"
          }
        >
          {value === "ACTIVE" ? "ACTIVE" : "EXPIRED"}
        </Badge>
      ),
    },
    {
      key: "applicants",
      label: "Applicants",
      sortable: true,
      render: (value) => `${value} Person${value !== 1 ? "s" : ""}`,
    },
    { key: "deadline", label: "Deadline", sortable: true },
    {
      key: "remainingDays",
      label: "Time Left",
      sortable: true,
      render: (value) => `${value} Days`,
    },
    {
      key: "id",
      label: "Action",
      render: (_, row) => {
        if (!row) return null;
        return (
          <Link href={`/admin-dashboard/job-management/job-details/${row.id}`}>
            View
          </Link>
        );
      },
    },
  ];

  return (
    <div>
      {/* 🔹 Header Section */}
      <Card className="shadow-sm mt-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="uppercase">All Posted Jobs</CardTitle>

          {/* 🔹 Filter Dropdown */}
          <Select
            value={filterStatus}
            onValueChange={(val : any) =>
              setFilterStatus(val as "ALL" | "ACTIVE" | "EXPIRED")
            }
          >
            <SelectTrigger className="w-[150px] bg-black text-white flex justify-between items-center rounded-md px-2 uppercase">
              <SelectValue>{filterStatus}</SelectValue>
              <SelectIcon>
                <ChevronDown className="text-white" />
              </SelectIcon>
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-black/70 text-white rounded-lg shadow-lg">
              <SelectItem value="ALL" className="uppercase">
                All Jobs
              </SelectItem>
              <SelectItem value="ACTIVE" className="uppercase">
                Active
              </SelectItem>
              <SelectItem value="EXPIRED" className="uppercase">
                Expired
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        {/* 🔹 Table Section */}
        <CardContent>
          {isLoading || isFetching ? (
            <div className="mx-auto w-40 my-20">
              <Spinner />
            </div>
          ) : (
            <DataTable
              data={filteredJobs ?? []} // fallback to empty array
              columns={jobColumns}
              searchableColumns={["position", "jobId", "companyName"]}
              pagination={{
                currentPage: pagination.page,
                totalPages: pagination.totalPage,
                totalItems: pagination.total,
                onPageChange: setPage, // triggers refetch
              }}
            />
          )}

          {/* <DataTable
            data={jobsData}
            columns={jobColumns}
            rowsPerPage={10}
            searchableColumns={["position", "jobId", "companyName"]}
            onRowClick={(row) => console.log("Row clicked:", row)}
          /> */}
        </CardContent>
      </Card>
    </div>
  );
}
