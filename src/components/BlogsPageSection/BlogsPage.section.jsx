/* eslint-disable react/jsx-indent */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import BlogsNet from './BlogsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

const BlogsPage = () => {

  const imageStyle1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/MediumBlogsPage.png)`,
    backgroundSize: 'cover'
  }

  const imageStyle2 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/Vector.png)`,
    backgroundSize: 'cover'
  }

  const [blogs] = useState([
    {
      id: 1,
      name: 'Li-Fi:The Future Of Internet',
      desc:
        'Imagine a time when each of the lightbulbs in your house is a source of Internet. Imagine a scenario where, standing...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url: 'https://medium.com/acmvit/li-fi-the-future-of-internet-e573eab6bd0d'
    },
    {
      id: 2,
      name: 'Lottie Animations',
      desc:
        'Lottie is a mobile library for Android and iOS that parses Adobe After Effects animations exported as json...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url:
        'https://medium.com/acmvit/getting-started-with-lottie-animations-android-2c225ad2c467'
    },
    {
      id: 3,
      name: 'How to project an image...',
      desc:
        'We all have come across and used web apps where we can insert our pictures into other background images like...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url:
        'https://medium.com/acmvit/how-to-project-an-image-in-perspective-view-of-a-background-image-opencv-python-d101bdf966bc'
    },
    {
      id: 4,
      name: 'Bring out your Inner Technocrat',
      desc:
        'Remember the good old days when human interactions happened in real life and not via a screen? The...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url:
        'https://medium.com/acmvit/bring-out-your-inner-technocrat-b7da5f50190c'
    },
    {
      id: 5,
      name: 'The Infinite Art Machine',
      desc:
        'From time immemorial, humans have tried to be creative. We started with cave paintings and now...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url: 'https://medium.com/acmvit/the-infinite-art-machine-3a2decab85d9'
    },
    {
      id: 6,
      name: 'The Future Of Software Bugs',
      desc:
        'A software bug is an error, a flaw or a fault in a computer program or software system that causes the app...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url: 'https://medium.com/acmvit/the-future-of-software-bugs-4f8891184bdf'
    },
    {
      id: 7,
      name: 'Bash — Geek Mode On',
      desc:
        'Shell? Well sorry, this is a technical blog so I am not talking about the beach. I am talking about this shell...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url: 'https://medium.com/acmvit/bash-geek-mode-on-b3d2d14e37e1'
    },
    {
      id: 8,
      name: 'Bash — Geek Mode On',
      desc:
        'Shell? Well sorry, this is a technical blog so I am not talking about the beach. I am talking about this shell...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url: 'https://medium.com/acmvit/bash-geek-mode-on-b3d2d14e37e1'
    },
    {
      id: 9,
      name: 'Hyperloop',
      desc:
        'Since the very beginning of civilization, people have been discovering and inventing new ways of transportation...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url:
        'https://medium.com/acmvit/hyperloop-future-of-ultra-high-speed-transport-system-457b09cc86cd'
    },
    {
      id: 10,
      name: 'Chirp',
      desc:
        'Chirp SDKs take data, convert it into sound, which nearby devices decode seamlessly back into data. It...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
      url:
        'https://medium.com/acmvit/getting-started-with-chirp-android-aff372cf2761'
    }
  ]);

  return(
      <section className="ml-16 text-center my-4 absolute">
        <SectionHeader>OUR BLOGS</SectionHeader>
        <div className="flex flex-row justify-start flex-wrap">
          {blogs.map(blogs => (
            <BlogsNet 
              key={blogs.id} 
              desc={blogs.desc} 
              image={blogs.image}
              url={blogs.url} 
            >
              {blogs.title}
            </BlogsNet>
          ))}
        </div>
        <a href="https://medium.com/acmvit">
          <div className="relative">
            <div className="w-8 h-8 blogspage-medium-image top-0 right-0 absolute" style={imageStyle1} />
            <div className="w-4 h-3 blogspage-vector-image top-0 right-0 absolute" style={imageStyle2} />
            <div className="w-1/5 m-8 mr-20 p-4 shadow-card top-0 right-0 absolute">
              Go to our blog
            </div>
          </div>
        </a>
      </section>
  );
};

export default BlogsPage;