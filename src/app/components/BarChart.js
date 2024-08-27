'use client'
import React, { useRef, useEffect } from 'react'
import { Chart } from 'chart.js/auto';

export default function BarChart() {
  const oChartRef = useRef(null)

  useEffect(() => {
    if (oChartRef.current) {
      if (oChartRef.current.chart) {
        oChartRef.current.chart.destroy()
      }
      const oContext = oChartRef.current.getContext("2d")

      const oNewChart = new Chart(oContext, {
        type: "bar",
        data: {
          labels: ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby", "Emily", "Jack", "David", "Ruby"],
          datasets: [
            {
              labels: "Info",
              data: [34, 64, 23, 45, 67, -100, 23, 34, 64, 23, 45],
              backgroundColor: [
                "rgb(254,223,230)",
                "rgb(255,236,218)",
                "rgb(236,228,204)",
                "rgb(188,207,207)",
                "rgb(198,218,232)",
                "rgb(235,223,255)",
                "rgb(244,244,244)"
              ],
              borderColor: "blue",
              borderWidth: 1,
            }
          ]
        },
        options: {
          borderRadius: 5,
          responsive: true,
          scales: {
            x: {
              type: "category"
            },
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            },
          }
        }
      })

      oChartRef.current.chart = oNewChart
    }
  }, []);

  return (
    <div className='h-[40vh] flex justify-center'>
      <canvas ref={oChartRef} />
    </div>
  )
}
