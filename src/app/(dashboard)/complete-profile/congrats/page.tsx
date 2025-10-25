"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Congrats() {
  const router = useRouter();

  // handleGoToDashboard
  const handleGoToDashboard = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="text-center max-w-2xl">
        <Image
          src="/dashboard/congrats.png"
          height={200}
          width={200}
          alt="Congrats"
          className="mx-auto py-10"
        />
        <h1 className="text-h1 font-bold">
          Your Company Profile is Almost Ready!
        </h1>
        <p className="py-4">
          You’ve successfully set up your company profile. Now, you can start
          posting jobs and connecting with top talent!
        </p>

        <Button onClick={handleGoToDashboard} className="py-6 !px-8 ">
          Go to Dashboard <MoveRight className="h-4 w-4" />{" "}
        </Button>
      </div>
    </div>
  );
}
