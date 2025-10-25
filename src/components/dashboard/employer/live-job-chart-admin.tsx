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
import { mockChartData } from "@/lib/mock-data-admin";

// Start dot
type StartDotProps = { cx?: number; cy?: number; stroke?: string };
const StartDot: React.FC<StartDotProps> = ({
  cx = 0,
  cy = 0,
  stroke = "#000",
}) => <circle cx={cx} cy={cy} r={4} fill={stroke} />;

// End arrow as SVG
type EndArrowProps = {
  x?: number;
  y?: number;
  stroke?: string;
  angle?: number;
};
const EndArrow: React.FC<EndArrowProps> = ({
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
    style={{
      overflow: "visible",
      transform: `rotate(${angle}deg)`,
      transformOrigin: "center",
    }}
  >
    <polygon points="0,0 12,6 0,12" fill={stroke} />
  </svg>
);

export function LiveJobChart() {
  return (
    <Card className="col-span-1 lg:col-span-2 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Login User</CardTitle>
        <Button
          variant="default"
          size="sm"
          className="bg-emerald-600 hover:bg-emerald-700 gap-2"
        >
          Last Month
          <ChevronDown className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

            {/* X and Y axes without lines */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#999"
              tick={{ fill: "#333333", fontSize: 14, fontWeight: 500,  dy: 15 }} // <- label color & spacing
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              stroke="#999"
              domain={[100, 400]}
              ticks={[100, 200, 300, 400]}
              tick={{ fill: "#333333", fontSize: 14, fontWeight: 500,  dx: -15 }} // <- label color & spacing
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
            <Legend verticalAlign="top" iconType="circle" />

            {/* Job Seeker Line */}
            <Line
              type="monotone"
              dataKey="Job Seeker"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              label={(props) => {
                const { index, x, y } = props;
                if (index === 0)
                  return (
                    <StartDot cx={Number(x)} cy={Number(y)} stroke="#10b981" />
                  );

                if (index === mockChartData.length - 1) {
                  const prev = mockChartData[index - 1];
                  const dx = Number(x) - index + 0; // assuming evenly spaced X
                  const dy = Number(y) - Number(prev["Job Seeker"]);
                  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
                  return (
                    <EndArrow
                      x={Number(x)}
                      y={Number(y)}
                      stroke="#10b981"
                      angle={angle}
                    />
                  );
                }

                return null;
              }}
            />

            {/* Employee Line */}
            <Line
              type="monotone"
              dataKey="Employee"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              label={(props) => {
                const { index, x, y } = props;
                if (index === 0)
                  return (
                    <StartDot cx={Number(x)} cy={Number(y)} stroke="#ef4444" />
                  );

                if (index === mockChartData.length - 1) {
                  const prev = mockChartData[index - 1];
                  const dx = Number(x) - index + 0; // evenly spaced X
                  const dy = Number(y) - Number(prev.Employee);
                  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
                  return (
                    <EndArrow
                      x={Number(x)}
                      y={Number(y)}
                      stroke="#ef4444"
                      angle={angle}
                    />
                  );
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
