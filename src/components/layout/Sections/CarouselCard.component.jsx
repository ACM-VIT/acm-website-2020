import React from 'react';
import PropTypes from 'prop-types';

const EventsCard = props => {
  const { children, desc, image, url } = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <a href={url}>
      <div className="w-448 mx-4 flex-shrink-0 p-8 shadow-card rounded-lg">
        <div className="flex flex-col justify-between items-center">
          <div className="flex items-end justify-between relative w-full">
            <div
              className="shift-up w-40 h-40 rounded-lg absolute flex-shrink-0"
              style={imageStyle}
            />
            <div className="font-black text-2xl text-right text-right my-4 w-full ml-48">
              {children}
            </div>
          </div>
          <div className="text-justify">{desc}</div>
        </div>
      </div>
    </a>
  );
};

EventsCard.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default EventsCard;
