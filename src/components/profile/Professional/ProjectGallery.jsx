import React from 'react';
import { ProjectCard } from '../../ui/card/ProjectCard';

export const ProjectGallery = ({ professionalWorks }) => {
  return (
    <div className="container mb-6 flex flex-wrap justify-center gap-4">
      {professionalWorks.map((work) => (
        <ProjectCard
          key={work.id}
          projectBackgroundImg={work.thumbnail}
          projectName={work.title}
          likes={work.likes}
          views={work.views}
        />
      ))}
    </div>
  );
};
