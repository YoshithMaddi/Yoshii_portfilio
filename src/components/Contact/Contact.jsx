import React from 'react';
import './Contact.css';
import img from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import contact from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={img} alt="Pattern" />
      </div>    
      <div className="contact-section">
        
        {/* Left Side - Contact Details */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam?</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email Icon" />
              <p>yoshithmy23@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={contact} alt="Phone Icon" />
              <p>+91 9876543210</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location Icon" />
              <p>CA, United States</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-right">
         
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder='Enter your name' name='name' />
            
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder='Enter your email' name='email' />
            
            <label htmlFor="message">Write your message here</label>
            <textarea id="message" name="message" rows="8" placeholder='Enter your message'></textarea>
            
            <button type='submit' className="contact-submit">Submit Now</button>
          
        </form>

      </div>
    </div>
  );
};

export default Contact;
