import React from 'react';

import { Button } from '../../../components/ui/buttons/Button';

import locationIcon from '../../../assets/icons/location.svg';
import starIcon from '../../../assets/icons/star.svg';

export const ProfileHeader = ({
  location,
  role,
  name,
  reviews,
  rating,
  likes,
  followers,
  following,
  badge,
  avatar,
}) => {
  const { city, state } = location;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mb-2">
        <img
          className="h-24 w-24 rounded-full object-cover object-center sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40"
          src={avatar}
          alt="Avatar"
        />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-semibold lg:text-5xl">{name}</h3>
        <span className="text-primary rounded-[6px] bg-[#F57C001A] px-3 py-2 text-xs font-medium">
          {badge}
        </span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <span>
            <img src={locationIcon} alt="" />
          </span>
          <span>
            {city}, {state}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span>
              <img src={starIcon} alt="" />
            </span>
            <span>{rating}</span>
          </div>
          <span>({reviews})</span>
        </div>
      </div>
      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{followers}</span>
          <span className="text-sm text-[#262626B2]">Followers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{following}</span>
          <span className="text-sm text-[#262626B2]">Following</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{likes}</span>
          <span className="text-sm text-[#262626B2]"> Likes</span>
        </div>
      </div>

      <div className="mt-6">
        <Button title="Edit Profile" variant="outline" />
      </div>
    </div>
  );
};
