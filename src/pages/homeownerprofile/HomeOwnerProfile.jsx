import React, {useState} from 'react';
import { homeownerdata, profiles } from '../../assets/dummy/homeownerprofiledata';
import { HomeOwnerCard } from '../../components/ui/card/HomeOwnerCard';
import { Button } from '../../components/ui/buttons/Button';
import locationIcon from '../../assets/icons/location.svg';
import starIcon from '../../assets/icons/star.svg';
import avatar from '../../assets/images/avatar/sarahSmith.png';

export const HomeOwnerProfile = () => {
  
    const [selectedTab, setSelectedTab] = useState('Open Projects');
    const tabHandler = (e) => {
    setSelectedTab(e.target.innerText);

  };
  return (
    <>
      <section className="mt-24 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          {/* Temporary Avatar */}
          <img
            className="w-32 h-32 rounded-full"
            src={avatar}
            alt="Avatar"
          />
          {profiles.profile.map((prof)=>(
            <div className='grid text-center gap-2 justify-center'>
            <span className='text-3xl font-semibold font-General Sans' key={prof}>
              {prof.name}
              <span className='text-sm ml-2 text-primary rounded-[6px] bg-[#F57C001A] px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-3'>
                {prof.category}</span>
            </span>
            <div className="flex items-center text-sm gap-2 whitespace-nowrap justify-center">
              <img
                src={locationIcon}
                     alt="Location"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                 />
              <span>
                <a href='#'>
                {prof.location}
                </a>
              </span>
              <img
                src={starIcon}
                     alt="star"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                 />
                <span>
                  {prof.rating}
                </span>
                <span className="text-gray-500">({prof.reviews})</span>
              </div>
            <div>
            <ul className="flex my-2 space-x-4 mb-5 items-center justify-center">
                <li>
                  <span>{prof.followers}</span> 
                  <a href="#" className='text-gray-600'> Followers</a>
                </li>
                <li>
                  <span>{prof.following}</span>
                  <a href="#" className='text-gray-600'> Following</a>
                </li>
                <li>
                  <span>{prof.likes}</span>
                  <a href="#" className='text-gray-600'> Likes</a>
                </li>
            </ul>
            </div>
            </div>
          ))}
          
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
                  className="inline-block p-4 py-1 px-2 hover:text-orange-500 border-b border-transparent hover:border-orange-500 focus:text-orange-500"
                  onClick={tabHandler}
                >
                  Open Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block p-4 py-1 px-2 hover:text-orange-500 border-b border-transparent hover:border-orange-500 focus:text-orange-500"
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
                        image={owner.image}
                        name={owner.name}
                        category={owner.category}
                        headline={owner.headline}
                        hourlyRate={owner.hourlyRate}
                        location={owner.location}
                        averageReplyTime={owner.averageReplyTime}
                        about={owner.about}
                        rating={owner.rating}
                        reviews={owner.reviews}
                        description={owner.description} 
                    />
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  title={'Load More'}
                  variant="outline"
                  className="my-4"
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
