import React from "react";
import { Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface TaxPreparer {
  name: string;
  clients: number;
}

const taxPreparers: TaxPreparer[] = [
  { name: "John D.", clients: 120 },
  { name: "Jane S.", clients: 115 },
  { name: "Mike J.", clients: 105 },
  { name: "Emily B.", clients: 98 },
  { name: "David L.", clients: 92 },
];

const Leaderboard: React.FC = () => {
  const gradientId = "blueGradient";

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-[#002868] flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#002868]" />
          Top Tax Preparers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={taxPreparers}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E6F3FF" />
                  <stop offset="100%" stopColor="#002868" />
                </linearGradient>
              </defs>
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                width={50}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 rounded shadow-lg border border-gray-200 text-xs">
                        <p className="font-bold">{data.name}</p>
                        <p>
                          <span className="font-semibold">Clients:</span>{" "}
                          {data.clients}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="clients" fill={`url(#${gradientId})`} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex items-center justify-end text-xs">
          <p className="flex items-center text-green-600 font-medium">
            <TrendingUp className="w-3 h-3 mr-1" />
            5.2% increase this month
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
