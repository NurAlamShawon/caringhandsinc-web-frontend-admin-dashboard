"use client";

import type React from "react";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AddMoreDetails() {
  const { control, watch, setValue } = useFormContext();
  const [skillInput, setSkillInput] = useState("");
  const [additionalSkills, setAdditionalSkills] = useState<string[]>([]);
  const [employmentType, setEmploymentType] = useState("hybrid");
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<
    string[]
  >(["full-time"]);

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      setAdditionalSkills([...additionalSkills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setAdditionalSkills(additionalSkills.filter((_, i) => i !== index));
  };

  const toggleEmploymentType = (type: string) => {
    setSelectedEmploymentTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-h2 font-bold text-foreground">
          Add More Details (Optional)
        </h2>
        <p className="text-muted-foreground text-md py-4">
          Help us find even better matches by adding more information
        </p>
      </div>

      {/* Main Card */}
      <div className="p-8 border border-border space-y-8 shadow">
        {/* Add More Skills */}
        <div className="space-y-4">
          <label className="block text-md font-semibold text-foreground">
            Add more skills (optional)
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Type a skill and press Enter..."
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
              className="pr-10 text-md"
            />
            <Plus className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
          {additionalSkills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-md"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(idx)}
                    className="hover:text-blue-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Work Preference Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Mode */}
          <div className="space-y-4">
            <label className="block text-md font-semibold text-foreground">
              Work mode (optional)
            </label>
            <div className="space-y-3">
              {[
                { id: "remote", label: "Remote" },
                { id: "hybrid", label: "Hybrid" },
                { id: "onsite", label: "Onsite" },
              ].map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="workMode"
                    value={option.id}
                    checked={employmentType === option.id}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-md text-foreground">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Employment Type */}
          <div className="space-y-4">
            <label className="block text-md font-semibold text-foreground">
              Employment type
            </label>
            <div className="space-y-3">
              {[
                { id: "full-time", label: "Full-time" },
                { id: "part-time", label: "Part-time" },
                { id: "contract", label: "Contract" },
              ].map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedEmploymentTypes.includes(option.id)}
                    onChange={() => toggleEmploymentType(option.id)}
                    className="w-4 h-4"
                  />
                  <span className="text-md text-foreground">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Preferred Location */}
        <div className="space-y-4">
          <label className="block text-md font-semibold text-foreground">
            Preferred location (optional)
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter City, state, or country..."
              className="pl-10"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              📍
            </span>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="mt-20">
        <div className="flex justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
            <Link href="/dashboard/jobseekers/makeresumestronger">
              Parse Resume & Continue
            </Link>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 w-full  py-2 text-black text-lg mt-20">
          <Image
            src="/dashboard/joobseekers/4.png"
            height={30}
            width={30}
            alt="image"
            className="mb-1"
          />
          <p>Your resume is private—used only for matching and never shared.</p>
        </div>
      </div>
    </div>
  );
}
