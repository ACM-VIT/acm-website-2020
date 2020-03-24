import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import EventsNet from './EventsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import 'react-vertical-timeline-component/style.min.css';

const EventsPage = () => {
  const [events] = useState([
    {
      id: 1,
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo mi nec nisl facilisis blandit nunc donec donec. Commodo dictum molestie amet sagittis, non pellentesque arcu. Ipsum ullamcorper odio mauris ultricies orci cras sit ut vestibulum. Et amet, libero odio purus semper.',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    },
    {
      id: 2,
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo mi nec nisl facilisis blandit nunc donec donec. Commodo dictum molestie amet sagittis, non pellentesque arcu. Ipsum ullamcorper odio mauris ultricies orci cras sit ut vestibulum. Et amet, libero odio purus semper.',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    },
    {
      id: 3,
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo mi nec nisl facilisis blandit nunc donec donec. Commodo dictum molestie amet sagittis, non pellentesque arcu. Ipsum ullamcorper odio mauris ultricies orci cras sit ut vestibulum. Et amet, libero odio purus semper.',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    },
    {
      id: 4,
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo mi nec nisl facilisis blandit nunc donec donec. Commodo dictum molestie amet sagittis, non pellentesque arcu. Ipsum ullamcorper odio mauris ultricies orci cras sit ut vestibulum. Et amet, libero odio purus semper.',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    }
  ]);

  return(
    <section className="ml-40 text-center my-12">
      <SectionHeader>OUR EVENTS</SectionHeader>
      <VerticalTimeline>
        {events.map(event => (
          <EventsNet key={event.id} desc={event.desc} image={event.image} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default EventsPage;