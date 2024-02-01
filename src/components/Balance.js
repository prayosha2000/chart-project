import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <div>
      <h2>Balance: {isAuthenticated ? '$1000' : 'Login to view balance'}</h2>
    </div>
  );
};

export default Balance;
