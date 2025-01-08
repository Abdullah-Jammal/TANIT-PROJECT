"use client";

import { Pie, PieChart } from "recharts";

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
const chartData = [
  { browser: "product 1", visitors: 200, fill: "var(--color-chrome)" },
  { browser: "product 2", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#7D4283",
  },
  safari: {
    label: "Safari",
    color: "#F3722C",
  },
} satisfies ChartConfig;

export function Piechart() {
  return (
    <Card className="flex flex-col bg-[#1E1E1E] w-80 max-sm:max-w-64 border-none">
      <CardHeader className="items-start border-b-2 pb-5">
        <CardTitle className="text-white">Primary Text</CardTitle>
        <CardDescription>
          <p className="text-white">5.987,34</p>
          <span className="text-gray-400">Secondary text</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            ></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-gray-100">
          <span className="w-2 h-2 flex bg-purple-700 rounded-full"></span>{" "}
          Product 1
        </div>
        <div className="flex items-center gap-2 font-medium leading-none text-gray-100">
          <span className="w-2 h-2 flex bg-orange-400 rounded-full"></span>{" "}
          Product 1{" "}
        </div>
      </CardFooter>
    </Card>
  );
}
