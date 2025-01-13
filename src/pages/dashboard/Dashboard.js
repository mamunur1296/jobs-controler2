// src/pages/Dashboard.js
import React from 'react';
import DashBoirdNave from '../../components/dashboard/DashBoirdNave';
import { Outlet } from 'react-router-dom';




const Dashboard = () => {
    
  return(
    <div className='md:flex bg-gray-700'>
        <div>
             <DashBoirdNave />
        </div>
        <div className='w-full'>
       
            <div className='md:ps-20 mt-10'>
            <Outlet />
            </div>
            </div>
    </div>
  )
};

export default Dashboard;
