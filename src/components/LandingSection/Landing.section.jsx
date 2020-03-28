import React from 'react';
import Typewriter from 'typewriter-effect';
import PropTypes from 'prop-types';

// Utility functions
import offsetY from '../../utils/offsetY';

// Data
import { LANDING_LINES } from '../../DataStore';

const Landing = ({ findOffset }) => {
  // Background image styles
  const backgroundStyling = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/LandingBackground.png)`
  };

  return (
    <section
      ref={el => offsetY(el, findOffset)}
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={backgroundStyling}
      id="landing-section"
    >
      <h1 className="text-3xl md:text-4xl text-white uppercase mx-4">
        <div className="flex p-8">
          <div>____</div>
          <Typewriter
            options={{
              strings: LANDING_LINES,
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </h1>
    </section>
  );
};

Landing.propTypes = { findOffset: PropTypes.func.isRequired };

export default Landing;
