"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function ForEmployee() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center w-full text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Find Qualified Candidates
              <br /> Powered by AI
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Hire a job description or upload a PDF and our AI will surface the
              best fit candidates from our network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-base font-medium rounded-lg">
                Upload Job
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end px-2 sm:px-4">
            <div className="relative w-full max-w-[600px] aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/for-employee-hero.png"
                alt="Professional team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Why Post Section */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10 sm:mb-16">
            Why Post on DMVJobs.ai
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center mb-4 sm:mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  {/* SVG unchanged */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none">
                    <path
                      d="M29.9995 16.8012V13.2012C29.9995 11.2208 28.3802 9.6012 26.3995 9.6012H25.1996V7.20108H22.7995V9.6012H18.8996V6.9516C19.4349 6.63984 19.7996 6.06564 19.7996 5.40108C19.7902 4.92992 19.5964 4.48124 19.2599 4.15137C18.9233 3.82149 18.4709 3.63672 17.9996 3.63672C17.5284 3.63672 17.0759 3.82149 16.7394 4.15137C16.4028 4.48124 16.209 4.92992 16.1996 5.40108C16.1996 6.06564 16.5643 6.63984 17.0996 6.9516V9.6012H13.1997V7.20108H10.7996V9.6012H9.59973C7.61973 9.6012 5.99973 11.2208 5.99973 13.2012V16.8012C5.68453 16.8011 5.3724 16.8632 5.08119 16.9838C4.78997 17.1044 4.52536 17.2812 4.30248 17.5041C4.0796 17.727 3.90281 17.9916 3.78221 18.2828C3.66161 18.574 3.59956 18.8861 3.59961 19.2013V24.0016C3.59956 24.3167 3.66161 24.6288 3.78222 24.92C3.90282 25.2112 4.07962 25.4758 4.3025 25.6987C4.52539 25.9215 4.79 26.0983 5.08121 26.2188C5.37243 26.3394 5.68454 26.4014 5.99973 26.4013V28.8011C5.99973 30.7818 7.61973 32.4011 9.59973 32.4011H26.3995C28.3802 32.4011 29.9995 30.7818 29.9995 28.8011V26.4013C30.636 26.4013 31.2464 26.1485 31.6965 25.6985C32.1466 25.2484 32.3995 24.638 32.3996 24.0016V19.2013C32.3997 18.8861 32.3377 18.574 32.2171 18.2827C32.0965 17.9915 31.9197 17.7269 31.6968 17.504C31.4739 17.2811 31.2093 17.1043 30.9181 16.9837C30.6268 16.8631 30.3147 16.8011 29.9995 16.8012ZM10.7996 18.9011C10.7996 17.7408 11.7385 16.8012 12.8995 16.8012C14.0605 16.8012 14.9997 17.7408 14.9997 18.9011C14.9997 20.0614 14.0605 21.0013 12.8995 21.0013C11.7385 21.0013 10.7996 20.0614 10.7996 18.9011ZM21.5996 27.6016H14.3996C14.0813 27.6016 13.776 27.4751 13.5509 27.25C13.3258 27.0249 13.1994 26.7196 13.1994 26.4013C13.1994 26.083 13.3258 25.7777 13.5509 25.5526C13.776 25.3275 14.0813 25.2011 14.3996 25.2011H21.5996C21.9179 25.2011 22.2232 25.3275 22.4483 25.5526C22.6734 25.7777 22.7998 26.083 22.7998 26.4013C22.7998 26.7196 22.6734 27.0249 22.4483 27.25C22.2232 27.4751 21.9179 27.6016 21.5996 27.6016ZM23.0997 21.0013C21.9394 21.0013 20.9995 20.0614 20.9995 18.9011C20.9995 17.7408 21.9394 16.8012 23.0997 16.8012C24.26 16.8012 25.1996 17.7408 25.1996 18.9011C25.1996 20.0614 24.26 21.0013 23.0997 21.0013Z"
                      fill="#5600AD"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary text-center">
                AI Candidate Matching
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Save time with AI-powered recommendations that find the perfect
                candidates for your role.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center mb-4 sm:mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none">
                    <g clip-path="url(#clip0_30119_106695)">
                      <path
                        d="M18 0C14.421 0.00476243 10.99 1.42861 8.45932 3.95932C5.92861 6.49003 4.50476 9.92104 4.5 13.5C4.5 23.1919 17.0775 35.3306 17.6119 35.8425C17.7158 35.9435 17.8551 36 18 36C18.1449 36 18.2842 35.9435 18.3881 35.8425C18.9225 35.3306 31.5 23.1919 31.5 13.5C31.4952 9.92104 30.0714 6.49003 27.5407 3.95932C25.01 1.42861 21.579 0.00476243 18 0ZM18 19.6875C16.7762 19.6875 15.5799 19.3246 14.5624 18.6447C13.5449 17.9648 12.7518 16.9985 12.2835 15.8679C11.8152 14.7372 11.6926 13.4931 11.9314 12.2929C12.1701 11.0926 12.7594 9.99011 13.6248 9.12478C14.4901 8.25944 15.5926 7.67014 16.7929 7.43139C17.9931 7.19265 19.2372 7.31518 20.3679 7.7835C21.4985 8.25181 22.4648 9.04488 23.1447 10.0624C23.8246 11.0799 24.1875 12.2762 24.1875 13.5C24.1865 15.1407 23.5342 16.7139 22.3741 17.8741C21.2139 19.0342 19.6407 19.6865 18 19.6875Z"
                        fill="#006FFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30119_106695">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary text-center">
                Local DMV Reach
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Connect with job seekers across the DC, Maryland, and Virginia
                area to find local talent.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 border-0 shadow-none">
              <div className="flex justify-center mb-4 sm:mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none">
                    <g clip-path="url(#clip0_30119_106703)">
                      <path
                        d="M30.728 5.2721C27.3282 1.87235 22.808 0 18 0C13.192 0 8.67178 1.87235 5.27203 5.2721C1.87228 8.67185 0 13.192 0 18C0 22.808 1.87228 27.3282 5.27203 30.7279C8.67178 34.1276 13.192 36 18 36C22.808 36 27.3282 34.1277 30.728 30.7279C34.1277 27.3281 36 22.808 36 18C36 13.192 34.1277 8.67178 30.728 5.2721ZM18 32.4669C10.0228 32.4669 3.53306 25.9771 3.53306 18C3.53306 17.9869 3.53348 17.974 3.53355 17.961C3.53355 17.9577 3.53306 17.9546 3.53306 17.9513C3.53306 17.9457 3.53377 17.9404 3.53391 17.9349C3.56899 10.0534 9.93839 3.64106 17.8034 3.53559C17.8199 3.53482 17.8362 3.53313 17.8528 3.53313C17.8628 3.53313 17.8725 3.53433 17.8824 3.53461C17.9217 3.53433 17.9608 3.53313 18.0001 3.53313C25.9772 3.53313 32.467 10.023 32.467 18.0001C32.467 25.9772 25.9772 32.4669 18 32.4669Z"
                        fill="#FF712F"
                      />
                      <path
                        d="M28.9887 18.8709C28.4005 18.8709 27.9236 18.3941 27.9236 17.8058C27.9236 17.2176 28.4005 16.7407 28.9887 16.7407H30.2725C29.6695 10.8291 24.8752 6.13952 18.9176 5.69922V6.81684C18.9176 7.40507 18.4408 7.88193 17.8525 7.88193C17.2643 7.88193 16.7875 7.40507 16.7875 6.81684V5.72467C10.918 6.29983 6.24276 11.0053 5.7138 16.8879H6.86355C7.45178 16.8879 7.92864 17.3648 7.92864 17.953C7.92864 18.5412 7.45178 19.0181 6.86355 19.0181H5.70508C6.1948 24.9954 10.9638 29.7791 16.9347 30.2921V28.9419C16.9347 28.3537 17.4115 27.8768 17.9998 27.8768C18.588 27.8768 19.0649 28.3537 19.0649 28.9419V30.2921C25.0846 29.7749 29.8827 24.9167 30.3055 18.8709H28.9887ZM22.3113 15.1965L18.753 18.755C18.6541 18.8539 18.5367 18.9324 18.4074 18.9859C18.2782 19.0394 18.1397 19.067 17.9999 19.067C17.86 19.067 17.7215 19.0394 17.5923 18.9859C17.463 18.9324 17.3456 18.8539 17.2467 18.755L11.0527 12.5609C10.6367 12.145 10.6367 11.4707 11.0527 11.0547C11.4686 10.6387 12.143 10.6387 12.5589 11.0547L17.9999 16.4956L20.8053 13.6903C21.2211 13.2743 21.8955 13.2743 22.3115 13.6903C22.7273 14.1062 22.7273 14.7806 22.3113 15.1965Z"
                        fill="#FF712F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30119_106703">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary text-center">
                Faster Hiring
              </h3>
              <p className="text-caption text-center text-sm sm:text-base leading-relaxed">
                Get quality candidates within days, not weeks, and streamline
                your hiring process.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Post a Job Form Section */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          <div className="relative">
            <div className="bg-[#10B9811A] h-40 sm:h-52 w-40 sm:w-52 absolute -right-4 sm:-right-8 -top-4 sm:-top-8 rounded-xl" />
            <div className="bg-[#1E3A8A1A] h-40 sm:h-52 w-40 sm:w-52 absolute -left-4 sm:-left-8 -bottom-4 sm:-bottom-8 rounded-xl" />
            <Card
              className="p-6 sm:p-8 md:p-12 border-0 shadow-none bg-white relative"
              style={{ boxShadow: "0 4px 40px 0 rgba(0, 0, 0, 0.07)" }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-2">
                Post a New Job Opening
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8">
                Create job listings that attract top talent. Fill in the details
                below to post your next great opportunity today.
              </p>

              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-md font-semibold mb-2">
                      Job Title
                    </Label>
                    <Input
                      type="text"
                      placeholder="e.g., Senior Product Manager"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label className="text-md font-semibold mb-2">
                      Salary Range
                    </Label>
                    <Select>
                      <SelectTrigger
                        size="lg"
                        className={cn(
                          "h-14 sm:h-16 file:text-caption placeholder:text-muted-foreground w-full rounded-lg border border-bg-light bg-[#FCFCFD] px-4 text-base"
                        )}>
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-md font-semibold mb-2">
                      Application Deadline
                    </Label>
                    <Input type="date" className="w-full" />
                  </div>
                  <div>
                    <Label className="text-md font-semibold mb-2">
                      Location
                    </Label>
                    <Input
                      type="text"
                      placeholder="e.g., Washington, DC"
                      className="w-full"
                    />
                    <p className="text-xs text-teal-600 mt-1 text-center md:text-left">
                      Or use current location
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label className="text-md font-semibold mb-2">
                    Description
                  </Label>
                  <textarea
                    placeholder="We are looking for a talented UX Designer..."
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end pt-4">
                  <Button
                    variant="outline"
                    className="px-8 py-5 sm:py-6 border-slate-300 text-slate-900 bg-transparent rounded-md">
                    Save as Draft
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-5 sm:py-6 rounded-md">
                    Post Job
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24 bg-bg-lightest">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 sm:mb-16">
            Simple Hiring in 3 Steps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {n}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  {n === 1
                    ? "Post a Job"
                    : n === 2
                    ? "AI Matches Candidates"
                    : "Hire Smarter"}
                </h3>
                <p className="text-caption text-sm sm:text-base leading-relaxed">
                  {n === 1
                    ? "Create your job posting in just a few minutes."
                    : n === 2
                    ? "Our system ranks applicants by skills and experience."
                    : "Connect, interview, and hire the right person."}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Feature Image */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24">
        <Container>
          <div className="flex items-center justify-center">
            <Image
              src="/for-employee-ai.png"
              alt="AI Resume Review"
              width={1024}
              height={400}
              className="object-cover w-full max-w-[95%] sm:max-w-[90%]"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24 bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Find Your Next Great Hire?
          </h2>
          <p className="text-base sm:text-lg text-teal-50 mb-6 sm:mb-8">
            Join hundreds of employers finding top talent today.
          </p>
          <Button className="bg-white text-primary hover:bg-slate-100 px-8 py-5 sm:py-6 text-base font-semibold">
            Post a Job Today
          </Button>
        </div>
      </section>
    </section>
  );
}
