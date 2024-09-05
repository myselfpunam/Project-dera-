import React from 'react';
import Navigation from '../component/Navbar/Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
