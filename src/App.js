// src/App.js
import React from 'react';
import './App.css';
import DataFetcher from './DataFetcher';
// import CarTable from './CarTable';
import CarList from './CarList';

function App() {
  const carData = DataFetcher();

  return (
    <div className="App">
    <div className="center-table">
      <CarList carData={carData} />
    </div>
  </div>
  );
}

export default App;
