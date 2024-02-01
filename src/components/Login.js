import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login()); // Mock login action
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
