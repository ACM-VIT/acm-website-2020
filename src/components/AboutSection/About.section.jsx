import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';

import { ABOUT } from '../../DataStore';

const About = ({ findOffset }) => {
  const [about] = useState(ABOUT);

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="container mx-auto text-center my-12"
      id="about-section"
    >
      {about.map(section => (
        <div key={section.id}>
          <SectionHeader innerHeader={section.inner}>
            {section.title}
          </SectionHeader>
          <div className="text-xl my-4 text-justified">{section.text}</div>
        </div>
      ))}
    </section>
  );
};

About.propTypes = {
  findOffset: PropTypes.func.isRequired
};

export default About;
