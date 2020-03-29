import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = props => {
  const { children, logo, url } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
      <div className="flex justify-center md:justify-start items-center my-4">
        <div className="md:w-1/4 flex justify-center">{logo}</div>
        <div className="md:w-3/4 text-xl ml-4 md:ml-20 text-right">
          {children}
        </div>
      </div>
    </a>
  );
};

SocialLink.propTypes = {
  children: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired
};

export default SocialLink;
