/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as AcmLogo } from '../../../vectors/AcmLogo.svg';
import NavLink from './NavLink.component';
import NavLine from './NavLine.component';

// Utility functions
import findActiveLink from '../../../utils/findActiveLink';
import setProperties from '../../../utils/setProperties';
import initOffsetPos from '../../../utils/initOffsetPos';
import scrollHandler from '../../../utils/scrollHandler';

// Data
import { LEFTS_AND_WIDTHS, LINKS } from '../../../DataStore';

const Navbar = ({ offsetPos }) => {
  const [leftsAndWidths] = useState(LEFTS_AND_WIDTHS);
  const [links, setLinks] = useState(LINKS);

  useEffect(() => {
    initOffsetPos(links, setLinks, offsetPos);
    // Scroll event listener
    window.addEventListener('scroll', () => {
      scrollHandler(links, setLinks);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetPos]);

  return (
    <header
      className={`hidden md:flex w-screen overflow-x-hidden text-white items-center justify-between fixed w-full top-0 z-30 py-4 px-16 transition duration-500 ease-in-out ${
        document.documentElement.scrollTop > 265 ? 'bg-black' : 'bg-none'
      }`}
    >
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
                  getProps={(width, left) =>
                    setProperties(width, left, index, leftsAndWidths)
                  }
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
                  getProps={(width, left) =>
                    setProperties(width, left, index, leftsAndWidths)
                  }
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
              currentLink={findActiveLink(links)}
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
