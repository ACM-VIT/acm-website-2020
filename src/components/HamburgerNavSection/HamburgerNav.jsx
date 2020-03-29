import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

// Data
import { LINKS } from '../../DataStore';

const HamburgerNav = () => {
  const [links] = useState(LINKS);

  return (
    <div className="md:hidden">
      <Menu className="text-center text-white text-xl top-0">
        {links.map(link => (
          <a
            href={`${window.location.origin}/#${link.scrollTo}`}
            className="focus:outline-none"
            key={link.id}
          >
            {link.text}
          </a>
        ))}
      </Menu>
    </div>
  );
};

export default HamburgerNav;
