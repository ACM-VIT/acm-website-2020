/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EventsNet = props => {
  const{ desc, image, url} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return(
    <VerticalTimelineElement iconStyle={{ background: '#0085B9', color: '#0085B9' }}>
      <a href={url}>
        <div className="w-full h-48 p-2 shadow-card">
              <div
                className="m-2 eventspage-img h-40 w-32"
                style={imageStyle}
              />
            <div className="text-sm p-2 text-justify">{desc}</div>
        </div>
      </a>
    </VerticalTimelineElement>
  );
};

EventsNet.propTypes = {
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default EventsNet;