import React from 'react'
import './Fotter.css'
import logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Fotter = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="top-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quae.</p>
            </div>
            <div className="top-right">
                <div className="email-input">
                    <img src={user_icon} alt="" /> 
                    <input type="email"  placeholder='Enter your email'/>
                    {/* <p className="subscribe">Subscribe</p> */}
                </div>  
                <div className="subscribe">Subscribe</div>  
            </div>    
        </div>
        <hr />
        <div className="bottom">
            <p className="bottom-left">
            © 2023 Alex Bennett. All rights reserved. 
            </p>
            <div className="fotter-right">
                <p>Term of Services</p>

                <p>Connect with me</p>
                <p></p>
            </div>
        </div>
      
    </div>
  )
}

export default Fotter
