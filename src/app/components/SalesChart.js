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
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Simulación de Ventas Mensuales',
    },
  },
};

const aMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function GenerateRandomSales() {
  return aMonths.map(() => Math.floor(Math.random() * 10000) + 1000);
}

const oInitialData = {
  labels: aMonths,
  datasets: [
    {
      label: 'Ventas 2023',
      data: GenerateRandomSales(),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function SalesChart() {
  const [oSalesData, setSalesData] = useState(oInitialData);

  function updateSales() {
    const oNewData = {
      ...oSalesData,
      datasets: oSalesData.datasets.map(oDataset => ({
        ...oDataset,
        data: GenerateRandomSales()
      }))
    };
    setSalesData(oNewData);
  }

  return (
    <div className='flex flex-col'>
      <Bar options={oOptions} data={oSalesData} />
      <button onClick={updateSales} className='bg-blue-500 p-2 mt-4 self-end text-white shadow-lg rounded-md hover:bg-blue-600 transition-all'>
        Generar Nuevas Ventas
      </button>
    </div>
  );
}
