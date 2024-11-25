import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userName: string;
  userRole: string;
  children?: React.ReactNode;
}

const headerClass = "bg-white";

const Header: React.FC<HeaderProps> = ({ userName, userRole, children }) => {
  return (
    <header className={cn(headerClass, "shadow-sm z-10")}>
      <div className="max-w-7xl px-6 sm:px-8 2xl:px-3">
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center space-x-4">
            {children}
            <h1 className="text-3xl font-semibold text-[#002868]">
              Welcome, {userName}
            </h1>
          </div>
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
