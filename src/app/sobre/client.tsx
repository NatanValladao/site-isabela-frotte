"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check } from "lucide-react";

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
    { text: "Atendimento humano e transformador" },
    { text: "Ética e confidencialidade" },
    { text: "Respeito ao tempo de cada pessoa" },
    { text: "Acolhimento de necessidades emocionais" },
  ];

  return (
    <div 
      ref={pageRef}
      className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden"
    >
       <Image
        src="https://i.imgur.com/cynnrcO.png"
        alt="decoração de planta"
        width={384}
        height={384}
        className="absolute -bottom-24 -right-24 w-96 h-96 opacity-20 -z-10 transform scale-x-[-1]"
        aria-hidden="true"
      />
      <Image
        src="https://i.imgur.com/Zd4DB66.png"
        alt="decoração de planta"
        width={384}
        height={384}
        className="absolute top-1/2 -left-36 w-96 h-96 opacity-10 -z-10 transform -rotate-45"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-5 lg:col-span-5 relative" data-anime>
          <Image
            src="https://i.imgur.com/ECaF4tf.png"
            alt="decoração de planta"
            width={256}
            height={256}
            className="absolute -top-16 -left-16 w-64 h-64 opacity-30 -z-20 transform -rotate-45"
            aria-hidden="true"
          />
          <div className="transition-transform duration-300 hover:scale-105">
            <Card className="overflow-hidden shadow-xl rounded-2xl bg-card">
              <Image
                src="https://imgur.com/iBQDcaq.png"
                alt="Foto profissional da Psicóloga Isabela Frotté Mello."
                width={600}
                height={700}
                className="object-cover w-full h-full"
                data-ai-hint="professional woman"
              />
            </Card>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-7 p-8 rounded-2xl bg-card/80 backdrop-blur-sm" data-anime>
          <Badge variant="secondary" className="mb-4">CRP 05/77920</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-accent">
            Isabela Frotté Mello
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Sou psicóloga com atuação clínica voltada para adolescentes, adultos e casais. Tenho formação em Terapia Cognitivo-Comportamental (TCC) e sou pós-graduanda em Neuropsicologia.
          </p>
          
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-2xl font-bold text-accent">Trajetória e Experiência</h3>
            <p>
              Ao longo da minha trajetória, desenvolvi experiência no acompanhamento de pessoas com Transtorno de Personalidade Borderline, Transtorno Afetivo Bipolar e outros transtornos relacionados a personalidade, humor, a neurodiversidade e à regulação emocional.
            </p>
            <p>
              Essas vivências me aprofundaram no cuidado com histórias complexas, subjetividades intensas e relações desafiadoras, sempre com um olhar acolhedor e fundamentado nos teóricos.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Meu Compromisso Como Psicóloga</h3>
             <p className="text-muted-foreground mb-6">
              Acredito em um atendimento humano, ético e transformador, que respeita o tempo de cada pessoa e acolhe suas necessidades emocionais com sensibilidade. Meu espaço terapêutico é aberto a pessoas que queiram se compreender melhor, enfrentar suas dores e construir novas possibilidades para sua vida.
            </p>
            <ul className="space-y-3">
              {valores.map((valor, index) => (
                <li key={index} className="flex items-center" data-anime-item>
                  <div className="transition-transform duration-300 hover:scale-125 hover:rotate-12">
                    <Check className="h-5 w-5 mr-3 text-primary"/>
                  </div>
                  <span className="font-semibold">{valor.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
