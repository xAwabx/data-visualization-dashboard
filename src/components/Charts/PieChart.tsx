import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { ChartOptions, PluginChartOptions } from "chart.js";

interface PieChartProps {}

const PieChart: FC<PieChartProps> = ({}) => {
  const data = {
    labels: ["closed", "pending"],
    datasets: [
      {
        label: "Appointments logged",
        data: [45, 55],
        backgroundColor: ["#008FD6", "#FF0F65"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  //   const plugins = [
  //     {
  //       id: "customLabels",
  //       afterDraw: (chart: any) => {
  //         const { ctx } = chart;
  //         chart.data.datasets[0].data.forEach((data: [], index: number) => {
  //           const meta = chart.getDatasetMeta(0);
  //           const { x, y, startAngle, endAngle } = meta.data[index];
  //           const midAngle = startAngle + (endAngle - startAngle) / 2;
  //           const xLabel = Math.cos(midAngle) * (chart.width / 2.5) + x;
  //           const yLabel = Math.sin(midAngle) * (chart.height / 2.5) + y;
  //           const label = `${data}% ${chart.data.labels[index]}`;

  //           ctx.textAlign = midAngle < Math.PI ? "left" : "right";
  //           ctx.textBaseline = "middle";
  //           ctx.font = "bold 16px sans-serif";
  //           ctx.fillStyle = "#000";
  //           ctx.fillText(`${data}%`, xLabel, yLabel - 10);
  //           ctx.font = "normal 12px sans-serif";
  //           ctx.fillText(chart.data.labels[index], xLabel, yLabel + 10);
  //           ctx.strokeStyle = "#ddd";
  //           ctx.lineWidth = 2;
  //           ctx.beginPath();
  //           ctx.moveTo(x, y);
  //           ctx.lineTo(xLabel, yLabel);
  //           ctx.stroke();
  //         });
  //       },
  //     },
  //   ];
  return (
    <div className="h-full flex justify-center items-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
