import React from 'react';
import { useSelector } from 'react-redux';

const Transactions = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <div>
      <h2>Transactions</h2>
      {isAuthenticated ? (
        // Display transaction list
        <ul>
          <li>Transaction 1</li>
          <li>Transaction 2</li>
          {/* ... */}
        </ul>
      ) : (
        // Display login message
        <p>Login to view transactions</p>
      )}
    </div>
  );
};

export default Transactions;
