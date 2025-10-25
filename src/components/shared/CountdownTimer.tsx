"use client";

import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialMinutes?: number; // default 2
  onExpire?: () => void; // callback when timer hits 0
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes = 2,
  onExpire,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  // Format mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Dynamic color logic
  let colorClass = "text-green-600";
  if (timeLeft <= 10) {
    colorClass = "text-red-500 animate-pulse";
  } else if (timeLeft <= 20) {
    colorClass = "text-yellow-500";
  }

  return (
    <div className="text-center font-medium text-gray-700 my-4">
      <p className="text-xl">
        OTP expires in{" "}
        <span className={`font-semibold ${colorClass}`}>{formattedTime}</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
