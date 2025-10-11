import { React } from 'react';

import fbIcon from '../../../assets/icons/fb-logo.svg';
import gmailIcon from '../../../assets/icons/gmail-logo.svg';
import linkedinIcon from '../../../assets/icons/linkedin-logo.svg';

export const About = ({ skills }) => {
  return (
    <div className="container mb-6 flex flex-col flex-wrap justify-center gap-4">
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <h3 className="font-bold">About Me:</h3>
        <span className="gray-900 italic">
          Add something about you.
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <h3 className="font-bold">Skills:</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
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
        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <button className="flex w-80 cursor-pointer items-center gap-3 rounded-lg border border-[#1877F2]/[0.30] bg-[#1877F2]/[0.05] px-4 py-3 shadow-xs transition-colors hover:bg-gray-50">
            <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
            <span className="text-base font-medium text-gray-900">
              Facebook
            </span>
          </button>
          <button className="w-80 cursor-pointer rounded-lg bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] p-[1px] transition-shadow hover:shadow-xs">
            <div className="flex h-full w-full items-center gap-3 rounded-[calc(0.5rem-1px)] bg-gradient-to-br from-[#FBF8F3] to-[#F5F0E8] px-4 py-3">
              <img src={gmailIcon} alt="Gmail" className="h-6 w-6" />
              <span className="text-base font-medium text-gray-900">
                Gmail
              </span>
            </div>
          </button>
          <button className="flex w-80 cursor-pointer items-center gap-3 rounded-lg border border-[#0A66C2]/[0.30] bg-[#0A66C2]/[0.05] px-4 py-3 shadow-xs transition-colors hover:bg-gray-50">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="h-6 w-6"
            />
            <span className="text-base font-medium text-gray-900">
              LinkedIn
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
