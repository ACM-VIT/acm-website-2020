import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';

const Blog = ({ findOffset }) => {
  const [blogs] = useState([
    {
      id: 1,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 2,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 3,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 4,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 5,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 6,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 7,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 8,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    },
    {
      id: 9,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`
    }
  ]);

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y);
      }}
      className="text-center my-12"
      id="blogs-section"
    >
      <SectionHeader>Blogs</SectionHeader>
      <div className="ml-32 flex overflow-x-scroll items-stretch p-16 pl-4">
        {blogs.map(blog => (
          <CarouselCard key={blog.id} desc={blog.desc} image={blog.image}>
            {blog.name}
          </CarouselCard>
        ))}
      </div>
    </section>
  );
};

Blog.propTypes = { findOffset: PropTypes.func.isRequired };

export default Blog;
