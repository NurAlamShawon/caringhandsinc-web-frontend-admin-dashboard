"use client";

import { CircleCheckBig } from "lucide-react";
import Container from "../shared/Container";

const SuccessFullJobSeekers = () => {
  return (
    <div className="py-16 bg-primary">
      <Container>
        <div className="text-center mb-16 px-4 sm:px-6 md:px-0 space-y-5">
          <span className="py-1.5 px-3 inline-flex items-center gap-1 text-[#008236] bg-[#DCFCE7] rounded-full text-sm">
            <CircleCheckBig size={14} />
            Trusted by DMV Job Seekers
          </span>
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-white">
            Join Thousands of Successful Job Seekers
          </h1>
          <p className="text-md sm:text-base md:text-lg text-white">
            Making a real impact in the DMV job market
          </p>
        </div>

        <div className="text-center flex flex-wrap gap-10 md:gap-20 lg:gap-32 justify-center md:justify-between lg:px-12">
          <div className="space-y-2">
            <h2 className="text-white text-[40px] font-semibold leading-relaxed">
              90%
            </h2>
            <p className="text-white text-lg font-medium">
              Faster applications
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-[40px] font-semibold leading-relaxed">
              50K+
            </h2>
            <p className="text-white text-lg font-medium">Job matched</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-[40px] font-semibold leading-relaxed">
              95%
            </h2>
            <p className="text-white text-lg font-medium">User satisfaction</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-[40px] font-semibold leading-relaxed">
              24hrs
            </h2>
            <p className="text-white text-lg font-medium">
              Average response time
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SuccessFullJobSeekers;
