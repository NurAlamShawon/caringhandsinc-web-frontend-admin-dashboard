"use client";

import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function CareerSummarySection() {
  const { control, watch } = useFormContext();
  const [isEditing, setIsEditing] = useState(false);
  const careerSummary = watch("careerSummary");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h5 font-bold text-gray-900 mb-4">Career Summary</h2>
        <Button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <Edit2 className="w-4 h-4" />
        </Button>
      </div>
      <Separator className="bg-neutral-600" />

      <div className="border-b border-border pb-4">
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <p className="text-md font-semibold text-gray-700">Job Title:</p>

              <Controller
                name="careerSummary.jobTitle"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Job Title" />
                )}
              />
            </div>
            <div>
              <p className="text-md font-semibold text-gray-700">
                Professional Summary:
              </p>
              <Controller
                name="careerSummary.summary"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Your professional summary"
                    rows={4}
                  />
                )}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <p className="text-md font-semibold text-gray-700">Job Title:</p>

              <p className="text-gray-700 leading-relaxed">
                {careerSummary.jobTitle}
              </p>
            </div>
            <div>
              <p className="text-md font-semibold text-gray-700">
                Professional Summary:
              </p>
              <p className="text-gray-700 leading-relaxed">
                {careerSummary.summary}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
