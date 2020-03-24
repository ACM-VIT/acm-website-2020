/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as AcmLogo } from '../../../vectors/AcmLogo.svg';
import NavLink from './NavLink.component';
import NavLine from './NavLine.component';

const Navbar = ({ offsetPos }) => {
  const [links, setLinks] = useState([
    {
      id: 1,
      text: 'Home',
      scrollTo: 'landing-section',
      offsetY: 0,
      active: true
    },
    {
      id: 2,
      text: 'About',
      scrollTo: 'about-section',
      offsetY: 0,
      active: false
    },
    {
      id: 3,
      text: 'Team',
      scrollTo: 'team-section',
      offsetY: 0,
      active: false
    },
    {
      id: 4,
      text: 'Events',
      scrollTo: 'events-section',
      offsetY: 0,
      active: false
    },
    {
      id: 5,
      text: 'Blogs',
      scrollTo: 'blogs-section',
      offsetY: 0,
      active: false
    },
    {
      id: 6,
      text: 'Projects',
      scrollTo: 'projects-section',
      offsetY: 0,
      active: false
    },
    {
      id: 7,
      text: 'Contact Us',
      scrollTo: 'contact-section',
      offsetY: 0,
      active: false
    }
  ]);
  const [customStyles, setCustomStyles] = useState({
    width: '77.51px',
    left: '0px'
  });
  const [startPos, setStartPos] = useState(0);

  console.log(offsetPos);

  const setHomePos = homePos => {
    setStartPos(homePos);
  };

  const setActive = (index, id, text, scrollTo, width, left) => {
    let newLinks = [...links];
    newLinks = newLinks.map(link => {
      link.active = false;
      return link;
    });
    newLinks[index] = { id, text, scrollTo, active: true };
    setLinks(newLinks);
    width = Number(width);
    left = Number(left);
    left -= startPos;
    setCustomStyles({
      width: `${width}px`,
      left: `${left}px`
    });
  };

  return (
    <header className="bg-black text-white flex items-center py-4 px-16 justify-between fixed w-full z-50">
      <div>
        <AcmLogo />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row h-8 items-center my-2">
          {links.map((link, index) => (
            <NavLink
              active={link.active}
              key={link.id}
              handleClick={(width, left) => {
                return setActive(
                  index,
                  link.id,
                  link.text,
                  link.scrollTo,
                  width,
                  left
                );
              }}
              scrollTo={link.scrollTo}
              setHomePos={homePos => setHomePos(homePos)}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        <div
          className="fixed transition duration-200 ease-in-out"
          style={{ transform: `translateX(${customStyles.left})`, top: '70px' }}
        >
          <NavLine customStyles={customStyles} />
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  offsetPos: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Navbar;
