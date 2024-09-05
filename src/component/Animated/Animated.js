import React from 'react';
import './Animated.css'
import logo from '../assets/images/cocacola_logo.png'
import product from '../assets/images/cocacola.png'
const Animated = () => {
  return (

    <div className="card">
      <div className="circle" style={{ '--clr': '#f40103' }}>
        <img src={logo} alt="Coca Cola Logo" className="logo" />
      </div>
      <div className="content">
        <h2>cocacola</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus cumque magnam consequatur illum blanditiis nihil.</p>
        <a href="#">Export more</a>
      </div>
      <img src={product} alt="Coca Cola Product" className="product_img" />
    </div>
  );
};

export default Animated;
