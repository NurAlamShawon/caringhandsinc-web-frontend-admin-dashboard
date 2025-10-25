"use client";

import React, { useState } from "react";
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

// 🧩 Define TypeScript interface for form fields
interface AdminProfileFormValues {
  adminName: string;
  email: string;
  phoneNumber: string;
  businessAddress: string;
  city: string;
  zipCode: string;
  preferredContactMethod: string;
  contactEmail: string;
  inviteEmail: string;
  inviteRole: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

// 🧩 Demo data for default values
const DEMO_DATA: AdminProfileFormValues = {
  adminName: "John Doe",
  email: "john@example.com",
  phoneNumber: "+1 (555) 123-4567",
  businessAddress: "123 Business St, Suite 100, New York, NY 10001",
  city: "New York",
  zipCode: "10001",
  preferredContactMethod: "email",
  contactEmail: "john@example.com",
  inviteEmail: "",
  inviteRole: "admin",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

interface AdminProfileFormProps {
  onUpdateSuccess?: () => void;
}

export default function AdminProfileForm({
  onUpdateSuccess,
}: AdminProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [changePassword, setChangePassword] = useState(false);

  // ✅ Add type to useForm
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AdminProfileFormValues>({
    defaultValues: DEMO_DATA,
  });

  const watchedValues = watch();

  // ✅ Strongly typed onSubmit function
  const onSubmit: SubmitHandler<AdminProfileFormValues> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Updated data:", data);
      onUpdateSuccess?.();
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
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
                  {...register("adminName", { required: "Admin name is required" })}
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

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>

          {/* Invite Admin Section */}
          <Card>
            <CardHeader>
              <CardTitle>Invite Admin</CardTitle>
              <CardDescription>Invite a new admin to your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Invite Email */}
              <div className="space-y-2">
                <label
                  htmlFor="inviteEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Email
                </label>
                <Input
                  id="inviteEmail"
                  type="email"
                  placeholder="admin@example.com"
                  {...register("inviteEmail", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.inviteEmail && (
                  <p className="text-sm text-red-600">
                    {errors.inviteEmail.message}
                  </p>
                )}
              </div>

              {/* Assign Role */}
              <div className="space-y-2">
                <label
                  htmlFor="inviteRole"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assign Role
                </label>
                <Select
                  defaultValue={DEMO_DATA.inviteRole}
                  onValueChange={(value) => setValue("inviteRole", value)}
                >
                  <SelectTrigger id="inviteRole">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="moderator">Moderator</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? "Inviting..." : "Invite Now"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Contact Info + Change Password */}
        <div className="space-y-6">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Manage your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                  placeholder="123 Business St, Suite 100, New York, NY 10001"
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

              {/* City + Zip */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <Input
                    id="city"
                    placeholder="New York"
                    {...register("city", { required: "City is required" })}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    Zip Code
                  </label>
                  <Input
                    id="zipCode"
                    placeholder="10001"
                    {...register("zipCode", { required: "Zip code is required" })}
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-red-600">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Method */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-gray-700">
                    Preferred Contact Method
                  </label>
                  <Select
                    defaultValue={DEMO_DATA.preferredContactMethod}
                    onValueChange={(value) =>
                      setValue("preferredContactMethod", value)
                    }
                  >
                    <SelectTrigger id="preferredContactMethod">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="john@example.com"
                    {...register("contactEmail", {
                      required: "Contact email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.contactEmail && (
                    <p className="text-sm text-red-600">
                      {errors.contactEmail.message}
                    </p>
                  )}
                </div>
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

          {/* Change Password */}
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input
                type="password"
                placeholder="Current Password"
                {...register("currentPassword")}
              />
              <Input
                type="password"
                placeholder="New Password"
                {...register("newPassword")}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? "Updating..." : "Change Password"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
