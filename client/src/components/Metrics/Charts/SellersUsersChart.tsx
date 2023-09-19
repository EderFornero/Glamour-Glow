import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface SellersUsersPiesProps {
  sellerMetrics: {
    activeSellers: number
    inactiveSellers: number
  }
  userMetrics: {
    activeUsers: number
    inactiveUsers: number
  }
}

const SellersUsersPies: React.FC<SellersUsersPiesProps> = ({ sellerMetrics, userMetrics }): JSX.Element => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  const data = {
    labels: ['Active sellers', 'Active users'],
    datasets: [
      {
        label: 'Accounts Analytics',
        data: [sellerMetrics.activeSellers, userMetrics.activeUsers],
        backgroundColor: [
          'rgba(94, 255, 177, 0.2)',
          'rgba(62, 56, 182, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(94, 255, 177, 1)',
          'rgba(62, 56, 182, 1)',
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
export default SellersUsersPies
