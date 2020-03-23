import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  return (
    <div className="w-1/3 mx-2 bg-gray-600 flex-shrink-0 p-4">
      <div className="bg-red-800 w-full h-32">Image</div>
      <div>Name</div>
      <div>Description</div>
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
