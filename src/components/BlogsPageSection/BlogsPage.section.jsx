import React, { useState } from 'react';

// Components
import BlogCard from './BlogsPageCard.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

// Data
import { BLOGS } from '../../DataStore';

const BlogsPage = () => {
  const [blogs] = useState(BLOGS);

  // Styles for medium logo
  const mediumLogoStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/Medium.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  // Styles for arrow
  const arrowStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/RightArrow.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="text-center w-full my-12 pb-40 pt-2">
      <SectionHeader>Our Blogs</SectionHeader>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center flex-wrap items-stretch">
          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              desc={blog.desc}
              image={blog.image}
              url={blog.url}
            >
              {blog.name}
            </BlogCard>
          ))}
        </div>
        <div className="flex justify-center sm:justify-end mt-8">
          <a
            href="https://medium.com/acmvit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="shadow-card rounded-lg flex justify-evenly items-center w-96 p-4">
              <div className="w-8 h-8" style={mediumLogoStyle} />
              <div className="capitalize">Go to our blog</div>
              <div className="w-4 h-3" style={arrowStyle} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
