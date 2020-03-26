import React from 'react';
import PropTypes from 'prop-types';

// Components
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

const TeamCard = props => {
  const { memberInfo } = props;

  // Avatar styles
  const dpStyles = {
    backgroundImage: `url(${memberInfo.avatarURL})`,
    backgroundSize: '8rem 8rem'
  };

  return (
    <div className="box-border shadow-card relative rounded-lg flex flex-col justify-between items-center w-2/12 m-6 py-8 px-4">
      <div
        className="rounded-full h-32 w-32 text-white flex"
        style={dpStyles}
      />
      <div className="my-4">
        <div className="text-center font-extrabold text-lg ">
          {memberInfo.name}
        </div>
        <div className="text-center text-sm">{memberInfo.designation}</div>
      </div>
      {memberInfo.github && (
        <div className="flex justify-center items-center w-full">
          <a href={memberInfo.github}>
            <GithubIcon />
          </a>
          <a href={memberInfo.linkedIn}>
            <LinkedinIcon />
          </a>
        </div>
      )}
    </div>
  );
};

TeamCard.propTypes = {
  memberInfo: PropTypes.objectOf(PropTypes.any).isRequired
};

export default TeamCard;
