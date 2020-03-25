import React from 'react';
import PropTypes from 'prop-types';

const EventsCard = props => {
  const { children, desc, image } = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="w-448 mx-4 flex-shrink-0 p-8 shadow-card rounded-lg">
      <div className="flex flex-col">
        <div className="flex items-end justify-between relative">
          <div
            className="shift-up bg-red-800 w-40 h-40 rounded-lg absolute flex-shrink-0"
            style={imageStyle}
          />
          <div className="font-bold text-3xl text-right text-right my-4 w-full">
            {children}
          </div>
        </div>
        <div className="text-justify">{desc}</div>
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default EventsCard;
