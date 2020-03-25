/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

const BlogsNet = props => {
  const{ desc, children, image} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return(
      <div className="w-3/12 m-12 p-4 shadow-card">
        <div className="flex flex-col">
          <div className="flex items-stretch justify-around">
            <div
              className="bg-red-800 w-56 h-40 blogspage-image"
              style={imageStyle}
            />
            <div className="font-bold blogspage-title text-left w-full h-12">
              {children}
            </div>
          </div>
          <div className="text-justify text-sm p-2">{desc}</div>
        </div>
      </div>
  );
};

BlogsNet.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};


export default BlogsNet;