/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

const Events = ({ findOffset }) => {
  const [events] = useState([
    {
      id: 1,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 2,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 3,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 4,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 5,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 6,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 7,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 8,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 9,
      name: 'Code2Create',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
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
        findOffset(el.getBoundingClientRect().y);
      }}
      className="text-center my-12"
      id="events-section"
    >
      <SectionHeader>Events</SectionHeader>
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
          {events.map(event => (
            <CarouselCard key={event.id} desc={event.desc} image={event.image}>
              {event.name}
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
    </section>
  );
};

Events.propTypes = { findOffset: PropTypes.func.isRequired };

export default Events;
