/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EventsNet = props => {
  const{ name, desc, image, url, date} = props;

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return(
    <VerticalTimelineElement iconStyle={{ background: '#0085B9', color: '#fff' }}>
      <a href={url}>
        <div className="w-full h-48 p-2 shadow-card">
              <div
                className="m-2 eventspage-img h-40 w-32"
                style={imageStyle}
              />
            <div className="text-xl p-1 font-bold text-left">{name}</div>
            <div className="text-sm p-1 text-left">{desc}</div>
            <div className="text-sm p-1 font-bold text-left">{date}</div>
        </div>
      </a>
    </VerticalTimelineElement>
  );
};

EventsNet.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default EventsNet;