import Link from 'next/link';
import Navigation from './Navigation';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-xl font-bold">Isabela Frotté Mello</span>
        </Link>
        
        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
