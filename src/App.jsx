import logo from "./images/logo.svg";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-5 flex flex-col justify-center h-screen">
        <article
          id="chart-top"
          className="header-bg p-8 rounded-2xl shadow flex item-center justify-between"
        >
          <h2 className="text-white font-bold text-3xl">
            <span className="block text-base font-normal">My balance</span>{" "}
            $921.48
          </h2>
          <img src={logo} alt="" />
        </article>

        <article className="bg-white p-8 mt-8 rounded-2xl shadow">
          <article id="bar-chart" className="pb-8">
            <h1 className="font-bold text-2xl mid: text-3xl mb-5">
              Spending - Last 7 days
            </h1>
            <Bar data={state} />
          </article>

          <article
            id="chart-bottom"
            className="pt-8 border-t border-slate-200 flex items-center justify-between"
          >
            <h2 className="font-bold text-4xl ">
              <span className="text-base font-normal block opacity-75 ">
                Total this month
              </span>{" "}
              $478.33
            </h2>

            <h3 className="flex flex-col items-end justify-end text-base font-bold">
              +2.4%{" "}
              <span className="font-normal block opacity-75">
                from last month
              </span>
            </h3>
          </article>
        </article>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt/hub/expenses-chart-component-K4OkwiRTQ4"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/onurozbey" target="_blank">
          Onur Özbey
        </a>
        .
      </div>
    </>
  );
}

export default App;
