"use client";

import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ContactSection() {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "contact",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const contact = watch("contact");

  const handleAddContact = () => {
    const newId = Date.now().toString();
    append({
      id: newId,
      type: "",
      value: "",
    });
    setEditingId(newId);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h5 font-bold text-foreground">
          Contact Information & Social Links
        </h2>
        <Button
          type="button"
          onClick={handleAddContact}
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
          <div key={field.id} className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {editingId === field.id ? (
                  <div className="grid grid-cols-2 gap-3">
                    <Controller
                      name={`contact.${index}.type`}
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="Type (e.g., LinkedIn)" />
                      )}
                    />
                    <Controller
                      name={`contact.${index}.value`}
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="URL or Value" />
                      )}
                    />
                  </div>
                ) : (
                  <>
                    <p className="text-lg font-medium text-foreground">
                      {contact[index].type}:
                    </p>
                    <a
                      href={contact[index].value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-blue-500 hover:underline"
                    >
                      {contact[index].value}
                    </a>
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
