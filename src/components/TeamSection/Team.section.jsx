import React from 'react';
import Card from './CardTemplate/Card';

const Team = () => {
    return(
        <div className="container mx-auto text-center">
            <h1 className="text-acm-blue text-4xl">TEAM</h1>
            <div class="grid gap-4 grid-cols-4">
                <Card />
            </div>
        </div>
    );
};

export default Team;