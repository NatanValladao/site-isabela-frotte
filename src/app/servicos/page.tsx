"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
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

export default function ServicosPage() {
  const headerRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const approachRef = useRef<HTMLElement>(null);
  
  const animateOnScroll = (element: HTMLElement | null) => {
    if (!element) return;
    const elementsToAnimate = Array.from(element.querySelectorAll("[data-anime]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: elementsToAnimate,
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
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
    animateOnScroll(headerRef.current);
    animateOnScroll(servicesRef.current);
    animateOnScroll(approachRef.current);
  }, []);

  return (
    <div className="overflow-hidden">
      <section ref={headerRef} className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
        <Image
          src="https://i.imgur.com/ECaF4tf.png"
          alt="decoração de planta"
          width={288}
          height={288}
          className="absolute top-0 -left-24 w-72 h-72 opacity-20 -z-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center">
          <h1 data-anime className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Serviços e Abordagem</h1>
          <p data-anime className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofereço um cuidado terapêutico online e personalizado para atender às suas necessidades, com base em uma abordagem empática e cientificamente embasada.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <div key={index} data-anime className="h-full">
                <Link href={service.href} className="block h-full group">
                  <Card className="interactive-card flex flex-col text-center items-center p-6 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card/90 h-full rounded-2xl">
                    <CardHeader className="p-0 items-center">
                      <Draggable>
                        <div className="p-4 bg-background rounded-full mb-4 inline-block">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </Draggable>
                      <CardTitle className="text-2xl text-accent">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-4 flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <div className="font-semibold text-primary flex items-center justify-center group-hover:text-primary-foreground mt-4">
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={approachRef} className="py-16 md:py-24 bg-card/50 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Image
            src="https://i.imgur.com/Zd4DB66.png"
            alt="decoração de planta"
            width={288}
            height={288}
            className="absolute -bottom-20 -left-20 w-72 h-72 opacity-20 -z-10 transform -rotate-12"
            aria-hidden="true"
          />
           <Image
            src="https://i.imgur.com/cynnrcO.png"
            alt="decoração de planta"
            width={320}
            height={320}
            className="absolute -top-20 -right-20 w-80 h-80 opacity-20 -z-10 transform scale-x-[-1] rotate-45"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-anime className="relative h-80 md:h-[450px] flex items-center justify-center">
              <Card className="overflow-hidden shadow-xl rounded-2xl w-full max-w-[400px]">
                <Image
                    src="https://imgur.com/pY0SYeu.png"
                    alt="Espaço terapêutico calmo e acolhedor, simbolizando a abordagem da psicóloga."
                    width={400}
                    height={450}
                    className="object-cover w-full h-full"
                    data-ai-hint="calm therapy room"
                />
              </Card>
            </div>
            <div data-anime>
              <h2 className="text-3xl font-bold mb-4 text-accent">Minha Abordagem Terapêutica</h2>
              <p className="text-muted-foreground mb-4">
                Minha prática é fundamentada na Terapia Cognitivo-Comportamental (TCC), uma abordagem focada em resultados e validada cientificamente. Acredito em um processo colaborativo, onde identificamos padrões de pensamento e comportamento para construir estratégias eficazes para a mudança.
              </p>
              <p className="text-muted-foreground">
                Meu olhar é sempre humano e acolhedor, respeitando a subjetividade e a história de cada pessoa. Acredito que a aliança terapêutica é a base para a transformação e o desenvolvimento de uma vida com mais sentido e bem-estar.
              </p>
              <div className="interactive-button inline-block">
                <Button asChild className="mt-6" size="lg">
                  <Link href="/contato">Agende uma consulta</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
