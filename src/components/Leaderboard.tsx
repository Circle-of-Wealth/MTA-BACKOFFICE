import React from "react";
import { Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface TaxPreparer {
  name: string;
  clients: number;
  rank: number;
  location: string;
}

const taxPreparers: TaxPreparer[] = [
  {
    name: "John D.",
    clients: 120,
    rank: 1,
    location: "New York",
  },
  {
    name: "Jane S.",
    clients: 115,
    rank: 2,
    location: "Los Angeles",
  },
  {
    name: "Mike J.",
    clients: 105,
    rank: 3,
    location: "Chicago",
  },
  {
    name: "Emily B.",
    clients: 98,
    rank: 4,
    location: "Houston",
  },
  {
    name: "David L.",
    clients: 92,
    rank: 5,
    location: "Phoenix",
  },
];

const charge = 500;

const getBadgeIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-6 h-6 text-yellow-400" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Award className="w-6 h-6 text-amber-600" />;
    default:
      return null;
  }
};

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
        <div className="space-y-4 mb-4">
          {taxPreparers.map((preparer) => (
            <div
              key={preparer.name}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {getBadgeIcon(preparer.rank)}
                <div>
                  <span className="font-medium text-[#002868]">
                    {preparer.name}
                  </span>
                  <span className="text-xs text-gray-500 block">
                    {preparer.location}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-[#002868] block">
                  {preparer.clients.toLocaleString()} clients
                </span>
                <span className="text-xs text-gray-500 block">
                  ${(preparer.clients * charge).toLocaleString()} revenue
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={taxPreparers}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 rounded shadow-lg border border-gray-200 text-xs">
                        <p className="font-bold">{data.name}</p>
                        <p>
                          <span className="font-semibold">Location:</span>{" "}
                          {data.location}
                        </p>
                        <p>
                          <span className="font-semibold">Clients:</span>{" "}
                          {data.clients.toLocaleString()}
                        </p>
                        <p>
                          <span className="font-semibold">Revenue:</span> $
                          {(data.clients * charge).toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#002868" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#002868" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <Bar
                dataKey="clients"
                fill={`url(#${gradientId})`}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
