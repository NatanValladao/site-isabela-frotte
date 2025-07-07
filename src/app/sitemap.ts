import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://isabelapsicologa.com';
  
  const routes = [
    '',
    '/sobre',
    '/servicos',
    '/servicos/terapia-individual',
    '/servicos/terapia-de-casal',
    '/servicos/orientacao-profissional',
    '/blog',
    '/contato',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
