import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ShortBlog.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; 


const ShortBlog = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=100')
      .then(res => res.json())
      .then(data => setSlides(data))
  }, [])
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Navigation]}
      breakpoints={{
        320: {  
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {  
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {  
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className='blog-swiper' key={index}>
          <div className='blog-container'>
            <img className='blog-img' src={slide.download_url} alt={slide.title} />
            <p className='text-start'>Blog</p>
            <h4 className='text-start'>hello</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShortBlog;