import { React } from 'react';

export const About = ({ skills }) => {
  return (
    <div className="container mb-6 flex flex-col flex-wrap justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">About Me:</h3>
        <span className="gray-900 italic">
          Add something about you.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Skills:</h3>
        <div className="flex items-center gap-2">
          {skills.map((skill, index) => {
            return (
              <span
                key={index}
                className="rounded-3xl bg-gray-200 px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-4 sm:py-2.5 sm:text-sm"
              >
                {skill}
              </span>
            );
          })}
          <span className="text-primary cursor-pointer text-xs underline sm:text-sm">
            + add a new skill
          </span>
        </div>
      </div>
    </div>
  );
};
