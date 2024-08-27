'use client'
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const oOptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Vertical Bar Chart',
    },
  },
};

const aLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function GenerateRandomData() {
  return aLabels.map(() => Math.floor(Math.random() * 2001) - 1000);
}

const oData = {
  labels: aLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: GenerateRandomData(),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: GenerateRandomData(),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function ReactChart() {
  const [oChartData, setChartData] = useState(oData);

  function updateData() {
    const oNewData = {
      ...oChartData,
      datasets: oChartData.datasets.map(oDataset => ({
        ...oDataset,
        data: GenerateRandomData()
      }))
    };
    setChartData(oNewData);
  }
  return (
    <div className='flex flex-col'>
      <Bar options={oOptions} data={oChartData} />
      <button onClick={updateData} className='bg-green-500 p-2 mt-12 self-end text-white shadow-lg rounded-md hover:bg-green-600 transition-all'>Actualizar datos</button>
    </div>
  );
}
