// User.js

import React from 'react';
import { useAuth } from './AuthContext';

const User = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Welcome User!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default User;
