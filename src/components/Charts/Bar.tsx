"use client";
import { FC } from "react";

import { Bar } from "react-chartjs-2";

interface BarProps {}

const BarChart: FC<BarProps> = ({}) => {
  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 500)),
        backgroundColor: "#1E90FF",
        hoverBackgroundColor: "#1E90FF",
      },
    ],
  };
  const options = {
    indexAxis: "x" as const,
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
