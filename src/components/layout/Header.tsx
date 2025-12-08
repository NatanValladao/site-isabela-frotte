import Link from 'next/link';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '../ui/WhatsappIcon';

const Header = () => {
  const phoneNumber = "5522981706932";
  const message = "Oi! Conheci seu trabalho através do seu site e gostaria de saber mais.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-xl font-bold">Isabela Frotté Mello</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Navigation />
          <div className="interactive-button">
            <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full px-4">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-5 w-5"/>
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
