import React from 'react';
import Balance from './Balance';
import Transactions from './Transactions';
import CategoriesChart from './CategoriesChart';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Balance />
      <Transactions />
      <CategoriesChart />
    </div>
  );
};

export default Dashboard;
