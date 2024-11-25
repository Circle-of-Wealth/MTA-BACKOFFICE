import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ClientData {
  name: string;
  value: number;
  color: string;
}

const TotalClients: React.FC = () => {
  const totalClients = 530; // Sum of all clients
  const growthRate = 5.2; // Growth rate in percentage

  const data: ClientData[] = [
    { name: "Active", value: 350, color: "rgb(66, 99, 235)" },
    { name: "New", value: 98, color: "rgb(239, 68, 128)" },
    { name: "Returning", value: 82, color: "rgb(255, 122, 0)" },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-[#002868] flex items-center gap-2">
          <Users className="w-5 h-5" />
          Total Clients
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="relative h-[200px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{totalClients}</span>
            <span className="text-sm text-gray-500">Total Clients</span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 text-sm text-green-600 font-medium">
          <TrendingUp className="w-4 h-4 mr-1" />
          Up by {growthRate}% this month
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalClients;
