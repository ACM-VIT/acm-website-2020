import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import PropTypes from 'prop-types';

// Utility functions
import offsetY from '../../utils/offsetY';
import loader from '../../utils/loader';

// Data
import { LANDING_LINES } from '../../DataStore';

const Landing = ({ findOffset }) => {
  const [loading, setLoading] = useState(true);

  // Background image styles
  const backgroundStyling = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/LandingBackground.jpg)`
  };

  useEffect(() => {
    loader(setLoading);
  }, []);

  return loading ? (
    <div
      className="w-screen h-screen flex justify-center items-center fixed inset-0 z-50"
      style={{ backgroundColor: '#030303' }}
    >
      <img
        src="./assets/images/Preloader.gif"
        alt="Preloader"
        className="w-40 h-40"
      />
    </div>
  ) : (
    <section
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      ref={el => offsetY(el, findOffset)}
      data-aos-easing="ease-in-cubic"
      style={backgroundStyling}
      data-aos-duration="1000"
      id="landing-section"
      data-aos="fade"
    >
      <h1
        className="text-3xl md:text-4xl text-white uppercase mx-4"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="800"
        data-aos="fade-up"
      >
        <div className="flex p-8">
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
