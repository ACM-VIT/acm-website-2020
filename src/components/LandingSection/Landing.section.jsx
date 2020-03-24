import React from 'react';
import PropTypes from 'prop-types';

const Landing = ({ findOffset }) => {
  const backgroundStyling = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/LandingBackground.png)`,
    backgroundSize: 'cover'
  };

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y);
      }}
      className="h-screen bg-gray-500 flex justify-center items-center bg-landing"
      style={backgroundStyling}
      id="landing-section"
    >
      <h1 className="text-4xl text-white font-bold">Varying one liner</h1>
    </section>
  );
};

Landing.propTypes = { findOffset: PropTypes.func.isRequired };

export default Landing;
