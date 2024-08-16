import React, { useEffect } from 'react';
import Typed from 'typed.js';
import hasrat from './hasrat.jpeg';
import './MainSection.css';

const MainSection = () => {
  useEffect(() => {
    const options = {
      strings: ['Software Development', 'Machine Learning', 'Web Development', 'Computer Science'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false, 
    };

    const typed = new Typed('#element', options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <section className="firstSection">
      <div className="leftSection">
        Hello, I am <span className="purple">Hasrat</span> <br/> I am passionate about<br/>
        <span className="purple" id="element"></span>
      </div>
      <div className="rightSection">
        <img src={hasrat} alt="Hasrat Profile Pic" />
      </div>
    </section>
  );
};

export default MainSection;
