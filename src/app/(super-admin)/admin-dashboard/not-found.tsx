"use client";
import Link from "next/link";

export default function AdminDashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found under Admin Dashboard</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
}
