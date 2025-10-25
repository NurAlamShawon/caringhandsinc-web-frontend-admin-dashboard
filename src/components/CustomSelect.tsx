"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, FieldValues, Path } from "react-hook-form";

interface CustomSelectFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
}

export default function CustomSelectField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
}: CustomSelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="text-left w-full">
          <FormLabel className="text-lg text-black">{label}</FormLabel>

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger size="lg" className="w-full h-16 px-4  text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary">
                <SelectValue placeholder={placeholder || "Select an option"} />
              </SelectTrigger>
            </FormControl>

            <SelectContent className="bg-white shadow-lg rounded-lg w-full">
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-base py-3 hover:bg-secondary/20"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
