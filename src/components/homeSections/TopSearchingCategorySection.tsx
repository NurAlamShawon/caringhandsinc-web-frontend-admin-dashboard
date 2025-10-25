"use client ";

import Link from "next/link";
import Container from "../shared/Container";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const data = [
  {
    icon: "/topSearchIcon/remote.png",
    title: "Remote",
    link: "/jobs/remote",
  },
  {
    icon: "/topSearchIcon/mnc.png",
    title: "MNC",
    link: "/jobs/mnc",
  },
  {
    icon: "/topSearchIcon/fresher.png",
    title: "Fresher",
    link: "/jobs/fresher",
  },
  {
    icon: "/topSearchIcon/startup.png",
    title: "Startup",
    link: "/jobs/startup",
  },
  {
    icon: "/topSearchIcon/analytic.png",
    title: "Analytics",
    link: "/jobs/analytics",
  },
  {
    icon: "/topSearchIcon/internship.png",
    title: "Internship",
    link: "/jobs/internship",
  },
  {
    icon: "/topSearchIcon/software.png",
    title: "Software",
    link: "/jobs/software",
  },
  {
    icon: "/topSearchIcon/banking.png",
    title: "Banking",
    link: "/jobs/banking",
  },
  {
    icon: "/topSearchIcon/development.png",
    title: "Development",
    link: "/jobs/development",
  },
  {
    icon: "/topSearchIcon/sales.png",
    title: "Sales",
    link: "/jobs/sales",
  },
];

const TopSearchingCategorySection = () => {
  return (
    <div className="mb-40">
      <Container>
        <h1 className="section-title mb-16 text-center">
          Top Searching Category
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="inline-flex items-center gap-4 bg-white hover:drop-shadow-xl drop-shadow transition-all p-4 rounded-md">
              <Image src={item.icon} alt={item.link} width={30} height={30} />
              <span>{item.title}</span>
              <ChevronRight />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopSearchingCategorySection;
