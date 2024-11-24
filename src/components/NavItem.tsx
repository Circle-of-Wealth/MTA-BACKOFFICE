// components/Layout/Sidebar/NavItem.tsx
import React from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItemProps {
  path: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ path, icon: Icon, children }) => {
  return (
    <Link
      to={path}
      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-[#002868]"
    >
      <Icon className="w-5 h-5 mr-3" />
      <span>{children}</span>
    </Link>
  );
};

export default NavItem;
