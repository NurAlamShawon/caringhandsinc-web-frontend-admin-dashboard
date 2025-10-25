import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-primary py-14">
      <Container>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
            <div className="flex flex-col items-center text-white">
              <Image src="/logo-icon.png" alt="logo" width={65} height={65} />
              <span className="font-semibold text-base">DMVJOBS.ai</span>
              <span className="text-[5px]">
                Empowering Careers — Strengthening the DMV
              </span>
            </div>
            <p className="max-w-[330px] w-full text-bg-light">
              Al-powered job matching platform connecting talent with
              opportunities in DC, Maryland, and Virginia.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Link
                href="#"
                className="text-bg-light hover:text-white transition">
                <FaLinkedin size={24} />
              </Link>

              <Link
                href="#"
                className="text-bg-light hover:text-white transition">
                <RiInstagramFill size={26} />
              </Link>

              <Link
                href="#"
                className="text-bg-light hover:text-white transition">
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full gap-4 lg:gap-8">
            <h2 className="text-white font-semibold text-[24px] text-center lg:text-left">
              Subscribe Newsletters
            </h2>

            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded p-4 md:px-[24px] md:py-[26px] text-primary"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 rounded uppercase p-2 md:py-3 md:px-6 bg-secondary hover:bg-secondary/90 text-white cursor-pointer text-md md:text-base transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:space-x-8">
            <Link
              href="#"
              className="text-base text-bg-light hover:text-secondary transition">
              Job Seekers
            </Link>
            <Link
              href="#"
              className="text-base text-bg-light hover:text-secondary transition">
              Post Job
            </Link>
            <Link
              href="/about"
              className="text-base text-bg-light hover:text-secondary transition">
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="text-base text-bg-light hover:text-secondary transition">
              Privacy
            </Link>
            <Link
              href="/terms-and-services"
              className="text-base text-bg-light hover:text-secondary transition">
              Terms
            </Link>
          </div>
          <span className="text-bg-light text-base">
            @ 2025 DMVJobs.ai. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
