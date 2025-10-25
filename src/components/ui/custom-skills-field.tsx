"use client";
import { Controller, type FieldPath, type FieldValues } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrayInput } from "./array-input";

interface CustomSkillsFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  label?: string;
  placeholder?: string;
  description?: string;
  maxSkills?: number;
  addButton: boolean;
}

export function CustomSkillsField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  placeholder = "(press Enter or click Add)",
  addButton,
  ...props
}: CustomSkillsFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-lg text-black">{label}</FormLabel>
          )}
          <FormControl>
            <ArrayInput
              value={field.value || []}
              onChange={field.onChange}
              placeholder={placeholder}
              addbutton={addButton}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
