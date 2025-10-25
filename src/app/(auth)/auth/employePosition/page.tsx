"use client";

import { setemployeType } from "@/redux/features/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  // Routing
  const router = useRouter();

  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { employeType } = useSelector((state: RootState) => state.auth);

  const toggleUserType = (id: string) => {
    dispatch(setemployeType(id));
    router.push("/auth/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-lg max-w-md text-center w-full">
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
          <h1 className="text-h2 font-bold">Choose your position</h1>
          <p>
            There are various categories that assist you in finding a job based
            on your interest.
          </p>
        </div>

        {/* Select User Type */}
        <div className="mt-10 space-y-4 w-full">
          <button
            onClick={() => toggleUserType("individual")}
            className={`flex w-full cursor-pointer items-center space-x-6 rounded-lg px-6 py-4 transition-all duration-200 border ${
              employeType === "individual"
                ? "bg-primary"
                : "border-neutral-400 hover:border-primary"
            }`}
          >
            <Image
              src={"/auth/individual.png"}
              height={80}
              width={80}
              alt={"Job Seekers"}
              className="h-12 w-12"
            />
            <div className="text-left text-lg">
              <h2
                className={`uppercase font-semibold ${
                  employeType === "individual" ? "text-white" : "text-primary"
                }`}
              >
                Individual
              </h2>
              <p
                className={`text-sm ${
                  employeType === "individual" ? "text-white" : "text-primary"
                }`}
              >
                Finding a job here never been easier than before
              </p>
            </div>
          </button>
        </div>

        {/* Employer */}
        <div className="mt-10 space-y-4 w-full">
          <button
            onClick={() => toggleUserType("enterprice")}
            className={`flex w-full cursor-pointer items-center space-x-6 rounded-lg px-6 py-4 transition-all duration-200 border ${
              employeType === "enterprice"
                ? "bg-primary"
                : "border-neutral-400 hover:border-primary"
            }`}
          >
            <Image
              src={"/auth/enterprice.png"}
              height={80}
              width={80}
              alt={"Job Seekers"}
              className="h-12 w-12"
            />
            <div className="text-left text-lg">
              <h2
                className={`uppercase font-semibold ${
                  employeType === "enterprice" ? "text-white" : "text-primary"
                }`}
              >
                Enterprise
              </h2>
              <p
                className={`text-sm ${
                  employeType === "enterprice" ? "text-white" : "text-primary"
                }`}
              >
                Let’s recruit your great candidate faster here
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
