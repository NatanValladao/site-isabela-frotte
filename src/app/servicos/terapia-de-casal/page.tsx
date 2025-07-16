import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Plant1 } from '@/components/ui/Plant1';
import { Plant3 } from '@/components/ui/Plant3';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';

export const metadata: Metadata = {
  title: 'Terapia de Casal Online com Isabela Frotté Mello',
  description: 'Fortaleça a comunicação e a conexão no seu relacionamento. A terapia de casal com a psicóloga Isabela Frotté Mello oferece um espaço para resolver conflitos.',
  keywords: 'terapia de casal, psicóloga de casal, relacionamento, comunicação, conflitos, TCC casal',
};

export default function TerapiaDeCasalPage() {
  const benefits = [
    "Melhora na comunicação e escuta ativa",
    "Resolução construtiva de conflitos",
    "Reconstrução da confiança e intimidade",
    "Alinhamento de objetivos e expectativas",
    "Fortalecimento do vínculo afetivo",
    "Desenvolvimento de estratégias para lidar com desafios futuros",
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-28 bg-card/50 overflow-hidden">
          <Plant3 className="absolute -bottom-24 -left-24 w-80 h-80 text-primary/50 opacity-20 -z-10" />
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-accent">
              Terapia de Casal
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Um espaço para ambos serem ouvidos, compreendidos e para construírem juntos um relacionamento mais forte e saudável.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative">
                    <div className="interactive-card">
                    <Image
                        src="https://imgur.com/csPfZen.png"
                        alt="Casal conversando de forma calma e construtiva durante sessão de terapia."
                        width={600}
                        height={400}
                        className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-xl"
                        data-ai-hint="couple talking therapy"
                        />
                    </div>
                </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-accent">Fortalecendo a Conexão a Dois</h2>
                <p className="text-muted-foreground">
                  Todo relacionamento passa por desafios. A terapia de casal oferece um ambiente neutro e seguro, com a mediação de uma profissional, para que vocês possam dialogar, expressar sentimentos e necessidades de forma clara e respeitosa. Com base na Terapia Cognitivo-Comportamental, trabalhamos para identificar e ajustar padrões que geram conflito.
                </p>
                 <p className="text-muted-foreground">
                  O objetivo é encontrar novas formas de se relacionar, superando obstáculos e redescobrindo a parceria.
                </p>
                <ul className="space-y-3 mt-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card/50 relative overflow-hidden">
            <Plant1 className="absolute -top-24 -right-24 w-80 h-80 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent">Prontos para Reconstruir a Harmonia?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Investir no seu relacionamento é investir na felicidade de ambos. Agendem uma conversa online para começarmos.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 interactive-button">
              <Button asChild size="lg" className="font-semibold w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                <Link 
                  href={`https://wa.me/5522997604703?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a terapia de casal.")}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon className="mr-2" />
                  Agende via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
