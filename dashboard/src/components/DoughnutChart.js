import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ data }) => {
  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <Doughnut data={data} />
    </div>
  );
};
