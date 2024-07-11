import { FC, useState } from "react";
import {
  Chart,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {}

const DoughnutChart: FC<DoughnutChartProps> = ({}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const data = {
    labels: ["closed", "pending"],
    datasets: [
      {
        label: "Complaint Status",
        data: [45, 55],
        backgroundColor: ["#008FD6", "#FF0F65"],
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "40%",
    radius: "100%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
    onHover: (event: any, chartElement: any) => {
      console.log("EleMENT LENGTH: ", chartElement.length);
      if (chartElement.length !== 0) {
        setHovered(chartElement[0].element.$context.dataIndex);
      } else {
        setHovered(null);
      }
    },
  };

  return (
    <div className="relative h-full flex justify-center items-center">
      {setHovered !== null && (
        <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] font-bold text-xl w-[7vw] text-center">
          {hovered === 0 ? "Closed " : hovered === 1 ? "Pending " : ""}
          {hovered === 0 ? "45%" : hovered === 1 ? "55%" : ""}
        </h1>
      )}
      <div className="relative w-full h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
