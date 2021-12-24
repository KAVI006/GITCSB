import React from "react";
import "./styles.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 45, 76, 55, 77, 84, 91, 37],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 28, 76, 35, 79, 55, 94, 60, 85],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};

export default function App() {
  return (
    <div className="App">
      <Line data={data} legend={legend} options={options} />
    </div>
  );
}
