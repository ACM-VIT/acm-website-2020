import React from 'react';
import PropTypes from 'prop-types';

const EventsCard = props => {
  const { children, desc, image } = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="events-box w-1/3 mx-4 flex-shrink-0 p-8 shadow-card rounded-lg">
      <div
        className="bg-red-800 w-40 h-40 mt-12 ml-3 rounded-lg absolute"
        style={imageStyle}
      />
      <div className="my-4 font-bold text-3xl text-right mt-12">{children}</div>
      <div className="text-justify">{desc}</div>
    </div>
  );
};

EventsCard.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default EventsCard;
