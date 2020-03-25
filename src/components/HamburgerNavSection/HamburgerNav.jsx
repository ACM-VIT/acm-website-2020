/* eslint-disable react/jsx-indent */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const HamburgerNav = () => {

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#ffffff'
    },
    bmBurgerBarsHover: {
      background: '#0085B9'
    },
    bmCrossButton: {
      height: '50px',
      width: '50px'
    },
    bmCross: {
      background: '#ffffff'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#0085B9',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  
  return(
    <Menu right style={styles} className="text-white text-center">
        <a id="home" className="menu-item" href="#landing-section">Home</a>
        <a id="about" className="menu-item" href="#about-section">About Us</a>
        <a id="team" className="menu-item" href="#team-section">Team</a>
        <a id="events" className="menu-item" href="#events-section">Events</a>
        <a id="blogs" className="menu-item" href="#blogs-section">Blogs</a>
        <a id="projects" className="menu-item" href="#projects-section">Projects</a>
        <a id="contact-us" className="menu-item" href="#contact-section">Contact Us</a>
    </Menu>
  );
};

export default HamburgerNav;
