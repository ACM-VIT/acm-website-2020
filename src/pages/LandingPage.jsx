import React from 'react';
import PropTypes from 'prop-types';

import Landing from '../components/LandingSection/Landing.section';
import About from '../components/AboutSection/About.section';
import Team from '../components/TeamSection/Team.section';
import Events from '../components/EventsSection/Events.section';
import Blog from '../components/BlogSection/Blog.section';
import Project from '../components/ProjectSection/Project.section';
import Contact from '../components/ContactSection/Contact.section';

const LandingPage = ({ findOffset }) => {
  return (
    <div className="w-screen">
      <Landing findOffset={offsetY => findOffset(offsetY, 0)} />
      <About findOffset={offsetY => findOffset(offsetY, 1)} />
      <Team findOffset={offsetY => findOffset(offsetY, 2)} />
      <Events findOffset={offsetY => findOffset(offsetY, 3)} />
      <Blog findOffset={offsetY => findOffset(offsetY, 4)} />
      <Project findOffset={offsetY => findOffset(offsetY, 5)} />
      <Contact findOffset={offsetY => findOffset(offsetY, 6)} />
    </div>
  );
};

LandingPage.propTypes = { findOffset: PropTypes.func.isRequired };

export default LandingPage;
