import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://github.com/chetna-22" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/chetnayadav190" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
