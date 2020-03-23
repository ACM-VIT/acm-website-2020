import React from 'react';

const Landing = () => {
  const backgroundStyling = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/LandingBackground.png)`,
    backgroundSize: 'cover'
  };

  return (
    <section
      className="h-screen bg-gray-500 flex justify-center items-center bg-landing"
      style={backgroundStyling}
    >
      <h1 className="text-4xl text-white font-bold">Varying one liner</h1>
    </section>
  );
};

export default Landing;
