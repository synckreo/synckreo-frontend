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
        <div className="flex flex-col gap-2 mt-10">
          <h3 className="text-center text-lg font-semibold mb-2">
            Download
          </h3>
          <div className="flex gap-5 flex-row">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors mb-2 flex-row flex items-center">
              <svg
                className="w-[40px] h-[40px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
              </svg>

              <div className="mx-2 text-left">
                <i className="mr-2 text-sm">Download on the</i>
                <br />
                App Store
              </div>
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors mb-2 flex-row flex items-center">
              <svg
                class="w-[40px] h-[40px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="mx-2 text-left">
                <i className="text-sm">Get it on</i>
                <br />
                Google Play
              </div>
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
