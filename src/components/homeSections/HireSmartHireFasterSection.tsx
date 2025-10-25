"use client";

import { Check } from "lucide-react";
import Container from "../shared/Container";
import Image from "next/image";

const HireSmartHireFasterSection = () => {
  return (
    <div className="bg-[#F7BD2C12] py-16 mb-40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          <div className="">
            <div className="text-left mb-4 px-4 sm:px-6 md:px-0">
              <h1 className="section-title mb-4">Hire Smarter. Hire Faster.</h1>
              <p className="text-md sm:text-base md:text-lg text-body">
                Post your job today and let Al recommend the best DMV talent.
                Our intelligent matching system connects you with qualified
                candidates who are the perfect fit for your company culture and
                requirements.
              </p>
            </div>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="inline-flex items-center gap-4 text-caption text-md">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary">
                  <Check size={15} className="text-white" />
                </span>
                We use AI to match you with best-fit jobs in the DMV
              </li>
              <li className="inline-flex items-center gap-4 text-caption text-md">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary">
                  <Check size={15} className="text-white" />
                </span>
                Get notified about roles you&apos;d never find manually
              </li>
              <li className="inline-flex items-center gap-4 text-caption text-md">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary">
                  <Check size={15} className="text-white" />
                </span>
                Our system scans skills, experience, and preferences
              </li>
            </ul>

            <button className="bg-gold rounded-lg px-12 py-2.5 text-title text-base font-semibold cursor-pointer hover:bg-gold/90 transition">
              Post a Job
            </button>
          </div>

          <div className="">
            <Image
              src="/desk-man.png"
              alt="desk-man"
              width={600}
              height={700}
              className="rounded-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HireSmartHireFasterSection;
