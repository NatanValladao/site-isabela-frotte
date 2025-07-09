import type { Metadata } from 'next';
import ContatoClient from './client';

export const metadata: Metadata = {
  title: 'Contato por WhatsApp | Fale com a Psicóloga Isabela Frotté Mello',
  description: 'Entre em contato diretamente pelo WhatsApp para agendar uma consulta ou tirar dúvidas. Atendimento online para adolescentes, adultos e casais.',
  keywords: 'contato psicóloga, whatsapp psicóloga, agendar consulta online, psicóloga isabela frotté mello, terapia online',
};

export default function ContatoPage() {
  return <ContatoClient />;
}
