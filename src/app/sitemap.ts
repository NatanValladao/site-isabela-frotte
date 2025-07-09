import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://isabelafrotte.com';
  
  // Static routes
  const staticRoutes = [
    '',
    '/sobre',
    '/servicos',
    '/servicos/terapia-individual',
    '/servicos/terapia-de-casal',
    '/servicos/orientacao-profissional', // This URL slug now points to Avaliação Neuropsicológica
    '/blog',
    '/contato',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog post routes
  try {
    const postsQuery = `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`;
    const posts = await client.fetch<{slug: string, _updatedAt: string}[]>(postsQuery);

    const postRoutes = posts.map(post => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
    
    return [...staticRoutes, ...postRoutes];
  } catch (error) {
    console.error("Failed to fetch posts for sitemap, returning static routes only.", error);
    return staticRoutes;
  }
}
