import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-brand text-gray-700 px-6 py-3 flex justify-between items-center">
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
