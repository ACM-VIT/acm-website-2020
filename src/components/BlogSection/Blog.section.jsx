import React from 'react';
import SectionHeader from '../layout/Sections/SectionHeader';
import BlogCard from './Blog.card'

const Blog = () => {
    return(
        <div className="my-15">
            <SectionHeader>BLOGS</SectionHeader>
            <div className="overflow-x-scroll flex flex-no-wrap justify-around">
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <BlogCard 
                        name="Title of Blog"
                        desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;