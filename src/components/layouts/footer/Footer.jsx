import React from 'react';
import FooterBG from '../../../assets/images/footer_background_Image.png';

export const Footer = () => {
  const footerBgStyles = {
    backgroundImage: `url(${FooterBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'start',
    minHeight: '400px',
  };
  return (
    <footer style={footerBgStyles} className="w-full h-48">
      <div className="container grid grid-cols-3 mx-auto py-8 flex flex-col items-start gap-10">
        <div>
          <img
            src="/_main_logo_/logo_synckreo_colored.svg"
            alt="Synckreo Logo"
            className="w-541px h-80px"
          />
          <br />
          <p className="text-sm text-gray-600">
            Join our newsletter to stay up to date on features and
            releases.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow text-gray-700 border border-gray-300 rounded-l-lg px-4 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-r-lg px-4 py-2 hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Pages</h3>
          <a
            href="#"
            className="block text-gray-600 hover:text-gray-800"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-gray-800"
          >
            How It Works
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-gray-800"
          >
            Explore Professionals & Companies
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-gray-800"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-gray-800"
          >
            FAQs
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Download</h3>
        </div>
      </div>
    </footer>
  );
};
