/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';

const Events = ({ findOffset }) => {
  const [events] = useState([
    {
      id: 1,
      name: 'Competetive Coding Cometh',
      desc:
        'We have for you the co-founder and mentor of Coding Blocks, Prateek Narang to impart his knowledge to the beginners and experts alike.',
      image: `${process.env.PUBLIC_URL}/assets/images/CodingBlocks.png`,
      url: 'http://c3.acmvit.in/',
      date: '20/07/2019'
    },
    {
      id: 2,
      name: 'ML From Scratch',
      desc:
        'The ACM Research team presents to you a session where you take your first step into the world of Machine Learning where they guide you through the fundamentals of ML.',
      image: `${process.env.PUBLIC_URL}/assets/images/MLScratch.png`,
      url:
        'https://www.instagram.com/p/B0ytwPlBRan/?utm_source=ig_web_button_share_sheet',
      date: '7/08/2019'
    },
    {
      id: 3,
      name: 'Learn To Augment',
      desc:
        'Through Learn to Augment, ACM-VIT would like to provide you the opportunity to dive deeper into augmented reality.',
      image: `${process.env.PUBLIC_URL}/assets/images/LearnToAugment.png`,
      url:
        'https://www.instagram.com/p/B1JgcK2hVc3/?utm_source=ig_web_button_share_sheet',
      date: '31/08/2019'
    },
    {
      id: 4,
      name: "I'm Hacked",
      desc:
        'Learn the ins and outs of cyber security to understand the mind of a hacker and build a safer world wide web.',
      image: `${process.env.PUBLIC_URL}/assets/images/Hacked.png`,
      url:
        'https://www.instagram.com/p/B18YBa2hdDA/?utm_source=ig_web_button_share_sheet',
      date: '4/09/2019'
    },
    {
      id: 5,
      name: 'SnapChat Filters',
      desc:
        "Join us on 'Getting Started With SnapChat Filters' to make your very own snapchat filters.",
      image: `${process.env.PUBLIC_URL}/assets/images/SnapchatFilters.png`,
      url:
        'https://www.instagram.com/p/B2Md0jLhCMu/?utm_source=ig_web_button_share_sheet',
      date: '11/09/2019'
    },
    {
      id: 6,
      name: 'Learn To Compete',
      desc:
        'Learn To Compete is an exclusive competitive coding workshop, designed for the aspiring coders within you.',
      image: `${process.env.PUBLIC_URL}/assets/images/LearnToCompete.png`,
      url:
        'https://www.instagram.com/p/B2HiyflBI-X/?utm_source=ig_web_button_share_sheet',
      date: '21/09/2019'
    },
    {
      id: 7,
      name: 'HacktoberFest',
      desc:
        'With the biggest open source fest upon us, learn how to get yourself involved with one of the biggest events for developers across the world.',
      image: `${process.env.PUBLIC_URL}/assets/images/HacktoberFest.png`,
      url:
        'https://www.instagram.com/p/B3KphmShXgy/?utm_source=ig_web_button_share_sheet',
      date: '16/10/2019'
    },
    {
      id: 8,
      name: 'Reverse Coding',
      desc:
        'ACM-VIT presents a whole reversal of your conventional perspective with our innovative event, Reverse Coding!',
      image: `${process.env.PUBLIC_URL}/assets/images/ReverseCoding.png`
    },
    {
      id: 9,
      name: 'Local Hack Day Build',
      desc:
        'Presenting Local Hack Day Build - a one day hack where you think out the tangible or even the untangible!',
      image: `${process.env.PUBLIC_URL}/assets/images/LocalHackDay.png`,
      url:
        'https://www.instagram.com/p/B5fUVn5hKYN/?utm_source=ig_web_button_share_sheet',
      date: '1/12/2019'
    },
    {
      id: 10,
      name: 'BlockchainEd',
      desc:
        'Learn the inner workings of blockchain - the hottest cybersec tech that has led to a whole new era of anonymous cooperation.',
      image: `${process.env.PUBLIC_URL}/assets/images/BlockchainEd.png`,
      url:
        'https://www.instagram.com/p/B73a4S2h3Gj/?utm_source=ig_web_button_share_sheet',
      date: '29/01/2020'
    },
    {
      id: 11,
      name: 'Code2Create',
      desc:
        'The wait is finally over, find yourself a team and get ready to lock horns with the wittiest and most creative minds across South India.',
      image: `${process.env.PUBLIC_URL}/assets/images/Code2Create.png`,
      url: 'https://c2c.acmvit.in',
      date: '7/03/2020'
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
          {events.reverse().map(event => (
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
