// src/components/HistoryChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
// Import necessary Chart.js modules
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

// Register the modules for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoryChart = ({ historyData }) => {
  const data = {
    labels: historyData.map(entry => entry.date),
    datasets: [
      {
        label: 'Net Worth Over Time',
        data: historyData.map(entry => entry.net_worth),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3, // Smoother line curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  // Allows height control via CSS
  };

  return (
    <Box sx={{ mb: 4, p: 3, height: 400 /* Set a fixed height for the chart */ }}>
      <Typography variant="h6" align="center" gutterBottom>Net Worth History</Typography>
      <Line data={data} options={options} />
    </Box>
  );
};

export default HistoryChart;
