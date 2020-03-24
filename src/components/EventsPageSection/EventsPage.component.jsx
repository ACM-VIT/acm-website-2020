import React from 'react';
import PropTypes from 'prop-types';

const EventsNet = props => {
  const{ desc, image} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return(
    <div className="eventspage-box"
  );
};