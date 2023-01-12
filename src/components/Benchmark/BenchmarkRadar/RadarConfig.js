import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";



ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const options = {
    responsive: true,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    tension: 0,
    borderJoinStyle: "round",
    plugins: {
      legend: {
        font: {
          size: 12,
          family: "Roboto"
      },
          display: false,
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  function randomize() {
      return (Math.random().toFixed() * 15)
  }

export const data1 = {
  labels: ["Quality", "Safety", "Service", "Design", "Cleaning", "Foodtaste"],
  datasets: [
    {
      label: "Company 1",
      data: [randomize(), 30, 8, 5, randomize(), 3],
      backgroundColor: "rgba(88, 61, 245, 0.4)",
      borderColor: "rgba(88, 61, 245, 0.2)",
      borderWidth: 1
    }
  ]
};
export const data2 = {
    labels: ["Quality", "Safety", "Service", "Design", "Cleaning", "Foodtaste"],
    datasets: [
      {
        label: "Company 1",
        data: [randomize(), 30, 10, 5, randomize(), 3],
        backgroundColor: "rgba(12, 192, 240, 0.4)",
        borderColor: "rgba(12, 192, 240, 0.2)",
        borderWidth: 1
      }
    ]
  };
