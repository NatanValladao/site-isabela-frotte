import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Plant1 } from '@/components/ui/Plant1';
import { Plant2 } from '@/components/ui/Plant2';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';

export const metadata: Metadata = {
  title: 'Terapia Individual Online com Isabela Frotté Mello',
  description: 'Atendimento para adolescentes e adultos. Especialista em TCC para Transtorno Borderline, Bipolar, regulação emocional, humor e neurodiversidade.',
  keywords: 'terapia individual, psicóloga TCC, transtorno borderline, transtorno bipolar, neurodiversidade, regulação emocional',
};

export default function TerapiaIndividualPage() {
  const benefits = [
    "Melhora na regulação emocional",
    "Desenvolvimento de estratégias para lidar com instabilidade de humor",
    "Compreensão e manejo de transtornos (Borderline, Bipolar, etc.)",
    "Fortalecimento da autoestima e identidade",
    "Melhora nos relacionamentos interpessoais",
    "Acolhimento para questões de neurodiversidade",
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-28 bg-card/50 overflow-hidden">
          <Plant1 className="absolute -bottom-24 -left-24 w-80 h-80 text-primary/50 opacity-20 -z-10" />
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-accent">
              Terapia Individual
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Um espaço confidencial e acolhedor para adolescentes e adultos, focado no seu desenvolvimento e bem-estar emocional.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-accent">Cuidado Especializado e Acolhedor</h2>
                <p className="text-muted-foreground">
                  Utilizando a Terapia Cognitivo-Comportamental (TCC), trabalho em colaboração com você para identificar e modificar padrões de pensamento e comportamento que causam sofrimento. Minha experiência inclui o acompanhamento de Transtorno de Personalidade Borderline, Transtorno Afetivo Bipolar e questões relacionadas à neurodiversidade e regulação emocional.
                </p>
                <p className="text-muted-foreground">
                  Juntos, vamos construir um caminho de autoconhecimento, desenvolver novas habilidades e promover uma vida mais equilibrada e satisfatória.
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
                      src="https://imgur.com/pY0SYeu.png"
                      alt="Pessoa em sessão de terapia individual online, sentindo-se compreendida."
                      width={600}
                      height={400}
                      className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-xl"
                      data-ai-hint="safe space"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card/50 relative overflow-hidden">
          <Plant2 className="absolute -top-24 -right-24 w-80 h-80 text-secondary/70 opacity-30 -z-10 transform scale-x-[-1]" />
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent">Inicie Sua Jornada de Transformação</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dar o primeiro passo é um ato de coragem e autocuidado. Estou aqui para caminhar ao seu lado.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 interactive-button">
              <Button asChild size="lg" className="font-semibold w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                <Link 
                  href={`https://wa.me/5522997604703?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a terapia individual.")}`} 
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
