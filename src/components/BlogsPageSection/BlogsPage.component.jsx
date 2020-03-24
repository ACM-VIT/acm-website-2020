import React from 'react';
import PropTypes from 'prop-types';

const BlogsNet = props => {
  const{ desc, children, image} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return(
      <div className="w-1/4 m-12 p-4 shadow-card">
        <div className="flex flex-col">
          <div className="flex items-stretch justify-around">
            <div
              className="bg-red-800 w-64 h-40"
              style={imageStyle}
            />
            <div className="font-bold text-3xl text-right text-right my-0 w-full">
              {children}
            </div>
          </div>
          <div className="text-justify">{desc}</div>
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