"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import {
  DataTable,
  type ColumnDef,
} from "@/components/ui/custom-data-table-admin";

import type { EmployeeData, EmployeeJob } from "@/types/userTypes/userTypes";

import {
  useDeleteJobMutation,
  useSuspendJobMutation,
} from "@/redux/api/jobApi/jobApi";
import ConfirmToast from "@/components/toast-error-loading/ConfirmToast";
import { useGetEmployeeProfileQuery } from "@/redux/api/userApi/useApi";

type JobRow = {
  id: string;
  postingDate: string;
  salaryRange: string;
  position: string;
  status: string;
  applicants: number;
  deadline: string;
};

export default function ViewEmployeeCompanyProfile() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetEmployeeProfileQuery({
    id: id as string,
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [mess, setMess] = useState("");
  const [messtype, setMesstype] = useState<"Sus" | "Del">("Sus");

  const [suspendJob] = useSuspendJobMutation();
  const [deleteJob] = useDeleteJobMutation();

  const handleDelete = (): void => {
    if (!id) return;

    if (messtype === "Sus") {
      suspendJob({ id });
    } else if (messtype === "Del") {
      deleteJob({ id, body: { status: "deleted" } });
    }
    setShowConfirm(false);
  };

  // ✅ Hooks must run first
  const companyData: EmployeeData | undefined = data?.data;
  const company = companyData?.Company;

  console.log("data", companyData);
  console.log("company", company);

  const jobTableData: JobRow[] = useMemo(() => {
    return (
      company?.JobPost?.map((job: EmployeeJob) => ({
        id: job.jobId,
        postingDate: job.postingDate,
        salaryRange: job.salaryRange,
        position: job.position,
        status: job.status,
        applicants: job.applicants,
        deadline: job.deadline,
      })) ?? []
    );
  }, [company?.JobPost]);

  // Conditional rendering after hooks
  if (isLoading) return <Spinner className="mx-auto my-10" />;
  if (isError) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-lg font-medium text-red-500">
          Failed to load company profile.
        </p>
      </div>
    );
  }

  // Table columns
  const jobColumns: ColumnDef<JobRow>[] = [
    { key: "id", label: "Job ID" },
    { key: "postingDate", label: "Posting Date" },
    { key: "salaryRange", label: "Salary Range" },
    { key: "position", label: "Position" },
    {
      key: "status",
      label: "Status",
      render: (_, row) => {
        if (!row) return null;
        return (
          <Badge
            className={`${
              row.status === "active"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {row.status || "N/A"}
          </Badge>
        );
      },
    },
    { key: "applicants", label: "No. of Applicants" },
    { key: "deadline", label: "Deadline" },
    {
      key: "id",
      label: "Action",
      render: (_, row) => (
        <Link href="#" className="text-green-600 hover:underline font-medium">
          View
        </Link>
      ),
    },
  ];

  return (
    <div className="p-8 space-y-10 bg-white shadow rounded-2xl">
      {showConfirm && (
        <ConfirmToast
          message={mess}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            {company?.logo ? (
              <Image
                src={company.logo}
                alt="Company Logo"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500 text-3xl font-bold">
                {company?.companyName[0] || "C"}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{company?.companyName}</h1>
            <p className="text-gray-500">{company?.industryType}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-6 md:mt-0">
          <Button
            onClick={() => {
              setShowConfirm(true);
              setMesstype("Sus");
              setMess("Suspend Job?");
            }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
          >
            Suspend Job
          </Button>
          <Button
            onClick={() => {
              setShowConfirm(true);
              setMesstype("Del");
              setMess("Delete Job?");
            }}
            className="border-red-500 text-red-500 hover:bg-red-50 px-6 bg-transparent"
          >
            Delete Job
          </Button>
        </div>
      </div>

      {/* Company Description */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Company Description</h2>
        <p className="text-gray-700 leading-relaxed border-t pt-3">
          {company?.description || "No description available for this company."}
        </p>
      </section>

      {/* Location */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <p className="text-gray-800">
          {company?.city}, {company?.state}
        </p>
        <p className="text-gray-500">{company?.address}</p>
      </section>

      {/* Subscription Plan */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Subscription Plan</h2>
        <div className="border rounded-lg p-4">
          <p className="text-gray-600">Plan Name</p>
          <p className="font-medium">
            {companyData?.subscriptionType || "Pay-per-Job"}
          </p>
        </div>
      </section>

      {/* Job List using ShadCN DataTable */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Job List</h2>
        <Card className="shadow-sm">
          <CardContent>
            {jobTableData.length === 0 ? (
              <p className="text-center py-6 text-gray-500">
                No job posts available.
              </p>
            ) : (
              <DataTable
                data={jobTableData}
                columns={jobColumns}
                searchableColumns={["position", "status"]}
              />
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
