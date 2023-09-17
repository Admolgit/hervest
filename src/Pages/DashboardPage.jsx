import React from 'react';
import { Outlet } from "react-router-dom";
import DashboardMenu from '../Component/Dashboard/DashboardMenu';
import Header from '../Component/Plans/header';
import MobileNav from '../Component/Plans/MobileNav';

function DashboardPage() {
  return (
    <div>
      <div className='grid grid-cols-10'>
        <div className='col-span-2 bg-white border-r-4 border-[#541645] h-screen pl-2 sm:hidden '>
          <DashboardMenu />
        </div>
        <div className='col-span-8 sm:col-span-10'>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage