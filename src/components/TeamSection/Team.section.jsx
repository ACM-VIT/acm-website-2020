import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';
import TeamCard from './TeamCard.component';

// Utility functions
import offsetY from '../../utils/offsetY';

// Data
import { FACULTY, TEAM } from '../../DataStore';

const Team = ({ findOffset }) => {
  const [ACMTeam] = useState(TEAM);
  const [faculties] = useState(FACULTY);

  return (
    <section
      ref={el => offsetY(el, findOffset)}
      className="container mx-auto text-center my-8"
      id="team-section"
    >
      <div
        ddata-aos="fade-up"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="500"
      >
        <SectionHeader>Team</SectionHeader>
        <div className="flex flex-row justify-center flex-wrap">
          {faculties.map(faculty => (
            <TeamCard memberInfo={faculty} key={faculty.id} />
          ))}
        </div>
        <div className="flex flex-row justify-center flex-wrap">
          {ACMTeam.map(member => (
            <TeamCard memberInfo={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

Team.propTypes = {
  findOffset: PropTypes.func.isRequired
};

export default Team;
