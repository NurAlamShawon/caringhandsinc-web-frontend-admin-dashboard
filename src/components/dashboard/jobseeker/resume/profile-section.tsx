"use client";

import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ProfileSection() {
  const { control, watch } = useFormContext();
  const [isEditing, setIsEditing] = useState(false);
  const profile = watch("profile");

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-6 flex-1">
          <Avatar className="w-24 h-24 flex-shrink-0">
            <AvatarImage
              src={profile.avatar || "/placeholder.svg"}
              alt={profile.name}
            />
            <AvatarFallback className="bg-gradient-to-b from-blue-300 to-cyan-300 text-white text-xl font-bold">
              {profile.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <Controller
                  name="profile.name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Full Name"
                      className="text-2xl font-bold"
                    />
                  )}
                />
                <Controller
                  name="profile.title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Job Title"
                      className="text-sm"
                    />
                  )}
                />
              </div>
            ) : (
              <>
                <h2 className="text-h3 font-bold text-gray-900">
                  {profile.name}
                </h2>
                <p className="text-gray-600 mb-4">{profile.title}</p>
              </>
            )}

            <div className="  mt-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Phone
                    </label>
                    <Controller
                      name="profile.phone"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="+1 (555) 555-5555"
                          className="text-sm"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Email
                    </label>
                    <Controller
                      name="profile.email"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="email@example.com"
                          className="text-sm"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Location
                    </label>
                    <Controller
                      name="profile.location"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="City, Country"
                          className="text-sm"
                        />
                      )}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex     space-x-4 ">
                    <div className=" gap-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Phone:</span>
                      </div>
                      <span className="text-gray-900 font-medium">
                        {profile.phone}
                      </span>
                    </div>
                    <Separator orientation="vertical" />
                    <div className=" gap-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Email: </span>
                      </div>
                      <span className="text-gray-900 font-medium">
                        {profile.email}
                      </span>
                    </div>
                    <Separator orientation="vertical" />
                    <div className=" gap-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Location:</span>
                      </div>
                      <span className="text-gray-900 font-medium">
                        {profile.location}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          size="sm"
          className="flex-shrink-0 mx-2"
        >
          {isEditing ? "Done" : "Edit"}
        </Button>
      </div>
    </div>
  );
}
