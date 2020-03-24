import React, { useState } from 'react';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import BlogsCard from './BlogsCard.component';

const Blog = () => {
  const [blogs] = useState([
    {
      id: 1,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 2,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 3,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 4,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 5,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 6,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 7,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 8,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    },
    {
      id: 9,
      name: 'Title of Blog',
      desc:
        'Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/medium.png`
    }
  ]);

  return (
    <section className="ml-40 text-center my-12">
      <SectionHeader>BLOGS</SectionHeader>
      <div className="flex overflow-x-scroll items-stretch p-16">
        {blogs.map(blogs => (
          <BlogsCard
            key={blogs.id}
            desc={blogs.desc}
            avatarURL={blogs.avatarURL}
          >
            {blogs.name}
          </BlogsCard>
        ))}
      </div>
    </section>
  );
};

export default Blog;
