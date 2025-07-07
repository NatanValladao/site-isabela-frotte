import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutWrapper from '@/components/layout/ClientLayoutWrapper';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://isabelapsicologa.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Psicóloga Isabela - Terapia e Acolhimento em São Paulo',
    template: '%s | Psicóloga Isabela',
  },
  description: 'Espaço de terapia e acolhimento com a Psicóloga Isabela em São Paulo. Encontre apoio para sua jornada de autoconhecimento, bem-estar, ansiedade e depressão.',
  keywords: 'psicóloga, terapia, psicologia, autoconhecimento, ansiedade, depressão, bem-estar, são paulo, terapia de casal, orientação profissional',
  authors: [{ name: 'Psicóloga Isabela' }],
  creator: 'Psicóloga Isabela',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: 'Psicóloga Isabela - Terapia e Acolhimento em São Paulo',
    description: 'Encontre apoio para sua jornada de autoconhecimento, bem-estar, ansiedade e depressão.',
    siteName: 'Psicóloga Isabela',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicóloga Isabela - Terapia e Acolhimento em São Paulo',
    description: 'Encontre apoio para sua jornada de autoconhecimento, bem-estar, ansiedade e depressão.',
    creator: '@isabelapsicologa', // placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Psicóloga Isabela',
    image: `${siteUrl}/og-image.png`, // placeholder
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+55-11-99999-9999',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Fictícia, 123',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01000-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.55052,
      longitude: -46.633308,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.instagram.com/isabelapsicologa', // placeholder
      'https://www.linkedin.com/in/isabelapsicologa', // placeholder
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
