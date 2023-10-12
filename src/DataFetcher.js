// src/DataFetcher.js
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('/.netlify/functions/api/demo') // Use a relative path due to the proxy setup
      .then((response) => response.json())
      .then((data) => setCarData(data));
  }, []);

  return carData;
};

export default DataFetcher;
