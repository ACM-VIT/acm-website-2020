/* eslint-disable react/jsx-indent */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import BlogsNet from './BlogsPage.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

const BlogsPage = () => {

  const imageStyle1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/MediumBlogsPage.png)`,
    backgroundSize: 'cover'
  }

  const imageStyle2 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/Vector.png)`,
    backgroundSize: 'cover'
  }

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
      <section className="ml-16 text-center my-4 absolute">
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
          <div className="w-8 h-8 blogspage-medium-image top-0 right-0 absolute" style={imageStyle1} />
          <div className="w-4 h-3 blogspage-vector-image top-0 right-0 absolute" style={imageStyle2} />
          <div className="w-1/5 m-8 mr-20 p-4 shadow-card top-0 right-0 absolute">
            Go to our blog
          </div>
        </div>
      </section>
  );
};

export default BlogsPage;