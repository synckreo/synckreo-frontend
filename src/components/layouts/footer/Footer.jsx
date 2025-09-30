import React from 'react';
import FooterBG from '../../../assets/images/footer_background_Image.png';
import FooterLG from '../../../assets/images/Footer_logo.png';

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
          <img src={FooterLG} alt="Synckreo Logo" />
          <p className="text-sm text-gray-600 mt-4">
            Join our newsletter to stay up to date on features and
            releases.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow text-gray-700 border border-gray-300 rounded-lg px-4 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
          <span className="text-sm text-gray-600 mt-4 block">
            By subscribing you agree to with our Privacy Policy and
            provide consent to receive updates from our company.
          </span>
        </div>
        <div className="flex flex-col gap-2 ml-10">
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
        <div className="align-items-center flex flex-col gap-2 mt-10">
          <h3 className="text-center text-lg font-semibold mb-2">
            Download
          </h3>
          <div className="mb-4 align-items-center flex gap-4 flex-row">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <i className="fab fa-apple mr-2 text-sm">
                Download on the
              </i>
              App Store
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <i className="fab fa-google-play mr-2 text-sm">
                Get it on
              </i>
              Google Play
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Synckreo. All rights
          reserved.
          <ul className="float-end flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:underline after:content-['|'] after:mx-2"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline after:content-['|'] after:mx-2"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline after:content-['|'] after:mx-2"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Copyright Policy
              </a>
            </li>
          </ul>
        </p>
      </div>
    </footer>
  );
};
