"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant3 } from "@/components/ui/Plant3";
import { Plant2 } from "@/components/ui/Plant2";

const blogPosts = [
  {
    title: "5 Dicas para Gerenciar a Ansiedade no Dia a Dia",
    category: "Ansiedade",
    excerpt: "A ansiedade faz parte da vida, mas não precisa controlá-la. Descubra estratégias práticas para encontrar mais calma e equilíbrio.",
    image: "https://placehold.co/600x400.png",
    aiHint: "calm person meditating",
    href: "#",
  },
  {
    title: "A Importância do Autocuidado para a Saúde Mental",
    category: "Bem-estar",
    excerpt: "O autocuidado vai além de um dia de spa. Entenda como pequenas práticas diárias podem fortalecer sua saúde mental e emocional.",
    image: "https://placehold.co/600x400.png",
    aiHint: "healthy lifestyle",
    href: "#",
  },
  {
    title: "Como Lidar com o Luto: Um Guia Gentil",
    category: "Luto",
    excerpt: "Enfrentar a perda é um dos maiores desafios da vida. Este guia oferece um olhar compassivo sobre o processo do luto e como navegá-lo.",
    image: "https://placehold.co/600x400.png",
    aiHint: "hope sunrise",
    href: "#",
  },
    {
    title: "Comunicação Não-Violenta em Relacionamentos",
    category: "Relacionamentos",
    excerpt: "Aprenda a expressar suas necessidades e ouvir as do outro de forma empática, transformando a dinâmica de seus relacionamentos.",
    image: "https://placehold.co/600x400.png",
    aiHint: "couple talking",
    href: "#",
  },
  {
    title: "Entendendo a Síndrome de Burnout",
    category: "Carreira",
    excerpt: "O esgotamento profissional é sério. Saiba identificar os sinais, as causas e, o mais importante, como prevenir e tratar o burnout.",
    image: "https://placehold.co/600x400.png",
    aiHint: "stressed person office",
    href: "#",
  },
    {
    title: "O Poder da Vulnerabilidade",
    category: "Autoconhecimento",
    excerpt: "Ser vulnerável não é fraqueza, mas sim um ato de coragem que nos conecta com nós mesmos e com os outros de forma mais autêntica.",
    image: "https://placehold.co/600x400.png",
    aiHint: "open hands",
    href: "#",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function BlogPage() {
  return (
    <>
      <motion.section 
        className="py-16 md:py-24 bg-secondary/20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight" variants={itemVariants}>Blog</motion.h1>
          <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground" variants={itemVariants}>
            Reflexões, dicas e informações sobre psicologia e bem-estar para apoiar sua jornada.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Plant1 className="absolute -top-24 -left-24 w-96 h-96 text-accent/50 opacity-10 -z-10" />
        <Plant3 className="absolute -bottom-24 -right-24 w-80 h-80 text-secondary/70 opacity-20 -z-10 transform scale-x-[-1]" />
        <Plant2 className="absolute top-1/2 -right-48 w-96 h-96 text-primary/10 opacity-40 -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div key={post.title} variants={itemVariants}>
                <Card className="flex flex-col overflow-hidden group bg-background/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:bg-background/50 hover:shadow-lg transition-all duration-300 rounded-2xl h-full">
                  <div className="overflow-hidden rounded-t-2xl">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                      <Image
                        src={post.image}
                        alt={`Imagem para o post: ${post.title}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48"
                        data-ai-hint={post.aiHint}
                      />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2 bg-background">{post.category}</Badge>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={post.href} className="font-semibold text-primary flex items-center group-hover:text-accent-foreground">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
