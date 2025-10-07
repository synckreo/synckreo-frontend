import React from 'react';

import { Button } from '../buttons/button';
import dollarIcon from '../../../assets/icons/dollar.svg';
import locationIcon from '../../../assets/icons/location.svg';
import savedIcon from '../../../assets/icons/saved.svg';
import clockIcon from '../../../assets/icons/clock.svg';
import starIcon from '../../../assets/icons/star.svg';

export const ProfileCard = ({
  avatar,
  companyName,
  category,
  reviews,
  rating,
  averageReplyTime,
  hourlyRate,
  location,
  skills = [],
  maxVisibleSkills = 6,
  applications,
  jobDesc,
  jobPostTitle,
  onSaveClick,
  onViewProfileClick,
  onGetInTouchClick,
  onApplyNow,
  children,
}) => {
  const visibleSkills = skills.slice(0, maxVisibleSkills);
  const remainingSkillsCount = Math.max(
    0,
    skills.length - maxVisibleSkills
  );

  return (
    <div className="mb-8 h-full w-full rounded-[16.47px] bg-gray-100 p-3 shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-1 items-start gap-2 sm:gap-3">
          <img
            className="h-12 w-12 md:h-14 md:w-14"
            src={avatar}
            alt={companyName}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h3 className="text-sm leading-[100%] font-semibold sm:text-lg">
                {companyName}
              </h3>
              <span className="text-primary rounded-[6px] bg-[#F57C001A] px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-3">
                {category}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm md:gap-4">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <img
                  src={dollarIcon}
                  alt="Icon"
                  className="h-3 w-3 sm:h-4 sm:w-4"
                />
                <span className="text-sm">${hourlyRate}</span>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="h-3 w-3 sm:h-4 sm:w-4"
                />
                <span className="max-w-[120px] truncate sm:max-w-none">
                  {location}
                </span>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <img
                  src={clockIcon}
                  alt="Clock"
                  className="h-3 w-3 sm:h-4 sm:w-4"
                />
                <span className="hidden sm:inline">
                  Replies in about {averageReplyTime} hours
                </span>
                <span className="sm:hidden">
                  ~{averageReplyTime}h reply
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <img
                    src={starIcon}
                    alt="star"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                  <span className="font-semibold">{rating}</span>
                  <span className="text-gray-500">({reviews})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:gap-3 md:self-center">
          <Button
            icon={<img src={savedIcon} alt="Saved" />}
            variant="iconOnly"
            onClick={onSaveClick}
            styles="flex-shrink-0"
          />
          {jobDesc ? (
            <Button
              variant="solid"
              title="Apply Now"
              onClick={onApplyNow}
              styles="w-full sm:w-auto"
            />
          ) : (
            <>
              <Button
                variant="outline"
                title="View Profile"
                onClick={onViewProfileClick}
                styles="flex-initial"
              />
              <Button
                variant="solid"
                title="Get In Touch"
                onClick={onGetInTouchClick}
                styles="flex-initial"
              />
            </>
          )}
        </div>
      </div>

      {jobPostTitle && (
        <div className="mt-4 sm:mt-6">
          <h3 className="text-primary text-lg font-semibold sm:text-xl md:text-2xl">
            {jobPostTitle}
          </h3>
        </div>
      )}

      {jobDesc && (
        <div className="mt-4 sm:mt-6">
          <h3 className="text-sm font-semibold sm:text-base">
            About the Job:
          </h3>
          <p className="mt-2 text-sm text-gray-700 sm:text-base">
            {jobDesc}
          </p>
        </div>
      )}

      {children && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-3 sm:mt-6 sm:gap-3 md:gap-4">
          {children}
        </div>
      )}

      {skills.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-6">
          {visibleSkills.map((skill, index) => (
            <span
              key={index}
              className="rounded-3xl bg-gray-200 px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-4 sm:py-2.5 sm:text-sm"
            >
              {skill}
            </span>
          ))}

          {remainingSkillsCount > 0 && (
            <div className="group relative inline-block">
              <span className="text-primary cursor-pointer text-xs underline sm:text-sm">
                + {remainingSkillsCount} other skills
              </span>

              {/* Tooltip */}
              <div className="absolute bottom-full left-0 z-10 mb-2 hidden w-max max-w-[280px] group-hover:block sm:max-w-md">
                <div className="rounded-lg bg-gray-50 p-3 shadow-lg">
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .slice(maxVisibleSkills)
                      .map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-3xl bg-gray-200 px-3 py-2 text-xs font-medium sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-4 h-0 w-0 border-t-4 border-r-4 border-l-4 border-t-gray-50 border-r-transparent border-l-transparent"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {applications && (
        <div className="mt-4 flex items-center gap-2 text-sm sm:mt-6 sm:text-base">
          <span className="text-gray-800/70">Applications:</span>
          <p className="font-medium text-gray-700">{applications}+</p>
        </div>
      )}
    </div>
  );
};
