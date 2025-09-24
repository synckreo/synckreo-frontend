import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-brand text-gray-700 px-6 py-3 flex justify-between items-center">
      <span className="text-xl font-bold">MyApp</span>
      <ul className="flex gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
};
