import { Button } from "../buttons/Button";
import savedIcon from '../../../assets/icons/saved.svg';
import dollarIcon from '../../../assets/icons/dollar.svg';
import locationIcon from '../../../assets/icons/location.svg';
import clockIcon from '../../../assets/icons/clock.svg';
import starIcon from '../../../assets/icons/star.svg';
import { filters } from "../../../assets/dummy/homeownerprofiledata";

export const HomeOwnerCard = ({
    image,
    name,
    headline,
    about,
    description,
    category,
    hourlyRate,
    location,
    averageReplyTime,
    rating,
    reviews

}) => {
  return (
    <div className="bg-gray-100 p-4 w-full rounded-lg">
      <div className="flex justify-between mb-2">
        <img src={image} alt={"Avatar"} className="w-10 h-10 rounded-full mx-2" />
        <div className="gap-2">
            <span className="font-semibold float-start flex">{name}</span>
            <span className="ml-4 text-primary rounded-[6px] bg-[#F57C001A] px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-3">
                {category}
            </span>
          <div className="flex items-center gap-4 whitespace-nowrap">
          <img
            src={dollarIcon}
            alt="Icon"
            className="h-3 w-3 sm:h-4 sm:w-4"
            />
          <span className="text-sm">${hourlyRate}</span>
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
        <div className="justify-end gap-2 flex ms-auto">
          <Button
            icon={<img src={savedIcon} alt="Saved" />}
            variant="outline"
            className="float-end"
          />
          <Button
            title={'View Bids'}
            variant="solid"
            className="float-end"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-2">
        <span className="text-orange-400 font-bold text-xl">{headline}</span>
        <span className="text-lg font-semibold">{about}</span>
        <span className="text-gray-600 text-sm">{description}</span>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row">
        {filters.tag.map((tags)=>(
            <span className="active:text-primary hover:text-primary hover:border-primary active:border-primary cursor-pointer rounded-[20px] border border-gray-800/10 px-4 py-2 text-sm font-medium text-gray-800/70" 
            key={tags}>{tags}</span>
        ))}
      </div>

    </div>
  );
};
