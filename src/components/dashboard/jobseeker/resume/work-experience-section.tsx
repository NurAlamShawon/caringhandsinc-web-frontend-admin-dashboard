"use client";

import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function WorkExperienceSection() {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workExperience",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const workExperience = watch("workExperience");

  const handleAddExperience = () => {
    const newId = Date.now().toString();
    append({
      id: newId,
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      summary: "",
    });
    setEditingId(newId);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h5 font-bold text-foreground">Work Experience</h2>
        <Button
          type="button"
          onClick={handleAddExperience}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Experience
        </Button>
      </div>
      <Separator className="bg-neutral-600" />
      <div className="space-y-6 border-b border-border pb-4">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {editingId === field.id ? (
                  <div className="space-y-3">
                    <Controller
                      name={`workExperience.${index}.title`}
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="Job Title" />
                      )}
                    />
                    <Controller
                      name={`workExperience.${index}.company`}
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="Company Name" />
                      )}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Controller
                        name={`workExperience.${index}.startDate`}
                        control={control}
                        render={({ field }) => (
                          <Input {...field} placeholder="Start Date" />
                        )}
                      />
                      <Controller
                        name={`workExperience.${index}.endDate`}
                        control={control}
                        render={({ field }) => (
                          <Input {...field} placeholder="End Date" />
                        )}
                      />
                    </div>
                    <Controller
                      name={`workExperience.${index}.summary`}
                      control={control}
                      render={({ field }) => (
                        <Textarea
                          {...field}
                          placeholder="Experience Summary"
                          rows={3}
                        />
                      )}
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-foreground text-xl">
                      Experience {fields.length - index}
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {workExperience[index].title}
                    </p>
                    <p className="text-md text-muted-foreground">
                      {workExperience[index].company}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {workExperience[index].startDate} -{" "}
                      {workExperience[index].endDate}
                    </p>
                    <p className="text-md text-muted-foreground mt-2 leading-relaxed">
                      {workExperience[index].summary}
                    </p>
                  </>
                )}
              </div>

              <div className="flex gap-2 ml-4">
                <Button
                  type="button"
                  onClick={() =>
                    setEditingId(editingId === field.id ? null : field.id)
                  }
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
