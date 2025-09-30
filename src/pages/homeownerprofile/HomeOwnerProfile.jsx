import React from 'react';
import { Button } from '../../components/ui/buttons/button';
import avatar from '../../assets/images/home_image_hero.png';

export const HomeOwnerProfile = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          {/* Temporary Avatar */}
          <img
            className="w-32 h-32 rounded-full"
            src={avatar}
            alt="Avatar"
          />
          <h6 className="font-bold">"Home Owner Name"</h6>
          <a href="#" className="text-blue-500">
            Location
          </a>
          <ul className="my-4 flex space-x-4 text-gray-600">
            <li>
              <a href="#">Followers</a>
            </li>
            <li>
              <a href="#">Following</a>
            </li>
            <li>
              <a href="#">Likes</a>
            </li>
          </ul>
          <Button
            variant="outline"
            className="mt-6"
            title={'Edit Profile'}
          ></Button>

          <div className="mt-6 text-center max-w-md">
            <ul className="text-left space-y-2 flex flex-wrap gap-4">
              <li>
                <a
                  href="#"
                  className="inline-block p-4 py-1 px-2 rounded hover:text-orange-500 border-b border-transparent hover:border-orange-500"
                >
                  Open Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block p-4 py-1 px-2 rounded hover:text-orange-500 border-b border-transparent hover:border-orange-500"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
