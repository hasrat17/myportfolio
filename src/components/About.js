import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      heading: 'B.Tech - Aliah University',
      duration: '2016-2020',
      details: 'I completed my Bachelor of Technology (B.Tech) degree in Computer Science from Aliah University, Kolkata, West Bengal. During my time at the university, I acquired extensive knowledge in core computer science subjects, including Operating Systems and Data Structures and Algorithms and other subjects.',
    },
    {
      heading: 'M.Tech - IIT Patna',
      duration: '2021-2023',
      details: 'I attained an All India Rank of 703 in the GATE Exam and subsequently pursued a Master of Technology (M.Tech) at IIT Patna. During my tenure at IIT Patna, I focused on advanced topics in Computer Science, including Machine Learning and Deep Learning. This period was one of the most fulfilling experiences of my life, not only due to the rigorous academic curriculum but also because of my active participation in various extracurricular activities. I engaged in a variety of games and achieved notable success, including winning a gold medal in a chess tournament.',
    },
    {
      heading: 'HCL Tech',
      duration: '2023-2024',
      details: 'I joined HCL Tech in 2023, where I contributed to the Data Center Energy Savings (DES) project. This project focused on optimizing power consumption in data centers. My role involved enhancing server power efficiency and developing several data collection and automation scripts to support these optimization efforts.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  return (
    <section id="about" className="aboutSection">
      <h1>About Me</h1>
      <div className="carouselContainer">
        <button className="navButton" onClick={handlePrev}>❮</button>

        <div className="card">
          <h2>{experiences[currentIndex].heading}</h2>
          <h3>{experiences[currentIndex].duration}</h3>
          <p>{experiences[currentIndex].details}</p>
        </div>
        <button className="navButton" onClick={handleNext}>❯</button>
      </div>
    </section>
  );
};

export default About;
