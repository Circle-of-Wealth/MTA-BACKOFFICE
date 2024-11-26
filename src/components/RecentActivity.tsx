import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertTriangle, XCircle, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  name: string;
  status: "completed" | "in-progress" | "delayed";
  completionRate: number;
  deadline: string;
  priority: "low" | "medium" | "high";
}

const tasks: Task[] = [
  {
    id: 1,
    name: "Tax Return: John Doe",
    status: "completed",
    completionRate: 100,
    deadline: "2023-12-15",
    priority: "high",
  },
  {
    id: 2,
    name: "Quarterly Report: XYZ Corp",
    status: "in-progress",
    completionRate: 75,
    deadline: "2023-12-31",
    priority: "medium",
  },
  {
    id: 3,
    name: "Audit Preparation: ABC Inc",
    status: "delayed",
    completionRate: 30,
    deadline: "2024-01-15",
    priority: "high",
  },
  {
    id: 4,
    name: "Financial Statement: Jane Smith",
    status: "completed",
    completionRate: 100,
    deadline: "2023-12-10",
    priority: "medium",
  },
  {
    id: 5,
    name: "Tax Planning: New Client",
    status: "in-progress",
    completionRate: 50,
    deadline: "2024-01-31",
    priority: "low",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case "in-progress":
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case "delayed":
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high":
      return <Flag className="w-4 h-4 text-red-500" />;
    case "medium":
      return <Flag className="w-4 h-4 text-yellow-500" />;
    case "low":
      return <Flag className="w-4 h-4 text-green-500" />;
    default:
      return null;
  }
};

const RecentActivity: React.FC = () => {
  const averageCompletionTime = "2.5";
  const pendingTasks = "3";

  return (
    <Card className="bg-white h-[360px] overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-[#002868]">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          "h-[calc(100%-80px)] overflow-y-auto pr-4",
          "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
        )}
      >
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-[#002868]">{task.name}</span>
                <div className="flex items-center space-x-2">
                  {getPriorityIcon(task.priority)}
                  {getStatusIcon(task.status)}
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#002868]/80">
                  Deadline: {new Date(task.deadline).toLocaleDateString()}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{
                    color:
                      task.priority === "high"
                        ? "#ef4444"
                        : task.priority === "medium"
                        ? "#f59e0b"
                        : "#10b981",
                  }}
                >
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}{" "}
                  Priority
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Progress
                  value={task.completionRate}
                  className="flex-grow h-2"
                />
                <span className="text-sm text-[#002868]/80 min-w-[45px]">
                  {task.completionRate}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
