import React, { useState, useEffect } from "react";
import { Clock, LogIn, LogOut } from "lucide-react";

const ClockInOut: React.FC = () => {
  const [isClockIn, setIsClockIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockInOut = () => {
    setIsClockIn(!isClockIn);
    console.log(
      isClockIn ? "Clocked out" : "Clocked in",
      "at",
      currentTime.toLocaleTimeString()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
      <div className="p-4">
        <div className="flex items-center gap-2 text-[#002868] mb-4">
          <Clock className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Time Tracking</h2>
        </div>
        <div className="text-4xl font-bold text-[#002868] mb-4">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
        <button
          onClick={handleClockInOut}
          className={`w-full py-3 rounded-md text-white font-medium flex items-center justify-center ${
            isClockIn
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isClockIn ? (
            <>
              <LogOut className="w-5 h-5 mr-2" />
              Clock Out
            </>
          ) : (
            <>
              <LogIn className="w-5 h-5 mr-2" />
              Clock In
            </>
          )}
        </button>
        <p className="mt-3 text-gray-600 text-center">
          You are currently clocked {isClockIn ? "in" : "out"}
        </p>
      </div>
    </div>
  );
};

export default ClockInOut;
