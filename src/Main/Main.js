import React from 'react';
import Navigation from '../component/Navbar/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
