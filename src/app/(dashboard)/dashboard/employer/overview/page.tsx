"use client";

import { LiveJobChart } from "@/components/dashboard/employer/live-job-chart";
import { RecentApply } from "@/components/dashboard/employer/recent-apply";
import { Badge } from "@/components/ui/badge";
import DashboardOverview from "@/components/ui/cards/dashboardOverview";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mockStats, mockJobs, type Job } from "@/lib/mock-data";
import { DataTable, type ColumnDef } from "@/components/ui/custom-data-table";

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

export default function Overview() {
  return (
    <div>
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardOverview
          total={6}
          title="Live Job"
          image="/dashboard/1.png"
        />

        <DashboardOverview
          total={123}
          title="Total Applications Received"
          image="/dashboard/2.png"
        />

        <DashboardOverview
          total={9}
          title="Total Job Posts"
          image="/dashboard/3.png"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {/* Chart and recent Post */}
        <LiveJobChart />
        {/* Recent Jobs */}

        <RecentApply />
      </div>

      {/* Jobs Table */}
      {/* Job List Table */}
      <Card className="shadow-sm mt-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle>Job List</CardTitle>
          <Link
            href="#"
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            See More
          </Link>
        </CardHeader>
        <CardContent>
          <DataTable
            data={mockJobs}
            columns={jobColumns}
            rowsPerPage={5}
            searchableColumns={["position", "jobId"]}
            onRowClick={(row) => console.log("Row clicked:", row)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
