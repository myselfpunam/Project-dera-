import React from 'react';
import './Home.css'
import videobg from '../assets/videos/backgroundVideo.mp4'
import Gallary from '../Gallary/Gallary';
import ShortDes from '../ShortDes/ShortDes';
import ShortBlog from '../ShortBlog/ShortBlog';
import ShortProject from '../ShortProject/ShortProject';
const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <div className='overlay'></div>
        <video src={videobg} autoPlay loop muted />
        <div className='content'>
          <h2 className='primary-text'>INOVATIVE IDEAS</h2>
          <h2 className='secondary-text'>FOR YOUR STYLE</h2>
          <div className='d-flex gap-4'>
            <button className='home-btn '>Our Products</button>
            <button className='home-btn '>Our Services</button>
          </div>
        </div>
      </div>
        <ShortDes></ShortDes>
        <Gallary></Gallary>
        <ShortProject></ShortProject>
    </div>
  );
};

export default Home;