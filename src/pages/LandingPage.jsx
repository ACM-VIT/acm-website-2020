import React from 'react';

import Landing from '../components/LandingSection/Landing.section';
import About from '../components/AboutSection/About.section';
import Team from '../components/TeamSection/Team.section';
import Events from '../components/EventsSection/Events.section';
import Blog from '../components/BlogSection/Blog.section';
import Project from '../components/ProjectSection/Project.section';
import Contact from '../components/ContactSection/Contact.section';

const LandingPage = () => {
  return (
    <>
      <Landing />
      <About />
      <Team />
      <Events />
      <Blog />
      <Project />
      <Contact />
    </>
  );
};

export default LandingPage;
