import React from "react";
import { Trophy, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";

interface TaxPreparer {
  name: string;
  location: string;
  company: string;
  clients: number;
}

const taxPreparers: TaxPreparer[] = [
  {
    name: "John Doe",
    location: "New York, NY",
    company: "TaxPro Inc.",
    clients: 120,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, CA",
    company: "Smith & Co.",
    clients: 115,
  },
  {
    name: "Mike Johnson",
    location: "Chicago, IL",
    company: "MJ Tax Services",
    clients: 105,
  },
  {
    name: "Emily Brown",
    location: "Houston, TX",
    company: "Brown Tax Solutions",
    clients: 98,
  },
  {
    name: "David Lee",
    location: "Phoenix, AZ",
    company: "Lee Accounting",
    clients: 92,
  },
];

const Leaderboard: React.FC = () => {
  const barColor = "#002868"; // Navy blue to match the logo

  const data = taxPreparers.map((preparer) => ({
    ...preparer,
    revenue: preparer.clients * 500,
  }));

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#002868] flex items-center gap-2">
          <Trophy className="w-8 h-8 text-[#002868]" />
          Top Tax Preparers
        </CardTitle>
        <p className="text-sm text-gray-500">Performance Overview</p>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                width={95}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-4 rounded shadow-lg border border-gray-200">
                        <p className="font-bold">{data.name}</p>
                        <p>{data.company}</p>
                        <p>{data.location}</p>
                        <p className="mt-2">
                          <span className="font-semibold">Clients:</span>{" "}
                          {data.clients}
                        </p>
                        <p>
                          <span className="font-semibold">Revenue:</span> $
                          {data.revenue}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="clients"
                radius={[4, 4, 4, 4]}
                label={{ position: "right", fill: "#666" }}
                fill={barColor}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <p className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-[#002868]" />
              <span className="font-medium">Total Clients:</span>{" "}
              {data.reduce((sum, item) => sum + item.clients, 0)}
            </p>
            <p className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1 text-[#002868]" />
              <span className="font-medium">Total Revenue:</span> $
              {data.reduce((sum, item) => sum + item.revenue, 0)}
            </p>
          </div>
          <p className="flex items-center text-green-600 font-medium">
            <TrendingUp className="w-4 h-4 mr-1" />
            Trending up by 5.2% this month
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
