import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userName: string;
  userRole: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ userName, userRole, children }) => {
  return (
    <header className={cn("bg-[#FFF]", "shadow-sm z-10")}>
      <div className="max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center pt-8">
          <div className="flex items-center space-x-4">
            {children}
            <h1 className="text-3xl font-semibold text-[#002868]">
              Welcome, {userName}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
