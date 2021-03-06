import React from 'react';
import PropTypes from 'prop-types';

const BlogCard = props => {
  const { children, image, desc, url } = props;

  return (
    <a href={url} className="flex-shrink-0 m-4">
      <div className="w-96 h-full shadow-small-card md:shadow-card flex-shrink-0 rounded-lg p-4">
        <div className="flex items-center h-full justify-between">
          <div
            className="h-32 w-32 flex-shrink-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`
            }}
          />
          <div className="flex flex-col pl-4">
            <div className="font-bold text-left text-center">{children}</div>
            <div className="text-left text-sm text-justify">{desc}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

BlogCard.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default BlogCard;
