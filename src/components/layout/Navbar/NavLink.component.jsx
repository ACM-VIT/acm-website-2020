import React from 'react';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';

const NavLink = props => {
  const { children, active, handleClick, size } = props;

  return (
    <div
      className={`mx-4 cursor-pointer hover:text-blue-300 focus:outline-none ${active &&
        'text-acm-blue'}`}
      onClick={() => handleClick(size.width.toFixed(2))}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  size: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withSize()(NavLink);
