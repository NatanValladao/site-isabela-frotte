import Link from 'next/link';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '../ui/WhatsappIcon';
import { siteConfig } from '@/config/site';

const Header = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <span className="font-headline text-xl font-bold text-accent">{siteConfig.shortName}</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Navigation />
          <div className="interactive-button">
            <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full px-5 shadow-sm hover:shadow-md transition-all">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-4 w-4"/>
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
