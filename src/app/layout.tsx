import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutWrapper from '@/components/layout/ClientLayoutWrapper';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://psicologaisabelafrotte.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Isabela Frotté Mello - Psicóloga | Psicoterapeuta | Terapia de Casais',
    template: '%s | Isabela Frotté Mello - Psicóloga',
  },
  description: 'Psicóloga Isabela Frotté Mello (CRP 05/77920). Atendimento online para adolescentes, adultos e casais. Especialista em TCC, Neuropsicologia, Transtorno Borderline e Bipolar.',
  keywords: 'psicóloga, psicologia, terapia online, TCC, neuropsicologia, transtorno de personalidade borderline, transtorno afetivo bipolar, isabela frotté mello',
  authors: [{ name: 'Natan Motta Valladão' }],
  creator: 'Natan Motta Valladão',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: 'Isabela Frotté Mello - Psicóloga | Psicoterapeuta | Terapia de Casais',
    description: 'Encontre um espaço de acolhimento para sua jornada de autoconhecimento, bem-estar e saúde mental.',
    siteName: 'Isabela Frotté Mello | Psicóloga',
    images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: 'Consultório Digital da Psicóloga Isabela Frotté Mello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isabela Frotté Mello - Psicóloga | Psicoterapeuta | Terapia de Casais',
    description: 'Encontre apoio para sua jornada de autoconhecimento, bem-estar, ansiedade e depressão.',
    creator: '@psi.isabelafrotte',
    images: [`${siteUrl}/og-image.png`],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: 'Isabela Frotté Mello',
    image: `${siteUrl}/og-image.png`, 
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+5522997604703',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
    },
    description: 'Psicóloga (CRP 05/77920) com atuação clínica online voltada para adolescentes, adultos e casais. Formação em Terapia Cognitivo-Comportamental (TCC) e pós-graduanda em Neuropsicologia.',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.instagram.com/psi.isabelafrotte',
    ],
  };
  
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
