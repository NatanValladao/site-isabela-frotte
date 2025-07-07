"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check } from "lucide-react";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant2 } from "@/components/ui/Plant2";
import { Plant3 } from "@/components/ui/Plant3";

export default function SobreClient() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = pageRef.current;
    if (!element) return;

    const elementsToAnimate = Array.from(element.querySelectorAll('[data-anime]'));
    const listItems = Array.from(element.querySelectorAll('[data-anime-item]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({
              easing: 'easeOutExpo',
              duration: 1000,
            });

            tl.add({
              targets: elementsToAnimate,
              translateX: [-20, 0],
              opacity: [0, 1],
              delay: anime.stagger(100),
            })
            .add({
                targets: listItems,
                translateX: [-20, 0],
                opacity: [0, 1],
                delay: anime.stagger(100)
            }, '-=800');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const valores = [
    { text: "Empatia e Acolhimento" },
    { text: "Ética e Confidencialidade" },
    { text: "Compromisso com seu Desenvolvimento" },
    { text: "Abordagem Inclusiva e Respeitosa" },
  ];

  return (
    <div 
      ref={pageRef}
      className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <Plant1 className="absolute -bottom-24 -right-24 w-96 h-96 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
      <Plant3 className="absolute top-1/2 -left-36 w-96 h-96 text-primary/10 opacity-70 -z-10 transform -rotate-45" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-5 lg:col-span-5 relative" data-anime>
          <Plant2 className="absolute -top-16 -left-16 w-64 h-64 text-accent/30 opacity-70 -z-20 transform -rotate-45" />
          <div 
            className="absolute top-[-1rem] left-[-1rem] md:top-[-2rem] md:left-[-2rem] w-full h-full bg-accent/20 rounded-2xl -z-10"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div className="transition-transform duration-300 hover:scale-105">
            <Card className="overflow-hidden shadow-xl rounded-2xl">
              <Image
                src="https://placehold.co/600x700.png"
                alt="Foto profissional da Psicóloga Isabela em seu consultório."
                width={600}
                height={700}
                className="object-cover w-full h-full"
                data-ai-hint="professional woman"
              />
            </Card>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-7" data-anime>
          <Badge variant="secondary" className="mb-4">Minha Trajetória</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Dedicada a guiar sua jornada de autoconhecimento
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Acredito que cada pessoa possui uma capacidade inata de crescimento e transformação. Meu papel como psicóloga é oferecer um ambiente seguro, empático e livre de julgamentos, onde você possa explorar suas questões mais profundas, desenvolver novas perspectivas e construir uma vida mais autêntica e satisfatória.
          </p>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Minha formação em Psicologia pela Universidade de São Paulo (USP) me proporcionou uma base sólida, mas foi na prática clínica e no contato humano que encontrei minha verdadeira vocação. Minha abordagem é integrativa, combinando técnicas da Terapia Cognitivo-Comportamental com a sensibilidade da psicologia humanista para oferecer um cuidado completo e personalizado.
            </p>
            <p>
              Estou em constante atualização, participando de cursos e congressos para trazer as práticas mais eficazes e atuais para o consultório.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Meus Valores</h3>
            <ul className="space-y-3">
              {valores.map((valor, index) => (
                <li key={index} className="flex items-center" data-anime-item>
                  <div className="transition-transform duration-300 hover:scale-125 hover:rotate-12">
                    <Check className="h-5 w-5 mr-3 text-accent-foreground bg-accent p-1 rounded-full"/>
                  </div>
                  <span className="font-semibold">{valor.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-3deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
