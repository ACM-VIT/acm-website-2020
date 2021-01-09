import React, { useRef } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Close from '../../vectors/Close.svg';

const EventsNet = props => {
  const { image, name, desc, date, title, info, modalImg } = props;
  const ref = useRef();

  return (
    <VerticalTimelineElement
      iconStyle={{ background: '#0085B9', color: '#fff' }}
    >
      <Popup
        ref={ref}
        trigger={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <button
            type="button"
            className="w-56 md:w-full flex flex-col md:flex-row justify-center items-center shadow-small-card md:shadow-card p-4 md:p-2 focus:outline-none"
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
        <div className="p-2 sm:p-6 relative">
          <img
            src={Close}
            alt="Close Popup"
            height="20"
            width="20"
            className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer"
            onClick={() => ref.current.close()}
          />
          <h1 className="text-center sm:text-left sm:mb-2 text-base sm:text-2xl font-bold">
            {title}
          </h1>
          <h3 className="text-center sm:text-left mb-2 text-sm sm:text-lg font-bold">
            {date}
          </h3>
          <img src={modalImg} alt="Event" className="w-3/4 mx-auto mt-2 mb-4" />
          {info.map(para => (
            <p className="mt-2 text-xs sm:text-base">{para}</p>
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
  info: PropTypes.arrayOf(PropTypes.any).isRequired,
  modalImg: PropTypes.string.isRequired
};

// eslint-disable-next-line react/default-props-match-prop-types
EventsNet.defaultProps = { url: '' };

export default EventsNet;
