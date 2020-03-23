import React from 'react';

import Card from './CardTemplate/Card';
import SectionHeader from '../layout/Sections/SectionHeader';

const Team = () => {
  return (
    <div className="container mx-auto text-center">
      <SectionHeader>Team</SectionHeader>
      <div className="grid gap-4 grid-cols-4">
        <Card />
      </div>
    </div>
  );
};

export default Team;
