// App.js

import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute';
import Admin from './components/Admin';
import User from './components/User';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



const App = () => {
  return (
   <Router>
    <Routes>
        <Route element={<PrivateRoute/>}>
            <Route element={<Admin/>} path='/'/>
            <Route element={<User/>} path='/user' />
            </Route>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Dashboard/>} path='/dashboard'/>
    </Routes>
   </Router>
  );
};

export default App;
