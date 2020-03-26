/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';

import { EVENTS } from '../../DataStore';

const Events = ({ findOffset }) => {
  const [events] = useState(EVENTS);

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
            <CarouselCard
              key={event.id}
              desc={event.desc}
              image={event.image}
              url={event.url}
            >
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
      <div className="text-acm-blue text-2xl px-32 underline">
        <div className="flex items-center flex-no-wrap justify-end">
          <Link to="/events">
            <div className="flex items-center flex-no-wrap justify-end">
              <div>View All Events</div>
              <RightLink />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

Events.propTypes = { findOffset: PropTypes.func.isRequired };

export default Events;
