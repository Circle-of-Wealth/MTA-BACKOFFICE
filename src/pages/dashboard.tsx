import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Dashboard = ({}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <main>{children}</main> */}
    </SidebarProvider>
  );
};
