import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <div className="footer">
        <div className="footer-div"><a href="mailto:hasrat407@gmail.com">E-Mail</a></div>
        <div className="footer-div"><a href="https://www.linkedin.com/in/hasrat-ali-25111a221/">LinkedIn</a></div>
        <div className="footer-div"><a href="https://docs.google.com/document/d/1nYukUIfEbPuhepFwf3si7zQtLmSzHJjqRwg8wMnoJtg/edit?usp=sharing">Resume</a></div>
      </div>
    </footer>
  );
};

export default Footer;
