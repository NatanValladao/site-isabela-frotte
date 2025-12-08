"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { WhatsappIcon } from '../ui/WhatsappIcon';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

const phoneNumber = "5522981706932";
const message = "Oi! Conheci seu trabalho através do seu site e gostaria de saber mais.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col p-0">
         <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
        <div className="p-6 flex items-center justify-between border-b">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <span className="font-headline text-lg font-bold">Isabela Frotté Mello</span>
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar menu</span>
            </Button>
          </SheetClose>
        </div>
        <nav className="mt-8 flex-1 flex-col space-y-2 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium p-3 rounded-md transition-colors block',
                pathname === link.href
                  ? 'bg-accent/80 text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent/40 hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-6 border-t">
          <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <WhatsappIcon className="mr-2 h-5 w-5"/>
              Fale no WhatsApp
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
