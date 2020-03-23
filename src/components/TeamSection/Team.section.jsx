import React, { useState } from 'react';

import TeamCard from './TeamCard.component';
import SectionHeader from '../layout/Sections/SectionHeader';

const Team = () => {
  const [ACMTeam] = useState([
    {
      id: 1,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 2,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 3,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 4,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 5,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 6,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 7,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 8,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    }
  ]);

  return (
    <div className="container mx-auto text-center">
      <SectionHeader>Team</SectionHeader>
      <div className="flex flex-row justify-between flex-wrap">
        {ACMTeam.map(member => (
          <TeamCard memberInfo={member} key={member.id} />
        ))}
      </div>
    </div>
  );
};

export default Team;
