import { z } from "zod";

export const startJobApplySchema = z.object({
  // Basic info
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "phone Number is required"),
  email: z.string().min(1, "Email is required"),
  presentSalary: z.string().min(1, "Present Salary  is required"),
  expectedSalary: z.string().min(1, "Expected Salary is required"),
});

export type JobApply = z.infer<typeof startJobApplySchema>;
