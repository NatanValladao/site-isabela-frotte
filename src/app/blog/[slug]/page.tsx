import { client, urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/types";
import { PortableText } from "@/components/PortableText";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { Metadata } from 'next';
import { Plant1 } from "@/components/ui/Plant1";
import { Plant2 } from "@/components/ui/Plant2";

export const revalidate = 60; // Revalidate at most every 60 seconds

export async function generateStaticParams() {
  const query = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
  const slugs = await client.fetch<{slug: string}[]>(query);
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

async function getPost(slug: string): Promise<Post> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "excerpt": pt::text(body[0])
  }`;
  const post = await client.fetch<Post>(query, { slug });
  return post;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url()
    : 'https://placehold.co/1200x630.png';

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}


export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
        <Plant1 className="absolute -top-32 -left-32 w-96 h-96 text-secondary/70 opacity-30 -z-10" />
        <Plant2 className="absolute -bottom-32 -right-32 w-96 h-96 text-accent/70 opacity-30 -z-10 transform scale-x-[-1] rotate-12" />

        <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-background/50 backdrop-blur-sm p-8 rounded-2xl">
            <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
            {post.publishedAt && (
                <p className="text-lg text-muted-foreground">
                Publicado em {format(new Date(post.publishedAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
            )}
            </header>

            {post.mainImage && (
            <div className="relative mb-12 w-full h-auto aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title || 'Imagem do post'}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            )}

            <div>
            {post.body && <PortableText value={post.body} />}
            </div>
        </div>
        </article>
    </div>
  );
}
