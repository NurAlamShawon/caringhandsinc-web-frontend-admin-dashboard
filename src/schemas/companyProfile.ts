import { z } from "zod";

export const companyProfileSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),

  industryType: z.string().min(1, "Industry Type is required"),
  roleInCompany: z.string().min(1, "Role in company is required"),
  description: z.string().min(1, "Company Description is required"),
  country: z.string().min(1, "Country is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "ZIP Code is required"),

  phoneNumber: z.string().min(1, "Company Number is required"),
  email: z.string().email("Enter a valid email"),
  website: z.string().url("Enter a valid URL"),
});

export type CompanyProfile = z.infer<typeof companyProfileSchema>;
