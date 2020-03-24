import React from 'react';
import PropTypes from 'prop-types';

const BlogsCard = props => {
  const { children, desc, image } = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="blog-box w-1/3 mx-4 flex-shrink-0 div-8 shadow-2xl rounded-lg">
      <div className="bg-red-800 w-40 h-40 mt-12 ml-3" style={imageStyle} />
      <div className="my-4 font-bold text-3xl text-right mt-12">{children}</div>
      <div className="text-justify">{desc}</div>
    </div>
  );
};

BlogsCard.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default BlogsCard;
