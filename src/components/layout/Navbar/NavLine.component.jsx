import React from 'react';
import PropTypes from 'prop-types';

const NavLine = props => {
  const { customStyles, currentLink } = props;

  // All variable styles
  const variableStyles = {
    transform: `translateX(${customStyles[currentLink].left -
      customStyles[0].left}px)`,
    top: '70px',
    width: `${
      customStyles[currentLink].width + 32 > 77.52
        ? customStyles[currentLink].width + 32
        : 77.52
    }px`
  };

  return (
    <div
      className="fixed transition duration-200 ease-in-out overflow-hidden"
      style={variableStyles}
    >
      <svg height="4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="4" fill="#0085B9" />
      </svg>
    </div>
  );
};

NavLine.propTypes = {
  customStyles: PropTypes.arrayOf(PropTypes.any).isRequired,
  currentLink: PropTypes.number.isRequired
};

export default NavLine;
