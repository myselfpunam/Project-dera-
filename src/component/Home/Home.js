import React from 'react';
import './Home.css'
import videobg from '../assets/videos/backgroundVideo.mp4'
import Gallary from '../Gallary/Gallary';
import ShortDes from '../ShortDes/ShortDes';
import ShortBlog from '../ShortBlog/ShortBlog';
import ShortProject from '../ShortProject/ShortProject';
import CarouselSection from '../Carousel/Carousel';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div>
      <CarouselSection></CarouselSection>
      <ShortDes></ShortDes>
      <Gallary></Gallary>
      <ShortProject></ShortProject>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;