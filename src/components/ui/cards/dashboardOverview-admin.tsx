"use client";
import Image from "next/image";

type CardProps = {
  value: string | number;
  title: string;
  icon: string;
  trend:string | undefined;
};

export default function DashboardOverview({ value, title, icon,trend }: CardProps) {
  return (
    <div className="bg-white shadow-sm mb-6 hover:shadow-md transition-all duration-300 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100">
      {/* Left: Stats */}
      <div className="flex flex-col">
        <h1 className="text-h2 font-bold text-[#333333]">{value}</h1>
        <div className="flex items-center ">
          <p className="text-gray-500 text-lg font-medium mr-4">{title}</p>
          <p className="text-[#10B981] text-[12px]">{trend}</p>
        </div>
      </div>

      {/* Right: Icon/Image */}
      <div className="flex ">
        <div>
          <Image
            src={icon}
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
