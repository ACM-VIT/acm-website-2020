import React from 'react';

const EventsCard = (props) => {
    return(
        <div className="box-border events-box">
            <div className="h-full w-full">
                <img className="events-image" alt="" src=""></img>
                <p className="events-name text-right">{props.name}</p>
                <p className="events-description text-justify">{props.desc}</p>
            </div>
        </div>
    );
};


export default EventsCard;