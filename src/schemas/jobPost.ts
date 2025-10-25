 
import { z } from "zod";

export const jobPostSchema = z.object({
  // Basic info
  jobTitle: z.string().min(1, "Job Title is required"),
  experienceNeed: z.string().min(1, "Experience is required"), // e.g. "1 year", "3+ years"
  applicationDeadline: z.string().min(1, "Application deadline is required"), // keep as string (YYYY-MM-DD) from date picker
  location: z.string().min(1, "Location is required"),

  // Compensation & type
  salaryType: z.string().min(1, "Salary type is required"), // e.g. "Monthly", "Yearly"
  salaryRange: z.string().min(1, "Salary range is required"), // e.g. "35,000 BDT"
  jobType: z.string().min(1, "Job type is required"), // e.g. "Remote", "Full-time"

  // Skills (tag-style input)
  skillsNeeded: z
    .array(z.string().min(1, "Skill can't be empty"))
    .optional()
    .default([]),

  // Descriptions & long text
  description: z
    .string()
    .min(10, "Job description must be at least 10 characters"),

  // Repeatable points (Responsibilities / Requirements / Why join)
  responsibilities: z
    .array(z.string().min(1, "Responsibility cannot be empty"))
    .optional()
    .default([]),

  requirements: z
    .array(z.string().min(1, "Requirement cannot be empty"))
    .optional()
    .default([]),

  whyJoin: z
    .array(z.string().min(1, "Point cannot be empty"))
    .optional()
    .default([]),

  // Additional features / other dynamic points
  additionalFeatures: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .optional()
    .default([]),
});

export type JobPost = z.infer<typeof jobPostSchema>;
