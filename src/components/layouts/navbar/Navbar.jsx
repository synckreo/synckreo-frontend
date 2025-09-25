import React from 'react';

export const Navbar = ({ onHomePage }) => {
  const linkColor = onHomePage ? 'text-white' : 'color-charcoal';

  return (
    <nav className="justify-between flex items-center">
      <ul className="flex gap-x-10">
        <li>
          <a
            href="/"
            className={`text-sm font-medium transition-colors duration-300 ${linkColor}`}
          >
            Explore Professionals & Companies
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`text-sm font-medium transition-colors duration-300 ${linkColor}`}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};
