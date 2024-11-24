import React from "react";
import {
  LayoutGrid,
  Clock,
  LineChart,
  Trophy,
  Users,
  FileText,
  BarChart3,
  BookOpen,
  MessageSquare,
  CircuitBoard,
  Settings,
  LogOut,
  School,
  BookOpenIcon,
  BotIcon,
} from "lucide-react";
import NavItem from "@/components/NavItem";

import Profile from "@/components/Profile";

const Dashboard: React.FC = () => {
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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 bg-white">
          <img
            src="/logo.png"
            alt="MaxTax Alliance Logo"
            className="w-full object-contain"
          />
        </div>

        {/* Profile Avatar */}
        <Profile name="Jane Doe" role="Tax Preparer" avatar="JD" />

        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item, k) => (
            <NavItem key={k} path={item.path} icon={item.icon}>
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-[#002868] mb-6">
          Welcome, Jane
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#002868] mb-4">
              Quick Stats
            </h2>
            <p className="text-gray-600">Clients: 150</p>
            <p className="text-gray-600">Pending Documents: 23</p>
            <p className="text-gray-600">Completed Tasks: 78</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#002868] mb-4">
              Recent Activity
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-600">New client added: John Doe</li>
              <li className="text-gray-600">
                Document uploaded: Q2 Tax Return
              </li>
              <li className="text-gray-600">Task completed: Annual Review</li>
            </ul>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#002868] mb-4">
              Upcoming Deadlines
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-600">Apr 15: Tax Filing Deadline</li>
              <li className="text-gray-600">May 1: Quarterly Reports Due</li>
              <li className="text-gray-600">Jun 30: Mid-Year Review</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
