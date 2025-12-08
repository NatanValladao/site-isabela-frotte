import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { WhatsappIcon } from "../ui/WhatsappIcon";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  const serviceLinks = [
    { href: "/servicos", label: "Visão Geral" },
    { href: "/servicos/terapia-individual", label: "Terapia Individual" },
    { href: "/servicos/terapia-de-casal", label: "Terapia de Casal" },
    { href: "/servicos/avaliacao-neuropsicologica", label: "Avaliação Neuropsicológica" },
  ];
  
  const phoneNumber = "5522997604703";
  const message = "Olá, gostaria de agendar uma conversa.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-secondary/40 text-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-headline font-bold">Isabela Frotté Mello</h2>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Psicóloga (CRP 05/77920). Um espaço de acolhimento e transformação para sua saúde mental.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/psi.isabelafrotte" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <p className="font-headline font-semibold">Navegação</p>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-headline font-semibold">Serviços</p>
              <ul className="mt-4 space-y-2 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-headline font-semibold">Contato</p>
              <ul className="mt-4 space-y-3 text-sm">
                 <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                    <WhatsappIcon className="h-4 w-4" />
                    <span>(22) 99760-4703</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@isabelafrotte.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    contato@isabelafrotte.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Isabela Frotté Mello. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
