/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { useState } from 'react';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import EventsCard from './EventCard.component'

const Events = () => {
    const [events] = useState([
        {
            id:1,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:2,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:3,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:4,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:5,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:6,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:7,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:8,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:9,
            name:"Code2Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
    ]);

    return(
        <section className="ml-40 text-center my-12">
            <SectionHeader>EVENTS</SectionHeader>
            <div className="flex overflow-x-scroll items-stretch p-16">
                {events.map(events =>(
                    <EventsCard 
                        key={events.id}
                        desc={events.desc}
                        image={events.image} 
                    >
                        {events.name}
                    </EventsCard>
                ))}
            </div>
        </section>
    );
};

export default Events;