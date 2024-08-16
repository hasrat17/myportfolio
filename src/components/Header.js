import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <header id="home">
      <nav className="navbar">
        <div className="left">Hasrat's Portfolio</div>
        <div className="menu-icon" onClick={handleMenuClick}>
          &#9776;
        </div>
        <ul className={`nav-links ${isSidebarOpen ? 'nav-active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
