"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Lightbulb, User, Users } from "lucide-react";
import Link from "next/link";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant2 } from "@/components/ui/Plant2";
import { Plant3 } from "@/components/ui/Plant3";

const services = [
  {
    icon: User,
    title: "Terapia Individual",
    description: "Um espaço seguro e confidencial para você explorar suas emoções, lidar com ansiedade, depressão, estresse, e promover o autoconhecimento e o crescimento pessoal.",
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    description: "Dedicada a casais que buscam melhorar a comunicação, resolver conflitos, reconstruir a confiança e fortalecer o vínculo afetivo para um relacionamento mais saudável.",
  },
  {
    icon: Lightbulb,
    title: "Orientação Profissional",
    description: "Processo focado em ajudar jovens e adultos na escolha ou transição de carreira, alinhando paixões, habilidades e oportunidades de mercado para uma trajetória profissional satisfatória.",
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
    <>
      <section ref={headerRef} className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
        <Plant1 className="absolute top-0 -left-24 w-72 h-72 text-accent/30 opacity-30 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h1 data-anime className="text-4xl md:text-5xl font-bold tracking-tight">Serviços e Abordagem</h1>
          <p data-anime className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofereço um cuidado terapêutico personalizado para atender às suas necessidades específicas, com base em uma abordagem empática e cientificamente embasada.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <div key={index} data-anime className="h-full">
                <Card className="interactive-card flex flex-col text-center items-center p-6 bg-background/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:bg-background/50 h-full rounded-2xl">
                  <CardHeader className="p-0 items-center">
                    <div className="interactive-button p-4 bg-background rounded-full mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4 flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={approachRef} className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Plant3 className="absolute -bottom-20 -left-20 w-72 h-72 text-accent/30 opacity-50 -z-10 transform -rotate-12" />
          <Plant2 className="absolute -top-20 -right-20 w-80 h-80 text-secondary/40 opacity-50 -z-10 transform scale-x-[-1] rotate-45" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-anime className="relative h-80 md:h-[450px]">
                <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-2xl" style={{animation: 'float-alt 10s ease-in-out infinite'}}/>
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/50 rounded-2xl" style={{animation: 'float 8s ease-in-out infinite'}} />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border rounded-2xl shadow-lg flex items-center justify-center p-8">
                    <div className="text-center transition-transform duration-300 hover:scale-110">
                        <HeartHandshake className="w-24 h-24 text-primary mx-auto" />
                        <p className="mt-4 text-xl font-headline text-primary">Cuidado e Parceria</p>
                    </div>
                </div>
            </div>
            <div data-anime>
              <h2 className="text-3xl font-bold mb-4">Minha Abordagem Terapêutica</h2>
              <p className="text-muted-foreground mb-4">
                Minha prática é fundamentada na Abordagem Humanista, que valoriza a experiência única de cada indivíduo e sua capacidade de encontrar as próprias respostas. Vejo a terapia como uma parceria, onde juntos criamos um caminho de autodescoberta e mudança.
              </p>
              <p className="text-muted-foreground">
                Utilizo também ferramentas da Terapia Cognitivo-Comportamental (TCC) para trabalhar de forma prática em pensamentos e comportamentos que possam estar causando sofrimento, sempre de forma adaptada a você.
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
      <style jsx>{`
        @keyframes float {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-3deg) scale(1.02); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes float-alt {
          0% { transform: rotate(0deg) scale(1.05); }
          50% { transform: rotate(3deg) scale(1); }
          100% { transform: rotate(0deg) scale(1.05); }
        }
      `}</style>
    </>
  );
}
