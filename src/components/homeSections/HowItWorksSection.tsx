"use client";

import Image from "next/image";
import Container from "../shared/Container";

const HowItWorksSection = () => {
  return (
    <div className="my-40">
      <Container>
        <div className="text-center mb-16 px-4 sm:px-6 md:px-0">
          <h1 className="section-title mb-4">How It Works</h1>
          <p className="text-md sm:text-base md:text-lg text-body">
            Get matched with your perfect job in just three simple steps
          </p>
        </div>

        <ul className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-36 text-center">
          <li className="flex flex-col items-center space-y-2 max-w-xs">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary">
              <Image src="/h-3.png" alt="h-1" width={25} height={25} />
            </div>
            <span className="text-xl sm:text-2xl font-bold">Upload Resume</span>
            <span className="text-sm sm:text-base text-secondary">
              No repetitive forms
            </span>
            <span className="text-sm sm:text-base text-caption">
              Simply upload your resume once and we&apos;ll handle the rest.
            </span>
          </li>
          <li className="flex flex-col items-center space-y-2 max-w-xs">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary">
              <Image src="/h-2.png" alt="h-1" width={25} height={25} />
            </div>
            <span className="text-xl sm:text-2xl font-bold">AI Matching</span>
            <span className="text-sm sm:text-base text-secondary">
              Get jobs tailored to your skills.
            </span>
            <span className="text-sm sm:text-base text-caption">
              Our AI analyzes your resume and matches you with perfect DMV
              opportunities.
            </span>
          </li>
          <li className="flex flex-col items-center space-y-2 max-w-xs">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold">
              <Image src="/h-1.png" alt="h-1" width={25} height={25} />
            </div>
            <span className="text-xl sm:text-2xl font-bold">
              One-Click Apply
            </span>
            <span className="text-sm sm:text-base text-secondary">
              Apply instantly with your resume.
            </span>
            <span className="text-sm sm:text-base text-caption">
              Apply to multiple jobs with a single click using your optimized
              profile.
            </span>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default HowItWorksSection;
