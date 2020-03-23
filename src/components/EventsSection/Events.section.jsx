import React from 'react';
import SectionHeader from '../layout/Sections/SectionHeader';
import EventsCard from './Event.card'

const Events = () => {
    return(
        <div className="my-8">
            <SectionHeader>EVENTS</SectionHeader>
            <div className="overflow-x-scroll flex flex-no-wrap justify-around">
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah"
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
                <div>
                    <EventsCard 
                    name="Code 2 Create" 
                    desc="Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah Lorem Ipsum blah blah lorem ipsum blah blah" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Events;