// src/CarTable.js
import React, { useEffect } from 'react';
import './CarList.css';

const CarList = ({ carData }) => {
  useEffect(() => {
    const calculateScrollbarWidth = () => {
      // Get the elements when the component is mounted
      const tblContent = document.querySelector('.tbl-content');
      const tblTable = document.querySelector('.tbl-content table');
      const tblHeader = document.querySelector('.tbl-header');

      // Ensure the elements are available
      if (tblContent && tblTable && tblHeader) {
        // Calculate the scrollbar width
        const scrollWidth = tblContent.offsetWidth - tblTable.offsetWidth;

        // Adjust the padding-right for the .tbl-header element
        tblHeader.style.paddingRight = `${scrollWidth}px`;
      }
    };

    // Call the function to calculate scrollbar width
    calculateScrollbarWidth();

    // Attach the window resize event listener
    window.addEventListener('resize', calculateScrollbarWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', calculateScrollbarWidth);
    };
  }, []);

  return (
    <div className="center-table">
      <h1>Car Racing Table Top in 19th Century</h1>
      <table>
        <thead className="tbl-header">
          <tr>
            <th>Name</th>
            <th>Miles per Gallon</th>
            <th>Cylinders</th>
            <th>Displacement</th>
            <th>Horsepower</th>
            <th>Weight (in lbs)</th>
            <th>Acceleration</th>
            <th>Year</th>
            <th>Origin</th>
          </tr>
        </thead>
        <tbody className="tbl-content">
          {carData.map((car, index) => (
            <tr key={index}>
              <td>{car.Name}</td>
              <td>{car.Miles_per_Gallon}</td>
              <td>{car.Cylinders}</td>
              <td>{car.Displacement}</td>
              <td>{car.Horsepower}</td>
              <td>{car.Weight_in_lbs}</td>
              <td>{car.Acceleration}</td>
              <td>{car.Year}</td>
              <td>{car.Origin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
