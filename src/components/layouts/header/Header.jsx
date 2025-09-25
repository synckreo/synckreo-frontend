import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';
import { Button } from '../../ui/buttons/button';

export const Header = () => {
  const location = useLocation();
  const onHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!onHomePage) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onHomePage]);

  const isTransparent = onHomePage && !isScrolled;

  const headerClass = isTransparent
    ? 'bg-transparent'
    : 'bg-white shadow-md';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-3.5 px-6 flex justify-between items-center transition-all duration-300 ${headerClass}`}
    >
      <img
        src="/_main_logo_/logo_synckreo_colored.svg"
        alt="Synckreo Logo"
        className="h-8"
      />
      <Navbar isTransparent={isTransparent} />
      <div className="flex gap-2">
        <Button title={'Join Now'} />
        <Button title={'Sign In'} variant="solid" />
      </div>
    </header>
  );
};
