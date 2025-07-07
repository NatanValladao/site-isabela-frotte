import type { Metadata } from 'next';
import SobreClient from './client';

export const metadata: Metadata = {
  title: 'Sobre Isabela | Psicóloga Humanista em São Paulo',
  description: 'Conheça a trajetória, formação e abordagem da Psicóloga Isabela. Uma profissional dedicada a guiar sua jornada de autoconhecimento com empatia e ética.',
  keywords: 'sobre psicóloga, psicóloga humanista, formação psicologia, abordagem terapêutica',
};

export default function SobrePage() {
  return <SobreClient />;
}
