import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import ImageGallery from 'react-image-gallery';

import { ReactComponent as Email } from '../../../vectors/Email.svg';

// Data
import { DEV_INFO } from '../../../DataStore';

// Prevent default action
const handleOnDragStart = e => e.preventDefault();

const Footer = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div id="footer" className="bg-black text-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center my-8">
        <a
          href={`${window.location.origin}/`}
          className="flex justify-center my-4"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ACMLogo.png`}
            className="w-64 h-20"
            alt="ACM"
          />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=outreach.acmvit@gmail.com"
          className="flex justify-center"
        >
          <span>
            <Email />
          </span>
          <span className="ml-4">outreach.acmvit@gmail.com</span>
        </a>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:my-8">
        <a href="https://vit.ac.in" className="flex justify-center my-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/VITLogo.png`}
            className="w-64 h-20"
            alt="ACM"
          />
        </a>
        <div className="flex justify-center">
          <span>Made with</span>
          <div className="w-8 flex-shrink-0 flex justify-center items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/HeartEmoji.png`}
              className="w-4 flex-shrink-0"
              alt="Heart"
            />
          </div>
          <span>by ACM-VIT</span>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center my-8 p-4 ">
        <div className="-mb-4">Developed By</div>
        <div
          className="w-1/2 sm:w-1/3 md:w-1/2 rounded-lg overflow-hidden flex justify-center items-center mt-8"
          onClick={toggleOpen}
          role="button"
          tabIndex={0}
        >
          <AliceCarousel
            autoPlayInterval={4000}
            mouseTrackingEnabled
            buttonsDisabled
            dotsDisabled
            autoPlay
          >
            {DEV_INFO.map(image => (
              <img
                onDragStart={handleOnDragStart}
                className="rounded-lg"
                src={image.thumbnail}
                alt="Slideshow"
                key={image.id}
              />
            ))}
          </AliceCarousel>
        </div>
      </div>
      <div
        className={`fixed inset-0 h-screen w-screen z-50 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-black w-full h-full flex justify-center items-center cursor-default">
          <div className="w-full md:w-1/2 bg-white text-black relative p-4 flex flex-col justify-center items-center">
            <div className="absolute right-0 top-0 mt-4 mr-4">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Close.png`}
                onClick={() => toggleOpen()}
                className="cursor-pointer"
                type="button"
                alt="Close"
              />
            </div>
            <h1 className="font-white text-acm-blue text-2xl mb-4">
              Developed By
            </h1>
            <div className="w-full">
              <ImageGallery items={DEV_INFO} lazyLoad />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
