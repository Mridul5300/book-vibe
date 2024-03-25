import React from 'react';
import Navbar from './NavBar/Navbar';
import Home from './NavBar/Pages.jsx/Home/Home';
import { Outlet } from 'react-router-dom';

const Route = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Route;