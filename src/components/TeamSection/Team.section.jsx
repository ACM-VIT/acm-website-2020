import React from 'react';

import Card from './CardTemplate/Card';
import SectionHeader from '../layout/Sections/SectionHeader';

const Team = () => {
  return (
    <div className="container mx-auto text-center">
        <SectionHeader>Team</SectionHeader><br></br><br></br>
        <div className="flex flex-row justify-around">
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div><br></br><br></br>
        <div className="flex flex-row justify-around">
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div><br></br><br></br>
        <div className="flex flex-row justify-around">
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div><br></br><br></br>
        <div className="flex flex-row justify-around">
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div><br></br><br></br>
    </div>
  );
};

export default Team;
