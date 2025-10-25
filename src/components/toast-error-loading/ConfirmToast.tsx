"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ConfirmToastProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmToast: React.FC<ConfirmToastProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  const [show, setShow] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onCancel, 300); // wait for animation to finish
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred semi-transparent background */}
      <div
        className={`absolute inset-0  bg-opacity-50 backdrop-blur-md transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose} // clicking outside cancels
      ></div>

      {/* Modal with smooth scale & fade animation */}
      <div
        className={`relative bg-white rounded-xl shadow-lg w-[745px] h-[470px] p-6 text-center z-10 transform transition-all duration-300 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 rounded-full flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/cLXM6tZF/fi-14865140.png"
              alt="toast page"
              width={194}
              height={194}
            />
          </div>
        </div>

        <h2 className="text-4xl font-semibold mb-2 text-[#121212]">Are you sure</h2>
        <h2 className="text-2xl font-medium mb-4 text-[#121212]">{message}</h2>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleClose}
            className="flex-1 mr-2 px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 ml-2 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmToast;
