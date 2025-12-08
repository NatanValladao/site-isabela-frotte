import Link from "next/link";
import { Instagram } from "lucide-react";
import { WhatsappIcon } from "../ui/WhatsappIcon";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const serviceLinks = [
    { href: "/servicos", label: "Visão Geral" },
    { href: "/servicos/terapia-individual", label: "Terapia Individual" },
    { href: "/servicos/terapia-de-casal", label: "Terapia de Casal" },
    { href: "/servicos/avaliacao-neuropsicologica", label: "Avaliação Neuropsicológica" },
  ];
  
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <footer className="bg-secondary/40 text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-accent">{siteConfig.name}</h2>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-background rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <p className="font-headline font-semibold text-foreground mb-4">Navegação</p>
              <ul className="space-y-3 text-sm">
                {siteConfig.nav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-headline font-semibold text-foreground mb-4">Serviços</p>
              <ul className="space-y-3 text-sm">
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
              <p className="font-headline font-semibold text-foreground mb-4">Contato</p>
              <ul className="space-y-3 text-sm">
                 <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium group">
                    <WhatsappIcon className="h-4 w-4 group-hover:text-[#25D366] transition-colors" />
                    <span>{siteConfig.contact.formattedPhone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
