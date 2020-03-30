import React, { useState } from 'react';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';
import BlogCard from './BlogsPageCard.component';

// Data
import { BLOGS } from '../../DataStore';

const BlogsPage = () => {
  const [blogs] = useState(BLOGS);

  // Styles for medium logo
  const mediumLogoStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/Medium.png)`
  };
  // Styles for arrow
  const arrowStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/RightArrow.png)`
  };

  return (
    <section className="text-center w-full my-12 pb-40 pt-2">
      <SectionHeader>Our Blogs</SectionHeader>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center flex-wrap items-stretch">
          {blogs.map(blog => (
            <BlogCard
              image={blog.image}
              desc={blog.desc}
              url={blog.url}
              key={blog.id}
            >
              {blog.name}
            </BlogCard>
          ))}
        </div>
        <div className="flex justify-center sm:justify-end mt-8">
          <a
            href="https://medium.com/acmvit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="shadow-small-card md:shadow-card rounded-lg flex justify-evenly items-center w-96 p-4">
              <div
                className="w-8 h-8 bg-center bg-no-repeat bg-cover"
                style={mediumLogoStyle}
              />
              <div className="capitalize">Go to our blog</div>
              <div
                className="w-4 h-3 bg-center bg-no-repeat bg-cover"
                style={arrowStyle}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
