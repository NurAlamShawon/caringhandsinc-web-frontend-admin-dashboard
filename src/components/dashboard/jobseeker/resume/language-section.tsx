"use client";

import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function LanguageSection() {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const languages = watch("languages");

  const handleAddLanguage = () => {
    append({
      id: Date.now().toString(),
      language: "",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h5 font-bold text-foreground">Language</h2>
        <Button
          type="button"
          onClick={handleAddLanguage}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
      </div>
      <Separator className="bg-neutral-600" />
      <div className="space-y-3 border-b border-border pb-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center justify-between">
            <div className="flex-1">
              {editingId === field.id ? (
                <Controller
                  name={`languages.${index}.language`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Language" />
                  )}
                />
              ) : (
                <p className="text-lg text-foreground">
                  {languages[index].language}
                </p>
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
        ))}
      </div>
    </div>
  );
}
