/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useState } from 'react';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import BlogsCard from './BlogsCard.component';

const Blog = () => {
    const [blogs] = useState([
        {
            id:1,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:2,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:3,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:4,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:5,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:6,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:7,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:8,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        },
        {
            id:9,
            name:"Title of Blog",
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/medium.png`
        }
    ]);

    return(
        <div className="my-15">
            <SectionHeader>BLOGS</SectionHeader>
            <div className="overflow-x-scroll flex flex-no-wrap justify-around">
                {blogs.map(blogs => (
                    <BlogsCard blogsInfo={blogs} key={blogs.id} />
                ))}
            </div>
        </div>
    );
};

export default Blog;