import { Navbar } from '../navbar/Navbar';
import { Button } from '../../ui/buttons/button';

export const Header = () => {
  return (
    <header className="py-3.5 px-6 flex justify-between items-center">
      <Navbar />
      <div className="flex gap-2">
        <Button title={'Join Now'} />
        <Button title={'Sign In'} variant="solid" />
      </div>
    </header>
  );
};
