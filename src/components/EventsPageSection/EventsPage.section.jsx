import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';
import EventCard from './EventsPage.component';

// Data
import { EVENTS } from '../../DataStore';

const EventsPage = () => {
  const [events] = useState(EVENTS);

  return (
    <section className="text-center my-12 ml-16 pt-2">
      <SectionHeader>OUR EVENTS</SectionHeader>
      <VerticalTimeline>
        {events.map(event => (
          <EventCard
            key={event.id}
            name={event.name}
            desc={event.desc}
            image={event.image}
            url={event.url}
            date={event.date}
            title={event.name}
            info={event.info}
            modalImg={event.modalImg}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default EventsPage;
