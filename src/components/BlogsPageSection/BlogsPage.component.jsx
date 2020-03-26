/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

const BlogsNet = props => {
  const{ desc, children, image, url} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return(
    <div className="w-3/12 m-12 p-4 shadow-card">
      <a href={url}>
      <div className="flex flex-col">
        <div className="flex items-start justify-around">
          <div
            className="bg-red-800 w-full h-40 blogspage-image pr-24"
            style={imageStyle}
          />
          <div>
            <div className="font-bold blogspage-title text-left w-38 h-4">
              {children}
            </div>
            <div className="text-left text-sm pt-2 w-38">{desc}</div>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
};

BlogsNet.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired
};


export default BlogsNet;