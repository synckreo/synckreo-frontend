import React from 'react';

import home_image_hero from '../../assets/images/home_image_hero.png';
import { Search } from '../../components/ui/search/Search';

export const Home = () => {
  const heroStyles = {
    backgroundImage: `linear-gradient(to right, white 45%, transparent 45%), url(${home_image_hero})`,
    backgroundSize: 'auto, 55% auto',
    backgroundPosition: 'left center, right center',
    backgroundRepeat: 'no-repeat',
  };

  const searchCategories = ['Jobs', 'Jobs', 'Jobs'];

  return (
    <>
      <section
        className="min-h-screen flex items-center"
        style={heroStyles}
      >
        <div className="container mx-16 grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-8">
            <h1 className="color-charcoal text-4xl md:text-5xl font-bold leading-tight">
              The Future of Construction Collaboration!
            </h1>

            <div className="flex flex-col gap-8">
              <p className="color-charcoal">
                Discover a vibrant network of professionals and
                companies. Synckreo is where opportunities are born
                and great minds meet.
              </p>

              <div className="w-full md:w-5/6">
                <Search
                  placeholder="What are you looking for?"
                  dropdownOptions={searchCategories}
                  buttonTitle="Search"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-span-7"></div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
        <div className="text-center px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Synckreo
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-2 text-md text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </>
  );
};
