import React from 'react';

import { ReactComponent as Email } from '../../../vectors/Email.svg';

const Footer = () => {
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
          <span className="ml-4"> outreach.acmvit@gmail.com</span>
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
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center my-8">
        Slideshow
      </div>
    </div>
  );
};

export default Footer;
