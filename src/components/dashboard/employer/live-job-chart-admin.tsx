"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { useGetChartStatisticQuery } from "@/redux/api/statistic/statisticApi";

// Small utility dots/arrows
const StartDot: React.FC<{ cx?: number; cy?: number; stroke?: string }> = ({
  cx = 0,
  cy = 0,
  stroke = "#000",
}) => <circle cx={cx} cy={cy} r={4} fill={stroke} />;

const EndArrow: React.FC<{ x?: number; y?: number; stroke?: string; angle?: number }> = ({
  x = 0,
  y = 0,
  stroke = "#000",
  angle = 0,
}) => (
  <svg
    x={x}
    y={y}
    width={12}
    height={12}
    style={{ overflow: "visible", transform: `rotate(${angle}deg)`, transformOrigin: "center" }}
  >
    <polygon points="0,0 12,6 0,12" fill={stroke} />
  </svg>
);

type ChartData = {
  month: string;
  "Job Seeker": number;
  Employer: number;
};

export function LiveJobChart() {
  const { data: apiResponse, isLoading, isError } = useGetChartStatisticQuery();

  // Compute chart data using useMemo instead of useState + useEffect
  const chartData: ChartData[] = React.useMemo(() => {
    if (!apiResponse?.data) return [];

    const { jobSeekers, employers } = apiResponse.data;
    return [
      {
        month: "Last Month",
        "Job Seeker": jobSeekers.loginsLastMonth ?? 0,
        Employer: employers.loginsLastMonth ?? 0,
      },
      {
        month: "This Month",
        "Job Seeker": jobSeekers.loginsThisMonth ?? 0,
        Employer: employers.loginsThisMonth ?? 0,
      },
    ];
  }, [apiResponse]);

  if (isLoading) {
    return (
      <Card className="col-span-1 lg:col-span-2 shadow-sm">
        <CardHeader>
          <CardTitle>Login User</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Loading chart...</p>
        </CardContent>
      </Card>
    );
  }

  if (isError || chartData.length === 0) {
    return (
      <Card className="col-span-1 lg:col-span-2 shadow-sm">
        <CardHeader>
          <CardTitle>Login User</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No chart data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-1 lg:col-span-2 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Login User</CardTitle>
        <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 gap-2">
          Monthly
          <ChevronDown className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} stroke="#999" />
            <YAxis axisLine={false} tickLine={false} stroke="#999" />
            <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px" }} />
            <Legend verticalAlign="top" iconType="circle" />

            <Line
              type="monotone"
              dataKey="Job Seeker"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              label={({ index, x, y }) => {
                if (index === 0) return <StartDot cx={Number(x)} cy={Number(y)} stroke="#10b981" />;
                if (index === chartData.length - 1) {
                  const prev = chartData[index - 1];
                  const dx = 1;
                  const dy = Number(y) - Number(prev["Job Seeker"]);
                  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
                  return <EndArrow x={Number(x)} y={Number(y)} stroke="#10b981" angle={angle} />;
                }
                return null;
              }}
            />

            <Line
              type="monotone"
              dataKey="Employer"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              label={({ index, x, y }) => {
                if (index === 0) return <StartDot cx={Number(x)} cy={Number(y)} stroke="#ef4444" />;
                if (index === chartData.length - 1) {
                  const prev = chartData[index - 1];
                  const dx = 1;
                  const dy = Number(y) - Number(prev["Employer"]);
                  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
                  return <EndArrow x={Number(x)} y={Number(y)} stroke="#ef4444" angle={angle} />;
                }
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
