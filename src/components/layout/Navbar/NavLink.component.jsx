import React from 'react';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';

const NavLink = props => {
  const { children, active, handleClick, size, scrollTo, setHomePos } = props;
  let left = 0;
  return (
    <a href={`#${scrollTo}`}>
      <div
        ref={el => {
          if (!el) return;
          left = el.getBoundingClientRect().x;
          if (children === 'Home') setHomePos(el.getBoundingClientRect().x);
        }}
        className={`mx-4 cursor-pointer hover:text-blue-300 focus:outline-none ${active &&
          'text-acm-blue'}`}
        onClick={() => handleClick(size.width.toFixed(2), left)}
        role="button"
        tabIndex="0"
      >
        {children}
      </div>
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  size: PropTypes.objectOf(PropTypes.any).isRequired,
  scrollTo: PropTypes.string.isRequired,
  setHomePos: PropTypes.func.isRequired
};

export default withSize()(NavLink);
