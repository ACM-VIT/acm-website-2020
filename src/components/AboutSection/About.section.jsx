import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';

// Utility functions
import offsetY from '../../utils/offsetY';

// Data
import { ABOUT } from '../../DataStore';

const About = ({ findOffset }) => {
  const [about] = useState(ABOUT);

  return (
    <section
      ref={el => offsetY(el, findOffset)}
      className="container text-center mx-auto my-12"
      id="about-section"
    >
      {about.map(section => (
        <div key={section.id}>
          <SectionHeader innerHeader={section.inner}>
            {section.title}
          </SectionHeader>
          <div
            className="text-xl text-justified m-4 mx-8"
            data-aos="fade-up"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="500"
          >
            {section.text}
          </div>
        </div>
      ))}
    </section>
  );
};

About.propTypes = {
  findOffset: PropTypes.func.isRequired
};

export default About;
