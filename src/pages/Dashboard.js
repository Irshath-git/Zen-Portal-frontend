import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title
);

function Dashboard() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Codekata",
        data: [3, 6, 9],
        backgroundColor: "#f9baba",
        borderColor: "#f9baba",
        borderWidth: 1,
      },
    ],
  };

  const data1 = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Webkata",
        data: [2, 4, 6],
        backgroundColor: "#f9baba",
        borderColor: "#f9baba",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <>
      <div className="w-full h-auto flex flex-col ">
        <div className="w-auto h-auto font-Poppins bg-white  ml-16 flex lg:flex-row md:flex-row flex-col ">
          <p className="text-lg p-2 font-Poppins">Activities</p>
          <div className="md:w-1/3 w-4/5 h-auto my-5 md:h-64  md:mx-10 md:my-10 bg-white text-black shadow-xl rounded-xl">
            <div className="m-2">
              <p className="font-Poppins float-left">Today : 0</p>
              <p className="font-Poppins float-right">Total : 960</p>
            </div>
            <Bar data={data} options={options} className="py-2 px-4"></Bar>
          </div>
          <div className="md:w-1/3 w-4/5 h-auto md:h-64  md:mx-10 md:my-10 bg-white text-black shadow-xl rounded-xl">
            <div className="m-2">
              <p className="font-Poppins float-left">Today : 0</p>
              <p className="font-Poppins float-right">Total : 1080</p>
            </div>
            <Bar data={data1} options={options}></Bar>
          </div>
        </div>

        <div className="w-full h-auto mx-auto bg-white flex  items-center ">
          <div className="w-full md:w-2/5 bg-white mx-auto p-4 shadow-2xl  md:mt-20 mt-48 ">
            <div className="w-full m-2 text-sm">
              <p className="font-Poppins ">Submitted Tasks : 14</p>
              <p className="font-Poppins ">Pending Tasks : 15</p>
            </div>
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Tasks",
                  },
                },
              }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "Submitted Tasks",
                    data: [5, 10, 15, 1],
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                ],
                datasets1: [
                  {
                    label: "Pending Tasks",
                    data: [5, 10, 15, 1],
                    fill: false,
                    borderColor: "rgb(80, 192, 200)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
