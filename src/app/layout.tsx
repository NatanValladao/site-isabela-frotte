import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutWrapper from '@/components/layout/ClientLayoutWrapper';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Psicóloga Isabela - Terapia e Acolhimento',
  description: 'Espaço de terapia e acolhimento com a Psicóloga Isabela. Encontre apoio para sua jornada de autoconhecimento e bem-estar.',
  keywords: 'psicóloga, terapia, psicologia, autoconhecimento, ansiedade, depressão, bem-estar, são paulo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
