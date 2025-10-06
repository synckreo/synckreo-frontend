import React, {useState} from 'react';
import { homeownerdata } from '../../assets/dummy/homeownerprofiledata';
import { HomeOwnerCard } from '../../components/ui/card/HomeOwnerCard';
import { Button } from '../../components/ui/buttons/Button';
import avatar from '../../assets/images/home_image_hero.png';

export const HomeOwnerProfile = () => {

    const [selectedTab, setSelectedTab] = useState('Open Projects');
    const tabHandler = (e) => {
    setSelectedTab(e.target.innerText);
  };
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
                  className="inline-block p-4 py-1 px-2 hover:text-orange-500 border-b border-transparent hover:border-orange-500"
                  onClick={tabHandler}
                >
                  Open Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block p-4 py-1 px-2 hover:text-orange-500 border-b border-transparent hover:border-orange-500"
                  onClick={tabHandler}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          {selectedTab === 'Open Projects' && (
            <div className="container mt-4 mx-auto px-4 ">
              <div className="grid grid-rows-1 sm:grid-rows-3 lg:grid-rows-3 gap-4 w-full">
                {homeownerdata.homeOwners.map((owner) => (
                    <HomeOwnerCard
                        key={owner.id}
                        name={owner.name}
                        headline={owner.headline}
                        about={owner.about}
                        description={owner.description}
                        avatar={owner.avatar}  
                    />
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  title={'Load More'}
                  variant="outline"
                  className="mt-4"
                />
              </div>
            </div>
          )}
          {selectedTab === 'About' && (
            <div>
              <div>
                <h1>About me </h1>
                <p>John Doe</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
