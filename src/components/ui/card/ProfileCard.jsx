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
    <div className="m-6 h-full w-full rounded-[16.47px] bg-gray-100 p-3 shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="h-14 w-14" src={avatar} alt={companyName} />
          <div className="flex flex-col gap-1">
            <div className="m-1 flex items-center gap-4">
              <h3 className="text-lg leading-[100%] font-semibold">
                {companyName}
              </h3>
              <span className="text-primary rounded-[6px] bg-[#F57C001A] px-3 py-2 text-xs font-medium">
                {category}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <img src={dollarIcon} alt="Icon" />
                <span className="text-sm">${hourlyRate}</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={locationIcon} alt="Location" />
                <span className="text-sm">{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={clockIcon} alt="Clock" />
                <span className="text-sm">
                  Replies in about {averageReplyTime} hours
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <img
                    src={starIcon}
                    alt="star"
                    className="h-4 w-4"
                  />
                  <span className="text-sm font-semibold">
                    {rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({reviews})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            icon={<img src={savedIcon} alt="Saved" />}
            variant="iconOnly"
            onClick={onSaveClick}
          />
          {jobDesc ? (
            <Button
              variant="solid"
              size="normal"
              title="Apply Now"
              onClick={onApplyNow}
            />
          ) : (
            <>
              <Button
                variant="outline"
                size="normal"
                title="View Profile"
                onClick={onViewProfileClick}
              />
              <Button
                variant="solid"
                size="normal"
                title="Get In Touch"
                onClick={onGetInTouchClick}
              />
            </>
          )}
        </div>
      </div>

      {jobPostTitle && (
        <div className="mt-6">
          <h3 className="text-primary text-2xl font-semibold">
            {jobPostTitle}
          </h3>
        </div>
      )}

      {jobDesc && (
        <div className="mt-6">
          <h3 className="text-base font-semibold">About the Job:</h3>
          <p className="text-gray-700">{jobDesc}</p>
        </div>
      )}

      {children && (
        <div className="mt-6 flex gap-4 overflow-x-auto pb-3">
          {children}
        </div>
      )}

      {skills.length > 0 && (
        <div className="mt-6 flex items-center gap-2">
          {visibleSkills.map((skill, index) => (
            <span
              key={index}
              className="rounded-3xl bg-gray-200 p-[12px] text-sm font-medium"
            >
              {skill}
            </span>
          ))}

          {remainingSkillsCount > 0 && (
            <div className="group relative inline-block">
              <span className="text-primary cursor-pointer underline">
                + {remainingSkillsCount} other skills
              </span>

              {/* Tooltip */}
              <div className="absolute bottom-full left-0 z-10 mb-2 hidden w-max max-w-md group-hover:block">
                <div className="rounded-lg bg-gray-50 p-3 shadow-lg">
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .slice(maxVisibleSkills)
                      .map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-3xl bg-gray-200 px-3 py-2 text-sm font-medium"
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
        <div className="mt-6 flex gap-2">
          <span className="text-gray-800/70">Applications:</span>
          <p className="font-medium text-gray-700">{applications}+</p>
        </div>
      )}
    </div>
  );
};
