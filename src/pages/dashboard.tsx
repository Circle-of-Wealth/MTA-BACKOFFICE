import React from "react";
import ClockInOut from "@/components/ClockInOut";
import Announcement from "@/components/Annoucement";
import Leaderboard from "@/components/Leaderboard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TotalClients from "@/components/TotalClients";
import EventsCal from "@/components/Events";
import RecentActivity from "@/components/RecentActivity";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Component */}
        <Header userName="Jane Doe" userRole="Tax Specialist" />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <ClockInOut />
              <RecentActivity />
            </div>

            {/* Middle Column - Announcements */}
            <div className="lg:col-span-1">
              <Announcement />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Total Clients Component */}
              <TotalClients />

              {/* Event Component (Upcoming Deadlines) */}
              <EventsCal />
            </div>
          </div>

          {/* Leaderboard Component - Full Width */}
          <div className="w-full">
            <Leaderboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
