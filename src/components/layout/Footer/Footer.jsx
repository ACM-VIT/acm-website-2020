/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import ImageGallery from 'react-image-gallery';
import AliceCarousel from 'react-alice-carousel';

import { ReactComponent as Email } from '../../../vectors/Email.svg';

// Data
import { GALLERY_IMAGES } from '../../../DataStore';

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
          href={`${window.location.origin}`}
          className="flex justify-center my-4"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ACMLogo.png`}
            alt="ACM"
            className="w-64"
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
            alt="ACM"
            className="w-64"
          />
        </a>
        <div className="flex justify-center">
          <span>Made with</span>
          <div className="w-8 flex-shrink-0 flex justify-center items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/HeartEmoji.png`}
              alt="Heart"
              className="w-4 flex-shrink-0"
            />
          </div>
          <span>by ACM-VIT</span>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center my-8 p-4 ">
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
            {GALLERY_IMAGES.map(image => (
              <LazyLoad height={110} key={image.id}>
                <img
                  className="rounded-lg"
                  src={image.thumbnail}
                  onDragStart={handleOnDragStart}
                  alt="Slideshow"
                />
              </LazyLoad>
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
                alt="Close"
                onClick={() => toggleOpen()}
                type="button"
                className="cursor-pointer"
              />
            </div>
            <h1 className="font-black text-acm-blue text-2xl mb-4">Gallery</h1>
            <div className="w-full">
              <h1> Visit Our Gallery! </h1>
              <ImageGallery items={GALLERY_IMAGES} lazyLoad />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
