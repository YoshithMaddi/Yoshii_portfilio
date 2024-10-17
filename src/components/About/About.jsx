import React from 'react';
import './About.css';
import img from '../../assets/theme_pattern.svg';
import profile from '../../assets/profile_img.svg';

const About = () => {
  return (
    <div id='About' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={img} alt="" />
      </div>
      <div className="about-section">
        <div className="left">
          <img src={profile} alt="" />
        </div>
        <div className="right">
          <div className="about-para">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores perferendis temporibus ut corporis. Soluta exercitationem animi recusandae ipsam consectetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis aliquam quas quam nisi, quaerat debitis odio totam!</p>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default About;
