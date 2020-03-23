import React from 'react';

// Sections
import Navbar from './components/layout/Navbar/Navbar';
import LandingPage from './components/LandingSection/Landing.section';
import AboutPage from './components/AboutSection/About.section';
import TeamPage from './components/TeamSection/Team.section';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <TeamPage />
    </>
  );
};

export default App;
