// Achievements.js
import React from 'react';
import './Achievements.css';
import Award from '../assets/awardNew.jpg';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
     <div className='achievements-container'>
      <div className='achievements-image'>
        <img src={Award} alt='award-img'/>
      </div>
     <div className="achievements-content">
        <ul className="achievements-list">
        <li>
            <b>GCP Certified Associate Cloud Engineer</b>
          </li>
          <li>
            <b>Winner of Insta Award 2022 - Infosys Limited: </b>
             Certificate of Appreciation
          </li>
          <li>
            Infosys Certified Java Programmer
          </li>
          <li>
            Acheived 4-star on Hackerrank for problem solving
          </li>
          <li>
            Solved more than 500 problems on various coding platforms including hackerrank , GeksForGeeks and Leetcode
          </li>
        </ul>
      </div>
     </div>
    </section>
  );
};

export default Achievements;
