import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EventsNet = props => {
  const { name, desc, image, url, date } = props;

  // Image styling
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <VerticalTimelineElement
      iconStyle={{ background: '#0085B9', color: '#fff' }}
    >
      <a href={url}>
        <div className="w-56 md:w-full flex flex-col md:flex-row justify-center items-center shadow-card p-4 md:p-2">
          <div
            className="h-48 md:h-40 w-48 md:w-40 flex-shrink-0 m-2"
            style={imageStyle}
          />
          <div className="ml-2">
            <div className="text-left text-sm md:text-xl font-bold text-left">
              {name}
            </div>
            <div className="hidden md:block text-left">{desc}</div>
            <div className="text-left text-xs md:text-sm font-bold text-left">
              {date}
            </div>
          </div>
        </div>
      </a>
    </VerticalTimelineElement>
  );
};

EventsNet.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string
};

EventsNet.defaultProps = { url: '' };

export default EventsNet;
