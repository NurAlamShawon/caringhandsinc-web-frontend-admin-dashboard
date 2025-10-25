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
  const { isLoading, data } = useGetUsersQuery({});
  const [updateRole, { isLoading: isUpdating }] = useUpdateRoleMutation();
  const [filterType, setFilterType] = useState<
    "ALL" | "JOB_SEEKER" | "EMPLOYEE"
  >("ALL");
  const [jobsData, setJobsData] = useState<Job[]>([]);

  // Map API data to Job type when data is fetched
  useEffect(() => {
    if (data?.data) {
      const mappedData: Job[] = data.data.map((user) => ({
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
      }));
      setJobsData(mappedData);
    }
  }, [data]);

  // Filter jobs based on filterType
  const filteredData = useMemo(() => {
    if (filterType === "ALL") return jobsData;
    return jobsData.filter((job) => job.role === filterType);
  }, [filterType, jobsData]);

  // Role options for dropdown
  const roleOptions = [
    { value: "ADMIN", label: "ADMIN" },
    { value: "JOB_SEEKER", label: "JOB_SEEKER" },
    { value: "EMPLOYEE", label: "EMPLOYEE" },
  ];

  // Handle role change
  const handleRoleChange = async (email: string, newRoleValue: string) => {
    // Optimistically update the local state
    setJobsData((prev) =>
      prev.map((job) =>
        job.email === email
          ? {
              ...job,
              role: newRoleValue.toUpperCase() as
                | "ADMIN"
                | "JOB_SEEKER"
                | "EMPLOYEE",
            }
          : job
      )
    );

    try {
      // Call the API to update the role
      await updateRole({
        email,
        body: {
          role: newRoleValue.toUpperCase() as
            | "ADMIN"
            | "JOB_SEEKER"
            | "EMPLOYEE",
        },
      }).unwrap();
      console.log("Role updated successfully");
    } catch (error) {
      // If an error occurs, revert the local change
      console.error("Error updating role:", error);
      // Optionally, you can revert the changes made optimistically here
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
                <SelectItem
                  key={role.value + row.id}
                  value={role.value}
                  className="uppercase"
                >
                  {role.label}
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
          <div className="flex items-center gap-2">
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
                <SelectItem value="ALL" className="uppercase">
                  ALL
                </SelectItem>
                <SelectItem value="JOB SEEKER" className="uppercase">
                  JOB SEEKER
                </SelectItem>
                <SelectItem value="EMPLOYEE" className="uppercase">
                  EMPLOYEE
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          {loading || isLoading ? (
            <div className="mx-auto w-40 my-10">
              <Spinner />
            </div>
          ) : (
            <DataTable
              data={filteredData}
              columns={jobColumns}
              rowsPerPage={10}
              searchableColumns={["role", "fullName"]}
              onRowClick={(row) => console.log("Row clicked:", row)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
