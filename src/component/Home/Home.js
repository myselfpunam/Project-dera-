import React from 'react';
import './Home.css'
import Gallary from '../Gallary/Gallary';
import ShortDes from '../ShortDes/ShortDes';
import ShortBlog from '../ShortBlog/ShortBlog';
import ShortProject from '../ShortProject/ShortProject';
import CarouselSection from '../Carousel/Carousel';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';


const Home = () => {
  return (
    <div>
      <CarouselSection></CarouselSection>
      <ShortProject></ShortProject>
      <ShortDes></ShortDes>
      <Services></Services>
      <Gallary></Gallary>
      <ShortBlog></ShortBlog>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;