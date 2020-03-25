/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';

const Blog = ({ findOffset }) => {
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

  let node;

  const scrollHorizontally = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'right') {
        element.scrollLeft += step;
      } else {
        element.scrollLeft -= step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="text-center my-12"
      id="blogs-section"
    >
      <SectionHeader>Blogs</SectionHeader>
      <div className="flex">
        <div className="w-32 flex-shrink-0 flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'left', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <LeftArrow />
          </div>
        </div>
        <div
          className="hide-scrollbar flex overflow-x-scroll items-stretch p-16 px-4"
          ref={el => {
            if (!el) return;
            node = el;
          }}
        >
          {blogs.map(blog => (
            <CarouselCard
              key={blog.id}
              desc={blog.desc}
              image={blog.image}
              url={blog.url}
            >
              {blog.name}
            </CarouselCard>
          ))}
        </div>
        <div className="w-32 flex-shrink-0 flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'right', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="text-acm-blue text-2xl px-32 underline">
        <div className="flex items-center flex-no-wrap justify-end">
          <Link to="/blogs">
            <div className="flex items-center flex-no-wrap justify-end">
              <div>View All Blogs</div>
              <RightLink />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = { findOffset: PropTypes.func.isRequired };

export default Blog;
