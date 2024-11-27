import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./layouts/signin";
import SignUp from "./layouts/signup";
import Dashboard from "./layouts/dashboard";
import "./App.css";
import TasksPage from "./layouts/tasks";
import { useLocation } from "react-router-dom";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "./components/ui/sidebar";
import AppSidebar from "./components/Sidebar";

function App() {
  const { pathname: path } = useLocation();

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#F8F9FA]">
        <AppSidebar />
        <SidebarInset>
          {path === "/" ? (
            <Header userName="Jane Doe" userRole="Tax Specialist">
              <SidebarTrigger className="text-[#002868] hover:bg-gray-100 p-2 rounded-md transition-colors duration-200" />
            </Header>
          ) : (
            <div className="pl-10 pt-8">
              <SidebarTrigger className="text-[#002868] hover:bg-gray-100 p-2 rounded-md transition-colors duration-200" />
            </div>
          )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tasks" element={<TasksPage />} />
          </Routes>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default App;
