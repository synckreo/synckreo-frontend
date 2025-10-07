import React from 'react';

import { Button } from '../buttons/button';
import searchIcon from '../../../assets/icons/search-icon.svg';
import arrowDownIcon from '../../../assets/icons/arrow-down.svg';

export const Search = ({
  placeholder,
  dropdownOptions,
  buttonTitle,
  value,
  onChange,
  onSearchClick = () => {},
  searchInputBorderColor = 'border-gray-200',
}) => {
  const showDropdown =
    Array.isArray(dropdownOptions) && dropdownOptions.length > 0;

  return (
    <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
      <div className="w-full sm:flex-grow">
        <div
          className={`flex items-center border bg-white ${searchInputBorderColor} focus-within:ring-primary/50 w-full rounded-lg px-4 py-3 transition-shadow focus-within:ring-2`}
        >
          <img
            src={searchIcon}
            alt="Search"
            className="mr-2 h-5 w-5 text-gray-400"
          />

          <input
            type="text"
            placeholder={placeholder}
            className="flex-grow bg-transparent text-gray-700 outline-none"
          />
          {showDropdown && (
            <div className="relative flex items-center">
              <select
                className="cursor-pointer appearance-none bg-transparent pr-4 font-medium text-gray-800 outline-none"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              >
                {dropdownOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <img
                src={arrowDownIcon}
                alt="arrow down"
                className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2"
              />
            </div>
          )}
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
