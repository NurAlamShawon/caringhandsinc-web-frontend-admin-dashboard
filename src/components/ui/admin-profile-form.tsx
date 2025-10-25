"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetMeQuery } from "@/redux/api/userApi/useApi";

// 🧩 Define TypeScript interface for form fields
interface AdminProfileFormValues {
  adminName: string;
  email: string;
  phoneNumber?: string; // Optional
  businessAddress?: string; // Optional
  city?: string; // Optional
  zipCode?: string; // Optional
  preferredContactMethod: string;
  contactEmail: string;
  inviteEmail: string;
  inviteRole: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

interface AdminProfileFormProps {
  onUpdateSuccess?: () => void;
}

export default function AdminProfileForm({
  onUpdateSuccess,
}: AdminProfileFormProps) {
  const [Loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [changePassword, setChangePassword] = useState(false);

  const { data, error, isLoading } = useGetMeQuery({});

  console.log("Fetched Data:", data?.data);

  // 🧩 Add type to useForm and set default values dynamically once data is available
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AdminProfileFormValues>({
    defaultValues: {
      adminName: "",
      email: "",
      phoneNumber: "",
      businessAddress: "",
      city: "",
      zipCode: "",
      preferredContactMethod: "email",
      contactEmail: "",
      inviteEmail: "",
      inviteRole: "admin",
    },
  });

  // 🧩 Use effect to update the form with fetched data
  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      const userData = data.data[0]; // Get the first user (or adjust based on your data)

      // Set form values using setValue from react-hook-form
      setValue("adminName", userData.fullName || "");
      setValue("email", userData.email || "");
      setValue("phoneNumber", userData.phone || "");
      setValue("businessAddress", userData.businessAddress || "");
      setValue("city", userData.city || "");
      setValue("zipCode", userData.zipCode || "");
      setValue("preferredContactMethod", "email"); // You can modify this logic if needed
      setValue("contactEmail", userData.email || "");
      setValue("inviteEmail", "");
      setValue("inviteRole", userData.role || "admin");
    }
  }, [data, setValue]);

  // 🧩 Handle form submission
  const onSubmit: SubmitHandler<AdminProfileFormValues> = async (formData) => {
    setLoading(true);
    try {
      // Simulate API call to update the user info
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Updated data:", formData);
      onUpdateSuccess?.();
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Admin Info + Invite Admin */}
        <div className="space-y-6">
          {/* Admin Information Section */}
          <Card>
            <CardHeader>
              <CardTitle>Admin Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                    {profileImage ? (
                      <img
                        src={profileImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
              </div>

              {/* Admin Name */}
              <div className="space-y-2">
                <label
                  htmlFor="adminName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admin Name
                </label>
                <Input
                  id="adminName"
                  placeholder="Enter admin name"
                  {...register("adminName", {
                    required: "Admin name is required",
                  })}
                />
                {errors.adminName && (
                  <p className="text-sm text-red-600">
                    {errors.adminName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  placeholder="+1 (555) 123-4567"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Business Address */}
              <div className="space-y-2">
                <label
                  htmlFor="businessAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Address
                </label>
                <Input
                  id="businessAddress"
                  placeholder="Enter business address"
                  {...register("businessAddress", {
                    required: "Business address is required",
                  })}
                />
                {errors.businessAddress && (
                  <p className="text-sm text-red-600">
                    {errors.businessAddress.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <Input
                  id="city"
                  placeholder="Enter city"
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                {errors.city && (
                  <p className="text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              {/* Zip Code */}
              <div className="space-y-2">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <Input
                  id="zipCode"
                  placeholder="Enter zip code"
                  {...register("zipCode", {
                    required: "Zip code is required",
                  })}
                />
                {errors.zipCode && (
                  <p className="text-sm text-red-600">{errors.zipCode.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
