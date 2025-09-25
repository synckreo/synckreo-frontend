import React from 'react';

import { Button } from '../buttons/button';
import searchIcon from '../../../assets/icons/search-icon.svg';
import arrowDownIcon from '../../../assets/icons/arrow-down.svg';

export const Search = ({
  placeholder,
  dropdownOptions,
  buttonTitle,
  onSearchClick = () => {},
}) => {
  if (!Array.isArray(dropdownOptions)) {
    console.error(
      "The 'dropdownOptions' prop must be an array of strings."
    );
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
      <div className="w-full sm:flex-grow">
        <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3 w-full focus-within:ring-2 focus-within:ring-primary/50 transition-shadow">
          <img
            src={searchIcon}
            alt="Search"
            className="h-5 w-5 mr-2 text-gray-400"
          />

          <input
            type="text"
            placeholder={placeholder}
            className="flex-grow text-gray-700 outline-none bg-transparent"
          />

          <div className="relative flex items-center">
            <select className="appearance-none bg-transparent outline-none pr-8 font-medium text-gray-800 cursor-pointer">
              {dropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <img
              src={arrowDownIcon}
              alt="arrow down"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {buttonTitle && (
        <Button
          title={buttonTitle}
          variant="solid"
          size="large"
          onClick={onSearchClick}
          styles="w-full sm:w-auto"
        />
      )}
    </div>
  );
};
