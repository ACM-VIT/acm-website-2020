import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';
import RightArrow from '../layout/Sections/RightArrow';
import LeftArrow from '../layout/Sections/LeftArrow';

// Utility functions
import scrollHorizontally from '../../utils/scrollHorizontally';
import offsetY from '../../utils/offsetY';

// Data
import { EVENTS } from '../../DataStore';

const Events = ({ findOffset }) => {
  const [events] = useState(EVENTS);

  // Component Variables
  let node;

  return (
    <section
      ref={el => offsetY(el, findOffset)}
      className="text-center my-12"
      id="events-section"
    >
      <SectionHeader>Events</SectionHeader>
      <div
        className="flex"
        data-aos="fade-up"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="500"
      >
        <div className="hidden md:flex flex-shrink-0 justify-center items-center w-32">
          <div
            onClick={() => scrollHorizontally(node, 'left', 25, 480, 48)}
            role="button"
            tabIndex={0}
          >
            <LeftArrow />
          </div>
        </div>
        <div
          className="hide-scrollbar flex overflow-x-scroll items-stretch p-8 md:p-16 px-4"
          ref={el => {
            if (!el) return;
            node = el;
          }}
        >
          {events.map((event, index) => {
            if (index < 6)
              return (
                <CarouselCard
                  image={event.image}
                  desc={event.desc}
                  url={event.url}
                  key={event.id}
                  title={event.name}
                  info={event.info}
                  date={event.date}
                >
                  {event.name}
                </CarouselCard>
              );
            return false;
          })}
        </div>
        <div className="hidden md:flex flex-shrink-0 justify-center items-center w-32">
          <div
            onClick={() => scrollHorizontally(node, 'right', 25, 480, 48)}
            role="button"
            tabIndex={0}
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="text-acm-blue text-2xl underline p-0 md:px-32">
        <div className="flex items-center flex-no-wrap  justify-center md:justify-end">
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
