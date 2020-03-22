import React from 'react';

// Sections
import Navbar from './components/layout/Navbar';
import LandingPage from './components/LandingSection/Landing.section';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
};

export default App;
