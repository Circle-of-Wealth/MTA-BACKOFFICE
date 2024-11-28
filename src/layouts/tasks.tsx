import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  ChevronDown,
  X,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Flag,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface Task {
  id: number;
  name: string;
  status: "completed" | "in-progress" | "delayed";
  completionRate: number;
  deadline: string;
  priority: "low" | "medium" | "high";
}

const allTasks: Task[] = [
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

export default function TasksPage() {
  const [tasks, setTasks] = React.useState<Task[]>(allTasks);
  const [newTask, setNewTask] = React.useState<Omit<Task, "id">>({
    name: "",
    status: "in-progress",
    completionRate: 0,
    deadline: new Date().toISOString().split("T")[0],
    priority: "medium",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = () => {
    const taskToAdd: Task = {
      id: tasks.length + 1,
      ...newTask,
    };
    setTasks((prev) => [...prev, taskToAdd]);
    setNewTask({
      name: "",
      status: "in-progress",
      completionRate: 0,
      deadline: new Date().toISOString().split("T")[0],
      priority: "medium",
    });
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-[#002868] font-semibold">Tasks</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#002868]">Create Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>
                  Fill out the details to create a new task.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={newTask.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    name="status"
                    value={newTask.status}
                    onValueChange={(value) =>
                      handleInputChange({
                        target: { name: "status", value },
                      } as any)
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="delayed">Delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="completionRate" className="text-right">
                    Completion %
                  </Label>
                  <Input
                    id="completionRate"
                    name="completionRate"
                    type="number"
                    min="0"
                    max="100"
                    value={newTask.completionRate}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="deadline" className="text-right">
                    Deadline
                  </Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={newTask.deadline}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>
                  <Select
                    name="priority"
                    value={newTask.priority}
                    onValueChange={(value) =>
                      handleInputChange({
                        target: { name: "priority", value },
                      } as any)
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleCreateTask}>
                  Create Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <div className="relative flex-grow max-w-xs">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search Tasks" className="pl-8" />
          </div>

          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <div className="flex items-center">
                Status
                <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <div className="flex items-center">
                Priority
                <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <Badge variant="secondary" className="gap-1">
            All Tasks
            <X className="h-3 w-3" />
          </Badge>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 p-4 text-sm text-gray-500 border-b">
            <div>Task Name</div>
            <div>Deadline</div>
            <div>Priority</div>
            <div>Status</div>
            <div>Progress</div>
          </div>

          {tasks.map((task) => (
            <div
              key={task.id}
              className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 p-4 items-center hover:bg-gray-50"
            >
              <div className="font-medium text-[#002868]">{task.name}</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                {task.deadline}
              </div>
              <div className="flex items-center gap-2">
                {getPriorityIcon(task.priority)}
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
                    task.priority.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(task.status)}
                <span className="text-sm">
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={task.completionRate} className="w-24" />
                <span className="text-sm text-[#002868]/80 min-w-[45px]">
                  {task.completionRate}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
