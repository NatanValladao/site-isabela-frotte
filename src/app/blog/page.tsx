import type { Metadata } from 'next';
import BlogClient from './client';

export const metadata: Metadata = {
  title: 'Blog | Psicologia, Saúde Mental e Bem-Estar',
  description: 'Artigos e reflexões sobre psicologia, saúde mental e bem-estar. Encontre dicas para gerenciar a ansiedade, melhorar relacionamentos e cuidar de você.',
  keywords: 'blog psicologia, saúde mental, bem-estar, ansiedade, autocuidado, relacionamentos',
};

export default function BlogPage() {
  return <BlogClient />;
}
