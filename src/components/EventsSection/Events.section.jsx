import React, { useState } from 'react';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';

const Events = () => {
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

  return (
    <section className="text-center my-12" id="events-section">
      <SectionHeader>Events</SectionHeader>
      <div className="ml-32 flex overflow-x-scroll items-stretch p-16 pl-4">
        {events.map(event => (
          <CarouselCard key={event.id} desc={event.desc} image={event.image}>
            {event.name}
          </CarouselCard>
        ))}
      </div>
    </section>
  );
};

export default Events;
