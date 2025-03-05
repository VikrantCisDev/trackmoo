import React, { Children, useState } from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
// import gamersverseText from '../assets/Images/Gamersverse.svg'
// import Footer from './Footer';
import DashboardHeader from './DashboardHeader';
import SideBar from './SideBar';

const MainLayout = ({ children, hideFooter = false, backgroundStyle }) => {
  const currentPath = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <div className="app-container">
      {currentPath === '/signup' && <Header />}
      
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
