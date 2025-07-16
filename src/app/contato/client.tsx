"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';
import { Plant2 } from "@/components/ui/Plant2";
import { Plant3 } from "@/components/ui/Plant3";
import { toast } from '@/hooks/use-toast';

const phoneNumber = "5521999999999";

const formSchema = z.object({
  nome: z.string().min(2, { message: "Por favor, insira seu nome." }),
  mensagem: z.string().min(10, { message: "Sua mensagem precisa ter pelo menos 10 caracteres." }),
});

export default function ContatoClient() {
  const pageRef = useRef<HTMLDivElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const template = `*${values.nome.trim()}*: ${values.mensagem.trim()}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(template)}`;
    
    try {
      window.open(whatsappUrl, '_blank');
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao abrir o WhatsApp",
        description: "Não foi possível abrir o WhatsApp. Por favor, tente novamente.",
      });
    }
  }

  useEffect(() => {
    const element = pageRef.current;
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
  }, []);

  return (
    <div ref={pageRef}>
      <section 
        className="py-16 md:py-24 bg-card/50"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 data-anime className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Entre em Contato</h1>
          <p data-anime className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A forma mais rápida de falar comigo é pelo WhatsApp. Envie uma mensagem ou, se preferir, utilize o formulário abaixo.
          </p>
        </div>
      </section>

      <section 
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          <Plant2 className="absolute -bottom-24 -right-24 w-80 h-80 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
          <Plant3 className="absolute -top-24 -left-24 w-72 h-72 text-primary/50 opacity-50 -z-10" />

          <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-lg border" data-anime>
            <h2 className="text-3xl font-bold mb-2 text-center text-accent">Formulário para WhatsApp</h2>
            <p className="text-muted-foreground text-center mb-6">Sua mensagem será enviada diretamente para o meu WhatsApp.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sua Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Olá, gostaria de saber mais sobre..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="interactive-button">
                  <Button type="submit" size="lg" className="w-full font-semibold bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <WhatsappIcon className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
