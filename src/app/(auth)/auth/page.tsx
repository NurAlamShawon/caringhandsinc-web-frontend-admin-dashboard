"use client";

import { setUserRole } from "@/redux/features/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { role } = useSelector((state: RootState) => state.auth);

  const togglerole = (id: string) => {
    dispatch(setUserRole(id));
    if (id === "JOB_SEEKER") {
      router.push("/auth/register");
    } else {
      router.push("/auth/employePosition");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-lg max-w-md w-full text-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/auth/logo.png"
            height={100}
            width={100}
            alt="Logo Auth"
            className="mx-auto"
          />
          <h2 className="font-bold text-xl">DMVJOBS.ai</h2>
          <p className="text-[7px]">
            Empowering Careers — Strengthening the DMV
          </p>
        </Link>

        {/* Content */}
        <div className="mt-8">
          <h1 className="text-h2 font-bold">Continue as</h1>
          <p>
            There are various categories that assist you in finding a job based
            on your interest.
          </p>
        </div>

        {/* Buttons container */}
        <div className="mt-10 space-y-4 w-full">
          {/* Job Seeker */}
          <button
            onClick={() => togglerole("JOB_SEEKER")}
            className={`w-full flex cursor-pointer items-center space-x-6 rounded-lg px-6 py-4 transition-all duration-200 border justify-start ${
              role === "JOB_SEEKER"
                ? "bg-primary text-white"
                : "border-neutral-400 hover:border-primary text-primary"
            }`}
          >
            <Image
              src={"/auth/job-seekers.png"}
              height={80}
              width={80}
              alt="Job Seekers"
              className="h-12 w-12"
            />
            <div className="text-left text-lg flex-1">
              <h2
                className={`uppercase font-semibold ${
                  role === "JOB_SEEKER" ? "text-white" : "text-primary"
                }`}
              >
                Job Seekers
              </h2>
              <p
                className={`text-sm ${
                  role === "JOB_SEEKER" ? "text-white" : "text-primary"
                }`}
              >
                Finding a job here never been easier than before
              </p>
            </div>
          </button>

          {/* EMPLOYEE */}
          <button
            onClick={() => togglerole("EMPLOYEE")}
            className={`w-full flex cursor-pointer items-center space-x-6 rounded-lg px-6 py-4 transition-all duration-200 border justify-start ${
              role === "EMPLOYEE"
                ? "bg-primary text-white"
                : "border-neutral-400 hover:border-primary text-primary"
            }`}
          >
            <Image
              src={"/auth/job-seekers.png"}
              height={80}
              width={80}
              alt="EMPLOYEE"
              className="h-12 w-12"
            />
            <div className="text-left text-lg flex-1">
              <h2
                className={`uppercase font-semibold ${
                  role === "EMPLOYEE" ? "text-white" : "text-primary"
                }`}
              >
                EMPLOYEE
              </h2>
              <p
                className={`text-sm ${
                  role === "EMPLOYEE" ? "text-white" : "text-primary"
                }`}
              >
                Post a job here never been easier than before
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
