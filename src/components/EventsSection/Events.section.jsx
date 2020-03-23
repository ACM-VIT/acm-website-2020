import React from 'react';
import { useState } from 'react';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import EventsCard from './EventCard.component'

const Events = () => {
    const [events] = useState([
        {
            id:1,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:2,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:3,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:4,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:5,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:6,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:7,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:8,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
        {
            id:9,
            name:"Code 2 Create", 
            desc:"Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah",
            avatarURL:`${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
        },
    ]);

    return(
        <div className="my-8">
            <SectionHeader>EVENTS</SectionHeader>
            <div className="overflow-x-scroll flex flex-no-wrap justify-around">
                {events.map(events =>(
                    <EventsCard eventsInfo={events} key={events.id} />
                ))}
            </div>
        </div>
    );
};

export default Events;