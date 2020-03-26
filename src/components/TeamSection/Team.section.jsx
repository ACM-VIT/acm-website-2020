import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import TeamCard from './TeamCard.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

// Data
import { FACULTY, TEAM } from '../../DataStore';

const Team = ({ findOffset }) => {
  const [ACMTeam] = useState(TEAM);
  const [faculties] = useState(FACULTY);

  return (
    <section
      ref={el => {
        if (!el) return;
        // Get element's offset Y value
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="container mx-auto text-center my-8"
      id="team-section"
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
    </section>
  );
};

Team.propTypes = {
  findOffset: PropTypes.func.isRequired
};

export default Team;
