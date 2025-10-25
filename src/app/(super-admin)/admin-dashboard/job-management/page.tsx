"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockJobs, type Job } from "@/lib/mock-data-admin-job";
import {
  DataTable,
  type ColumnDef,
} from "@/components/ui/custom-data-table-admin";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SelectIcon } from "@radix-ui/react-select";

export default function Job_() {
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "expired"
  >("all");

  const [loading, setLoading] = useState(true); // 🔹 loading state
  // Filtered data based on dropdown selection
  const filteredJobs = useMemo(() => {
    if (filterStatus === "all") return mockJobs;
    return mockJobs.filter((job) => job.status === filterStatus);
  }, [filterStatus]);

  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const jobColumns: ColumnDef<Job>[] = [
    { key: "jobId", label: "Job ID" },
    { key: "postingDate", label: "Posting Date" },
    { key: "CompanyName", label: "Company Name", sortable: true },
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
            value === "active"
              ? "bg-emerald-50 text-[#28C76F] border-[#28C76F] text-xs py-2 px-4 rounded-xl"
              : "bg-yellow-50 text-[#FFAA00] border-[#FFAA00] text-xs py-2 px-4  rounded-xl"
          }
        >
          {value === "active" ? "Active" : "Expired Time"}
        </Badge>
      ),
    },
    {
      key: "applicants",
      label: "No. of Applicants",
      sortable: true,
      render: (value) => (
        <span className=" cursor-pointer">{value} Person</span>
      ),
    },
    { key: "deadline", label: "Deadline", sortable: true },
    {
      key: "daysLeft",
      label: "Time",
      sortable: true,
      render: (value) => `${value} Days`,
    },
    {
      key: "id",
      label: "Action",
      render: () => (
        <Link
          href="/admin-dashboard/job-management/job-details/52"
          className="text-emerald-600 hover:text-emerald-700 font-medium underline"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl">All Posted Job</CardTitle>

        <div className="flex items-center gap-4">
          {/* Filter Dropdown */}
          <Select
            value={filterStatus}
            onValueChange={(val: "all" | "active" | "expired") =>
              setFilterStatus(val)
            }
          >
            <SelectTrigger className="w-[120px] bg-black text-white flex justify-between items-center">
              <SelectValue placeholder="Filter Users" />
              <SelectIcon>
                <ChevronDown className="text-white" />
              </SelectIcon>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              <SelectItem value="active">Active Jobs</SelectItem>
              <SelectItem value="expired">Expired Jobs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="mx-auto w-40 my-30">
            <Spinner />
          </div>
        ) : (
          <DataTable
            data={filteredJobs}
            columns={jobColumns}
            rowsPerPage={10}
            searchableColumns={["position", "jobId"]}
            onRowClick={(row) => console.log("Row clicked:", row)}
          />
        )}
      </CardContent>
    </div>
  );
}
