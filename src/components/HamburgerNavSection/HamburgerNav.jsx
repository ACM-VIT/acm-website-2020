/* eslint-disable react/jsx-indent */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import { LINKS } from '../../DataStore';

const HamburgerNav = () => {

  const [links] = useState(LINKS);
  
  return(
    <Menu className="text-center text-white text-xl top-0">
        {links.map(links => (
          <a
            key={links.id}
            href={`${window.location.origin}/#${links.scrollTo}`}
          >
            {links.text}
          </a>
        ))}
    </Menu>
  );
};

export default HamburgerNav;
