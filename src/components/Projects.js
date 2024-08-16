import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Violence Detection System',
    description: 'I developed and implemented a violence detection system utilizing advanced deep learning techniques. The system achieved an accuracy rate of 95% and was deployed on a Raspberry Pi. The objective was to leverage the capabilities of deep learning and the Raspberry Pi to detect instances of violence. For this purpose, we employed the RWF-2000 dataset, which comprises 2,000 videos from real-world scenarios, including both violent and non-violent content.',
    liveLink: null,
    
  },
  {
    title: 'Sorting Visualization',
    description: 'Develop and implement several sorting algorithms, including Merge Sort, Quick Sort, Heap Sort, Bubble Sort, and Selection Sort, to facilitate the visual observation of their internal processes. Provide a detailed visual representation that illustrates how each algorithm processes and sorts data step by step. This visual depiction offers a comprehensive understanding of the sorting mechanisms, making it accessible for individuals who may not be familiar with these algorithms.',
    liveLink: 'https://sorting-visualizer-fyzo.onrender.com/',
    
  },
  {
    title: 'Count Down Clock',
    description: 'This project features a countdown clock that counts down in reverse and displays a congratulatory message upon completion. It utilizes Express and PostgreSQL for the backend. The dashboard allows users to add a description, attach an image, and include a clickable link on the image. Clicking the image will open the specified link. This functionality can be used to advertise product offers, celebrate special events, or mark occasions such as New Year.',
    liveLink: 'https://takeuforward-frontend.onrender.com/?',
    
  },
  {
    title: 'MNE-Python Open Source Contribution',
    description: 'I contributed to the MNE-Python open-source project, where my changes were successfully integrated into the codebase. While the contribution was modest, it provided valuable experience in navigating open-source collaboration and has motivated me to make more substantial contributions in the future.',
    liveLink: 'https://github.com/mne-tools/mne-python/pull/12464',
    
  },
  
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrevClick = () => {
    setCurrentProject((prevProject) => (prevProject === 0 ? projectData.length - 1 : prevProject - 1));
  };

  const handleNextClick = () => {
    setCurrentProject((prevProject) => (prevProject === projectData.length - 1 ? 0 : prevProject + 1));
  };

  return (
    <section id='projects' className="projectsSection">
      <h1>Projects</h1>
      <div className="carouselContainer">
        <button className="navButton" onClick={handlePrevClick}>❮</button>
        <div className="card">
          <h2>{projectData[currentProject].title}</h2>
          <p>{projectData[currentProject].description}</p>
          <div className="links">
            <a href={projectData[currentProject].liveLink} target="_blank" rel="noopener noreferrer" className="linkButton">View </a>
          </div>
        </div>
        <button className="navButton" onClick={handleNextClick}>❯</button>
      </div>
    </section>
  );
};

export default Projects;
