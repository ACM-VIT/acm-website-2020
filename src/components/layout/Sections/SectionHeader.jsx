import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = props => {
  const { children } = props;

  return (
    <header className="text-acm-blue text-4xl uppercase">{children}</header>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default SectionHeader;
