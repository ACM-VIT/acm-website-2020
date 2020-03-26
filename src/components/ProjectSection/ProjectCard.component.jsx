import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  const { children, description, image, url } = props;

  const imageStyling = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <a href={url}>
      <div className="w-448 h-full mx-4 flex-shrink-0 p-8 shadow-card rounded-lg">
        <div className="bg-red-800 w-full h-40" style={imageStyling} />
        <div className="my-4 font-bold text-4xl">{children}</div>
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
