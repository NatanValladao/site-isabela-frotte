import type { Metadata } from 'next';
import BlogClient from './client';
import { client } from '@/lib/sanity';
import type { Post } from '@/lib/types';

export const revalidate = 60; // Revalidate at most every 60 seconds

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": pt::text(body[0]),
    "category": "Psicologia"
  }`;
  try {
    const posts = await client.fetch<Post[]>(query);
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return []; // Return empty array on error
  }
}

export const metadata: Metadata = {
  title: 'Blog | Psicologia, Saúde Mental e Bem-Estar',
  description: 'Artigos e reflexões sobre psicologia, saúde mental e bem-estar. Encontre dicas para gerenciar a ansiedade, melhorar relacionamentos e cuidar de você.',
  keywords: 'blog psicologia, saúde mental, bem-estar, ansiedade, autocuidado, relacionamentos',
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogClient posts={posts} />;
}
