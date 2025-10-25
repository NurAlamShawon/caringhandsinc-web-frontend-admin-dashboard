"use client";
import { Button } from "@/components/ui/button";
import SimilarJobCard from "@/components/ui/cards/jobcard/similar-job-card";
import { Separator } from "@/components/ui/separator";
import { jobsData } from "@/lib/dummy-data";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilterBar } from "@/components/ui/cards/jobcard/filterCard";

export default function JobDetails() {
  const [isSaved, setIsSaved] = useState(false);
  const job = jobsData.find((j) => j.id === "1") || jobsData[0];
  const similarJobs = jobsData.filter((j) => j.id !== job.id).slice(0, 8);

  // Filters
  const filters = [
    {
      label: "Work Mode",
      options: [
        { value: "remote", label: "Remote" },
        { value: "onsite", label: "On-site" },
      ],
    },
    {
      label: "Experience",
      options: [
        { value: "junior", label: "0-2 Years" },
        { value: "mid", label: "3-5 Years" },
        { value: "senior", label: "6+ Years" },
      ],
    },
    {
      label: "Department",
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "design", label: "Design" },
      ],
    },
    {
      label: "Location",
      options: [
        { value: "dhaka", label: "Dhaka" },
        { value: "chittagong", label: "Chittagong" },
      ],
    },
    {
      label: "Salary Range",
      options: [
        { value: "0-50k", label: "$0 - $50k" },
        { value: "50-100k", label: "$50k - $100k" },
      ],
    },
    {
      label: "Education Qualification",
      options: [
        { value: "bachelor", label: "Bachelor’s" },
        { value: "masters", label: "Master’s" },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Filters */}
      <div className="my-6">
        <div>
          <div className="max-w-7xl mx-auto mt-4 px-4">
            <FilterBar filters={filters} />
          </div>
        </div>
      </div>
      {/* main */}
      <div className="flex space-x-4">
        {/* similar jobs */}
        <div>
          <div className="w-80 flex-shrink-0">
            <div className="space-y-4">
              {similarJobs.map((similarJob) => (
                <SimilarJobCard key={similarJob.id} job={similarJob} />
              ))}
            </div>
          </div>
        </div>
        {/* job Details */}
        <div>
          <div className="flex-1 bg-white rounded-lg p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between  ">
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
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <svg
                  className={`w-6 h-6 ${
                    isSaved ? "fill-gray-900 text-gray-900" : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
            {/* Position */}
            <p className="text-h3 font-semibold text-gray-800 mt-1">
              {job.title}{" "}
              <span className="text-teal-500 text-2xl font-normal">
                (Onsite)
              </span>
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
                <span className="text-lg text-gray-600 font-normal">
                  {" "}
                  /Month
                </span>
              </p>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Job Description:
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are looking for a talented {job.title} to join our onsite
                team in {job.location}. Youll work closely with product managers
                and developers to create intuitive, user-friendly digital
                experiences.
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
                    Design user-centric interfaces for web and mobile
                    applications
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
                  <span>
                    Proficient in tools like Figma, Adobe XD, or Sketch
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>Strong portfolio of design projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>
                    Excellent communication and problem-solving skills
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>
                    Bachelors degree in Design, Computer Science, or related
                    field
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

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Dialog>
                <DialogTrigger>
                  {" "}
                  <Button size="xl">Apply Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-h2 my-2">
                      Apply Now your dream jobs
                    </DialogTitle>
                    <DialogDescription>
                      <p className="text-md text-center">
                        Fill in your personal details so we can tailor your
                        resume perfectly to your career goals.
                      </p>
                      <div className="flex space-x-2 justify-center mt-6 ">
                        <Button>Apply Job</Button>
                        <Button variant="outline">Save Job</Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                size="xl"
                className="  border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
