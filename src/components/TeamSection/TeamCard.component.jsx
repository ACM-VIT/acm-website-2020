import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Facebook } from '../../vectors/FacebookOutline.svg';
import { ReactComponent as LinkedIn } from '../../vectors/LinkedinOutline.svg';

const TeamCard = props => {
  const { memberInfo } = props;

  const dpStyles = {
    backgroundImage: `url(${memberInfo.avatarURL})`,
    backgroundSize: '8rem 8rem'
  };

  return (
    <div className="box-border shadow-card relative rounded-lg flex flex-col items-center w-2/12 m-6 py-8 px-4">
      <div
        className="rounded-full h-32 w-32 text-white flex"
        style={dpStyles}
      />
      <div className="my-4">
        <div className="team-name text-center font-extrabold text-lg ">
          {memberInfo.name}
        </div>
        <div className="team-designation text-center text-sm">
          {memberInfo.designation}
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Facebook />
        <LinkedIn />
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  memberInfo: PropTypes.objectOf(PropTypes.any).isRequired
};

export default TeamCard;
