import React from 'react';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import ProjectCard from './ProjectCard.component';

const ProjectSection = () => {
  return (
    <section className="ml-40 bg-red-800 text-center my-12">
      <SectionHeader>Projects</SectionHeader>
      <div className="flex overflow-x-scroll items-stretch">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
