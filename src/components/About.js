// About.js
import React from 'react';
import './About.css';
import AboutImg from '../assets/aboutImg.jpg'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 style={{fontSize:"40px"}}>About Me</h2>
      <div className="about-container">
      
        <div className="about-image">
          <img src={AboutImg} alt="About Me" />
        </div>
        <div className="about-content">

          <p>
            Welcome to my world of web development wonders! I'm thrilled to introduce myself as a dynamic full-stack developer with a passion for creating captivating digital experiences. Over the past two years, I've been honing my skills at Infosys, where I've immersed myself in the ever-evolving realm of technology. My expertise lies in the cutting-edge technologies like Java, Springboot , Node JS , Express JS and React JS, allowing me to craft seamless and feature-rich applications that leave users spellbound. With every line of code I write, I strive to merge creativity and functionality, ensuring that each project is an extraordinary fusion of innovation and excellence. 
            Join me on this exhilarating journey as we redefine the boundaries of web development together!
         </p> 
         
        </div>
      </div>
    </section>
  );
};

export default About;







