import React from 'react';

const SendButton = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="p-4 rounded-full bg-acm-blue -mr-40 md:-mr-16"
        type="button"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/AirPlane.png`}
          alt="Send"
          height="8px"
        />
      </button>
    </div>
  );
};

export default SendButton;
