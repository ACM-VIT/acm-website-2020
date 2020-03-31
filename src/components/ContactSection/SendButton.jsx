import React from 'react';

const SendButton = () => (
  <div className="flex justify-center items-center">
    <button
      className="rounded-full bg-acm-blue -mr-40 md:-mr-16 p-4"
      type="submit"
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/AirPlane.png`}
        className="w-8"
        alt="Send"
      />
    </button>
  </div>
);

export default SendButton;
