import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: "sm" | "default" | "lg";
}

function Textarea({
  size = "default",
  className,
  rows = 6,
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-size={size}
      rows={rows} // <-- now this works
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-lg placeholder:text-caption/80",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
