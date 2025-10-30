"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardOverview from "@/components/ui/cards/dashboardOverview-admin";
import { LiveJobChart } from "@/components/dashboard/employer/live-job-chart-admin";
import {
  DataTable,
  type ColumnDef,
} from "@/components/ui/custom-data-table-admin";
import { useGetUsersQuery } from "@/redux/api/userApi/useApi";
import { type Job } from "@/lib/mock-data-admin";
import { mapDashboardToStatCards } from "@/lib/statisticsData-admin";
import { useGetStatisticQuery } from "@/redux/api/statistic/statisticApi";
import { Spinner } from "@/components/ui/spinner";

interface MetaType {
  total: number;
  page: number;
  totalPage: number;
}

// 🧱 Table Columns
const jobColumns: ColumnDef<Job>[] = [
  { key: "joiningDate", label: "Joining Date & Time" },
  { key: "fullName", label: "User Name", sortable: true },
  { key: "email", label: "Email Address", sortable: true },
  { key: "companyName", label: "Company Name", sortable: true },
  { key: "role", label: "Role", sortable: true },
  {
    key: "isSubscribed",
    label: "Status",
    render: (value) => (
      <Badge
        variant="outline"
        className={
          value === "active"
            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
            : "bg-yellow-50 text-yellow-700 border-yellow-200"
        }
      >
        {value === "active" ? "Active" : "Expired"}
      </Badge>
    ),
  },
  {
    key: "id",
    label: "Action",
    render: (_value, row) =>
      row ? (
        <Link
          href={`/admin-dashboard/user-management/view-candidate-profile/${row.id}`}
          className="text-[#777777] hover:text-[#4b4a4a] font-medium"
        >
          View Profile
        </Link>
      ) : null,
  },
];

export default function Overview() {
  // 🔹 Pagination state
  const [page, setPage] = useState(1);
  const limit = 10;

  // 🔹 Fetch users from API (RTK Query)
  const { data, isLoading } = useGetUsersQuery({
    page: String(page),
    limit: String(limit),
  });

  const pagination: MetaType = data?.meta || {
    total: 0,
    page: 1,
    totalPage: 1,
  };

  // 🔹 Transform data for the table
  const usersData: Job[] =
    data?.data?.map((user) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      profilePic: user.profilePic || "",
      role:
        ["ADMIN", "JOB_SEEKER", "EMPLOYEE"].includes(user.role) && user.role
          ? (user.role as "ADMIN" | "JOB_SEEKER" | "EMPLOYEE")
          : "JOB_SEEKER",
      isSubscribed: user.isSubscribed,
      companyName: user.companyName || "",
      joiningDate: user.joiningDate,
      planExpiration: user.planExpiration,
      subscriptionType: user.subscriptionType,
      planId: user.planId,
      totalPayPerJobCount: user.totalPayPerJobCount,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
    })) ?? [];
  // state data

  const { data: state_data,isFetching, isError } = useGetStatisticQuery();


if (isLoading || isFetching) return <div className="w-50 mx-auto"> <Spinner /></div>;
if (isError) return <div>Error loading statistics</div>;
if (!state_data) return null; // don’t render error — wait for data

  const stats = mapDashboardToStatCards(state_data);

  return (
    <div>
      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <DashboardOverview
            key={index}
            value={stat.value}
            title={stat.label}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Job Posting Chart */}
      <LiveJobChart />

      {/* User List Table */}
      <Card className="shadow-sm mt-6">
        <CardHeader className="flex items-center justify-between pb-4">
          <CardTitle>User List</CardTitle>
          <Link
            href="#"
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            See More
          </Link>
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <div className="mx-auto w-40 my-10">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <DataTable
              data={usersData}
              columns={jobColumns}
              pagination={{
                currentPage: pagination.page,
                totalPages: pagination.totalPage,
                totalItems: pagination.total,
                onPageChange: setPage, // ✅ this updates state and triggers refetch
              }}
              searchableColumns={["role", "fullName"]}
              onRowClick={(row) => console.log("Row clicked:", row)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
