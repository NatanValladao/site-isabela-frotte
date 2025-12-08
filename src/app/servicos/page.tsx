"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, HeartHandshake, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { Draggable } from '@/components/ui/Draggable';

const services = [
  {
    icon: HeartHandshake,
    title: "Terapia Individual",
    href: "/servicos/terapia-individual",
    description: "Um espaço seguro e confidencial para adolescentes e adultos explorarem suas emoções, com foco em regulação emocional, humor e personalidade.",
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    href: "/servicos/terapia-de-casal",
    description: "Dedicada a casais que buscam melhorar a comunicação, resolver conflitos e fortalecer o vínculo afetivo para um relacionamento mais saudável.",
  },
  {
    icon: BrainCircuit,
    title: "Avaliação Neuropsicológica",
    href: "/servicos/avaliacao-neuropsicologica",
    description: "Investigação aprofundada das funções cognitivas (memória, atenção, etc.) para auxiliar no diagnóstico e planejamento terapêutico.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicosPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
        <Image
          src="https://i.imgur.com/ECaF4tf.png"
          alt=""
          width={288}
          height={288}
          className="absolute top-0 -left-24 w-72 h-72 opacity-20 -z-10"
        />
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent font-headline">Serviços e Abordagem</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofereço um cuidado terapêutico online e personalizado para atender às suas necessidades, com base em uma abordagem empática e cientificamente embasada.
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={item} className="h-full">
                <Link href={service.href} className="block h-full group">
                  <Card className="interactive-card flex flex-col text-center items-center p-6 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card/90 h-full rounded-2xl">
                    <CardHeader className="p-0 items-center">
                      <Draggable>
                        <div className="p-4 bg-background rounded-full mb-4 inline-block shadow-sm">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </Draggable>
                      <CardTitle className="text-2xl text-accent font-headline">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-4 flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <div className="font-semibold text-primary flex items-center justify-center group-hover:text-primary-foreground mt-4 transition-colors">
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/50 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden shadow-xl rounded-2xl w-full max-w-sm aspect-[4/5]">
                <Image
                    src="https://imgur.com/iBQDcaq.png"
                    alt="Espaço terapêutico"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                />
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-accent font-headline">Minha Abordagem Terapêutica</h2>
              <p className="text-muted-foreground mb-4">
                Minha prática é fundamentada na Terapia Cognitivo-Comportamental (TCC), uma abordagem focada em resultados e validada cientificamente. Acredito em um processo colaborativo, onde identificamos padrões de pensamento e comportamento para construir estratégias eficazes para a mudança.
              </p>
              <p className="text-muted-foreground">
                Meu olhar é sempre humano e acolhedor, respeitando a subjetividade e a história de cada pessoa.
              </p>
              <div className="interactive-button inline-block">
                <Button asChild className="mt-6" size="lg">
                  <Link href="/contato">Agende uma consulta</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}