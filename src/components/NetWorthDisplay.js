// src/components/NetWorthDisplay.js
import React, { useContext } from 'react';
import { NetWorthContext } from '../context/NetWorthContext';
import { Paper, Typography } from '@mui/material';

const NetWorthDisplay = () => {
  const { netWorth } = useContext(NetWorthContext);

  return (
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center', mb: 3 }}>
      <Typography variant="h4">Net Worth</Typography>
      <Typography variant="h2" color={netWorth >= 0 ? "primary" : "error"}>
        ${netWorth.toFixed(2)}
      </Typography>
    </Paper>
  );
};

export default NetWorthDisplay;
