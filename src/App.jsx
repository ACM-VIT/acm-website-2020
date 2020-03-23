import React from 'react';

// Sections
import Navbar from './components/layout/Navbar/Navbar';
import LandingPage from './components/LandingSection/Landing.section';
import AboutPage from './components/AboutSection/About.section';
import TeamPage from './components/TeamSection/Team.section';
import EventsPage from './components/EventsSection/Events.section';
import BlogPage from './components/BlogSection/Blog.section'
import ProjectPage from './components/ProjectSection/Project.section';
import ContactPage from './components/ContactSection/Contact.section';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <TeamPage />
      <EventsPage />
      <BlogPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
};

export default App;
