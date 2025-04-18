
import * as React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string;
      tension?: number;
      fill?: boolean;
      borderWidth?: number;
    }[];
  };
  className?: string;
}

export function BarChart({ data, className }: ChartProps) {
  // Transform the data to the format expected by Recharts
  const transformedData = data.labels.map((label, index) => {
    const dataPoint: Record<string, any> = { name: label };
    data.datasets.forEach((dataset) => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  return (
    <ChartContainer className={className} config={{
      Views: {
        color: "rgba(59, 130, 246, 0.5)",
      },
      Interactions: {
        color: "rgba(139, 92, 246, 0.5)",
      },
    }}>
      <RechartsBarChart data={transformedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent active={active} payload={payload} label={label} />
          )}
        />
        {data.datasets.map((dataset, index) => (
          <Bar
            key={index}
            dataKey={dataset.label}
            fill={Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor[0] : dataset.backgroundColor}
            stroke={dataset.borderColor}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
}

export function LineChart({ data, className }: ChartProps) {
  // Transform the data to the format expected by Recharts
  const transformedData = data.labels.map((label, index) => {
    const dataPoint: Record<string, any> = { name: label };
    data.datasets.forEach((dataset) => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  return (
    <ChartContainer className={className} config={{
      Followers: {
        color: "rgb(59, 130, 246)",
      },
    }}>
      <RechartsLineChart data={transformedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent active={active} payload={payload} label={label} />
          )}
        />
        {data.datasets.map((dataset, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={dataset.label}
            stroke={dataset.borderColor}
            fill={dataset.fill ? (Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor[0] : dataset.backgroundColor) : undefined}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
}

export function PieChart({ data, className }: ChartProps) {
  // Transform the data for the pie chart
  const transformedData = data.datasets[0].data.map((value, index) => ({
    name: data.labels[index],
    value,
  }));

  return (
    <ChartContainer className={className} config={{
      chart: {
        color: "rgba(59, 130, 246, 0.7)",
      },
    }}>
      <RechartsPieChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <Pie
          data={transformedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          dataKey="value"
        >
          {transformedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={Array.isArray(data.datasets[0].backgroundColor) ? data.datasets[0].backgroundColor[index] : data.datasets[0].backgroundColor}
            />
          ))}
        </Pie>
        <ChartTooltip
          content={({ active, payload }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              labelFormatter={(value) => `${value}`}
            />
          )}
        />
      </RechartsPieChart>
    </ChartContainer>
  );
}
