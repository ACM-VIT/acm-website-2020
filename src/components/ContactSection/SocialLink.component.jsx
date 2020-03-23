import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = props => {
  const { children, logo } = props;

  return (
    <div className="flex items-center my-8">
      <div className="w-1/4 flex justify-center">{logo}</div>
      <div className="w-3/4 text-xl ml-20">{children}</div>
    </div>
  );
};

SocialLink.propTypes = {
  children: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired
};

export default SocialLink;
