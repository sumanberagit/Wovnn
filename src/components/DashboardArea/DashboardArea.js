import React from 'react';
import './DashboardArea.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';


function DashboardArea() {
    return  <div className="dashboard-container">
      <div className="sidebar-main">
    <Sidebar />
    </div>
    <div className="header-dasboard main_container">
    <Header />
  <Dashboard />
    </div>
  
</div>;
}

export default DashboardArea;
