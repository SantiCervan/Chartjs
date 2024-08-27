'use client'
import React, { useRef, useEffect } from 'react'
import { Chart, Colors } from 'chart.js/auto';

Chart.register(Colors);

function GenerateRandomData(nCount) {
  return Array.from({ length: nCount }, () => Math.floor(Math.random() * 100) + 1);
}

const aLabels = ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby", "Mark", "Sarah", "Tom"];

export default function PieChart() {
  const oChartRef = useRef(null)

  useEffect(() => {
    if (oChartRef.current) {
      if (oChartRef.current.chart) {
        oChartRef.current.chart.destroy()
      }
      const oContext = oChartRef.current.getContext("2d")
      const oNewChart = new Chart(oContext, {
        type: "pie",
        data: {
          labels: aLabels,
          datasets: [
            {
              label: "Info",
              data: GenerateRandomData(aLabels.length),
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            colors: {
              forceOverride: true
            }
          }
        }
      })
      oChartRef.current.chart = oNewChart
    }
  }, []);

  return (
    <div className='h-[50vh] flex justify-center'>
      <canvas ref={oChartRef} />
    </div>
  )
}
