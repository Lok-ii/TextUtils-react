import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <p className="logo">TextUtils</p>
        <nav>
            {/* <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact</Link> */}
        </nav>
    </div>
  )
}

export default Header;
