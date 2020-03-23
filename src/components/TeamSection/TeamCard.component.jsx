import React from 'react';
import PropTypes from 'prop-types';

const TeamCard = props => {
  const { memberInfo } = props;

  const dpStyles = {
    backgroundImage: `url(${memberInfo.avatarURL})`,
    backgroundSize: '8rem 8rem'
  };

  return (
    <div className="box-border team-box relative rounded-lg flex flex-col items-center w-2/12 m-8 p-4">
      <div
        className="rounded-full h-32 w-32 text-white flex"
        style={dpStyles}
      />
      <div className="team-name text-center font-bold text-lg">
        {memberInfo.name}
      </div>
      <div className="team-designation text-center">
        {memberInfo.designation}
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  memberInfo: PropTypes.objectOf(PropTypes.any).isRequired
};

export default TeamCard;
