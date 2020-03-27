import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = props => {
  const { children, image, desc, url } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-64 md:w-448 flex-shrink-0 shadow-card rounded-lg h-full mx-4 p-8">
        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex flex-col md:flex-row items-end justify-center md:justify-between relative w-full">
            <div
              className="shift-up w-full md:w-40 h-40 rounded-lg md:absolute flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
            <div className="font-black text-2xl text-center md:text-right w-full my-4 md:ml-48">
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
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string
};

CarouselCard.defaultProps = { url: '' };

export default CarouselCard;
