import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Gallary.css';


import { EffectCoverflow, Pagination,  Autoplay } from 'swiper/modules';
import Picture from '../Picture/Picture';



const Gallary = () => {
  const [pic , setPic] = useState([])
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=100')
      .then(res => res.json())
      .then(data => setPic(data))
  }, [])
  return (
   <div className='gallary-container'>
    <h1 className='text-container'></h1>
    <h2 className='text-insturction'>Our Photos</h2>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} 
        className="mySwiper"
      >
        
        {
          pic.map(p => (
            <SwiperSlide key={p.id}>
              <Picture p={p} />
            </SwiperSlide>
          ))
        }
        
      </Swiper>
   </div>
  );
};

export default Gallary;