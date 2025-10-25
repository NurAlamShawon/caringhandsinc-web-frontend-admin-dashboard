"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function SkillsSection() {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });
  const [newSkill, setNewSkill] = useState("");
  const skills = watch("skills");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      append(newSkill);
      setNewSkill("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h5 font-bold text-foreground">Skills</h2>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
            placeholder="Add a skill"
            className="w-40"
          />
          <Button
            type="button"
            onClick={handleAddSkill}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
 <Separator className="bg-neutral-600" />
      <div className="flex flex-wrap items-center gap-2 pb-4">
        {fields.map((field, index) => (
          <Badge
            key={field.id}
            variant="secondary"
            className="bg-gray-300/50 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-full"
          >
            {skills[index]}
            <button
              type="button"
              onClick={() => remove(index)}
              className="hover:opacity-70 focus:outline-none"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
