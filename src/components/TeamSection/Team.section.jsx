import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import TeamCard from './TeamCard.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

// Data
import { TEAM } from '../../DataStore';

const Team = ({ findOffset }) => {
  const [ACMTeam] = useState(TEAM);

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
      <div className="flex flex-row justify-center">
        <TeamCard
          memberInfo={{
            id: 0,
            name: 'Prof. Hari Ram Vishwakarma',
            designation: 'Faculty coordinator',
            avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
          }}
        />
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
