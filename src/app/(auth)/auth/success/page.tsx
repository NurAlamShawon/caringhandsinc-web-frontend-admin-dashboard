import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SuccessResetPassword() {
  return (
    <div className="flex space-x-6 items-center justify-center min-h-screen ">
      {/* Content */}
      <div className="text-center max-w-md p-4">
        {/* Logo */}
        <div className="flex justify-center">
          <Check className="h-20 w-20 rounded-full bg-secondary p-2" />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h1 className="text-h4 font-bold">Password Reset Successful </h1>
          <p> Your password has been updated</p>
        </div>
        {/* sign Up Form  */}
        <div className="mt-10">
          <Link href="/auth/signin">
            <Button className="my-4 w-full text-md font-semibold py-6">
              Continue
            </Button>
          </Link>
        </div>
      </div>
      {/* RIght side Image */}
      <div className="hidden md:block">
        <Image
          src="/auth/create-account.png"
          height={600}
          width={400}
          alt=" Register Image "
          className="mx-auto "
        />
      </div>
    </div>
  );
}
