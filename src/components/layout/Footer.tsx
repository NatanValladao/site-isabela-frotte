import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <footer className="bg-secondary/40 text-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-headline font-bold">Psicóloga Isabela</h2>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Um espaço de acolhimento e transformação para sua saúde mental.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
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
              <p className="font-headline font-semibold">Contato</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="mailto:contato@isabelapsicologa.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} />
                    <span>contato@isabelapsicologa.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+5511999999999" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={16} />
                    <span>(11) 99999-9999</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Psicóloga Isabela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
