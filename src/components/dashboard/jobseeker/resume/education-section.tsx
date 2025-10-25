"use client";

import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function EducationSection() {
  const { control, watch } = useFormContext();
  const {
    fields: eduFields,
    append: appendEdu,
    remove: removeEdu,
  } = useFieldArray({
    control,
    name: "education",
  });
  const {
    fields: certFields,
    append: appendCert,
    remove: removeCert,
  } = useFieldArray({
    control,
    name: "certifications",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const education = watch("education");
  const certifications = watch("certifications");

  const handleAddEducation = () => {
    const newId = Date.now().toString();
    appendEdu({
      id: newId,
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
    });
    setEditingId(newId);
  };

  const handleAddCertification = () => {
    const newId = Date.now().toString();
    appendCert({
      id: newId,
      name: "",
      issuer: "",
      startDate: "",
      endDate: "",
    });
    setEditingId(newId);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-h5 font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Education & Certifications
          </h2>
          <Button
            type="button"
            onClick={handleAddEducation}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
 <Separator className="bg-neutral-600" />
        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-foreground text-xl mb-4">
            EDUCATIONS
          </h3>
          <div className="space-y-4">
            {eduFields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {editingId === field.id ? (
                      <div className="space-y-2">
                        <Controller
                          name={`education.${index}.degree`}
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Degree" />
                          )}
                        />
                        <Controller
                          name={`education.${index}.school`}
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="School/University" />
                          )}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Controller
                            name={`education.${index}.startDate`}
                            control={control}
                            render={({ field }) => (
                              <Input {...field} placeholder="Start Date" />
                            )}
                          />
                          <Controller
                            name={`education.${index}.endDate`}
                            control={control}
                            render={({ field }) => (
                              <Input {...field} placeholder="End Date" />
                            )}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="font-xl text-foreground">
                          {education[index].degree}
                        </p>
                        <p className="text-lg text-muted-foreground">
                          {education[index].school}
                        </p>
                        <p className="text-lg text-muted-foreground">
                          Start Date: {education[index].startDate} - End Date:{" "}
                          {education[index].endDate}
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
                      onClick={() => removeEdu(index)}
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
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground text-xl mb-4">
            CERTIFICATIONS
          </h3>
          <Button
            type="button"
            onClick={handleAddCertification}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>

        <div className="border-b border-border pb-4">
          <div className="space-y-4">
            {certFields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {editingId === field.id ? (
                      <div className="space-y-2">
                        <Controller
                          name={`certifications.${index}.name`}
                          control={control}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Certification Name"
                            />
                          )}
                        />
                        <Controller
                          name={`certifications.${index}.issuer`}
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Issuer" />
                          )}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Controller
                            name={`certifications.${index}.startDate`}
                            control={control}
                            render={({ field }) => (
                              <Input {...field} placeholder="Start Date" />
                            )}
                          />
                          <Controller
                            name={`certifications.${index}.endDate`}
                            control={control}
                            render={({ field }) => (
                              <Input {...field} placeholder="End Date" />
                            )}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="font-xl text-foreground">
                          {certifications[index].name}
                        </p>
                        <p className="text-lg text-muted-foreground">
                          {certifications[index].issuer}
                        </p>
                        <p className="text-lg text-muted-foreground">
                          Start Date: {certifications[index].startDate} - End
                          Date: {certifications[index].endDate}
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
                      onClick={() => removeCert(index)}
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
      </div>
    </div>
  );
}
