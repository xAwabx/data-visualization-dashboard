"use client";
import { FC } from "react";
import {
  Chart,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import BarChart from "../Charts/Bar";
import DoughnutChart from "../Charts/Doughnut";
import PieChart from "../Charts/PieChart";

Chart.register(
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement
);
interface MiddleProps {}

const Middle: FC<MiddleProps> = ({}) => {
  return (
    <div className="flex flex-row gap-2  w-full bg-pink-500">
      <div className="flex flex-col justify-evenly bg-white shadow-sm shadow-black h-[45vh] w-[25vw] rounded-lg p-3 ">
        <div>
          <h1 className="text-lg font-bold ">Complaint Status</h1>
          <div className=" text-xs text-gray-500 text-left">
            <span className="text-red-400">(+5) more</span> in 2024
          </div>
        </div>
        <DoughnutChart />
      </div>
      <div className="flex flex-col justify-evenly bg-white shadow-sm shadow-black h-[45vh] w-[50vw] rounded-lg p-3 ">
        <div>
          <h1 className="text-lg font-bold ">Service Request</h1>
          <div className=" text-xs text-gray-500 text-left">
            <span className="text-red-400">(+5) more</span> in 2024
          </div>
        </div>
        <BarChart />
      </div>
      <div className="flex flex-col justify-evenly bg-white shadow-sm shadow-black h-[45vh] w-[25vw] rounded-lg p-3 ">
        <div>
          <h1 className="text-lg font-bold ">Appointments Logged</h1>
          <div className=" text-xs text-gray-500 text-left">
            <span className="text-red-400">(+5) more</span> in 2024
          </div>
        </div>
        <PieChart />
      </div>
    </div>
  );
};

export default Middle;
