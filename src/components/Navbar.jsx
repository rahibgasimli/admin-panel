import React from 'react'

import { IoChatboxEllipses, IoNotificationsSharp, IoExit } from "react-icons/io5";

import navbarLogo from "../assets/images/turboaz.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar">
        <Link to="/"><div className="navbar-logo"><img src={navbarLogo} alt="" /></div></Link>
        <input type="text" />
        <div className="navbar-buttons">
            <a href="#"><IoChatboxEllipses/></a>
            <a href="#"><IoNotificationsSharp/></a>
            <a href='#'><IoExit/></a>
        </div>
        
    </section>
  )
}

export default Navbar