import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      }
    }
  },
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
      text: 'Aspect Rating Time Period',
    },
  },
};

const labels = ['January', 'February', 'March', 'April'];

export const data = {
  labels,
  options: {
    maintainAspectRatio: false,
    scales:
        {
            y: {
                grid: {
                    drawBorder: false, // <-- this removes y-axis line
                    lineWidth: 0.5,
                }
            }
        },
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active
      }
    },
},
plugins: {
    legend: {
        labels: {
            font: {
                size: 12,
                family: "Roboto"
            }
        }
    }
},
  datasets: [
    {
      pointRadius: 0,
        fill: false,
        backgroundColor: "#583df5",
        hoverRadius: 12,
        tension: 0.5,
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        borderColor: '#583df5',
    },
  ],
}

