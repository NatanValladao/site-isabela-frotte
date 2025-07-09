import type { Metadata } from 'next';
import ContatoClient from './client';

export const metadata: Metadata = {
  title: 'Contato | Agende sua Consulta com Isabela Frotté Mello',
  description: 'Entre em contato para agendar uma consulta online ou tirar dúvidas. Atendimento para adolescentes, adultos e casais em todo o mundo.',
  keywords: 'contato psicóloga, agendar consulta online, psicóloga isabela frotté mello, terapia online',
};

export default function ContatoPage() {
  return <ContatoClient />;
}
