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
    <VerticalTimelineElement iconStyle={{ background: '#0085B9', color: '#0085B9' }}>
      <div className="w-full h-40 p-2 shadow-card">
            <div
              className="bg-red-800 eventspage-img h-32 w-32"
              style={imageStyle}
            />
          <div className="text-sm p-2 text-justify">{desc}</div>
      </div>
    </VerticalTimelineElement>
  );
};

EventsNet.propTypes = {
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default EventsNet;