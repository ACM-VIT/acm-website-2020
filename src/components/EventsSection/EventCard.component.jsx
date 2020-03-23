/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

const EventsCard = props => {
    const {eventsInfo} = props;

    const eventImg = {
        backgroundImage: `url(${eventsInfo.avatarURL})`,
        backgroundSize: '8rem 8rem'
    };

    return(
        <div className="box-border events-box">
            <div className="h-full w-full">
                <div className="h-32 w-32" style={eventImg} />
                <p className="events-name text-right">{eventsInfo.name}</p>
                <p className="events-description text-justify">{eventsInfo.desc}</p>
            </div>
        </div>
    );
};

EventsCard.propTypes = {
    eventsInfo: PropTypes.objectOf(PropTypes.any).isRequired
  };


export default EventsCard;