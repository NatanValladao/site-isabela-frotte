import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { Plant2 } from '@/components/ui/Plant2';
import { Plant3 } from '@/components/ui/Plant3';

export const metadata: Metadata = {
  title: 'Orientação Profissional com Psicóloga Isabela | Encontre sua Carreira',
  description: 'Encontre clareza e direção para sua vida profissional. A orientação vocacional e de carreira ajuda a alinhar suas paixões e habilidades com o mercado.',
  keywords: 'orientação profissional, orientação vocacional, carreira, transição de carreira, psicóloga',
};

export default function OrientacaoProfissionalPage() {
  const benefits = [
    "Identificação de interesses, habilidades e valores",
    "Exploração de diferentes áreas e profissões",
    "Planejamento de carreira e metas profissionais",
    "Apoio em momentos de transição de carreira",
    "Desenvolvimento de um plano de ação concreto",
    "Mais segurança e confiança em suas escolhas",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-28 bg-secondary/20 overflow-hidden">
          <Plant2 className="absolute -bottom-24 -left-24 w-80 h-80 text-accent/50 opacity-20 -z-10" />
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Orientação Profissional
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Encontre o caminho que alinha sua paixão ao seu propósito profissional com clareza e confiança.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Planejando seu Futuro Profissional</h2>
                <p className="text-muted-foreground">
                  Seja você um jovem em busca da primeira profissão ou um adulto considerando uma transição de carreira, a orientação profissional é um processo estruturado de autoconhecimento e pesquisa. Utilizando ferramentas e técnicas da psicologia, vamos explorar suas aptidões e interesses para que você possa tomar decisões mais conscientes e alinhadas com quem você é e onde quer chegar.
                </p>
                <ul className="space-y-3 mt-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-accent-foreground bg-accent p-1 rounded-full" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                 <div className="interactive-card">
                   <Image
                      src="https://placehold.co/600x400.png"
                      alt="Pessoa planejando sua carreira em um ambiente inspirador e organizado."
                      width={600}
                      height={400}
                      className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-xl"
                      data-ai-hint="career planning"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
            <Plant3 className="absolute -top-24 -right-24 w-80 h-80 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pronto para Construir sua Carreira?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sua satisfação profissional é fundamental para uma vida equilibrada. Vamos conversar sobre seus próximos passos.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 interactive-button">
               <Button asChild size="lg" className="font-semibold w-full">
                  <Link href="/contato">
                    Comece sua Orientação Profissional
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
