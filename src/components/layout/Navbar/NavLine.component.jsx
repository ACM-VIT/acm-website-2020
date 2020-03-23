import React from 'react';
import PropTypes from 'prop-types';

const NavLine = props => {
  const { customStyles } = props;

  return (
    <svg
      width={customStyles.width}
      height="4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="160" height="4" fill="#0085B9" />
    </svg>
  );
};

NavLine.propTypes = {
  customStyles: PropTypes.objectOf(PropTypes.any).isRequired
};

export default NavLine;
