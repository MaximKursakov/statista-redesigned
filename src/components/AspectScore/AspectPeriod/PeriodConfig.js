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
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
        display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Aspect Rating Time Period',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

export const data = {
  labels,
  options: {
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
            // This more specific font property overrides the global property
            font: {
                size: 12,
                family: "Roboto"
            }
        }
    }
},
  datasets: [
    {
        fill: true,
        backgroundColor: "#0cc0f0",
        hoverRadius: 12,
        tension: 0.3,
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: '#0cc0f0',
    },
  ],
}

