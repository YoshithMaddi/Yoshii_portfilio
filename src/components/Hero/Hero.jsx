import React, { useState, useEffect } from 'react';
import './Hero.css';
import image from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'> 
      <img src={image} alt="Profile" />
      <h1> <span>I'm Yoshith</span>,<br /> frontend developer based in India.</h1>
      
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="my-resume">MY resume</div>
      </div>
    </div>
  );
}

export default Hero;
