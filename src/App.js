// src/App.js
import React, { useContext } from 'react';
import { NetWorthProvider, NetWorthContext } from './context/NetWorthContext';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NetWorthDisplay from './components/NetWorthDisplay';
import AssetForm from './components/AssetForm';
import LiabilityForm from './components/LiabilityForm';
import SummaryTable from './components/SummaryTable';
import HistoryChart from './components/HistoryChart';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#d32f2f' },
  },
});

const AppContent = () => {
  const { historyData } = useContext(NetWorthContext);

  return (
    <Container maxWidth="sm">
      <NetWorthDisplay />
      <AssetForm />
      <LiabilityForm />
      <SummaryTable />
      <HistoryChart historyData={historyData} />
    </Container>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NetWorthProvider>
      <AppContent />
    </NetWorthProvider>
  </ThemeProvider>
);

export default App;
