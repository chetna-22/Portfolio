import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; 
import img1 from '../assets/vchatImag.jpg';
import img2 from '../assets/weatherImg.jpg';
import img3 from '../assets/socialMedia.jpg';

const Projects = () => {
  // Replace with your project data
  const projects = [
    {
      title: 'V-Chat App',
      description: 'This is videocalling app made entirly by MERN stack',
      demoLink: 'https://project1demo.com',
      codeLink: 'https://github.com/chetna-22/v-chat-new',
      image: img1,
    },
    {
      title: 'Weather App',
      description: 'This weather app is made using Node JS and Express JS',
      demoLink: 'https://project2demo.com',
      codeLink: 'https://github.com/yourgithub/project2',
      image: img2,
    },
    {
      title: 'Twit IT',
      description: 'This is a social media platform developed only for the employees of Infosys.This is made using MERN Stack',
      demoLink: 'https://project2demo.com',
      codeLink: 'https://github.com/yourgithub/project2',
      image: img3,
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
