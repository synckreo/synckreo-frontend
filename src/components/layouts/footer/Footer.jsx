import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights
          reserved.
        </p>

        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
