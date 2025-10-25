"use client";

import { LiveJobChart } from "@/components/dashboard/employer/live-job-chart-admin";
import { Badge } from "@/components/ui/badge";
import DashboardOverview from "@/components/ui/cards/dashboardOverview-admin";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mockStats, type Job } from "@/lib/mock-data-admin";
import {
  DataTable,
  type ColumnDef,
} from "@/components/ui/custom-data-table-admin";
import { useGetUsersQuery } from "@/redux/api/userApi/useApi";

const jobColumns: ColumnDef<Job>[] = [
  {
    key: "joiningDate",
    label: "Joining Date & Time",
    sortable: false,
  },
  {
    key: "fullName",
    label: "User Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email Address",
    sortable: true,
  },
  {
    key: "companyName",
    label: "Company Name",
    sortable: true,
  },
  {
    key: "role",
    label: "Role",
    sortable: true,
  },
  {
    key: "isSubscribed",
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
    key: "id",
    label: "Action",
    render: (_value, row) => {
      if (!row) return null; // Safety check
      return (
        <Link
          href={`/admin-dashboard/user-management/view-candidate-profile/${row.id}`}
          className="text-[#777777] hover:text-[#4b4a4a] font-medium"
        >
          View Profile
        </Link>
      );
    },
  },
];

export default function Overview() {
  const { isLoading, isError, data } = useGetUsersQuery({});
  console.log("data", data?.data);

  const usersData: Job[] =
    data?.data.map((user) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      profilePic: user.profilePic || "",
      role: ["ADMIN", "JOB SEEKER", "EMPLOYER"].includes(user.role)
        ? (user.role as "ADMIN" | "JOB SEEKER" | "EMPLOYER")
        : "JOB SEEKER",
      isSubscribed: user.isSubscribed,
      companyName: user.companyName || "",
      joiningDate: user.joiningDate,
      planExpiration: user.planExpiration,
      subscriptionType: user.subscriptionType,
      planId: user.planId,
      totalPayPerJobCount: user.totalPayPerJobCount,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
    })) ?? []; // fallback to empty array

  console.log("Mapped usersData:", usersData);

  return (
    <div>
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {mockStats.map((stat, index) => (
          <DashboardOverview
            key={index}
            value={stat.value}
            title={stat.label}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Chart and recent Post */}
      <LiveJobChart />

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
            data={usersData} // <-- use mapped data here
            columns={jobColumns}
            rowsPerPage={5}
            searchableColumns={["role", "fullName"]}
            onRowClick={(row) => console.log("Row clicked:", row)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
