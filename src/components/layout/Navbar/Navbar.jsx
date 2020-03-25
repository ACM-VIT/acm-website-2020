/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
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
  let [leftsAndWidths] = useState([
    { left: 0, width: 0 },
    { left: 0, width: 0 },
    { left: 0, width: 0 },
    { left: 0, width: 0 },
    { left: 0, width: 0 },
    { left: 0, width: 0 },
    { left: 0, width: 0 }
  ]);

  const setProps = (width, left, index) => {
    const newLeftsAndWidths = [...leftsAndWidths];
    newLeftsAndWidths[index].left = left;
    newLeftsAndWidths[index].width = width;
    leftsAndWidths = newLeftsAndWidths;
  };

  const initOffsetPos = () => {
    const newLinks = links.map((link, index) => {
      link.offsetY = offsetPos[index];
      return link;
    });
    setLinks(newLinks);
  };

  const scrollHandler = () => {
    let highest = 0;

    links.map(link => {
      if (window.scrollY + 50 > link.offsetY) {
        if (link.id > highest) {
          highest = link.id;
        }
      }
      return link;
    });

    const Links = links.map(link => {
      link.active = false;
      if (link.id === highest) {
        link.active = true;
      }
      return link;
    });
    setLinks(Links);
  };

  const currentLink = () => {
    let currentLinkID;
    links.forEach((link, index) => {
      if (link.active) currentLinkID = index;
    });
    return currentLinkID;
  };

  useEffect(() => {
    initOffsetPos();
    window.addEventListener('scroll', () => {
      scrollHandler();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetPos]);

  return (
    <header className="bg-black text-white flex items-center py-4 px-16 justify-between fixed w-full z-50">
      <div>
        <AcmLogo />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row h-8 items-center my-2">
          {links.map((link, index) => {
            return (
              <NavLink
                active={link.active}
                key={link.id}
                scrollTo={link.scrollTo}
                getProps={(width, left) => setProps(width, left, index)}
              >
                {link.text}
              </NavLink>
            );
          })}
        </div>
        <NavLine currentLink={currentLink()} customStyles={leftsAndWidths} />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  offsetPos: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Navbar;
