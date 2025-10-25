"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import React from "react";

interface MyFormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  type?: React.ComponentProps<typeof Input>["type"];
}

function CustomFormField<T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  type = "text",
}: MyFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="text-left w-full">
          <FormLabel className="text-lg text-black">{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type}  {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;
