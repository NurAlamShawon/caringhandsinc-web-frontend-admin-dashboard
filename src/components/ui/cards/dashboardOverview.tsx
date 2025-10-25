"use client";
import Image from "next/image";

type CardProps = {
  total: number;
  title: string;
  image: string;
};

export default function DashboardOverview({ total, title, image }: CardProps) {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100">
      {/* Left: Stats */}
      <div className="flex flex-col">
        <h1 className="text-h2 font-bold text-primary">{total}</h1>
        <p className="text-gray-500 text-lg font-medium">{title}</p>
      </div>

      {/* Right: Icon/Image */}
      <div className="flex ">
        <div>
          <Image
            src={image}
            alt="Dashboard Icon"
            className="h-12 w-12"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}
