import React, { useState } from 'react';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import EventsNet from './EventsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import 'react-vertical-timeline-component/style.min.css';

import { EVENTS } from '../../DataStore';

const EventsPage = () => {
  const [events] = useState(EVENTS);

  return (
    <section className="ml-48 text-center my-12">
      <SectionHeader>OUR EVENTS</SectionHeader>
      <VerticalTimeline>
        {events.map(event => (
          <EventsNet
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
