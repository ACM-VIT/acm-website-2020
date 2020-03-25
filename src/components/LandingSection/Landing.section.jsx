import React from 'react';
import Typical from 'react-typical';
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
      <h1 className="text-4xl text-white uppercase">
        <Typical
          steps={[
            '______because technology matters',
            3000,
            "______there's future, there's innovation",
            3000,
            '______We do what we dream',
            3000,
            '______Encouraging diversity, igniting minds',
            3000
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
    </section>
  );
};

Landing.propTypes = { findOffset: PropTypes.func.isRequired };

export default Landing;
