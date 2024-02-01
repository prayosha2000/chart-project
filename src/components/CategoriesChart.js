import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesChart = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <div>
      <h2>Spending Categories</h2>
      {isAuthenticated ? (
        // Display chart
        <p>Chart goes here</p>
      ) : (
        // Display login message
        <p>Login to view spending categories</p>
      )}
    </div>
  );
};

export default CategoriesChart;
