import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // Initialize with "home"

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <AnchorLink className='anchor-link'  href='#home'>
          <p>Home</p>
          {menu === "home" && <img src={underline} alt='' />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("About me")}>
        <AnchorLink className='anchor-link' offset={50} href='#About'>
          <p>About me</p>
          {menu === "About me" && <img src={underline} alt='' />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("Services")}>
        <AnchorLink className='anchor-link' offset={50} href='#skills'>
          <p>Services</p>
          {menu === "Services" && <img src={underline} alt='' />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("Portfolio")}>
        <AnchorLink className='anchor-link' offset={50} href='#work'>
          <p>Portfolio</p>
          {menu === "Portfolio" && <img src={underline} alt='' />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("Contact")}>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <p>Contact</p>
          {menu === "Contact" && <img src={underline} alt='' />}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href='#contact'>
        Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
