"use client";
import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function MyProfile() {
  const onEdit = () => {};

  return (
    <div className="container mx-auto">
      <div className="w-full bg-white  border border-2 mt-10   rounded p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left - Logo and Info */}
        <div className="flex items-center gap-4 space-x-6 w-full sm:w-auto">
          <div className="  rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <Image
              src="/dashboard/emprofile.png"
              alt="afoi"
              width={200}
              height={200}
              className="object-cover h-full w-full"
            />
          </div>

          <div>
            <h1 className="text-h1 font-semibold text-gray-900">
              XYZ Technology
            </h1>
            <p className="text-gray-500 text-h4">Freelancer Based Company</p>
          </div>
        </div>

        {/* Right - Edit Button */}
        <div className="self-start  ">
          {Button ? (
            <Button
              onClick={onEdit}
              variant="outline"
              className="flex items-center gap-2 text-primary hover:bg-secondary transition"
            >
              Edit
            </Button>
          ) : (
            <button
              onClick={onEdit}
              className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </button>
          )}
        </div>
      </div>
      {/* Email ANd Phone */}
      <div className="flex items-center justify-center w-full mt-20 space-x-4">
        <div className="w-full">
          <label className="text-lg text-black">Contact Email*</label>
          <Input placeholder="Enter a valid Email address" type="text" />
        </div>
        <div className="w-full">
          <label className="text-lg text-black">Contact Phone Number*</label>
          <Input
            placeholder="Enter phone number with country code"
            type="text"
          />
        </div>
      </div>
      {/* Toggle  */}
      <div className="bg-neutral-200 p-4 mt-10 flex justify-end items-center rounded ">
        <Switch />
      </div>
      {/* Details  */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h5 className="font-md font-bold">Company Details </h5>
          <Button
            onClick={onEdit}
            variant="outline"
            className="flex items-center border-0 gap-2 text-primary hover:bg-secondary transition"
          >
            <Pencil />
            Edit
          </Button>
        </div>
        <hr className="  border-t-4   rounded   py-2" />

        <p>
          A results-oriented marketing professional with 8+ years of experience
          in digital marketing, SEO, content creation, and data analysis.
          Passionate about driving growth through creative marketing strategies
          and data-driven decisions. Skilled in managing cross-functional teams
          and building strong brand presence through digital platforms. A
          results-oriented marketing professional with 8+ years of experience in
          digital marketing, SEO, content creation, and data analysis.
          Passionate about driving growth through creative marketing strategies
          and data-driven decisions. Skilled in managing cross-functional teams
          and building strong brand presence through digital platforms.
        </p>
      </div>
      {/*  Industry*/}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h5 className="font-md font-bold">Industry type </h5>
          <Button
            onClick={onEdit}
            variant="outline"
            className="flex items-center border-0 gap-2 text-primary hover:bg-secondary transition"
          >
            <Pencil />
            Edit
          </Button>
        </div>
        <hr className="  border-t-4   rounded   py-2" />

        <p>Freelancer Based Company</p>
      </div>
      {/*  Location*/}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h5 className="font-md font-bold">Location </h5>
          <Button
            onClick={onEdit}
            variant="outline"
            className="flex items-center border-0 gap-2 text-primary hover:bg-secondary transition"
          >
            <Pencil />
            Edit
          </Button>
        </div>
        <hr className="  border-t-4   rounded   py-2" />

        <p>Bangladesh, Dhaka</p>
      </div>
      {/*  Website*/}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h5 className="font-md font-bold">Website </h5>
          <Button
            onClick={onEdit}
            variant="outline"
            className="flex items-center border-0 gap-2 text-primary hover:bg-secondary transition"
          >
            <Pencil />
            Edit
          </Button>
        </div>
        <hr className="  border-t-4   rounded   py-2" />

        <p>www.XYZ.com</p>
      </div>
      {/* Alert TOast */}
      <div className="bg-primary/20 p-2 mt-10 flex items-center gap-4 rounded-md text-left">
        <Image
          src="/dashboard/profilebottom.png"
          alt="Profile info"
          width={30}
          height={30}
          className="rounded-md object-contain"
        />
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          We collect your contact information for verification and internal data
          purposes. You may choose whether your phone number is visible to job
          seekers.
        </p>
      </div>
      {/* Button */}
      <div className="flex mt-10 mb-20  justify-end">
        <Button className="bg-primary hover:primary/50">Save Profile</Button>
      </div>
    </div>
  );
}
