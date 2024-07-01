import { FC } from 'react';

import ProjectCards from './ProjectCards';

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="content-area">
      <h3 id="projects-title">projects</h3>

      <p>
        Here's a collection of the web development projects I've crafted and
        designed—a journey through my skills, creativity, and growth as a
        developer.
      </p>

      <div className="project-card-container">
        <ProjectCards />
      </div>
    </section>
  );
};

export default ProjectsSection;
