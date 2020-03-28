import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';
import SectionHeader from '../layout/Sections/SectionHeader.component';
import ProjectCard from './ProjectCard.component';
import RightArrow from '../layout/Sections/RightArrow';
import LeftArrow from '../layout/Sections/LeftArrow';

// Utility functions
import scrollHorizontally from '../../utils/scrollHorizontally';
import offsetY from '../../utils/offsetY';

// Data
import { PROJECTS } from '../../DataStore';

const Projects = ({ findOffset }) => {
  const [projects] = useState(PROJECTS);

  // Component variables
  let node;

  return (
    <section
      ref={el => offsetY(el, findOffset)}
      className="text-center my-12"
      id="projects-section"
      data-aos="zoom-in"
      data-aos-easing="ease-in-cubic"
      data-aos-duration="800"
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="flex">
        <div className="w-32 flex-shrink-0 hidden md:flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'left', 25, 480, 48)}
            role="button"
            tabIndex={0}
          >
            <LeftArrow />
          </div>
        </div>
        <div
          className="hide-scrollbar flex overflow-x-scroll items-stretch p-8 md:p-16 px-4"
          ref={el => {
            if (!el) return;
            node = el;
          }}
        >
          {projects.map(project => (
            <ProjectCard
              description={project.description}
              image={project.image}
              url={project.url}
              key={project.id}
            >
              {project.title}
            </ProjectCard>
          ))}
        </div>
        <div className="w-32 flex-shrink-0 hidden md:flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'right', 25, 480, 48)}
            role="button"
            tabIndex={0}
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="text-acm-blue text-2xl underline p-0 md:px-32">
        <div className="flex items-center flex-no-wrap justify-center md:justify-end">
          <a
            href="https://github.com/acm-vit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center flex-no-wrap justify-end">
              <div>View All Projects</div>
              <RightLink />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = { findOffset: PropTypes.func.isRequired };

export default Projects;
