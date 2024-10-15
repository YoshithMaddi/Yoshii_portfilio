import React from 'react'
import './Hero.css'
import image from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'> 
      <img src={image} alt="" />
      <h1> <span>I'm Yoshith</span>, frontend developer based in India.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate labore iusto perferendis consequuntur perspiciatis sint aperiam, provident unde nobis quam assumenda?</p>
      <div className="hero-actions">
        <div className="connect">Connect with me</div>
        <div className="my-resume">MY resume</div>
      </div>
    </div>
  )
}

export default Hero
