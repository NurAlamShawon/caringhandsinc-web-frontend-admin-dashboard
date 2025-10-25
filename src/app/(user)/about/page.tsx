"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16  ">
            {/* Left Content */}
            <div className="flex flex-col justify-center w-full text-center lg:text-left px-2 sm:px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                About Us
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Connecting job seekers and employers in the
                <br /> DMV area with Al-powered technology.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end px-2 sm:px-4">
              <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/about-1.png"
                  alt="Professional team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24 bg-secondary text-center">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-teal-50 mb-6 sm:mb-8">
            We believe finding the right job or the right candidate
            shouldn&apos;t be complicated. DMVJobs.ai uses
            <br /> modern Al tools to simplify hiring and job searching for the
            DC, Maryland, and Virginia community.
          </p>
          <div className="bg-white h-20 w-20 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none">
              <path
                d="M9.66664 10.1654C8.33328 8.83203 2.66664 8.49875 0.833281 8.33203C0.666641 8.33203 0.499922 8.33203 0.333281 8.49867C0.166641 8.66539 0 8.99875 0 9.16539V24.1654C0 24.6654 0.333359 24.9988 0.833359 24.9988H5.83336C6.16672 24.9988 6.5 24.8321 6.66672 24.4988C6.66672 23.9988 9.66672 15.1654 10.0001 10.8321C10 10.6654 10 10.3321 9.66664 10.1654ZM27.5 14.1654C25.8334 13.6654 24.3334 12.9988 23 12.4987C20 11.1654 18.6666 11.8321 16 14.4988C14.8334 15.6654 14 17.3321 14.1666 17.9987C14.1666 18.1654 14.1666 18.1654 14.5 18.3321C15.3334 18.6655 16.5 18.8321 17.6666 16.9988C17.8333 16.8321 18 16.6654 18.3333 16.6654C18.8333 16.6654 18.9999 16.4987 19.4999 16.332C19.8333 16.1654 20.1666 15.9987 20.6666 15.832H20.9999C21.1666 15.832 21.4999 15.9987 21.6666 15.9987C22.5 16.8321 24 17.9987 25.5 19.3321C27.8334 21.1655 30.1666 23.1655 31.3334 24.6655H31.5C30.3334 21.3321 28.3334 15.6654 27.5 14.1654ZM39.1666 9.99875C32.6666 9.99875 29 11.6654 28.8333 11.6654L28.3333 12.1654C28.3333 12.332 28.3333 12.6654 28.4999 12.832C29.4999 14.4987 32.8333 23.6654 33.3333 25.9987C33.4999 26.332 33.8333 26.6653 34.1666 26.6653H39.1666C39.6666 26.6653 40 26.332 40 25.832V10.832C40 10.3321 39.6666 9.99875 39.1666 9.99875Z"
                fill="#1E3A8A"
              />
              <path
                d="M30.1669 26.332C29.5003 24.832 26.6669 22.6654 24.1669 20.6654C22.8336 19.4987 21.5003 18.4987 20.5003 17.6653C20.3336 17.832 20.0003 17.832 20.0003 17.9987C19.5003 18.1653 19.3336 18.332 18.6669 18.332C17.3336 19.9987 15.6669 20.6653 13.8336 19.9987C13.0003 19.832 12.5003 19.1653 12.3336 18.4987C12.0003 16.832 13.5003 14.4987 14.667 13.332H11.3336C10.667 16.6654 9.50027 20.9987 8.66699 23.332C9.33363 23.9987 10.0004 24.832 10.5004 25.1654C13.667 27.832 17.3337 30.4987 18.0003 30.9987C18.5003 31.3321 19.5003 31.6654 20.0003 31.6654H20.5003L17.8336 28.9987C17.5003 28.6653 17.5003 28.1653 17.8336 27.832C18.167 27.4987 18.667 27.4987 19.0003 27.832L22.3336 31.1654C22.667 31.4987 23.0003 31.332 23.3336 31.332C23.8336 31.1654 24.0003 30.832 24.167 30.332L20.3336 26.4987C20.0003 26.1653 20.0003 25.6653 20.3336 25.332C20.667 24.9987 21.167 24.9987 21.5003 25.332L25.6669 29.4987C25.8335 29.6653 26.5003 29.6653 27.0003 29.4987C27.1669 29.332 27.5003 29.1653 27.6669 28.832L23.0003 24.1653C22.6669 23.832 22.6669 23.332 23.0003 22.9987C23.3336 22.6654 23.8336 22.6653 24.1669 22.9987L29.0003 27.832C29.3336 27.9987 29.6669 27.832 30.0003 27.6654C30.1669 27.4987 30.5003 26.9987 30.1669 26.332Z"
                fill="#1E3A8A"
              />
            </svg>
          </div>
        </div>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center w-full text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2024, DMVJobs.ai was created to bridge the gap between
              talent and opportunity. Our team is passionate about building
              smarter hiring tools that make recruitment faster, fairer, and
              more effective.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end px-2 sm:px-4">
            <div className="relative w-full max-w-[650px] aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/about-2.png"
                alt="Professional team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24 bg-bg-lightest">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-12 sm:mb-16">
            How We Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center mb-4 sm:mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.875 19.125C26.7035 19.125 27.375 19.7966 27.375 20.625V24.375H31.125C31.9535 24.375 32.625 25.0465 32.625 25.875C32.625 26.7035 31.9535 27.375 31.125 27.375H27.375V31.125C27.375 31.9535 26.7035 32.625 25.875 32.625C25.0465 32.625 24.375 31.9535 24.375 31.125V27.375H20.625C19.7966 27.375 19.125 26.7035 19.125 25.875C19.125 25.0465 19.7966 24.375 20.625 24.375H24.375V20.625C24.375 19.7966 25.0465 19.125 25.875 19.125Z"
                      fill="#FF712F"
                    />
                    <path
                      d="M22.5 31.125H4.5C3.87868 31.125 3.375 30.6213 3.375 30C3.375 24.4851 7.21533 19.8671 12.3677 18.6742C9.31285 17.5911 7.125 14.6761 7.125 11.25C7.125 6.90076 10.6508 3.375 15 3.375C19.3492 3.375 22.875 6.90076 22.875 11.25C22.875 14.6761 20.6871 17.5911 17.6323 18.6742C19.4568 19.0967 21.1168 19.9485 22.5 21.1176V22.5H20.625C18.7611 22.5 17.25 24.0111 17.25 25.875C17.25 27.7389 18.7611 29.25 20.625 29.25H22.5V31.125Z"
                      fill="#FF712F"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary text-center">
                For Job Seekers
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Al job matching, resume analyzer, career growth tools.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center mb-4 sm:mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  {/* SVG unchanged */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="25"
                    viewBox="0 0 34 25"
                    fill="none">
                    <path
                      d="M5.625 13.5C3.14325 13.5 1.125 11.4818 1.125 9C1.125 6.51825 3.14325 4.5 5.625 4.5C8.10675 4.5 10.125 6.51825 10.125 9C10.125 11.4818 8.10675 13.5 5.625 13.5ZM7.61625 14.2537C6.33375 14.7487 4.91625 14.7487 3.63375 14.2537C3.3075 14.13 2.93625 14.175 2.64375 14.355C1.83437 14.8602 1.16696 15.5633 0.704426 16.3978C0.241893 17.2323 -0.000530816 18.1709 8.72697e-07 19.125V23.625C8.72697e-07 24.2437 0.506251 24.75 1.125 24.75H6.75V19.125C6.75 17.3813 7.21125 15.6825 8.04375 14.1975C7.8975 14.175 7.75125 14.1975 7.61625 14.2537ZM28.125 13.5C30.6068 13.5 32.625 11.4818 32.625 9C32.625 6.51825 30.6068 4.5 28.125 4.5C25.6432 4.5 23.625 6.51825 23.625 9C23.625 11.4818 25.6432 13.5 28.125 13.5ZM31.1062 14.355C30.8137 14.175 30.4425 14.13 30.1163 14.2537C28.8337 14.7487 27.4163 14.7487 26.1337 14.2537C25.9992 14.1958 25.8512 14.1763 25.7063 14.1975C26.5515 15.7025 26.9969 17.3989 27 19.125V24.75H32.625C33.2438 24.75 33.75 24.2437 33.75 23.625V19.125C33.75 17.1787 32.76 15.4012 31.1062 14.355ZM16.875 11.25C13.7734 11.25 11.25 8.72663 11.25 5.625C11.25 2.52338 13.7734 0 16.875 0C19.9766 0 22.5 2.52338 22.5 5.625C22.5 8.72663 19.9766 11.25 16.875 11.25ZM24.75 19.125C24.7497 17.8878 24.4571 16.6682 23.896 15.5656C23.3349 14.4629 22.5212 13.5085 21.5212 12.78C21.1837 12.5325 20.7338 12.4988 20.3625 12.6788C19.6088 13.0613 18.81 13.2975 18 13.41V19.125C18 19.7437 17.4938 20.25 16.875 20.25C16.2563 20.25 15.75 19.7437 15.75 19.125V13.41C14.94 13.2975 14.1413 13.0613 13.3875 12.6788C13.0163 12.4988 12.5663 12.5325 12.2288 12.78C11.2288 13.5085 10.4151 14.4629 9.854 15.5656C9.29291 16.6682 9.00029 17.8878 9 19.125V24.75H24.75V19.125Z"
                      fill="#5600AD"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary text-center">
                For Employers
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Faster hiring, better candidates, simple posting process.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center mb-4 sm:mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8F8F3] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none">
                    <g clip-path="url(#clip0_30119_106951)">
                      <path
                        d="M18 0C14.421 0.00476243 10.99 1.42861 8.45932 3.95932C5.92861 6.49003 4.50476 9.92104 4.5 13.5C4.5 23.1919 17.0775 35.3306 17.6119 35.8425C17.7158 35.9435 17.8551 36 18 36C18.1449 36 18.2842 35.9435 18.3881 35.8425C18.9225 35.3306 31.5 23.1919 31.5 13.5C31.4952 9.92104 30.0714 6.49003 27.5407 3.95932C25.01 1.42861 21.579 0.00476243 18 0ZM18 19.6875C16.7762 19.6875 15.5799 19.3246 14.5624 18.6447C13.5449 17.9648 12.7518 16.9985 12.2835 15.8679C11.8152 14.7372 11.6926 13.4931 11.9314 12.2929C12.1701 11.0926 12.7594 9.99011 13.6248 9.12478C14.4901 8.25944 15.5926 7.67014 16.7929 7.43139C17.9931 7.19265 19.2372 7.31518 20.3679 7.7835C21.4985 8.25181 22.4648 9.04488 23.1447 10.0624C23.8246 11.0799 24.1875 12.2762 24.1875 13.5C24.1865 15.1407 23.5342 16.7139 22.3741 17.8741C21.2139 19.0342 19.6407 19.6865 18 19.6875Z"
                        fill="#10B981"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30119_106951">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary text-center">
                For DMV Community
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Focused only on DC, Maryland, and Virginia.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Meet the team */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-10 sm:mb-16">
            Meet The Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center ">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/p-1.jpg"
                    alt="team-1"
                    width={91}
                    height={91}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-title text-center">
                Alex Thompson
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                CEO & Founder
                <br />
                Building the future of work
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/p-2.jpg"
                    alt="team-2"
                    width={91}
                    height={91}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-title text-center">
                Emily Rodriguez
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Head of Product
                <br />
                User Experience Advocate
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/p-3.jpg"
                    alt="team-3"
                    width={91}
                    height={91}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-title text-center">
                Michael Chen
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                CTO
                <br />
                Al & Technology Expert
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* What people say */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center text-primary mb-10 sm:mb-16">
            What People Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <p className="text-caption text-sm sm:text-base leading-relaxed">
                &quot;DMVJobs.ai helped me land a job in less than 2 weeks! The
                Al matching was incredibly accurate.&quot;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/p-1.jpg"
                    alt="team-1"
                    width={91}
                    height={91}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-title ">
                    Alex Thompson
                  </h3>
                  <p className="text-body font-medium text-sm sm:text-base leading-relaxed">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <p className="text-caption text-sm sm:text-base leading-relaxed">
                &quot;DMVJobs.ai helped me land a job in less than 2 weeks! The
                Al matching was incredibly accurate.&quot;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/p-1.jpg"
                    alt="team-1"
                    width={91}
                    height={91}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-title ">
                    Alex Thompson
                  </h3>
                  <p className="text-body font-medium text-sm sm:text-base leading-relaxed">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <p className="text-caption text-sm sm:text-base leading-relaxed">
                &quot;DMVJobs.ai helped me land a job in less than 2 weeks! The
                Al matching was incredibly accurate.&quot;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/p-1.jpg"
                    alt="team-1"
                    width={91}
                    height={91}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-title ">
                    Alex Thompson
                  </h3>
                  <p className="text-body font-medium text-sm sm:text-base leading-relaxed">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section 2*/}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24 bg-secondary text-center">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Join the Future of Hiring in the DMV?
          </h2>

          <div className="flex items-center justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-slate-100 px-8 py-5 sm:py-6 text-base font-semibold">
              Find Job
            </Button>
            <Button className="border-white border text-white hover:text-primary hover:bg-slate-100 px-8 py-5 sm:py-6 text-base font-semibold">
              Post a Job
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
