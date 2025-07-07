import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check } from "lucide-react";
import { InteractivePlant } from "@/components/ui/InteractivePlant";

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      <InteractivePlant className="absolute -bottom-24 -right-24 w-96 h-96 text-secondary opacity-20 -z-10 transform scale-x-[-1]" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-5 lg:col-span-5 relative">
          <InteractivePlant className="absolute -top-16 -left-16 w-64 h-64 text-accent/30 opacity-60 -z-20 transform -rotate-45" />
          <div className="absolute top-[-1rem] left-[-1rem] md:top-[-2rem] md:left-[-2rem] w-full h-full bg-accent/20 rounded-2xl -z-10 transform -rotate-3"></div>
          <Card className="overflow-hidden shadow-xl rounded-2xl">
            <Image
              src="https://placehold.co/600x700.png"
              alt="Foto profissional de Isabela"
              width={600}
              height={700}
              className="object-cover w-full h-full"
              data-ai-hint="professional woman"
            />
          </Card>
        </div>

        <div className="md:col-span-7 lg:col-span-7">
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
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 text-accent-foreground bg-accent p-1 rounded-full"/>
                <span className="font-semibold">Empatia e Acolhimento</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 text-accent-foreground bg-accent p-1 rounded-full"/>
                <span className="font-semibold">Ética e Confidencialidade</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 text-accent-foreground bg-accent p-1 rounded-full"/>
                <span className="font-semibold">Compromisso com seu Desenvolvimento</span>
              </li>
               <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 text-accent-foreground bg-accent p-1 rounded-full"/>
                <span className="font-semibold">Abordagem Inclusiva e Respeitosa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
