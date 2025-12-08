"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/types";
import { urlFor } from "@/lib/sanity";

// Configuração de animação reutilizável
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function BlogClient({ posts }: { posts: Post[] }) {
  return (
    <>
      <section className="py-16 md:py-24 bg-card/50">
        <motion.div 
          className="container mx-auto px-4 text-center"
          {...fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent font-headline">Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Reflexões, dicas e informações sobre psicologia e bem-estar para apoiar sua jornada.
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Decorators */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Image
            src="https://i.imgur.com/ECaF4tf.png"
            alt=""
            width={384}
            height={384}
            className="absolute -top-24 -left-24 w-96 h-96 opacity-15"
          />
          <Image
            src="https://i.imgur.com/Zd4DB66.png"
            alt=""
            width={320}
            height={320}
            className="absolute -bottom-24 -right-24 w-80 h-80 opacity-20 transform scale-x-[-1]"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="interactive-card flex flex-col overflow-hidden group bg-card backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card/90 rounded-2xl h-full">
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
                    <CardTitle className="text-xl text-accent font-headline">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug?.current}`} className="font-semibold text-primary flex items-center group-hover:text-primary-foreground transition-colors">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}