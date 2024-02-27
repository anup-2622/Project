// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/user/login', { email, password });
      console.log(response.data);

      // Assuming the backend returns the user's role along with the success message
      const { role } = response.data;

      // Redirect based on user's role
      if (role === 'admin') {
        history.push('/admin-home');
      } else if (role === 'user') {
        history.push('/user-home');
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
