import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';
import video from '../assets/videos/backgroundVideo.mp4'
import video2 from '../assets/videos/backgroundVideo2.mp4'
import video3 from '../assets/videos/backgroundVideo3.mp4'
import video4 from '../assets/videos/backgroundVideo4.webm'

const CarouselSection = () => {
  const slides = [
    {
      videoUrl: video,
      title: "Elegant Designs for Modern Living",
      text: "At Dera-interior, we specialize in creating sleek, sophisticated interiors that blend style with modern functionality. Our designs bring elegance to every corner of your home, making modern living effortlessly beautiful.",
    },
    {
      videoUrl: video2,
      title: "Designing Homes with Passion and Precision",
      text: "At Dera-interior, we craft every space with a deep passion for design and a commitment to perfection. Our attention to detail ensures that your home reflects your vision, combining style and functionality with precision.",
    },
    {
      videoUrl: video3,
      title: "Where Creativity Meets Comfort",
      text: "At Dera-Interior, we blend innovative design with cozy, functional living. Our goal is to create beautiful spaces that reflect your style and offer the comfort you deserve, making every room a perfect balance of creativity and ease.",
    },
    {
      videoUrl: video4,
      title: "Where Creativity Meets Comfort",
      text: "At Dera-Interior, we blend innovative design with cozy, functional living. Our goal is to create beautiful spaces that reflect your style and offer the comfort you deserve, making every room a perfect balance of creativity and ease.",
    },
  ];
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      emulateTouch
      interval={5000}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} className="control-prev">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} className="control-next">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )
      }
    >
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <video
            className="carousel-video"
            src={slide.videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className='content'>
          <h2 className='primary-text'>{slide.title}</h2>
          <h2 className='secondary-text'>{slide.text}</h2>
          <div className='d-flex gap-4'>
            <button className='home-btn '>Our Products</button>
            <button className='home-btn '>Our Services</button>
          </div>
        </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSection;