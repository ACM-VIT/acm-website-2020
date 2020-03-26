import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';

// Data
import { ABOUT } from '../../DataStore';

const About = ({ findOffset }) => {
  const [about] = useState(ABOUT);

  return (
    <section
      ref={el => {
        if (!el) return;
        // Get element's offset Y value
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="container text-center mx-auto my-12"
      id="about-section"
    >
      {about.map(section => (
        <div key={section.id}>
          <SectionHeader innerHeader={section.inner}>
            {section.title}
          </SectionHeader>
          <div className="text-xl text-justified m-4 mx-8 ">{section.text}</div>
        </div>
      ))}
    </section>
  );
};

About.propTypes = {
  findOffset: PropTypes.func.isRequired
};

export default About;
