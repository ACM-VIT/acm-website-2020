import React from 'react';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';

const NavLink = props => {
  const { children, active, scrollTo, getProps } = props;

  return (
    <a href={`${window.location.origin}/#${scrollTo}`}>
      <div
        ref={el => {
          if (!el) return;
          // Get width and offsetX of the link
          getProps(
            el.getBoundingClientRect().width,
            el.getBoundingClientRect().x
          );
        }}
        className={`cursor-pointer hover:text-blue-300 focus:outline-none mx-4 ${active &&
          window.location.href !== `${window.location.origin}/blogs` &&
          window.location.href !== `${window.location.origin}/events` &&
          'text-acm-blue'}`}
        role="button"
        tabIndex={0}
        data-aos="zoom-in"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="800"
      >
        {children}
      </div>
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  scrollTo: PropTypes.string.isRequired,
  getProps: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default withSize()(NavLink);
