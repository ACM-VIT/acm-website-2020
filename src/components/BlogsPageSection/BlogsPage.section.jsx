/* eslint-disable react/jsx-indent */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import BlogsNet from './BlogsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';


import { BLOGS } from '../../DataStore';

const BlogsPage = () => {
  const imageStyle1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/MediumBlogsPage.png)`,
    backgroundSize: 'cover'
  };

  const imageStyle2 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/Vector.png)`,
    backgroundSize: 'cover'
  };

  const [blogs] = useState(BLOGS);

  return(
      <section className="ml-16 text-center my-4 absolute">
        <SectionHeader>OUR BLOGS</SectionHeader>
        <div className="flex flex-row justify-start flex-wrap">
          {blogs.map(blogs => (
            <BlogsNet 
              key={blogs.id} 
              desc={blogs.desc} 
              image={blogs.image}
              url={blogs.url} 
            >
              {blogs.title}
            </BlogsNet>
          ))}
        </div>
        <a href="https://medium.com/acmvit">
          <div className="relative">
            <div className="w-8 h-8 blogspage-medium-image top-0 right-0 absolute" style={imageStyle1} />
            <div className="w-4 h-3 blogspage-vector-image top-0 right-0 absolute" style={imageStyle2} />
            <div className="w-1/5 m-8 mr-20 p-4 shadow-card top-0 right-0 absolute">
              Go to our blog
            </div>
          </div>
        </a>
      </section>
  );
};


export default BlogsPage;
