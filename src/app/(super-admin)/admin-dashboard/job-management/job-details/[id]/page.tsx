"use client";
import ConfirmToast from "@/components/toast-error-loading/ConfirmToast";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { jobsData } from "@/lib/dummy-data";
import { useState } from "react";

export default function JobDetails() {
  const [isSaved, setIsSaved] = useState(false);
  const job = jobsData.find((j) => j.id === "1") || jobsData[0];

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [mess, setmess] = useState<string>("");
  const handleDelete = (): void => {
    alert("User deleted!"); // Replace with API call
    setShowConfirm(false);
  };
  return (
    <div className="container mx-auto">
      {/* main */}
      {showConfirm && (
        <ConfirmToast
          message={mess}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      {/* job Details */}
      <div>
        <div className="flex-1 bg-white rounded-lg p-8 shadow-sm">
          {/* Header */}
          <div className="lg:flex justify-between">
            {/* left side */}

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {job.company.charAt(0)}
              </div>
              <div>
                <h1 className="text-h2 font-bold text-gray-900">
                  {job.company}
                </h1>
              </div>
            </div>

            {/* action buttons */}
            <div className="flex  gap-3 mt-6 md:mt-0">
              <Button
                onClick={() => {
                  setShowConfirm(true);
                  setmess("Suspend User Account?");
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
              >
                Suspend Account
              </Button>
              <Button
                onClick={() => {
                  setShowConfirm(true);
                  setmess("Delete User Account?");
                }}
                className="border-red-500 text-red-500 hover:bg-red-50 px-6 bg-transparent"
              >
                Delete User
              </Button>
            </div>
          </div>

          {/* Position */}
          <p className="text-h3 font-semibold text-gray-800 mt-1">
            {job.title}{" "}
            <span className="text-teal-500 text-2xl font-normal">(Onsite)</span>
          </p>

          {/* Job Meta Info */}
          <div className="flex flex-wrap gap-6 mb-6  text-gray-600 h-4">
            <div className="flex items-center gap-2">📍 {job.location}</div>

            <Separator orientation="vertical" />
            <div className="flex items-center gap-2">⏱️ {job.experience}</div>
            <Separator orientation="vertical" />
            <div>Uploaded {job.uploadedDaysAgo} days ago</div>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-2">
              👥 Over 100 applicants
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <p className=" text-gray-600">
              <span className="font-semibold">Skill Needed:</span>{" "}
              {job.skills.join(" • ")}
            </p>
          </div>

          {/* Application Deadline */}
          <div className="mb-6">
            <p className="text-gray-600">
              <span className="font-semibold">Application Deadline:</span> Aug
              25, 2025
            </p>
          </div>

          {/* Salary */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-4xl font-bold text-teal-500">
              ${job.salary}
              <span className="text-lg text-gray-600 font-normal"> /Month</span>
            </p>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Job Description:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are looking for a talented {job.title} to join our onsite team
              in {job.location}. Youll work closely with product managers and
              developers to create intuitive, user-friendly digital experiences.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Responsibilities:
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>
                  Design user-centric interfaces for web and mobile applications
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Conduct user research and usability testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>
                  Create wireframes, prototypes, and high-fidelity mockups
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>
                  Collaborate with cross-functional teams to implement designs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Maintain brand consistency across all platforms</span>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Requirements:
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>2+ years of experience in UI/UX design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Proficient in tools like Figma, Adobe XD, or Sketch</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Strong portfolio of design projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Excellent communication and problem-solving skills</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>
                  Bachelors degree in Design, Computer Science, or related field
                </span>
              </li>
            </ul>
          </div>

          {/* Why Join */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Join {job.company}?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Competitive salary and benefits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Opportunity to work on innovative products</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Professional growth and development support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold">•</span>
                <span>Collaborative and inclusive work culture</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
