import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <MainSection />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
