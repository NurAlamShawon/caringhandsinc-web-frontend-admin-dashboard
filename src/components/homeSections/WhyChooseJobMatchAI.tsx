"use client";

import Image from "next/image";
import Container from "../shared/Container";

const WhyChooseJobMatchAI = () => {
  return (
    <div className="bg-[#F0F4FF] py-16 mb-40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="w-full">
            <div className="text-left mb-16 px-4 sm:px-6 md:px-0">
              <h1 className="section-title mb-4">Why Choose Job Match AI?</h1>
              <p className="text-base sm:text-base md:text-lg text-body">
                Experience the future of job applications with intelligent
                matching and instant results
              </p>
            </div>

            <ul className="space-y-8">
              <li className="flex gap-4">
                <span className="p-4 w-fit h-fit bg-[#F7BD2C] rounded-xl">
                  <Image
                    src="/whyChooseJobSectionIcon/icon-3.svg"
                    alt="icon-1"
                    width={35}
                    height={35}
                  />
                </span>
                <div className="text-left space-y-2">
                  <h2 className="text-primary text-2xl font-semibold">
                    Save Time
                  </h2>
                  <p className="text-secondary text-base">
                    No forms, no wasted effort.
                  </p>
                  <p className="text-body text-base">
                    Skip repetitive application forms and focus on what matters
                    - landing your dream job.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="p-4 w-fit h-fit bg-primary rounded-xl">
                  <Image
                    src="/whyChooseJobSectionIcon/icon-4.svg"
                    alt="icon-1"
                    width={35}
                    height={35}
                  />
                </span>
                <div className="text-left space-y-2">
                  <h2 className="text-primary text-2xl font-semibold">
                    Smarter Matches
                  </h2>
                  <p className="text-secondary text-base">
                    AI aligns skills with real DMV jobs.
                  </p>
                  <p className="text-body text-base">
                    Our advanced technology understands your skills,
                    preferences, and career goals to deliver perfectly matched
                    opportunities.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="p-4 w-fit h-fit bg-secondary rounded-xl">
                  <Image
                    src="/whyChooseJobSectionIcon/icon-2.svg"
                    alt="icon-1"
                    width={35}
                    height={35}
                  />
                </span>
                <div className="text-left space-y-2">
                  <h2 className="text-primary text-2xl font-semibold">
                    Better Resume
                  </h2>
                  <p className="text-secondary text-base">
                    Get feedback to improve chances.
                  </p>
                  <p className="text-body text-base">
                    Receive personalized suggestions to optimize your resume for
                    better application success.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="p-4 w-fit h-fit bg-primary rounded-xl">
                  <Image
                    src="/whyChooseJobSectionIcon/icon-1.svg"
                    alt="icon-1"
                    width={35}
                    height={35}
                  />
                </span>
                <div className="text-left space-y-2">
                  <h2 className="text-primary text-2xl font-semibold">
                    For Employers Too
                  </h2>
                  <p className="text-secondary text-base">
                    Recruiters see structured profiles + insights.
                  </p>
                  <p className="text-body text-base">
                    Help employers find the right candidates with AI-enhanced
                    profile insights and matching.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* image */}
          <div className="w-full">
            <Image
              src="/whyChooseJobSectionIcon/jobChoose.png"
              alt="whyChooseJobMatchAIImage"
              width={800}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseJobMatchAI;
