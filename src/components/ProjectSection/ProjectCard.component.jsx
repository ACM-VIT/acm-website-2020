import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  const { children, description, image, url } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-64 md:w-448 h-full flex-shrink-0 p-8 shadow-card rounded-lg mx-4">
        <div
          className="w-full h-40 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        <div className="font-bold text-2xl font-black my-4 ">{children}</div>
        <div className="text-justify">{description}</div>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ProjectCard;
