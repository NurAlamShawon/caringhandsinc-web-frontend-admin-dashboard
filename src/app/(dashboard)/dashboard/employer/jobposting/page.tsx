"use client";
import JobPosting from "@/components/dashboard/employer/JobPosting";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mockStats, mockJobs, type Job } from "@/lib/mock-data";
import { DataTable, type ColumnDef } from "@/components/ui/custom-data-table";
import { Badge } from "@/components/ui/badge";

const jobColumns: ColumnDef<Job>[] = [
  {
    key: "jobId",
    label: "Job ID",
    sortable: true,
  },
  {
    key: "postingDate",
    label: "Posting Date",
    sortable: true,
  },
  {
    key: "salaryRange",
    label: "Salary Range",
    sortable: true,
  },
  {
    key: "position",
    label: "Position",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value) => (
      <Badge
        variant="outline"
        className={
          value === "active"
            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
            : "bg-yellow-50 text-yellow-700 border-yellow-200"
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
      <span className="underline cursor-pointer">{value} Person</span>
    ),
  },
  {
    key: "deadline",
    label: "Deadline",
    sortable: true,
  },
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
        href="#"
        className="text-emerald-600 hover:text-emerald-700 font-medium"
      >
        Edit Job
      </Link>
    ),
  },
];
export default function JobPost() {
  return (
    <div>
      <div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl">Job List</CardTitle>
          <Link
            href="/dashboard/employer/jobposting/createjob"
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            <Button className="bg-primary">
              {" "}
              <Plus /> Post a new job{" "}
            </Button>
          </Link>
        </CardHeader>
      </div>
      {/* Jobs Table */}
      <div>
        <CardContent>
          <DataTable
            data={mockJobs}
            columns={jobColumns}
            rowsPerPage={10}
            searchableColumns={["position", "jobId"]}
            onRowClick={(row) => console.log("Row clicked:", row)}
          />
        </CardContent>
      </div>
    </div>
  );
}
