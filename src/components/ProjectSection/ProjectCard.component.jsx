import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  const { children, description, image } = props;

  const imageStyling = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="w-1/3 mx-4 flex-shrink-0 p-8 shadow-card rounded-lg">
      <div className="bg-red-800 w-full h-40" style={imageStyling} />
      <div className="my-4 font-bold text-4xl">{children}</div>
      <div className="text-justify">{description}</div>
    </div>
  );
};

ProjectCard.propTypes = {
  children: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProjectCard;
