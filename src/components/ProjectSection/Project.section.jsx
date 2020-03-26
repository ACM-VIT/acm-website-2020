import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';
import ProjectCard from './ProjectCard.component';
import RightArrow from '../layout/Sections/RightArrow';
import LeftArrow from '../layout/Sections/LeftArrow';
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';

// Utility functions
import scrollHorizontally from '../../utils/scrollHorizontally';

// Data
import { PROJECTS } from '../../DataStore';

const Projects = ({ findOffset }) => {
  const [projects] = useState(PROJECTS);

  // Component variables
  let node;

  return (
    <section
      ref={el => {
        if (!el) return;
        // Get element's offset Y value
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="text-center my-12"
      id="projects-section"
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="flex">
        <div className="w-32 flex-shrink-0 flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'left', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <LeftArrow />
          </div>
        </div>
        <div
          className="hide-scrollbar flex overflow-x-scroll items-stretch p-16 px-4"
          ref={el => {
            if (!el) return;
            node = el;
          }}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              description={project.description}
              image={project.image}
              url={project.url}
            >
              {project.title}
            </ProjectCard>
          ))}
        </div>
        <div className="w-32 flex-shrink-0 flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'right', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="text-acm-blue text-2xl underline px-32">
        <div className="flex items-center flex-no-wrap justify-end">
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
