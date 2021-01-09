/* eslint-disable react/require-default-props */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Close from '../../../vectors/Close.svg';

const CarouselCard = props => {
  const { children, image, desc, url, title, info, date, modalImg } = props;
  const ref = useRef();

  return (
    <>
      {!url ? (
        <Popup
          ref={ref}
          trigger={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <button type="button" className="focus:outline-none">
              <div className="w-64 md:w-448 flex-shrink-0 shadow-small-card md:shadow-card rounded-lg h-full mx-4 p-8">
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="flex flex-col md:flex-row items-end justify-center md:justify-between relative w-full">
                    <div
                      className="-top-24 w-full md:w-40 h-40 rounded-lg md:absolute flex-shrink-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${image})`
                      }}
                    />
                    <div
                      className="font-black text-2xl text-center md:text-right w-full my-4 md:ml-48"
                      style={{ minHeight: '72px' }}
                    >
                      {children}
                    </div>
                  </div>
                  <div className="text-justify">{desc}</div>
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
            <img
              src={modalImg}
              alt="Event"
              className="w-3/4 mx-auto mt-2 mb-4"
            />
            {info.map(para => (
              <p className="mt-2 text-xs sm:text-base">{para}</p>
            ))}
          </div>
        </Popup>
      ) : (
        <a href={url} target="_blank" rel="noreferrer noopener">
          <div className="w-64 md:w-448 flex-shrink-0 shadow-small-card md:shadow-card rounded-lg h-full mx-4 p-8">
            <div className="flex flex-col justify-between items-center h-full">
              <div className="flex flex-col md:flex-row items-end justify-center md:justify-between relative w-full">
                <div
                  className="-top-24 w-full md:w-40 h-40 rounded-lg md:absolute flex-shrink-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${image})`
                  }}
                />
                <div className="font-black text-2xl text-center md:text-right w-full my-4 md:ml-48">
                  {children}
                </div>
              </div>
              <div className="text-justify">{desc}</div>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

CarouselCard.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.any),
  date: PropTypes.string,
  modalImg: PropTypes.string.isRequired
};

export default CarouselCard;
