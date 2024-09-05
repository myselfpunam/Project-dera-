import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Gallary/Gallary.css';

const Picture = ({p}) => {
  return (
    <SwiperSlide>
      <img src={p.download_url} alt="" />
    </SwiperSlide>
    
  );
};

export default Picture;