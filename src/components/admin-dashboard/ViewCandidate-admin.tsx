"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import ConfirmToast from "@/components/toast-error-loading/ConfirmToast";
import {
  useDeleterUserMutation,
  useSuspendUserMutation,
} from "@/redux/api/userApi/useApi";

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  title: string;
  issuer: string;
  startDate: string;
  endDate: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  companyGroup?: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface CandidateData {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  avatar?: string;
  jobTitle: string;
  professionalSummary: string;
  educations: Education[];
  certifications: Certification[];
  workExperiences: WorkExperience[];
  skills: string[];
  socialLinks?: {
    linkedin?: string;
    portfolio?: string;
    facebook?: string;
  };
  onSelect?: () => void;
  onReject?: () => void;
}

export const CandidateResumeCard: React.FC<CandidateData> = ({
  id,
  name,
  title,
  phone,
  email,
  location,
  avatar,
  jobTitle,
  professionalSummary,
  educations,
  certifications,
  workExperiences,
  skills,
  socialLinks,
}) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [mess, setmess] = useState<string>("");
  const [messtype, setmesstype] = useState<string>("");
  const [suspendUser, { isLoading: isSuspending, isError: isSuspendError }] =
    useSuspendUserMutation();
  const [deleterUser, { isLoading: isDeleting, isError: isDeleteError }] =
    useDeleterUserMutation();

  const handleDelete = (): void => {
    if (messtype === "Sus") {
      suspendUser({ id, body: { status: "suspended" } });
    } else if (messtype === "Del") {
      deleterUser({ id, body: { status: "deleted" } });
    }
    setShowConfirm(false); // Close the confirmation modal after action
  };

  return (
    <div className="w-full  mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="md:flex    ">
          {/* Profile Info */}
          <div className="flex items-start gap-6 flex-1">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {avatar ? (
                <Image
                  src={avatar || "/placeholder.svg"}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover bg-gradient-to-br from-blue-300 to-cyan-300"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-orange-200"></div>
                </div>
              )}
            </div>

            {/* Name and Contact Info */}
            <div className="flex-1">
              <h1 className="text-h3 font-bold text-gray-900">{name}</h1>
              <p className="text-gray-600 mb-4">{title}</p>

              {/* Contact Details */}
              <div className="flex flex-wrap gap-6   md:h-10">
                <div className=" gap-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Phone:</span>
                  </div>
                  <span className="text-gray-900 font-medium">{phone}</span>
                </div>
                <Separator orientation="vertical" />
                <div className=" gap-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Email:</span>
                  </div>
                  <span className="text-gray-900 font-medium">{email}</span>
                </div>
                <Separator orientation="vertical" />
                <div className=" gap-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Location:</span>
                  </div>
                  <span className="text-gray-900 font-medium">{location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-6 md:mt-0">
            <Button
              onClick={() => {
                setShowConfirm(true);
                setmess("Suspend User Account?");
                setmesstype("Sus");
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
            >
              Suspend User
            </Button>
            <Button
              onClick={() => {
                setShowConfirm(true);
                setmesstype("Del");
                setmess("Delete User Account?");
              }}
              className="border-red-500 text-red-500 hover:bg-red-50 px-6 bg-transparent"
            >
              Delete User
            </Button>
          </div>
        </div>
        {showConfirm && (
          <ConfirmToast
            message={mess}
            onConfirm={handleDelete}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>

      {/* Career Summary Section */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Career Summary</h2>

        <div className="space-y-3">
          <div>
            <p className="text-md font-semibold text-gray-700">Job Title:</p>
            <p className="text-gray-900">{jobTitle}</p>
          </div>
          <div>
            <p className="text-md font-semibold text-gray-700">
              Professional Summary:
            </p>
            <p className="text-gray-700 leading-relaxed">
              {professionalSummary}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {/* Left Column - Education & Certifications */}
        <div className="space-y-8">
          {/* Education Section */}
          {educations.length > 0 && (
            <div>
              <h3 className="text-h5 font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Education & Certifications
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-h6 font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Educations
                  </h4>
                  <div className="space-y-4">
                    {educations.map((edu, idx) => (
                      <div key={idx}>
                        <p className="text-md font-semibold text-gray-900">
                          {edu.degree}, {edu.field}
                        </p>
                        <p className="text-sm text-gray-600">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-gray-500">{edu.location}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Graduated: {edu.startDate} - {edu.endDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                {certifications.length > 0 && (
                  <div>
                    <h4 className="text-h6 font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Certifications
                    </h4>
                    <div className="space-y-3">
                      {certifications.map((cert, idx) => (
                        <div key={idx}>
                          <p className="text-md font-semibold text-gray-900">
                            {cert.title}
                          </p>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                          <p className="text-xs text-gray-500">
                            {cert.startDate} - {cert.endDate}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact & Social Links */}
          {socialLinks && (
            <div>
              <h3 className="text-h5 font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Contact Information & Social Links
              </h3>
              <div className="space-y-3">
                {socialLinks.linkedin && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">LinkedIn:</span>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {socialLinks.linkedin}
                    </a>
                  </div>
                )}
                {socialLinks.portfolio && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Portfolio:</span>
                    <a
                      href={socialLinks.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {socialLinks.portfolio}
                    </a>
                  </div>
                )}
                {socialLinks.facebook && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Facebook:</span>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {socialLinks.facebook}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Work Experience & Skills */}
        <div className="space-y-8">
          {/* Work Experience Section */}
          {workExperiences.length > 0 && (
            <div>
              <h3 className="text-h5 font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Work Experience
              </h3>
              <div className="space-y-6">
                {workExperiences.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-md font-semibold text-gray-900">
                          {exp.title}
                        </p>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                        {exp.companyGroup && (
                          <p className="text-xs text-gray-500">
                            ({exp.companyGroup})
                          </p>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Experience Summary
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {skills.length > 0 && (
            <div>
              <h3 className="text-h5 font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-gray-300/50 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
