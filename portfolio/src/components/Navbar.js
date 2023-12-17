// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  // Replace 'your_image_url' with the actual URL of your image
  const imageUrl = 'https://cdn.vectorstock.com/i/preview-1x/22/50/developer-line-icon-outline-vector-30762250.jpg';

  return (
    <div class="topnav" id="myTopnav">
    <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <Link to="/Portfolio/About">About</Link>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
  </div> 
  );
};

export default Welcome;
