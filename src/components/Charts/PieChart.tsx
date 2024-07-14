import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { ChartOptions, PluginChartOptions } from "chart.js";

interface PieChartProps {}

const PieChart: FC<PieChartProps> = ({}) => {
  const data1 = { closed: 66, pending: 33 };

  const data = {
    labels: ["closed", "pending"],
    datasets: [
      {
        label: "Appointments logged",
        data: [data1.closed, data1.pending],
        backgroundColor: ["#FF0F65", "#008FD6"],
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

  return (
    <div className="h-full flex justify-center items-center">
      <div className="absolute z-0">
        <div className="translate-y-[-2.5vh]">
          <h1 className="absolute right-0 text-3xl font-bold">
            {data1.pending}%
          </h1>
          <h1 className=" absolute left-0 text-3xl font-bold">
            {data1.closed}%
          </h1>
        </div>
        <h1>
          ----------------------------------------------------------------
        </h1>
        <div className="translate-y-[-0.5vh]">
          <h1 className=" absolute right-0 text-md font-bold">Pending</h1>
          <h1 className="absolute left-0 text-md font-bold">Closed</h1>
        </div>
      </div>
      <div className="h-64 z-10 ">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
