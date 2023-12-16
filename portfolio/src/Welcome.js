// src/Welcome.js
import React from 'react';
import './Welcome.css';
import Navbar from './components/Navbar'; // Make sure to provide the correct path
import { FaLinkedin , FaGithub} from "react-icons/fa6";


const Welcome = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin-profile';
  const githubUrl = 'https://github.com/your-github-username';


  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div class="main-container">
      <div className="welcome-container">
        <div className="left-side">
            <h1 class="text" id="name">Miguel Duarte</h1>
            <p class="text" id="description">Full-stack developer.</p>
            <div class="social">
              <a id="linkedin"><FaLinkedin /></a>
              <a><FaGithub /></a>
            </div>
        </div>
        </div>
        <div class="image-container">
          <img src="https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg" alt="Image 1"/>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
