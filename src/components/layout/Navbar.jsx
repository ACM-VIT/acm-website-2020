/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import NavLink from './NavLink';

const Navbar = () => {
  const [links] = useState([
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Team' },
    { id: 4, text: 'Blog' },
    { id: 5, text: 'Projects' },
    { id: 6, text: 'Contact Us' },
    { id: 7, text: 'Gallery' }
  ]);

  return (
    <header className="bg-black text-white h-20 flex items-center px-16 justify-between">
      <div>ACM LOGO</div>
      <div className="flex">
        {links.map(link => (
          <NavLink key={link.id}>{link.text}</NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
