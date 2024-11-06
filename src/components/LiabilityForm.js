// src/components/LiabilityForm.js
import React, { useState, useContext } from 'react';
import { NetWorthContext } from '../context/NetWorthContext';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';

const LiabilityForm = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { liabilities, setLiabilities } = useContext(NetWorthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && value) {
      const newLiability = { name, value: parseFloat(value) };
      setLiabilities([...liabilities, newLiability]);
      setOpenSnackbar(true);  // Show success notification
      setName('');
      setValue('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>Add Liability</Typography>
      <TextField
        label="Liability Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <TextField
        label="Value"
        type="number"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Add Liability
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Liability added successfully!"
      />
    </Box>
  );
};

export default LiabilityForm;
