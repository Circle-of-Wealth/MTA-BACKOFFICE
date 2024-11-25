import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userName: string;
  userRole: string;
}

const lightGrayClass = "bg-gray-100";

const Header: React.FC<HeaderProps> = ({ userName, userRole }) => {
  return (
    <header className={cn(lightGrayClass, "shadow-sm z-10")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-semibold text-[#002868]">
            Welcome, {userName}
          </h1>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://ideogram.ai/assets/image/lossless/response/b5zY7z9nRWCGKr_JikaFwg"
              alt="Profile avatar"
            />
            <div className="ml-5">
              <p className="text-base font-medium text-[#002868]">{userName}</p>
              <p className="text-sm text-gray-600">{userRole}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
