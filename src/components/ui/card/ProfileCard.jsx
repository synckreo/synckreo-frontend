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
  onSaveClick,
  onViewProfileClick,
  onGetInTouchClick,
  children,
}) => {
  const visibleSkills = skills.slice(0, maxVisibleSkills);
  const remainingSkillsCount = Math.max(
    0,
    skills.length - maxVisibleSkills
  );

  return (
    <div className="m-3 h-full w-full rounded-[16.47px] bg-gray-100 p-3">
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
        </div>
      </div>

      {children && (
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
          {children}
        </div>
      )}

      {skills.lenght > 0 && (
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
            <span className="text-primary">
              + {remainingSkillsCount} other skills
            </span>
          )}
        </div>
      )}
    </div>
  );
};
