import React from 'react';
import PropTypes from 'prop-types';

// Components
import ContactCard from './ContactCard.component';

// Utility functions
import offsetY from '../../utils/offsetY';

const Contact = ({ findOffset }) => {
  return (
    <section
      ref={el => offsetY(el, findOffset)}
      className="mb-32"
      id="contact-section"
    >
      <div className="h-32 w-full" />
      <ContactCard />
    </section>
  );
};

Contact.propTypes = { findOffset: PropTypes.func.isRequired };

export default Contact;
