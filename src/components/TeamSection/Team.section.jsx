import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TeamCard from './TeamCard.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

const Team = ({ findOffset }) => {
  const [ACMTeam] = useState([
    {
      id: 1,
      name: 'Sarthak Gupta',
      designation: 'President',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 2,
      name: 'Hrishita Chakrabarti',
      designation: 'Managing Director',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 3,
      name: 'Eesha Shetty',
      designation: 'Technical Director',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 4,
      name: 'Anjali Roy',
      designation: 'General Secretary',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 5,
      name: 'Dhruv Roy',
      designation: 'Treasurer',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 6,
      name: 'Kashish Mittal',
      designation: 'Webmaster',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 7,
      name: 'Shovin Kakaraddi',
      designation: 'UI/UX Lead',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 8,
      name: 'Devansh Mehta',
      designation: 'App Lead',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 9,
      name: 'Iishi Patel',
      designation: 'Research Lead',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 10,
      name: 'Nimit Jain',
      designation: 'Competetive Lead',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 11,
      name: 'Jerelyn Preeja',
      designation: 'ACM-W Lead',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 12,
      name: 'Sidharth Nahar',
      designation: 'Competetive Guide',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 13,
      name: 'Elio Jordan Lopes',
      designation: 'Project Guide Web',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 14,
      name: 'Garima Bothra',
      designation: 'Project Guide App',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 15,
      name: 'Sriya Reddi',
      designation: 'Operations Head',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
      github: 'https://github.com',
      linkedIn: 'https://linkedin.com'
    }
  ]);

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y);
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
