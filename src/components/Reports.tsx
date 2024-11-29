import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useQuery } from "convex/react";
import { api } from "convex/_generated/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
const employeeData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  revenue: {
    label: "Total Revenue",
    color: "hsl(var(--chart-1))",
  },
  fees: {
    label: "Fees",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Report({ data }: { data: any }) {
  const currentYear = new Date().getFullYear().toString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tax Preparer Overview</CardTitle>
        <CardDescription>{`${currentYear} Tax Season`}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="preparer_name"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.split(" ")[0]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="fees" fill="var(--color-fees)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tax Preparer Profit & Loss Overview
        </div>
        <div className="leading-none text-muted-foreground"></div>
      </CardFooter>
    </Card>
  );
}
