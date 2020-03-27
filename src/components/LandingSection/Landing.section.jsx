import React from 'react';
import Typewriter from 'typewriter-effect';
import PropTypes from 'prop-types';

const Landing = ({ findOffset }) => {
  // Background image styles
  const backgroundStyling = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/LandingBackground.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section
      ref={el => {
        if (!el) return;
        // Get element's offset Y value
        findOffset(el.getBoundingClientRect().y);
      }}
      className="h-screen flex justify-center items-center bg-landing"
      style={backgroundStyling}
      id="landing-section"
    >
      <h1 className="text-3xl md:text-4xl text-white uppercase mx-4">
        <div className="flex p-8">
          <div>____</div>
          <Typewriter
            options={{
              strings: [
                'Because technology matters',
                "There's future, There's innovation",
                'We do what we dream',
                'Encouraging diversity, igniting minds'
              ],
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
