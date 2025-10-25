"use client";

import Image from "next/image";
import Container from "../shared/Container";
import { MapPin } from "lucide-react";

const data = [
  {
    logo: "/huawei.jpg",
    position_holder: "Frontend Developer",
    company_name: "Google",
    salary: "$120,000 - $150,000",
    location: "Mountain View, CA",
    requirement_skill: ["React.js", "JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    logo: "/huawei.jpg",
    position_holder: "Backend Developer",
    company_name: "Microsoft",
    salary: "$110,000 - $140,000",
    location: "Redmond, WA",
    requirement_skill: ["Node.js", "Express.js", "C#", "SQL", "Azure"],
  },
  {
    logo: "/huawei.jpg",
    position_holder: "Full Stack Developer",
    company_name: "Amazon",
    salary: "$115,000 - $145,000",
    location: "Seattle, WA",
    requirement_skill: ["React.js", "Node.js", "AWS", "MongoDB", "Docker"],
  },
  {
    logo: "/huawei.jpg",
    position_holder: "UI/UX Designer",
    company_name: "Meta",
    salary: "$90,000 - $120,000",
    location: "Menlo Park, CA",
    requirement_skill: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Prototyping",
      "User Research",
    ],
  },
  {
    logo: "/huawei.jpg",
    position_holder: "Data Scientist",
    company_name: "Tesla",
    salary: "$130,000 - $160,000",
    location: "Palo Alto, CA",
    requirement_skill: ["Python", "R", "Machine Learning", "SQL", "TensorFlow"],
  },
  {
    logo: "/huawei.jpg",
    position_holder: "DevOps Engineer",
    company_name: "Netflix",
    salary: "$125,000 - $155,000",
    location: "Los Gatos, CA",
    requirement_skill: ["AWS", "Docker", "Kubernetes", "CI/CD", "Python"],
  },
];

const FeaturedJobsSection = () => {
  return (
    <div className="mb-40">
      <Container>
        <div className="text-center mb-16 px-4 sm:px-6 md:px-0">
          <h1 className="section-title mb-4">Featured Jobs in the DMV</h1>
          <p className="text-base sm:text-base md:text-lg text-body">
            Handpicked opportunities updated daily — discover your next role
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 !overflow-hidden px-4 pb-1 ">
          {data.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={job.logo}
                  alt={job.company_name}
                  width={90}
                  height={90}
                  className="rounded-full object-cover object-center"
                />

                <div className="text-left">
                  <h2 className="text-title text-2xl font-bold">
                    {job.position_holder}
                  </h2>
                  <span className="text-caption text-base">
                    {job.company_name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 items-start">
                <span className="text-secondary font-semibold text-[18px]">
                  {job.salary}
                </span>
                <p className="text-caption inline-flex items-center gap-2 text-base">
                  <MapPin size={20} /> {job.location}
                </p>

                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  {job.requirement_skill.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-bg-lighter py-2 px-4 text-caption rounded-full text-base ">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full p-2 text-white bg-primary hover:bg-primary/90 transition cursor-pointer rounded-md font-semibold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedJobsSection;
