import React, { useEffect } from "react";
import { api } from "../../convex/_generated/api";
import ClockInOut from "@/components/ClockInOut";
import Announcement from "@/components/Annoucement";
import Leaderboard from "@/components/Leaderboard";
import Report from "@/components/Reports";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import TotalClients from "@/components/TotalClients";
import Events from "@/components/Events";
import RecentActivity from "@/components/RecentActivity";
import AppSidebar from "@/components/Sidebar";
import { useQuery } from "convex/react";

const Dashboard: React.FC = () => {
  const reports = useQuery(api.reports.getTaxReports);

  const taxPreparerData = reports?.map((data) => {
    const revenue = Math.round(
      Math.random() * 100 * parseInt(data["Tax_Prep_Fee"].replace("$", ""))
    );

    const fees = Math.round(Math.random() * 100) * 16 * 14;

    return { revenue, fees, ...data };
  });

  console.log(taxPreparerData);
  return (
    <div className="flex h-screen bg-[#FFF]">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
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
              {reports && <Report data={taxPreparerData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
