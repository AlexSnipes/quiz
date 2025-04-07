"use client";

import { useEffect } from "react";

interface TimerProps {
  timeLeft: number;
  setTimeLeft: (time: number) => void;
}

export default function Timer({ timeLeft, setTimeLeft }: TimerProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime: number) => {
        if (prevTime <= 1) {
          // clearInterval(timer)
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft]);

  // Convertir segundos a formato mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center bg-blue-700 bg-opacity-30 px-3 py-1 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span
        className={`sm:text-base text-xs font-medium ${seconds <= 10 ? "text-red-500" : "text-green-300"}`}
      >
        {formattedTime}
      </span>
    </div>
  );
}
