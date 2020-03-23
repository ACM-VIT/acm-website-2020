import React from 'react';
import PropTypes from 'prop-types';

const NavLink = props => {
  const { children, active } = props;

  return (
    <div
      className={`mx-4 cursor-pointer hover:text-blue-300 ${active &&
        'text-acm-blue'}`}
    >
      {children}
    </div>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavLink;
