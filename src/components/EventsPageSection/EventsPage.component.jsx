/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EventsNet = props => {
  const{ desc, image} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return(
    <VerticalTimelineElement>
      <div className="w-full h-16 p-8 shadow-card">
          <div className="flex justify-between relative">
            <div
              className="bg-red-800 w-32 h-24"
              style={imageStyle}
            />
          </div>
          <div className="text-right ml-16">{desc}</div>
      </div>
    </VerticalTimelineElement>
  );
};

EventsNet.propTypes = {
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default EventsNet;