import type { Metadata } from 'next';
import SobreClient from './client';

export const metadata: Metadata = {
  title: 'Sobre | Isabela Frotté Mello - Psicóloga (CRP 05/77920)',
  description: 'Conheça a trajetória, formação e abordagem da psicóloga Isabela Frotté Mello. Especialista em TCC, neuropsicologia e regulação emocional.',
  keywords: 'sobre psicóloga, isabela frotté mello, psicóloga TCC, neuropsicologia, CRP 05/77920',
};

export default function SobrePage() {
  return <SobreClient />;
}
