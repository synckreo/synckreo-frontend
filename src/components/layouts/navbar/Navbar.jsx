import React from 'react';

export const Navbar = () => {
  return (
    <nav className="text-gray-700 justify-between flex items-center">
      <span className="text-xl font-bold">MyApp</span>
      <ul className="flex gap-6">
        <li>
          <a href="/">Explore Professionals & Companies</a>
        </li>
        <li>
          <a href="/about">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};
