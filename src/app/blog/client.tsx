"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant3 } from "@/components/ui/Plant3";
import { Plant2 } from "@/components/ui/Plant2";
import type { Post } from "@/lib/types";
import { urlFor } from "@/lib/sanity";

export default function BlogClient({ posts }: { posts: Post[] }) {
  const headerRef = useRef<HTMLElement>(null);
  const postsRef = useRef<HTMLElement>(null);

  const animateOnScroll = (element: HTMLElement | null, stagger = 150) => {
    if (!element) return;
    const elementsToAnimate = Array.from(element.querySelectorAll("[data-anime]"));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: elementsToAnimate,
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(stagger),
              duration: 800,
              easing: 'easeOutExpo',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  };
  
  useEffect(() => {
    animateOnScroll(headerRef.current, 100);
    animateOnScroll(postsRef.current, 100);
  }, []);

  return (
    <>
      <section 
        ref={headerRef}
        className="py-16 md:py-24 bg-secondary/20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 data-anime className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Blog</h1>
          <p data-anime className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Reflexões, dicas e informações sobre psicologia e bem-estar para apoiar sua jornada.
          </p>
        </div>
      </section>

      <section 
        ref={postsRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <Plant1 className="absolute -top-24 -left-24 w-96 h-96 text-primary/50 opacity-20 -z-10" />
        <Plant3 className="absolute -bottom-24 -right-24 w-80 h-80 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
        <Plant2 className="absolute top-1/2 -right-48 w-96 h-96 text-primary/10 opacity-50 -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post._id} data-anime>
                <Card className="interactive-card flex flex-col overflow-hidden group bg-background/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-background/50 rounded-2xl h-full">
                  <div className="overflow-hidden rounded-t-2xl">
                    <Link href={`/blog/${post.slug?.current}`} className="block">
                      <div className="transition-transform duration-500 group-hover:scale-105">
                        {post.mainImage ? (
                           <Image
                            src={urlFor(post.mainImage).width(600).height(400).url()}
                            alt={post.title || 'Blog post image'}
                            width={600}
                            height={400}
                            className="object-cover w-full h-48"
                            data-ai-hint="blog abstract"
                          />
                        ) : (
                          <div className="w-full h-48 bg-secondary flex items-center justify-center">
                             <span className="text-muted-foreground">Sem imagem</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2 bg-background">{post.category || 'Artigo'}</Badge>
                    <CardTitle className="text-xl text-accent">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug?.current}`} className="font-semibold text-primary flex items-center group-hover:text-primary-foreground">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
