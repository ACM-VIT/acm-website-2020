import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  const { children, description, image, url } = props;

  // Image styles
  const imageStyling = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-64 md:w-448 h-full flex-shrink-0 p-8 shadow-card rounded-lg mx-4">
        <div className="w-full h-40" style={imageStyling} />
        <div className="font-bold text-2xl font-black my-4 ">{children}</div>
        <div className="text-justify">{description}</div>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  children: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ProjectCard;
