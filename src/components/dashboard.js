// Dashboard.js
import React from 'react';
import Sidebar from './sidebar';

import MainContent from './MainContent';


const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;

