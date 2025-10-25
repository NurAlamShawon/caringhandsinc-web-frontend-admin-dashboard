import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CompleteProfile() {
  return (
    <div className="flex justify-center items-center w-full h-screen px-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-6 md:space-y-0 w-full max-w-5xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/dashboard/create-empolye-account.png"
            height={400}
            width={500}
            alt="Complete Profile"
          />
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-h1 font-bold font-poppins leading-tight">
            Create Your Employee Account
          </h1>
          <p className="py-4 text-subtie">
            Follow these simple steps to set up your company profile and find
            the perfect candidate for your team.
          </p>
          <Button className="px-10">
            <Link href="/complete-profile/about">Start Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
