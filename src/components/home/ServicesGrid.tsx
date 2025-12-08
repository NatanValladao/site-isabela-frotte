"use client";

import { motion } from "framer-motion";
import { BrainCircuit, HeartHandshake, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Draggable } from "@/components/ui/Draggable";
import Image from "next/image";

const services = [
  {
    icon: HeartHandshake,
    title: "Terapia Individual",
    href: "/servicos/terapia-individual",
    description: "Para adolescentes e adultos. Um espaço seguro para lidar com questões de humor, personalidade e neurodiversidade.",
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    href: "/servicos/terapia-de-casal",
    description: "Fortaleça a comunicação, a confiança e a conexão em seu relacionamento.",
  },
  {
    icon: BrainCircuit,
    title: "Avaliação Neuropsicológica",
    href: "/servicos/avaliacao-neuropsicologica",
    description: "Investigação detalhada das funções cognitivas para diagnóstico e planejamento terapêutico.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-card/50 relative overflow-hidden">
      <Image
        src="https://i.imgur.com/Zd4DB66.png"
        alt=""
        width={320}
        height={320}
        className="absolute -bottom-20 -right-20 w-80 h-80 opacity-20 -z-10"
      />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary-foreground font-medium">
              Minhas Especialidades
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-accent font-headline">
              Um caminho para cada necessidade
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofereço diferentes modalidades de atendimento para se adaptar à sua busca por bem-estar e autoconhecimento.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full group">
                <Card className="interactive-card bg-background/60 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card/90 flex flex-col items-center text-center p-6 rounded-2xl h-full transition-all">
                  <CardHeader className="p-0 items-center">
                    <Draggable>
                      <div className="p-4 bg-background rounded-full mb-4 inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                    </Draggable>
                    <CardTitle className="text-accent text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow mt-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
