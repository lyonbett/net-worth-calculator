// src/context/NetWorthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const NetWorthContext = createContext();

export const NetWorthProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);
  const [netWorth, setNetWorth] = useState(0);
  const [historyData, setHistoryData] = useState([]);

  // Calculate net worth whenever assets or liabilities change
  useEffect(() => {
    const totalAssets = assets.reduce((acc, asset) => acc + asset.value, 0);
    const totalLiabilities = liabilities.reduce((acc, liability) => acc + liability.value, 0);
    const newNetWorth = totalAssets - totalLiabilities;
    setNetWorth(newNetWorth);
  }, [assets, liabilities]);

  // Update history whenever net worth changes
  useEffect(() => {
    setHistoryData((prevHistory) => {
      // Avoid duplicate entries by checking the last recorded net worth
      if (prevHistory.length === 0 || prevHistory[prevHistory.length - 1].net_worth !== netWorth) {
        return [
          ...prevHistory,
          { date: new Date().toLocaleDateString(), net_worth: netWorth },
        ];
      }
      return prevHistory;
    });
  }, [netWorth, historyData]);

  return (
    <NetWorthContext.Provider value={{ assets, liabilities, netWorth, historyData, setAssets, setLiabilities }}>
      {children}
    </NetWorthContext.Provider>
  );
};
