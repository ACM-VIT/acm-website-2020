/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Sections
import Landing from '../components/LandingSection/Landing.section';
import Project from '../components/ProjectSection/Project.section';
import Contact from '../components/ContactSection/Contact.section';
import Events from '../components/EventsSection/Events.section';
import About from '../components/AboutSection/About.section';
import Team from '../components/TeamSection/Team.section';
import Blog from '../components/BlogSection/Blog.section';
import ChatBot from '../components/ChatBotSection/ChatBot';

// Alert options
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
};

const LandingPage = ({ findOffset }) => {
  return (
    <>
      <ChatBot />
      <AlertProvider template={AlertTemplate} {...options}>
        <Landing findOffset={offsetY => findOffset(offsetY, 0)} />
        <About findOffset={offsetY => findOffset(offsetY, 1)} />
        <Team findOffset={offsetY => findOffset(offsetY, 2)} />
        <Events findOffset={offsetY => findOffset(offsetY, 3)} />
        <Blog findOffset={offsetY => findOffset(offsetY, 4)} />
        <Project findOffset={offsetY => findOffset(offsetY, 5)} />
        <Contact findOffset={offsetY => findOffset(offsetY, 6)} />
      </AlertProvider>
    </>
  );
};

LandingPage.propTypes = { findOffset: PropTypes.func.isRequired };

export default LandingPage;
