"use client"

import { useState } from "react"
import AdminProfileForm from "@/components/ui/admin-profile-form"

export default function Settings() {
  const [successMessage, setSuccessMessage] = useState("")

  const handleUpdateSuccess = () => {
    setSuccessMessage("Profile updated successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Settings</h1>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">{successMessage}</div>
        )}

        <AdminProfileForm onUpdateSuccess={handleUpdateSuccess} />
      </div>
    </main>
  )
}
