import type { Metadata } from 'next';
import ContatoClient from './client';

export const metadata: Metadata = {
  title: 'Contato | Agende sua Consulta com a Psicóloga Isabela',
  description: 'Entre em contato para agendar uma consulta ou tirar dúvidas. Atendimento presencial em São Paulo e online. Envie uma mensagem ou ligue.',
  keywords: 'contato psicóloga, agendar consulta, psicóloga são paulo, terapia online',
};

export default function ContatoPage() {
  return <ContatoClient />;
}
