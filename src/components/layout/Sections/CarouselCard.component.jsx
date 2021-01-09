/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CarouselCard = props => {
  const { children, image, desc, url, title, info, date } = props;

  return (
    <>
      {!url ? (
        <Popup
          trigger={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <button type="button">
              <div>
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
  date: PropTypes.string
};

export default CarouselCard;
