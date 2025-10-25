"use client";

import Image from "next/image";
import Container from "../shared/Container";
import { Input } from "../ui/input";

const GetAlertSection = () => {
  return (
    <div className="mb-40">
      <Container>
        <div className="rounded-xl drop-shadow-xl bg-white py-16 flex items-center justify-center flex-col gap-5">
          <span className="bg-[#F7BD2C] p-4 inline-flex justify-center items-center rounded-full">
            <Image
              src="/bell-icon.svg"
              alt="bell-icon"
              width={24}
              height={24}
            />
          </span>
          <div className="text-center px-4 sm:px-6 md:px-0">
            <h1 className="section-title mb-3">Never Miss Your Dream Job</h1>
            <p className="text-md sm:text-base md:text-lg text-body">
              Get personalized job alerts delivered straight to your inbox. Our
              Al will notify
              <br />
              you about opportunities that match your skills and preferences.
            </p>
          </div>

          <div className="flex items-center gap-4 max-w-2xl w-full">
            <Input
              placeholder="Enter your email address"
              className="p-4 w-full bg-transparent border border-title rounded-md"
            />
            <button className="bg-secondary text-white px-16 py-4 rounded-md hover:bg-secondary/90 transition min-w-fit cursor-pointer">
              Get Alerts
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetAlertSection;
