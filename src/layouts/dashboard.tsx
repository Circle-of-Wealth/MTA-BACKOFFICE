import React, { useEffect } from "react";
import ClockInOut from "@/components/ClockInOut";
import Announcement from "@/components/Annoucement";
import Leaderboard from "@/components/Leaderboard";
import Header from "@/components/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import TotalClients from "@/components/TotalClients";
import Events from "@/components/Events";
import RecentActivity from "@/components/RecentActivity";
import AppSidebar from "@/components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#F8F9FA]">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="flex flex-col h-full">
            <Header userName="Jane Doe" userRole="Tax Specialist">
              <SidebarTrigger className="text-[#002868] hover:bg-gray-100 p-2 rounded-md transition-colors duration-200" />
            </Header>
            <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-1 space-y-6">
                  <ClockInOut />
                  <TotalClients />
                  <Events />
                </div>
                <div className="lg:col-span-1 space-y-6">
                  <RecentActivity />
                  <Leaderboard />
                </div>
                <div className="lg:col-span-1">
                  <Announcement />
                </div>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
