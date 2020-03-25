/* eslint-disable react/jsx-indent */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const HamburgerNav = () => {
  
  return(
    <Menu className="text-center text-white text-xl">
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
