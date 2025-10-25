'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ParticlesChartProps {
  darkMatterData: number[];
  baryonicData: number[];
  labels: string[];
  className?: string;
}

export default function ParticlesChart({ 
  darkMatterData, 
  baryonicData, 
  labels, 
  className = '' 
}: ParticlesChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Matéria Escura',
        data: darkMatterData,
        borderColor: '#ff69b4',
        backgroundColor: 'rgba(255, 105, 180, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#ff69b4',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Matéria Bariônica',
        data: baryonicData,
        borderColor: '#9d4edd',
        backgroundColor: 'rgba(157, 78, 221, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#9d4edd',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 14,
            weight: 'bold',
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: true,
        text: 'Distribuição de Partículas',
        color: '#ffffff',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ff69b4',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
        border: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
        border: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        title: {
          display: true,
          text: 'Quantidade de Partículas',
          color: '#ffffff',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    elements: {
      line: {
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      },
    },
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
      border: '1px solid rgba(236, 72, 153, 0.3)',
      borderRadius: '1.5rem',
      padding: '2rem',
      backdropFilter: 'blur(12px)'
    }}>
      <div style={{ height: '24rem' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}