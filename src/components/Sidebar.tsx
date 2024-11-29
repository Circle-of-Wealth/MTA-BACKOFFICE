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
  Video,
  FileQuestion,
  Newspaper,
  CheckSquare,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useAuthActions } from "@convex-dev/auth/react";
import { useNavigate } from "react-router-dom";

const AppSidebar: React.FC = () => {
  const { signOut } = useAuthActions();
  const nav = useNavigate();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="MaxTax Alliance Logo"
            className="w-auto transition-all duration-300 ease-in-out group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:object-contain group-data-[state=expanded]:h-auto group-data-[state=expanded]:w-3/4"
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
                  <Link to="/" className="w-full">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    <span>Dashboard Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Time Tracking">
                  <Link to="/time" className="w-full">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Time Tracking</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible>
                <SidebarMenuItem className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Training Hub">
                      <School className="mr-2 h-4 w-4" />
                      <span>Training Hub</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
                  <SidebarMenuSub className="transition-all duration-300 ease-in-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/training/courses">
                          <Video className="mr-2 h-4 w-4" />
                          Courses
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/training/certifications">
                          <FileQuestion className="mr-2 h-4 w-4" />
                          Certifications
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/training/webinars">
                          <Video className="mr-2 h-4 w-4" />
                          Webinars
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Work</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Leaderboard">
                  <Link to="/leaderboard" className="w-full">
                    <Trophy className="mr-2 h-4 w-4" />
                    <span>Leaderboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Tasks">
                  <Link to="/tasks" className="w-full">
                    <CheckSquare className="mr-2 h-4 w-4" />
                    <span>Tasks</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Team Messenger">
                  <Link to="/chat" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Team Messenger</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Maxine AI">
                  <Link to="/maxine" className="w-full">
                    <Bot className="mr-2 h-4 w-4" />
                    <span>Maxine AI</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Clients">
                  <Link to="/clients" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Clients</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Tax Software">
                  <Link to="/software" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Tax Software</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Reports">
                  <Link to="/reports" className="w-full">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <span>Reports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible>
                <SidebarMenuItem className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Resources">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>Resources</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
                  <SidebarMenuSub className="transition-all duration-300 ease-in-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/resources/knowledge-base">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Knowledge Base
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/resources/forms">
                          <FileText className="mr-2 h-4 w-4" />
                          Forms & Documents
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/resources/news">
                          <Newspaper className="mr-2 h-4 w-4" />
                          Tax News
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border">
        <div className="p-2">
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
            <Avatar className="h-9 w-9 rounded-lg">
              <AvatarImage
                src="https://ideogram.ai/assets/image/lossless/response/b5zY7z9nRWCGKr_JikaFwg"
                alt="Jane Doe"
              />
              <AvatarFallback className="rounded-lg bg-[#002868] text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-medium text-gray-900 truncate">
                Jane Doe
              </p>
              <p className="text-xs text-gray-500 truncate">Tax Specialist</p>
            </div>
          </div>
        </div>
        <Separator className="my-2" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link to="/settings" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={async (e: any) => {
                e.preventDefault();
                console.log("Signing out");
                await signOut();
                nav("/signin");
              }}
              asChild
              tooltip="Logout"
            >
              <Link to="/signin" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail>
        <div className="p-2 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="MaxTax Alliance Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
      </SidebarRail>
    </Sidebar>
  );
};

export default AppSidebar;
