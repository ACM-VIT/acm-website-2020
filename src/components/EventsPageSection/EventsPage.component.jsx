import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const EventsNet = props => {
  const { image, name, desc, date, title, info } = props;

  return (
    <VerticalTimelineElement
      iconStyle={{ background: '#0085B9', color: '#fff' }}
    >
      <Popup
        trigger={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <button
            type="button"
            className="w-56 md:w-full flex flex-col md:flex-row justify-center items-center shadow-small-card md:shadow-card p-4 md:p-2"
          >
            <div
              className="h-48 md:h-40 w-48 md:w-40 flex-shrink-0 bg-center bg-cover bg-no-repeat m-2"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
            <div className="ml-2">
              <div className="text-left text-sm md:text-xl font-bold">
                {name}
              </div>
              <div className="hidden md:block text-left">{desc}</div>
              <div className="text-left text-xs md:text-sm font-bold">
                {date}
              </div>
            </div>
          </button>
        }
        position="center"
        modal
      >
        <div className="p-6">
          <h1 className="mb-2 text-2xl font-bold">{title}</h1>
          <h3 className="mb-4 text-lg font-bold">{date}</h3>
          {info.map(para => (
            <p className="mb-2">{para}</p>
          ))}
        </div>
      </Popup>
    </VerticalTimelineElement>
  );
};

EventsNet.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.any).isRequired
};

EventsNet.defaultProps = { url: '' };

export default EventsNet;
