"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const phoneNumber = "5521999999999";

const getMessageForPath = (path: string) => {
  if (path.startsWith('/servicos/terapia-individual')) {
    return "Olá, gostaria de saber mais sobre a terapia individual.";
  }
  if (path.startsWith('/servicos/terapia-de-casal')) {
    return "Olá, gostaria de saber mais sobre a terapia de casal.";
  }
  if (path.startsWith('/servicos/orientacao-profissional')) {
    return "Olá, gostaria de saber mais sobre a avaliação neuropsicológica.";
  }
  return "Olá, gostaria de agendar uma conversa.";
};

export default function WhatsappButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Show button immediately on mount if already scrolled
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const message = getMessageForPath(pathname);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out",
      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
    )}>
      <Button asChild size="icon" className="w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white">
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp">
          <WhatsappIcon className="w-7 h-7" />
        </Link>
      </Button>
    </div>
  );
}
