import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  name: string;
  status: "completed" | "in-progress" | "delayed";
  completionRate: number;
}

const tasks: Task[] = [
  {
    id: 1,
    name: "Tax Return: John Doe",
    status: "completed",
    completionRate: 100,
  },
  {
    id: 2,
    name: "Quarterly Report: XYZ Corp",
    status: "in-progress",
    completionRate: 75,
  },
  {
    id: 3,
    name: "Audit Preparation: ABC Inc",
    status: "delayed",
    completionRate: 30,
  },
  {
    id: 4,
    name: "Financial Statement: Jane Smith",
    status: "completed",
    completionRate: 100,
  },
  {
    id: 5,
    name: "Tax Planning: New Client",
    status: "in-progress",
    completionRate: 50,
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

const RecentActivity: React.FC = () => {
  const averageCompletionTime = "2.5";
  const pendingTasks = "3";

  return (
    <Card className="bg-white max-h-full overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[#002868]">
          Recent Activity & Task Insights
        </CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          "h-[calc(100%-80px)] overflow-y-auto pr-4",
          "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
        )}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center text-[#002868]">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Avg. Completion Time</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-[#002868]">
                      {averageCompletionTime}
                    </span>
                    <span className="ml-1 text-lg text-[#002868]/80">days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center text-[#002868]">
                    <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="text-sm">Pending Tasks</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-[#002868]">
                      {pendingTasks}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <Card key={task.id} className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-[#002868]">
                      {task.name}
                    </span>
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress
                      value={task.completionRate}
                      className="flex-grow h-2"
                      //   indicatorClassName="bg-[#002868]"
                    />
                    <span className="text-sm text-[#002868]/80 min-w-[45px]">
                      {task.completionRate}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
