import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = props => {
  const { children, desc, image, url } = props;

  // Image styles
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <a href={url}>
      <div className="w-448 flex-shrink-0 shadow-card rounded-lg h-full mx-4 p-8">
        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex items-end justify-between relative w-full">
            <div
              className="shift-up w-40 h-40 rounded-lg absolute flex-shrink-0"
              style={imageStyle}
            />
            <div className="font-black text-2xl text-right text-right w-full my-4 ml-48">
              {children}
            </div>
          </div>
          <div className="text-justify">{desc}</div>
        </div>
      </div>
    </a>
  );
};

CarouselCard.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string
};

CarouselCard.defaultProps = { url: '' };

export default CarouselCard;
