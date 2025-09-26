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

      <section
        className="flex items-center justify-center py-30"
        style={{ backgroundColor: 'rgba(26, 35, 126, 0.1)' }}
      >
        <div className="container">
          <div className="text-center">
            <h1 className="font-bold heading-56 text-[#222222]">
              Everything You Need in One Platform
            </h1>
            <p className="text-[#333333]">
              From project posting to completion, SyncKreo streamlines
              the entire construction process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
