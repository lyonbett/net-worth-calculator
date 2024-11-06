// src/components/SummaryTable.js
import React, { useContext } from 'react';
import { NetWorthContext } from '../context/NetWorthContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const SummaryTable = () => {
  const { assets, liabilities } = useContext(NetWorthContext);

  return (
    <TableContainer component={Paper} sx={{ mb: 3 }}>
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>Assets & Liabilities Summary</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, index) => (
            <TableRow key={`asset-${index}`}>
              <TableCell>{asset.name}</TableCell>
              <TableCell align="right">Asset</TableCell>
              <TableCell align="right">${asset.value.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          {liabilities.map((liability, index) => (
            <TableRow key={`liability-${index}`}>
              <TableCell>{liability.name}</TableCell>
              <TableCell align="right">Liability</TableCell>
              <TableCell align="right">-${liability.value.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
