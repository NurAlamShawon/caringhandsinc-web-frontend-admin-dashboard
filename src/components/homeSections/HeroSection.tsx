"use client";

import {
  ChevronDown,
  Download,
  MapPin,
  MonitorDot,
  Star,
  TextSearch,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/shared/Container";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
const jobTypes = [
  { label: "Remote", value: "remote" },
  { label: "Office", value: "office" },
  { label: "Hybrid", value: "hybrid" },
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [jobType, setJobType] = useState("");
  return (
    <div
      className="flex min-h-[850px] w-full justify-center items-center"
      style={{
        backgroundImage: "url('/hero-particale.svg')",
        backgroundPosition: "0px -90px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Container>
        <div className=" w-full h-auto flex flex-col justify-between gap-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 lg:gap-0">
            {/* Left section - Text content */}
            <div className="col-span-1 lg:col-span-5 w-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-16 font-semibold text-primary">
                Find Your Best-
                <span className="text-secondary">
                  Fit
                  <br />
                  Job
                </span>{" "}
                in the DMV
              </h1>
              <ul className="flex flex-col gap-4 mt-6">
                <li className="inline-flex items-center gap-4 text-sm md:text-base text-foreground">
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary">
                    <Check size={15} className="text-white" />
                  </span>
                  We use AI to match you with best-fit jobs in the DMV
                </li>
                <li className="inline-flex items-center gap-4 text-sm md:text-base text-foreground">
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary">
                    <Check size={15} className="text-white" />
                  </span>
                  Get notified about roles you&apos;d never find manually
                </li>
                <li className="inline-flex items-center gap-4 text-sm md:text-base text-foreground">
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary">
                    <Check size={15} className="text-white" />
                  </span>
                  Our system scans skills, experience, and preferences
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8">
                <button className="py-2 px-4 md:px-6 text-sm md:text-base text-white bg-primary hover:bg-primary/90 inline-flex items-center gap-2 md:gap-3 rounded-md cursor-pointer font-semibold transition">
                  <Download size={20} />
                  <span>Upload Your Resume</span>
                </button>
                <button className="py-2 px-6 md:px-8 text-sm md:text-base text-primary rounded-md cursor-pointer border border-primary hover:bg-primary/10 font-semibold transition">
                  Post a Job
                </button>
              </div>
            </div>

            {/* Right section - Image and rating */}
            <div className="col-span-1 lg:col-span-7 w-full">
              <div className="flex flex-col gap-6">
                {/* Image container */}
                <div className="relative inline-block w-full">
                  <div className="relative w-full h-64 md:h-80 lg:h-[400px]">
                    {/* Rotated background div */}
                    <div className="absolute inset-0 bg-[#E8EEFF] rounded-2xl lg:rounded-xl rotate-3 lg:rotate-4 -top-2 lg:-top-3 w-full h-full"></div>

                    {/* Image */}
                    <Image
                      src="/hero-client-image.png"
                      alt="Professional women with laptop"
                      width={400}
                      height={300}
                      className="relative w-full h-full object-cover z-10 rounded-2xl lg:rounded-xl"
                    />

                    {/* Overlay label at bottom-left */}
                    <span className="absolute bottom-0 left-0 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-medium text-[#5600AD] z-20 shadow-sm">
                      AI Matching Jobs
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  {/* Profile avatars */}
                  <div className="flex -space-x-3">
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="/professional-woman-1.png" />
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="/professional-woman-2.png" />
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="/professional-woman-3.png" />
                    </Avatar>
                  </div>

                  {/* Rating and reviews */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg md:text-xl font-bold text-foreground">
                        4.8
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">
                      100+ Job Reviews
                    </span>
                  </div>

                  {/* Job location */}
                  <div className="text-xs md:text-sm text-primary font-medium">
                    Job location
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom filter bar */}
          <div className="relative max-w-[1136px] w-full mx-auto">
            {/* Green background div */}
            <div className="absolute top-2 left-2 w-full h-full bg-secondary rounded-md -z-10"></div>

            {/* White foreground div */}
            <div className="bg-white p-4 border border-primary rounded-md relative">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                {/* Search by title */}
                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <TextSearch className="w-5 h-5 flex-shrink-0" />
                  <input
                    placeholder="UI/UX Design"
                    className="flex-1 outline-none border-b border-b-caption/50 focus:border-primary py-3 transition"
                  />
                </div>

                {/* Search and select location */}
                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <button
                        aria-expanded={open}
                        className="flex-1 flex py-3 px-0 justify-between border-b border-b-caption/50 focus:border-primary transition outline-none min-w-0">
                        <span className="truncate">
                          {value
                            ? frameworks.find(
                                (framework) => framework.value === value
                              )?.label
                            : "Select location..."}
                        </span>
                        <ChevronDown className="opacity-50 w-5 flex-shrink-0 ml-2" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          className="text-md"
                          placeholder="Search location..."
                        />
                        <CommandList>
                          <CommandEmpty>No location found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                className="text-md"
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}>
                                {framework.label}
                                <Check
                                  className={cn(
                                    "ml-auto w-4 h-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Select job type */}
                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <MonitorDot className="w-5 h-5 flex-shrink-0" />
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex-1 flex py-3 px-0 justify-between border-b border-b-caption/50 focus:border-primary transition outline-none min-w-0">
                        <span className="truncate">
                          {jobType
                            ? jobTypes.find((job) => job.value === jobType)
                                ?.label
                            : "Select job type..."}
                        </span>
                        <ChevronDown className="opacity-50 w-5 flex-shrink-0 ml-2" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          className="text-md"
                          placeholder="Search job type..."
                        />
                        <CommandList>
                          <CommandEmpty>No job type found.</CommandEmpty>
                          <CommandGroup>
                            {jobTypes.map((job) => (
                              <CommandItem
                                className="!text-md"
                                key={job.value}
                                value={job.value}
                                onSelect={(currentValue) => {
                                  setJobType(
                                    currentValue === jobType ? "" : currentValue
                                  );
                                }}>
                                {job.label}
                                <Check
                                  className={cn(
                                    "ml-auto w-4 h-4",
                                    jobType === job.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Find Job button */}
                <button className="py-3 px-6 bg-primary text-white text-base hover:bg-primary/90 transition-all rounded-md font-medium flex-shrink-0">
                  Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
