"use client";

import AdminProfileForm from "@/components/ui/admin-profile-form";

export default function Settings() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Settings
        </h1>

        <AdminProfileForm />
      </div>
    </main>
  );
}
