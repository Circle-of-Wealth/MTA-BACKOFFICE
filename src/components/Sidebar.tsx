import React from "react";
import {
  LayoutGrid,
  Clock,
  Trophy,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  BookOpenIcon,
  School,
  BotIcon,
  Settings,
  LogOut,
} from "lucide-react";
import NavItem from "./NavItem";

const navItems = [
  { path: "/", icon: LayoutGrid, name: "Dashboard Overview" },
  { path: "/time", icon: Clock, name: "Time Tracking" },
  { path: "/training", icon: School, name: "Training Hub" },
  { path: "/leaderboard", icon: Trophy, name: "Leaderboard" },
  { path: "/clients", icon: Users, name: "Clients" },
  { path: "/software", icon: FileText, name: "Tax Software" },
  { path: "/reports", icon: BarChart3, name: "Reports" },
  { path: "/resources", icon: BookOpenIcon, name: "Resources" },
  { path: "/chat", icon: MessageSquare, name: "Team Messenger" },
  { path: "/maxine", icon: BotIcon, name: "Maxine AI" },
  { path: "/settings", icon: Settings, name: "Settings" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-xl flex flex-col">
      <div className="p-4 bg-white">
        <img
          src="/logo.png"
          alt="MaxTax Alliance Logo"
          className="w-full object-contain"
        />
      </div>

      <nav className="flex-1 overflow-y-auto mt-6">
        {navItems.map((item, key) => (
          <NavItem icon={item.icon} path={item.path} key={key}>
            <span>{item.name}</span>
          </NavItem>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-[#002868]"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
