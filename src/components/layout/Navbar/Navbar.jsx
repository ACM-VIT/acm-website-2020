/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { ReactComponent as AcmLogo } from '../../../vectors/AcmLogo.svg';
import NavLink from './NavLink.component';
import NavLine from './NavLine.component';

const Navbar = () => {
  const [links, setLinks] = useState([
    { id: 1, text: 'Home', active: true },
    { id: 2, text: 'About', active: false },
    { id: 3, text: 'Team', active: false },
    { id: 4, text: 'Blog', active: false },
    { id: 5, text: 'Projects', active: false },
    { id: 6, text: 'Contact Us', active: false },
    { id: 7, text: 'Gallery', active: false }
  ]);
  const [customStyles, setCustomStyles] = useState({ width: '80px' });

  const setActive = (index, id, text, width) => {
    let newLinks = [...links];
    newLinks = newLinks.map(link => {
      link.active = false;
      return link;
    });
    newLinks[index] = { id, text, active: true };
    setLinks(newLinks);

    width = Number(width);
    setCustomStyles({
      width: `${width + 34.5}px`
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
              handleClick={width => setActive(index, link.id, link.text, width)}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        <NavLine customStyles={customStyles} />
      </div>
    </header>
  );
};

export default Navbar;
