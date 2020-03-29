/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
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
import { ReactComponent as FAQ } from '../vectors/Chatbot.svg';

// Alert options
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
};

const LandingPage = ({ findOffset }) => {
  const [showBot, setShowBot] = useState(false);

  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Landing findOffset={offsetY => findOffset(offsetY, 0)} />
        <About findOffset={offsetY => findOffset(offsetY, 1)} />
        <Team findOffset={offsetY => findOffset(offsetY, 2)} />
        <Events findOffset={offsetY => findOffset(offsetY, 3)} />
        <Blog findOffset={offsetY => findOffset(offsetY, 4)} />
        <Project findOffset={offsetY => findOffset(offsetY, 5)} />
        <Contact findOffset={offsetY => findOffset(offsetY, 6)} />
        <button
          className={`fixed rounded-full mr-8 flex justify-center items-center right-0 z-50 focus:outline-none ${
            !showBot
              ? `bottom-0 w-16 h-16 bg-acm-blue mb-8`
              : `top-0 bg-red-600 w-8 h-8 mt-8`
          }`}
          type="button"
          onClick={() => setShowBot(!showBot)}
        >
          {!showBot ? (
            <FAQ />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/CloseWhite.png`}
              alt="Close chatbot"
              height="20rem"
              width="20rem"
            />
          )}
        </button>
        <div className={!showBot ? 'hidden' : 'fixed bottom-0 right-0 z-50'}>
          <ChatBot />
        </div>
      </AlertProvider>
    </>
  );
};

LandingPage.propTypes = { findOffset: PropTypes.func.isRequired };

export default LandingPage;
