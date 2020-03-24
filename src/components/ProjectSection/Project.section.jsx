import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import ProjectCard from './ProjectCard.component';

const Projects = ({ findOffset }) => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 2,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 3,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 4,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 5,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 6,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 7,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 8,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    },
    {
      id: 9,
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit.',
      image: `${process.env.PUBLIC_URL}/assets/images/ProjectBackdrop.png`
    }
  ]);

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y);
      }}
      className="text-center my-12"
      id="projects-section"
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="ml-32 flex overflow-x-scroll items-stretch pl-4 p-16">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            description={project.description}
            image={project.image}
          >
            {project.title}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = { findOffset: PropTypes.func.isRequired };

export default Projects;
