import React from 'react';
import eye from '../../../assets/icons/eye.svg';
import heart from '../../../assets/icons/heart.svg';

export const ProjectCard = ({
  projectBackgroundImg,
  projectName,
  likes,
  views,
}) => {
  return (
    <div
      className="relative flex h-[230px] w-[360px] shrink-0 flex-col justify-end rounded-2xl bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${projectBackgroundImg})` }}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative z-10 flex justify-between gap-2 p-2">
        <span className="text-lg font-semibold">
          {projectName.length > 20
            ? `${projectName.slice(0, 20)}...`
            : projectName}
        </span>

        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <img src={heart} alt="heart" />
            <span className="text-sm font-medium">{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={eye} alt="eye" />
            <span className="text-sm font-medium">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
