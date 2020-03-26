import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = props => {
  const { children, innerHeader } = props;

  return (
    <header
      className={`text-acm-blue text-4xl uppercase text-center font-bold w-full my-8 ${!innerHeader &&
        'pt-32'}`}
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
