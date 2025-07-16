"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BrainCircuit, Users, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant2 } from "@/components/ui/Plant2";
import { Plant3 } from "@/components/ui/Plant3";
import { Draggable } from '@/components/ui/Draggable';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const animateOnScroll = (element: HTMLElement | null) => {
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
              delay: anime.stagger(100, { start: 100 }),
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
    animateOnScroll(heroRef.current);
    animateOnScroll(servicesRef.current);
    animateOnScroll(ctaRef.current);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section ref={heroRef} className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <Plant1 className="absolute -top-32 -left-32 w-96 h-96 text-secondary/70 opacity-20 -z-10" />
          <Plant2 className="absolute bottom-0 -right-64 w-[32rem] h-[32rem] text-accent/70 opacity-20 -z-10 transform -rotate-12" />
          <Plant3 className="absolute -bottom-32 left-1/4 w-80 h-80 text-primary/10 opacity-60 -z-10 transform" />
          
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4" data-anime>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Cuidado psicológico ético e transformador
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sou Isabela Frotté Mello (CRP 05/77920), psicóloga com formação em TCC e Neuropsicologia. Ofereço um espaço de escuta e acolhimento para adolescentes, adultos e casais em atendimentos online.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="interactive-button">
                    <Button asChild size="lg" className="font-semibold">
                      <Link href="/contato">Agende uma Conversa</Link>
                    </Button>
                  </div>
                  <div className="interactive-button">
                    <Button asChild variant="secondary" size="lg" className="font-semibold">
                      <Link href="/sobre">Conheça minha trajetória</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block" data-anime>
                <div className="absolute bg-secondary/50 -bottom-10 -left-10 w-full h-full rounded-2xl" style={{transform: 'rotate(-6deg)'}}/>
                 <div className="interactive-card">
                   <Image
                      src="https://placehold.co/600x600.png"
                      alt="Espaço de terapia calmo e acolhedor"
                      width={600}
                      height={600}
                      className="relative mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full shadow-xl"
                      data-ai-hint="calm abstract"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={servicesRef} id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <Plant3 className="absolute -bottom-20 -right-20 w-80 h-80 text-secondary/70 opacity-30 -z-10" />
            <Plant1 className="absolute -top-24 -left-20 w-80 h-80 text-accent/50 opacity-10 -z-10" />

            <div className="flex flex-col items-center justify-center space-y-4 text-center" data-anime>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">Minhas Especialidades</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Um caminho para cada necessidade</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofereço diferentes modalidades de atendimento para se adaptar à sua busca por bem-estar e autoconhecimento.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {[
                { icon: User, title: "Terapia Individual", href: "/servicos/terapia-individual", description: "Para adolescentes e adultos. Um espaço seguro para lidar com questões de humor, personalidade e neurodiversidade." },
                { icon: Users, title: "Terapia de Casal", href: "/servicos/terapia-de-casal", description: "Fortaleça a comunicação, a confiança e a conexão em seu relacionamento." },
                { icon: BrainCircuit, title: "Avaliação Neuropsicológica", href: "/servicos/orientacao-profissional", description: "Investigação detalhada das funções cognitivas para diagnóstico e planejamento terapêutico." },
              ].map((service) => (
                <div key={service.title} data-anime>
                   <Link href={service.href} className="block h-full">
                     <Card className="interactive-card bg-background/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:bg-background/50 flex flex-col items-center text-center p-6 rounded-2xl h-full">
                       <CardHeader className="p-0 items-center">
                         <Draggable>
                           <div className="p-4 bg-background rounded-full mb-4 inline-block">
                             <service.icon className="w-8 h-8 text-primary" />
                           </div>
                         </Draggable>
                         <CardTitle>{service.title}</CardTitle>
                       </CardHeader>
                       <CardContent className="flex-grow mt-2">
                         <p className="text-muted-foreground">{service.description}</p>
                       </CardContent>
                     </Card>
                   </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={ctaRef} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6" data-anime>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pronto para dar o primeiro passo?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sua jornada de transformação começa com uma conversa. Entre em contato para agendar sua primeira sessão online.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 interactive-button">
               <Button asChild size="lg" className="font-semibold w-full">
                  <Link href="/contato">
                    Entre em Contato
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
