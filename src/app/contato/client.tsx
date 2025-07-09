"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant2 } from "@/components/ui/Plant2";
import { Plant3 } from "@/components/ui/Plant3";
import { Draggable } from '@/components/ui/Draggable';

export default function ContatoClient() {
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

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
    animateOnScroll(contentRef.current, 100);
  }, []);

  return (
    <>
      <section 
        ref={headerRef}
        className="py-16 md:py-24 bg-secondary/20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 data-anime className="text-4xl md:text-5xl font-bold tracking-tight">Entre em Contato</h1>
          <p data-anime className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Estou aqui para ouvir você. Utilize as informações abaixo ou preencha o formulário para agendar uma conversa inicial. Atendimentos online para o mundo todo.
          </p>
        </div>
      </section>

      <section 
        ref={contentRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          <Plant2 className="absolute -bottom-24 -right-24 w-80 h-80 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
          <Plant3 className="absolute -top-24 -left-24 w-72 h-72 text-accent/50 opacity-50 -z-10" />
          <Plant1 className="absolute bottom-1/4 -right-36 w-80 h-80 text-primary/10 opacity-40 -z-10 transform rotate-45" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5" data-anime>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <p className="font-semibold text-muted-foreground">Isabela Frotté Mello | Psicóloga CRP 05/77920</p>
                {[
                  { icon: Mail, title: "Email", desc: "Envie sua mensagem a qualquer hora.", link: "mailto:contato@isabelafrotte.com", text: "contato@isabelafrotte.com" },
                  { icon: Phone, title: "Telefone", desc: "Para contato via WhatsApp.", link: "tel:+5521999999999", text: "(21) 99999-9999" },
                ].map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4"
                  >
                    <Draggable>
                      <div 
                        className="p-3 bg-accent/20 rounded-full"
                      >
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                    </Draggable>
                    <div>
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground">{info.desc}</p>
                      <a href={info.link} className="text-primary hover:underline font-medium">
                        {info.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 bg-card/60 p-8 rounded-2xl shadow-lg border" data-anime>
              <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Ex: Agendamento de consulta" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Sua Mensagem</Label>
                  <Textarea id="message" placeholder="Escreva sua mensagem aqui..." rows={5} />
                </div>
                <div className="interactive-button">
                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
