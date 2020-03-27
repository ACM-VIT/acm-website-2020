/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EventsNet = props => {

  const{ name, desc, image, url, date} = props;

  EventsNet.defaultProps = {url:''};

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return(
    <VerticalTimelineElement iconStyle={{ background: '#0085B9', color: '#fff' }}>
      <a href={url}>
        <div className="w-56 h-64 eventspage-card-mobile shadow-card md:w-full md:h-48 md:p-2">
              <div
                className="h-48 w-48 eventspage-img-mobile md:h-40 md:w-32 m-2 eventspage-img"
                style={imageStyle}
              />
            <div className="text-left text-sm md:text-xl p-1 font-bold text-left">{name}</div>
            <div className="hide-eventstext p-0 md:text-sm p-1 text-left">{desc}</div>
            <div className="text-left text-xs md:text-sm p-1 font-bold text-left">{date}</div>
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
};

export default EventsNet;