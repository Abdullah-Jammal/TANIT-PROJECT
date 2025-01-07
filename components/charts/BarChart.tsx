"use client";

import { CircleAlert } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "XS", desktop: 186 },
  { month: "S", desktop: 305 },
  { month: "M", desktop: 237 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  product1: {
    label: "Product1",
    color: "#7D4283",
  },
} satisfies ChartConfig;

export function Barchart() {
  return (
    <Card className="w-[700px] max-lg:max-w-80 bg-[#1E1E1E]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-white">New Profit</p>
          <CircleAlert className="text-gray-400" />
        </CardTitle>
        <CardDescription className="text-gray-400">2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="items-start gap-6 text-sm">
        <p className="flex items-center gap-2 text-white">
          <span className="w-2 h-2 flex bg-purple-800 rounded-full"></span>{" "}
          Product 1
        </p>
        <p className="flex items-center gap-2 text-white">
          <span className="w-2 h-2 flex bg-orange-600 rounded-full"></span>{" "}
          Product 2
        </p>
        <p className="flex items-center gap-2 text-white">
          <span className="w-2 h-2 flex bg-orange-600 rounded-full"></span>{" "}
          Product 3
        </p>
      </CardFooter>
    </Card>
  );
}
