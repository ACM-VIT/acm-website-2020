import React from 'react';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';

const HamburgerNavLink = props => {
  const { children, scrollTo, getProps } = props;

  return (
    <a href={`#${scrollTo}`}>
      <div
        ref={el => {
          if (!el) return;
          getProps(
            el.getBoundingClientRect().width,
            el.getBoundingClientRect().x
          );
        }}
        className="mx-4 cursor-pointer"
        role="button"
        tabIndex="0"
      >
        {children}
      </div>
    </a>
  );
};

HamburgerNavLink.propTypes = {
  children: PropTypes.string.isRequired,
  scrollTo: PropTypes.string.isRequired,
  getProps: PropTypes.func.isRequired
};

export default withSize()(HamburgerNavLink);
