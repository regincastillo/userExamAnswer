import React, { FC } from "react";

import { chartOption, chartDatasets, labels } from "@Utils/Constants/ChartConfig";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartTypeRegistry,
  BarElement,
  ArcElement
} from "chart.js";
import { Chart as ChartComponent } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend,
  ArcElement
);

interface ChartProps {
  type: string;
}

const defaultProps = {
  type: "Line",
};

const Chart: FC<ChartProps> = ({ type }) => {
  const options = chartOption[type ];
  console.log("options", options);

  const data = {
    labels,
    datasets: chartDatasets[type],
  };

  return <ChartComponent type={type as keyof ChartTypeRegistry} options={options} data={data} />;
};

Chart.defaultProps = defaultProps;

export default Chart;
