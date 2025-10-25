import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ConfirmToast from "@/components/toast-error-loading/ConfirmToast";
// import { useState } from "react";
export default function Congrats() {
  // const [showConfirm, setShowConfirm] = useState<boolean>(false);
  // const handleDelete = (): void => {
  //   alert("User deleted!"); // Replace with API call
  //   setShowConfirm(false);
  // };
  return (
    <div className="mt-[150px]">
      <Image
        src="https://i.postimg.cc/yYsN5gKs/confetti-1813023-1.png"
        width={250}
        height={250}
        alt="congrats picture"
        className="mx-auto mb-11"
      />
      <div className="w-[785px] mx-auto space-y-4 mb-14">
        <h1 className="leading-[1.4] font-semibold text-[56px] text-center text-[#1E3A8A] ">
          Your Company Profile is <br></br>
          Almost Ready!
        </h1>
        <p className="text-2xl font-medium text-[#777777] text-center">
          You’ve successfully set up your company profile. Now, you can start
          posting jobs<br></br> and connecting with top talent!
        </p>
      </div>

      <Link href={"/"}>
        <button className="px-6 py-6 btn text-[#FCFCFC] bg-[#10B981] text-lg flex gap-2 items-center mx-auto rounded-lg">
          Back to home page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </Link>

      {/* <div className="p-10">
        <button
          onClick={() => setShowConfirm(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete User Account
        </button>

        {showConfirm && (
          <ConfirmToast
            message="Delete User Account?"
            onConfirm={handleDelete}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div> */}
    </div>
  );
}
