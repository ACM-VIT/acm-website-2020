import React from 'react';
import PropTypes from 'prop-types';

const NavLink = props => {
  const { children } = props;

  return (
    <div className="mx-4 cursor-pointer hover:text-blue-300">{children}</div>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired
};

export default NavLink;
