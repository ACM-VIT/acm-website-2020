import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import EventsNet from './EventsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

const EventsPage = () => {
  const [events] = useState([
    {
      id: 1,
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    },
    {
      id: 2,
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    },
    {
      id: 3,
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    },
    {
      id: 4,
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/EventsPage.png`
    }
  ]);

  return(
    <section className="ml-40 text-center my-12">
      <SectionHeader>OUR EVENTS</SectionHeader>
      <div></div>
    </section>
  );
};