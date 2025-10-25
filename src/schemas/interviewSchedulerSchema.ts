import { z } from "zod";

export const interviewSchedulerSchema = z.object({
  interviewTitle: z.string().min(1, "Interview Title is required"),

  // Date and Time fields
  date: z.string().min(1, "Date is required"), // e.g., "2025-06-25"
  time: z.string().min(1, "Time is required"), // e.g., "08:52 AM"

  // Platform and link fields
  interviewPlatform: z.string().min(1, "Interview Platform is required"), // e.g., "Google Meet", "Zoom"
  interviewLink: z.string().url("Enter a valid interview link").optional(), // Auto-generated link, may be optional
});

export type InterviewScheduler = z.infer<typeof interviewSchedulerSchema>;
