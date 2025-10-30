"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import ConfirmToast from "@/components/toast-error-loading/ConfirmToast";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Job } from "@/types/userTypes/userTypes";
import {
  useDeleteJobMutation,
  useGetJobByIdQuery,
  useSuspendJobMutation,
} from "@/redux/api/jobApi/jobApi";

export default function JobDetails() {
  const { id } = useParams(); // job id from URL
  const jobId = id as string; // assert as string
  const { data, isLoading, isError } = useGetJobByIdQuery({ id: jobId });
  const job: Job | undefined = data?.data;

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
      deleteJob({ id });
    }
    setShowConfirm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !job)
    return <div className="text-center text-gray-500 my-20">Job not found</div>;

  return (
    <div className="container mx-auto">
      {showConfirm && (
        <ConfirmToast
          message={mess}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <div className="flex-1 bg-white rounded-lg p-8 shadow-sm">
        <div className="lg:flex justify-between">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {job.company.companyName.charAt(0)}
            </div>
            <div>
              <h1 className="text-h2 font-bold text-gray-900">
                {job.company.companyName}
              </h1>
            </div>
          </div>

          <div className="flex gap-3 mt-6 md:mt-0">
            <Button
              onClick={() => {
                setShowConfirm(true);
                setMesstype("Sus");
                setMess("Suspend User Account?");
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
            >
              Suspend Job
            </Button>
            <Button
              onClick={() => {
                setShowConfirm(true);
                setMesstype("Del");
                setMess("Delete User Account?");
              }}
              className="border-red-500 text-red-500 hover:bg-red-50 px-6 bg-transparent"
            >
              Delete Job
            </Button>
          </div>
        </div>

        <p className="text-h3 font-semibold text-gray-800 mt-1">
          {job.title}{" "}
          <span className="text-teal-500 text-2xl font-normal">
            ({job.jobType})
          </span>
        </p>

        <div className="flex flex-wrap gap-6 mb-6 text-gray-600 h-4">
          <div className="flex items-center gap-2">📍 {job.location}</div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">⏱️ {job.experience}</div>
          <Separator orientation="vertical" />
          <div>Uploaded {job.remainingDays} days ago</div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            👥 {job.noOfApplicants} applicants
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold">Skills Needed:</span>{" "}
            {job.skills.join(" • ")}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold">Application Deadline:</span>{" "}
            {job.formattedDeadline}
          </p>
        </div>
        <div className="mb-8 pb-8 border-b border-gray-200">
          <p className="text-4xl font-bold text-teal-500">
            {job.salaryRange}{" "}
            <span className="text-lg text-gray-600 font-normal">/Month</span>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Job Description:
          </h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Responsibilities:
          </h2>
          <ul className="space-y-2 text-gray-700">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Requirements:
          </h2>
          <ul className="space-y-2 text-gray-700">
            {job.requirements.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Join {job.company.companyName}?
          </h2>
          <ul className="space-y-2 text-gray-700">
            {job.whyJoin.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
