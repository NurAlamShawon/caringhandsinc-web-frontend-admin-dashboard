"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DataTable,
  type ColumnDef,
} from "@/components/ui/custom-data-table-admin";
import { type Job } from "@/lib/mock-data-admin";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectIcon } from "@radix-ui/react-select";
import {
  useGetUsersQuery,
  useUpdateRoleMutation,
} from "@/redux/api/userApi/useApi";

export default function Overview() {
  const [updateRole] = useUpdateRoleMutation();
  const [filterType, setFilterType] = useState<"ALL" | "JOB_SEEKER" | "EMPLOYEE">("ALL");
  const [page, setPage] = useState(1);
  const limit = 10;

  // 🔹 Fetch users using RTK Query with pagination
  const { isLoading, data } = useGetUsersQuery({
    page: String(page),
    limit: String(limit),
  });

  // 🔹 Extract pagination info from response
  const pagination = data?.meta || { total: 0, page: 1, totalPage: 1 };

  // 🔹 Transform API data into table-friendly format
  const usersData: Job[] =
    data?.data?.map((user: any) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      profilePic: user.profilePic || "",
      role: ["ADMIN", "JOB_SEEKER", "EMPLOYEE"].includes(user.role)
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

  // 🔹 Filter users based on filterType
  const filteredUsersData = useMemo(() => {
    if (filterType === "ALL") return usersData;
    return usersData.filter((user) => user.role === filterType);
  }, [filterType, usersData]);

  // 🔹 Handle role change
  const handleRoleChange = async (email: string, newRoleValue: string) => {
    // Optimistically update
    usersData.forEach((user) => {
      if (user.email === email) user.role = newRoleValue as any;
    });
    try {
      await updateRole({ email, body: { role: newRoleValue.toUpperCase() } }).unwrap();
      console.log("Role updated successfully");
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  // Table columns
  const jobColumns: ColumnDef<Job>[] = [
    { key: "joiningDate", label: "Joining Date & Time", sortable: false },
    { key: "fullName", label: "User Name", sortable: true },
    { key: "email", label: "Email Address", sortable: true },
    { key: "companyName", label: "Company Name", sortable: true },
    {
      key: "role",
      label: "Role Change",
      render: (_, row) => {
        if (!row) return null;
        const roleOptions = ["ADMIN", "JOB_SEEKER", "EMPLOYEE"];
        return (
          <Select
            value={row.role}
            onValueChange={(val) => handleRoleChange(row.email, val)}
          >
            <SelectTrigger className="w-[140px] bg-[#28C76F1A] text-[#10B981] border border-[#10B981] rounded-2xl text-sm hover:bg-gray-100 focus:ring-emerald-500 uppercase">
              <SelectValue>{row.role}</SelectValue>
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-white/80 shadow-lg rounded-lg">
              {roleOptions.map((role) => (
                <SelectItem key={role + row.id} value={role} className="uppercase">
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      },
    },
    {
      key: "id",
      label: "Action",
      render: (_, row) => {
        if (!row) return null;
        const href =
          row.role === "EMPLOYEE"
            ? `/admin-dashboard/job-management/job-details/${row.id}`
            : `/admin-dashboard/user-management/view-candidate-profile/${row.id}`;
        return (
          <Link
            href={href}
            className="text-[#777777] hover:text-[#4b4a4a] font-medium hover:underline uppercase"
          >
            View Profile
          </Link>
        );
      },
    },
  ];

  return (
    <div>
      <Card className="shadow-sm mt-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="uppercase">ALL USERS</CardTitle>
          <Select
            value={filterType}
            onValueChange={(val) =>
              setFilterType(val as "ALL" | "JOB_SEEKER" | "EMPLOYEE")
            }
          >
            <SelectTrigger className="w-[150px] bg-black text-white flex justify-between items-center rounded-md px-2 uppercase">
              <SelectValue>{filterType}</SelectValue>
              <SelectIcon>
                <ChevronDown className="text-white" />
              </SelectIcon>
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-black/70 text-white rounded-lg shadow-lg">
              <SelectItem value="ALL" className="uppercase">ALL</SelectItem>
              <SelectItem value="JOB_SEEKER" className="uppercase">JOB_SEEKER</SelectItem>
              <SelectItem value="EMPLOYEE" className="uppercase">EMPLOYEE</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <div className="mx-auto w-40 my-10">
              <Spinner />
            </div>
          ) : (
            <DataTable
              data={filteredUsersData}
              columns={jobColumns}
              pagination={{
                currentPage: pagination.page,
                totalPages: pagination.totalPage,
                totalItems: pagination.total,
                onPageChange: setPage,
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
