// src/components/AssetForm.js
import React, { useState, useContext } from 'react';
import { NetWorthContext } from '../context/NetWorthContext';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';

const AssetForm = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { assets, setAssets } = useContext(NetWorthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && value) {
      const newAsset = { name, value: parseFloat(value) };
      setAssets([...assets, newAsset]);
      setOpenSnackbar(true);  // Show success notification
      setName('');
      setValue('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>Add Asset</Typography>
      <TextField
        label="Asset Name"
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Asset
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Asset added successfully!"
      />
    </Box>
  );
};

export default AssetForm;
