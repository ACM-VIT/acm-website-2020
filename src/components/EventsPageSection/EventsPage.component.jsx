import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';

const EventsNet = props => {
  const { image, name, desc, url, date } = props;

  return (
    <VerticalTimelineElement
      iconStyle={{ background: '#0085B9', color: '#fff' }}
    >
      <a href={url}>
        <div className="w-56 md:w-full flex flex-col md:flex-row justify-center items-center shadow-small-card md:shadow-card p-4 md:p-2">
          <div
            className="h-48 md:h-40 w-48 md:w-40 flex-shrink-0 bg-center bg-cover bg-no-repeat m-2"
            style={{
              backgroundImage: `url(${image})`
            }}
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string
};

EventsNet.defaultProps = { url: '' };

export default EventsNet;
