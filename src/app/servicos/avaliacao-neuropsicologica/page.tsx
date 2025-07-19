import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';

export const metadata: Metadata = {
  title: 'Avaliação Neuropsicológica com Isabela Frotté Mello',
  description: 'Compreenda o funcionamento cognitivo. A avaliação neuropsicológica investiga memória, atenção e outras funções para auxiliar no diagnóstico e tratamento.',
  keywords: 'avaliação neuropsicológica, neuropsicologia, diagnóstico, TDAH, funções cognitivas, psicóloga',
};

export default function AvaliacaoNeuropsicologicaPage() {
  const benefits = [
    "Mapeamento de funções cognitivas (memória, atenção, etc.)",
    "Auxílio no diagnóstico diferencial de transtornos (ex: TDAH)",
    "Identificação de pontos fortes e fracos do perfil cognitivo",
    "Planejamento de intervenções e reabilitação",
    "Compreensão do impacto de condições neurológicas",
    "Laudo detalhado para fins clínicos e educacionais",
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-28 bg-card/50 overflow-hidden">
          <Image
            src="https://i.imgur.com/cynnrcO.png"
            alt="decoração de planta"
            width={320}
            height={320}
            className="absolute -bottom-24 -left-24 w-80 h-80 opacity-20 -z-10"
            aria-hidden="true"
          />
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-accent">
              Avaliação Neuropsicológica
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Uma investigação aprofundada das suas funções cognitivas para maior clareza diagnóstica e terapêutica.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-accent">O que é a Avaliação Neuropsicológica?</h2>
                <p className="text-muted-foreground">
                  Como pós-graduanda em Neuropsicologia, ofereço um processo de avaliação detalhado que utiliza testes e instrumentos padronizados para investigar o funcionamento do cérebro e suas funções, como memória, atenção, linguagem e funções executivas.
                </p>
                <p className="text-muted-foreground">
                  Este processo é fundamental para auxiliar no diagnóstico de transtornos do neurodesenvolvimento (como TDAH), dificuldades de aprendizagem e para entender o impacto de condições neurológicas. O resultado é um laudo completo que guia o planejamento de intervenções eficazes.
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
              <div className="relative">
                 <div className="interactive-card">
                   <Image
                      src="https://imgur.com/jtbcFgY.png"
                      alt="Ilustração de um cérebro com conexões, representando as funções cognitivas."
                      width={600}
                      height={750}
                      className="relative mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover sm:w-full shadow-xl"
                      data-ai-hint="brain connections"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card/50 relative overflow-hidden">
            <Image
              src="https://i.imgur.com/ECaF4tf.png"
              alt="decoração de planta"
              width={320}
              height={320}
              className="absolute -top-24 -right-24 w-80 h-80 opacity-20 -z-10 transform scale-x-[-1]"
              aria-hidden="true"
            />
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent">Pronto para Obter Respostas?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A avaliação neuropsicológica pode ser o primeiro passo para um plano de tratamento mais eficaz.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 interactive-button">
              <Button asChild size="lg" className="font-semibold w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                <Link 
                  href={`https://wa.me/5522997604703?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a avaliação neuropsicológica.")}`} 
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
