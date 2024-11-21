import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LogOutIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthProvider";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

export function AppSidebar() {
  const { session, logOut } = useAuth();
  const nav = useNavigate();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-center w-full">
            <img src={logo} alt="Maxtax Logo" className="w-24" />
          </div>
          <SidebarGroupLabel>Employee Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          onClick={(e) => {
            e.preventDefault();
            logOut();
            nav("/login");
          }}
          variant={"outline"}
        >
          Sign out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
