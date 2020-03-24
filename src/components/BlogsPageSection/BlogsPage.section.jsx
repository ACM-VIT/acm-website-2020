/* eslint-disable no-shadow */
import React, { useState } from 'react';
import BlogsNet from './BlogsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

const BlogsPage = () => {
  const [blogs] = useState([
    {
      id:1,
      title:"Lorum Ipsum",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate proin mattis enim quis venenatis sit turpis sed. Mattis et nulla augue phasellus.",
      image:`${process.env.PUBLIC_URL}/assets/images/BlogsPage.png`
    },
    {
      id:2,
      title:"Lorum Ipsum",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate proin mattis enim quis venenatis sit turpis sed. Mattis et nulla augue phasellus.",
      image:`${process.env.PUBLIC_URL}/assets/images/BlogsPage.png`
    },
    {
      id:3,
      title:"Lorum Ipsum",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate proin mattis enim quis venenatis sit turpis sed. Mattis et nulla augue phasellus.",
      image:`${process.env.PUBLIC_URL}/assets/images/BlogsPage.png`
    },
    {
      id:4,
      title:"Lorum Ipsum",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate proin mattis enim quis venenatis sit turpis sed. Mattis et nulla augue phasellus.",
      image:`${process.env.PUBLIC_URL}/assets/images/BlogsPage.png`
    },
    {
      id:5,
      title:"Lorum Ipsum",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate proin mattis enim quis venenatis sit turpis sed. Mattis et nulla augue phasellus.",
      image:`${process.env.PUBLIC_URL}/assets/images/BlogsPage.png`
    },
    {
      id:6,
      title:"Lorum Ipsum",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate proin mattis enim quis venenatis sit turpis sed. Mattis et nulla augue phasellus.",
      image:`${process.env.PUBLIC_URL}/assets/images/BlogsPage.png`
    },
  ]);

  return(
    <section className="ml-40 text-center my-12">
      <SectionHeader>OUR BLOGS</SectionHeader>
      <div className="flex flex-row justify-center flex-wrap">
        {blogs.map(blogs => (
          <BlogsNet 
            key={blogs.id} 
            desc={blogs.desc} 
            image={blogs.image} 
          >
            {blogs.title}
          </BlogsNet>
        ))}
      </div>
      <div className="relative">
        <div className="w-1/5 m-8 mr-12 p-4 shadow-card absolute top-0 right-0 ">
          Go to our blog
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;