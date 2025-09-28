import React from 'react';
import { Button } from '../buttons/Button';
import starIcon from "../../../assets/icons/star.svg"

export const Card = ({
  image,
  imageAlt = 'Card image',
  name,
  description,
  category,
  rating,
  reviewCount,
  buttonText = 'Contact Now',
  onButtonClick,
  className = '',
}) => {
  return (
    <div className={`lg:max-w-80 h-full bg-gray-100 p-3 rounded-[16.47px] flex flex-col ${className}`}>
      <img src={image} alt={imageAlt} className="w-full rounded-lg" />
      
      <div className="flex justify-between my-3 items-center">
        <span className="py-2 px-3 bg-[#F57C001A] rounded-md text-primary font-medium">
          {category}
        </span>
        <div className="flex items-center gap-1">
          <img src={starIcon} alt="star" className="w-4 h-4" />
          <span className="font-semibold">{rating}</span>
          <span className="text-gray-500">({reviewCount})</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-[8px] flex-grow">
        <span className="font-semibold">{name}</span>
        <p className="text-[#262626B2] flex-grow">{description}</p>
        
          <Button
            title={buttonText}
            variant="contact"
            onClick={onButtonClick}
          />
      </div>
    </div>
  );
};
