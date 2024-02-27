// Admin.js

import React from 'react';
import { useAuth } from './AuthContext';

const Admin = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Welcome Admin!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;
