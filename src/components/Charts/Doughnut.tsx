import { FC, useState } from "react";
import { CoreChartOptions } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {}

const DoughnutChart: FC<DoughnutChartProps> = ({}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const data1 = { closed: 45, pending: 55 };

  const data = {
    labels: [`Closed: ${data1.closed}%`, `Pending: ${data1.pending}%`],
    datasets: [
      {
        label: "Complaint Status",
        data: [data1.closed, data1.pending],
        backgroundColor: ["#FF0F65", "#008FD6"],
        hoverOffset: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
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
        <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] font-bold text-xl w-[6vw] text-center">
          {hovered === 0
            ? `${data1.closed}% `
            : hovered === 1
            ? `${data1.pending}% `
            : ""}
          {hovered === 0 ? "Closed " : hovered === 1 ? "Pending " : ""}
        </h1>
      )}
      <div className="relative w-full h-[84%]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
