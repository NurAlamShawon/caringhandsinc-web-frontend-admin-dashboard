"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import {
  useGetMeQuery,
  useUpdateAdminInfoMutation,
  useUpdateContactInfoMutation,
} from "@/redux/api/userApi/useApi";
import { useChangePassMutation } from "@/redux/api/auth/authApi";

export interface AdminProfileFormValues {
  adminName: string;
  email: string;
  phoneNumber: string;
  businessAddress: string;
  city: string;
  zipCode: string;
  preferredContactMethod: "email" | "phone" | "sms";
  contactEmail: string;
  inviteEmail: string;
  inviteRole: "admin" | "moderator" | "editor" | "viewer";
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function AdminProfileForm() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const { data: userData, isLoading: isLoadingUser } = useGetMeQuery();
  const [updateAdminInfo, { isLoading: isUpdatingAdminInfo }] =
    useUpdateAdminInfoMutation();
  const [updateContactInfo, { isLoading: isUpdatingContactInfo }] =
    useUpdateContactInfoMutation();
  const [changePass, { isLoading: isUpdatingPass }] = useChangePassMutation();

  console.log(userData);

  const { register, handleSubmit, setValue, reset, watch, formState } =
    useForm<AdminProfileFormValues>({
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
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    });

  const { errors } = formState;

  useEffect(() => {
    if (userData?.data) {
      const user = userData.data;
      reset({
        adminName: user.fullName || "",
        email: user.email || "",
        phoneNumber: user.phone || "",
        businessAddress: user.address || "N/A",
        city: user.city || "N/A",
        zipCode: user.zipCode || "N/A",
        preferredContactMethod:
          user.preferredContactMethod === "phone"
            ? "phone"
            : user.preferredContactMethod === "sms"
            ? "sms"
            : "email",
        contactEmail: user.businessEmail || "",
      });

      if (user.profilePic) {
        setProfileImage(`http://206.162.244.131:6009/${user.profilePic}`);
      }
    }
  }, [userData, reset]);

  const [successMessage, setSuccessMessage] = useState<string>("");

  // --- Handlers with interactive success messages ---
  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // --- Submit handlers for each section ---
  const handleAdminInfoSubmit = async (formValues: AdminProfileFormValues) => {
    try {
      const formData = new FormData();
      const fileInput =
        document.querySelector<HTMLInputElement>('input[type="file"]');
      if (fileInput?.files?.[0]) {
        formData.append("file", fileInput.files[0]);
      }

      formData.append(
        "data",
        JSON.stringify({
          fullName: formValues.adminName,
          email: formValues.email,
          phone: formValues.phoneNumber,
        })
      );

      await updateAdminInfo({ body: formData }).unwrap();
      showSuccess("Profile updated successfully!");
      console.log("Admin info updated successfully");
    } catch (err) {
      console.error("Error updating admin info:", err);
    }
  };

  const handleInviteSubmit = async (formValues: AdminProfileFormValues) => {
    console.log(
      "Invite sent to:",
      formValues.inviteEmail,
      formValues.inviteRole
    );
  };

  const handleContactSubmit = async (formValues: AdminProfileFormValues) => {
    try {
      const rawData = {
        businessAddress: formValues.businessAddress,
        city: formValues.city,
        zipCode: formValues.zipCode,
        preferredContactMethod: formValues.preferredContactMethod,
        businessEmail: formValues.contactEmail,
      };

      // Send raw JSON instead of FormData
      await updateContactInfo({ body: rawData }).unwrap();

      console.log("Contact info updated successfully");
      showSuccess("Contact info updated successfully!");
    } catch (err) {
      console.error("Error updating contact info:", err);
    }
  };

  const handlePasswordSubmit = async (formValues: AdminProfileFormValues) => {
    try {
      const rawData = JSON.stringify({
        currentPassword: formValues.currentPassword,
        newPassword: formValues.newPassword,
        confirmPassword: formValues.confirmPassword,
      });

      // send the stringified JSON directly
      await changePass(rawData).unwrap();

      console.log("Password changed successfully");
      showSuccess("Password changed successfully!");
    } catch (err) {
      console.error("Error changing password:", err);
    }
  };

  // --- UI ---
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
      {successMessage && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded shadow-lg animate-fade-in">
          {successMessage}
        </div>
      )}
      {/* Admin Info */}

      <div className="flex flex-col space-y-4 flex-1">
        <form
          onSubmit={handleSubmit(handleAdminInfoSubmit)}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Admin Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                    {profileImage ? (
                      <img
                        src={profileImage}
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

              <Input
                placeholder="Admin Name"
                {...register("adminName", {
                  required: "Admin name is required",
                })}
              />
              <Input
                type="email"
                placeholder="Email Address"
                disabled={true}
                {...register("email", { required: "Email is required" })}
              />
              <Input
                placeholder="Phone Number"
                {...register("phoneNumber", { required: "Phone is required" })}
              />

              <Button
                type="submit"
                disabled={isUpdatingAdminInfo}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isUpdatingAdminInfo ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </form>

        {/* Invite Admin */}
        <form onSubmit={handleSubmit(handleInviteSubmit)} className="space-y-6">
          {/* <Card>
            <CardHeader>
              <CardTitle>Invite Admin</CardTitle>
              <CardDescription>Invite a new admin to your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input
                type="email"
                placeholder="admin@example.com"
                {...register("inviteEmail")}
              />
              <Select
                value={watch("inviteRole")}
                onValueChange={(
                  value: "admin" | "moderator" | "editor" | "viewer"
                ) => setValue("inviteRole", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="moderator">Moderator</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Invite Now
              </Button>
            </CardContent>
          </Card> */}
        </form>
      </div>

      <div className="flex flex-col space-y-4 flex-1">
        {/* Contact Info */}
        <form
          onSubmit={handleSubmit(handleContactSubmit)}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Manage your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input
                placeholder="Business Address"
                {...register("businessAddress")}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="City" {...register("city")} />
                <Input placeholder="Zip Code" {...register("zipCode")} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  value={watch("preferredContactMethod")}
                  onValueChange={(
                    value: "admin" | "moderator" | "editor" | "viewer"
                  ) => setValue("inviteRole", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Contact Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="email"
                  placeholder="Contact Email"
                  {...register("contactEmail")}
                />
              </div>
              <Button
                type="submit"
                disabled={isUpdatingContactInfo}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isUpdatingContactInfo ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </form>

        {/* Change Password */}
        <form
          onSubmit={handleSubmit(handlePasswordSubmit)}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password securely</CardDescription>
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
                disabled={isUpdatingPass}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isUpdatingPass ? "Updating..." : "Change Password"}
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
