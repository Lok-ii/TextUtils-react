import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <p className="logo">TextUtils</p>
        <nav>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
        </nav>
    </div>
  )
}

export default Header;
