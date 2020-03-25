import React,{useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import HamburgerNav from './HamburgerNav.component';


const HamburgerNavbar = () => {
  const [links] = useState([
    { id: 1, text: 'Home', scrollTo: 'landing-section' },
    { id: 2, text: 'About', scrollTo: 'about-section' },
    { id: 3, text: 'Team', scrollTo: 'team-section' },
    { id: 4, text: 'Events', scrollTo: 'events-section' },
    { id: 5, text: 'Blogs', scrollTo: 'blogs-section' },
    { id: 6, text: 'Projects', scrollTo: 'projects-section' },
    { id: 7, text: 'Contact Us', scrollTo: 'contact-section' },
    { id: 8, text: 'Gallery', scrollTo: 'contact-section' }
  ]);

  return(
    <Menu right>
      <Menu>
        {links.map(links => (
          <HamburgerNav
            key={links.id} 
            text={links.text}
            scrollTo={links.scrollTo}
          />
        ))}
      </Menu>
    </Menu>
  );
};

export default HamburgerNavbar;