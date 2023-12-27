// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and achievements!</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </div>
  );
};

export default Home;
