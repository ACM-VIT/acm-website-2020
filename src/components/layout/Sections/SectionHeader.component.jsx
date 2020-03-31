import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = props => {
  const { innerHeader, children } = props;

  return (
    <header
      className={`text-acm-blue text-4xl uppercase text-center font-bold w-full my-8 ${!innerHeader &&
        'md:pt-32'}`}
      data-aos-easing="ease-in-cubic"
      data-aos-duration="800"
      data-aos="fade-right"
    >
      {children}
    </header>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.string.isRequired,
  innerHeader: PropTypes.bool
};

SectionHeader.defaultProps = { innerHeader: false };

export default SectionHeader;
