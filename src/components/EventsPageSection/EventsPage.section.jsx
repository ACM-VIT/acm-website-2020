import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';

// Components
import EventCard from './EventsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

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
          />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default EventsPage;
