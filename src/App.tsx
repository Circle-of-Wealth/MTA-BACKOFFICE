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
import Reports from "./layouts/reports";

function App() {
  const { pathname: path } = useLocation();
  console.log(path);

  return (
    <SidebarProvider>
      <div className="flex w-full h-screen bg-[#F8F9FA]">
        {path === "/signin" || path === "/signup" ? <></> : <AppSidebar />}
        <SidebarInset>
          {path === "/" ? (
            <Header userName="Jane Doe" userRole="Tax Specialist">
              <SidebarTrigger className="text-[#002868] hover:bg-gray-100 p-2 rounded-md transition-colors duration-200" />
            </Header>
          ) : (
            <div className="max-w-7xl px-6 sm:px-8 lg:px-10">
              <div className="flex justify-between items-center pt-8">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger className="text-[#002868] hover:bg-gray-100 p-2 rounded-md transition-colors duration-200" />
                </div>
              </div>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default App;
