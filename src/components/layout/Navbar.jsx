/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { ReactComponent as AcmLogo } from '../../vectors/AcmLogo.svg';
import NavLink from './NavLink';

const Navbar = () => {
  const [links] = useState([
    { id: 1, text: 'Home', active: true },
    { id: 2, text: 'About', active: false },
    { id: 3, text: 'Team', active: false },
    { id: 4, text: 'Blog', active: false },
    { id: 5, text: 'Projects', active: false },
    { id: 6, text: 'Contact Us', active: false },
    { id: 7, text: 'Gallery', active: false }
  ]);

  return (
    <header className="bg-black text-white h-20 flex items-center px-16 justify-between">
      <div>
        <AcmLogo />
      </div>
      <div className="flex">
        {links.map(link => (
          <NavLink active={link.active} key={link.id}>
            {link.text}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
