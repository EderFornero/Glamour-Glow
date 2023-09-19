import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface SellersPiesProps {
  sellerMetrics: {
    activeSellers: number
    inactiveSellers: number
  }
}

const SellersPies: React.FC<SellersPiesProps> = ({ sellerMetrics }): JSX.Element => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  const data = {
    labels: ['Active sellers', 'Inactive sellers'],
    datasets: [
      {
        label: 'Sellers Analytics',
        data: [sellerMetrics.activeSellers, sellerMetrics.inactiveSellers],
        backgroundColor: [
          'rgba(94, 255, 177, 1)',
          'rgba(94, 255, 177, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(94, 255, 177, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  return (<Pie data={data} options={options} />)
}
export default SellersPies
