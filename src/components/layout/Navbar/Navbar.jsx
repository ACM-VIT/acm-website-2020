/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as AcmLogo } from '../../../vectors/AcmLogo.svg';
import NavLink from './NavLink.component';
import NavLine from './NavLine.component';

// Data
import { LINKS, LEFTS_AND_WIDTHS } from '../../../DataStore';

const Navbar = ({ offsetPos }) => {
  const [links, setLinks] = useState(LINKS);
  let [leftsAndWidths] = useState(LEFTS_AND_WIDTHS);

  // Set offsetX and widths for each navlink
  const setProps = (width, left, index) => {
    const newLeftsAndWidths = [...leftsAndWidths];
    newLeftsAndWidths[index].left = left;
    newLeftsAndWidths[index].width = width;
    leftsAndWidths = newLeftsAndWidths;
  };

  // Set offsetY for every section in state
  const initOffsetPos = () => {
    const newLinks = links.map((link, index) => {
      link.offsetY = offsetPos[index];
      return link;
    });
    setLinks(newLinks);
  };

  // Handle navbar events on scroll
  const scrollHandler = () => {
    let highest = 0;

    // Set the currently active link
    links.map(link => {
      if (window.scrollY + 50 > link.offsetY) {
        if (link.id > highest) {
          highest = link.id;
        }
      }
      return link;
    });

    // Highlight the currently active link
    const Links = links.map(link => {
      link.active = false;
      if (link.id === highest) {
        link.active = true;
      }
      return link;
    });
    setLinks(Links);
  };

  // Finds the currently active link
  const currentLink = () => {
    let currentLinkID;
    links.forEach((link, index) => {
      if (link.active) currentLinkID = index;
    });
    return currentLinkID;
  };

  useEffect(() => {
    initOffsetPos();
    // Scroll event listener
    window.addEventListener('scroll', () => {
      scrollHandler();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetPos]);

  return (
    <header className="hidden md:flex w-screen overflow-x-hidden bg-black text-white items-center justify-between fixed w-full top-0 z-50 py-4 px-16">
      <a href={`${window.location.origin}/`}>
        <AcmLogo />
      </a>
      <div className="flex flex-col">
        <div className="flex flex-row h-8 items-center my-2">
          {links.map((link, index) => {
            if (
              window.location.href !== `${window.location.origin}/blogs` &&
              window.location.href !== `${window.location.origin}/events`
            )
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
            if (index < 1)
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
            return false;
          })}
        </div>
        {window.location.href !== `${window.location.origin}/blogs` &&
          window.location.href !== `${window.location.origin}/events` && (
            <NavLine
              currentLink={currentLink()}
              customStyles={leftsAndWidths}
            />
          )}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  offsetPos: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Navbar;
