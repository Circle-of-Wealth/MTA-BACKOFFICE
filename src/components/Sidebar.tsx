"use client";

import * as React from "react";
import {
  LayoutGrid,
  Clock,
  Trophy,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  BookOpen,
  School,
  Bot,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar";

const AppSidebar: React.FC = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="MaxTax Alliance Logo"
            className="w-auto transition-all duration-300 ease-in-out group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:object-contain group-data-[state=expanded]:h-auto group-data-[state=expanded]:w-3/4"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive
                  tooltip="Dashboard Overview"
                >
                  <a href="/" className="w-full">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    <span>Dashboard Overview</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Time Tracking">
                  <a href="/time" className="w-full">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Time Tracking</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Training Hub">
                  <a href="/training" className="w-full">
                    <School className="mr-2 h-4 w-4" />
                    <span>Training Hub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Work</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Leaderboard">
                  <a href="/leaderboard" className="w-full">
                    <Trophy className="mr-2 h-4 w-4" />
                    <span>Leaderboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Clients">
                  <a href="/clients" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Clients</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Tax Software">
                  <a href="/software" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Tax Software</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Reports">
                  <a href="/reports" className="w-full">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <span>Reports</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Resources">
                  <a href="/resources" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Resources</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Team Messenger">
                  <a href="/chat" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Team Messenger</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Maxine AI">
                  <a href="/maxine" className="w-full">
                    <Bot className="mr-2 h-4 w-4" />
                    <span>Maxine AI</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <a href="/settings" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <a href="/logout" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail>
        <div className="p-2">
          <img
            src="/logo-small.png"
            alt="MaxTax Alliance Logo"
            className="w-8 h-8 object-contain"
          />
        </div>
      </SidebarRail>
    </Sidebar>
  );
};

export default AppSidebar;
