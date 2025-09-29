import React from 'react';
import FooterBG from '../../../assets/images/footer_background_Image.png';

export const Footer = () => {
  const footerBgStyles = {
    backgroundImage: `url(${FooterBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'start',
  };
  return (
    <footer style={footerBgStyles} className="w-full h-48">
      <div className="container grid grid-cols-3 mx-auto py-8 flex flex-col items-start gap-4">
        <div>
          <img
            src="/_main_logo_/logo_synckreo_colored.svg"
            alt="Synckreo Logo"
            className="h-8"
          />
          <p className="text-sm text-gray-600">
            Join our newsletter to stay up to date on features and
            releases.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Pages</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Download</h3>
        </div>
      </div>
    </footer>
  );
};
