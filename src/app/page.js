import React from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { ReactChart } from './components/ReactChart';
import { SalesChart } from './components/SalesChart';

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col bg-gray-50 shadow-xl w-2/3 px-12 py-6'>
        <h1 className='font-bold text-3xl text-center'>ChartJs</h1>
        <div className='border-b-2 py-16'>
          <h3 className='font-bold text-xl'>Sales chart</h3>
          <SalesChart />
        </div>
        <div className='border-b-2 py-16'>
          <h3 className='font-bold text-xl'>React chart</h3>
          <ReactChart />
        </div>
        <div className='border-b-2 py-16'>
          <h3 className='font-bold text-xl'>Pie chart</h3>
          <PieChart />
        </div>
        <div className='border-b-2 py-16'>
          <h3 className='font-bold text-xl'>Bar chart</h3>
          <BarChart />
        </div>
      </div>
    </div>
  );
}
