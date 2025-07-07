import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Lightbulb, User, Users } from "lucide-react";
import Link from "next/link";
import { InteractivePlant } from "@/components/ui/InteractivePlant";

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
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Serviços e Abordagem</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofereço um cuidado terapêutico personalizado para atender às suas necessidades específicas, com base em uma abordagem empática e cientificamente embasada.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col text-center items-center p-6 border-0 bg-card/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <CardHeader className="p-0 items-center">
                  <div className="p-4 bg-background rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <InteractivePlant className="absolute -bottom-20 -left-20 w-72 h-72 text-accent/30 opacity-50 -z-10 transform -rotate-12" />
          <InteractivePlant className="absolute -top-20 -right-20 w-80 h-80 text-secondary/40 opacity-50 -z-10 transform scale-x-[-1] rotate-45" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[450px]">
                <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-2xl transform rotate-3"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/50 rounded-2xl transform -rotate-3"></div>
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border rounded-2xl shadow-lg flex items-center justify-center p-8">
                    <div className="text-center">
                        <HeartHandshake className="w-24 h-24 text-primary mx-auto" />
                        <p className="mt-4 text-xl font-headline text-primary">Cuidado e Parceria</p>
                    </div>
                </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Minha Abordagem Terapêutica</h2>
              <p className="text-muted-foreground mb-4">
                Minha prática é fundamentada na Abordagem Humanista, que valoriza a experiência única de cada indivíduo e sua capacidade de encontrar as próprias respostas. Vejo a terapia como uma parceria, onde juntos criamos um caminho de autodescoberta e mudança.
              </p>
              <p className="text-muted-foreground">
                Utilizo também ferramentas da Terapia Cognitivo-Comportamental (TCC) para trabalhar de forma prática em pensamentos e comportamentos que possam estar causando sofrimento, sempre de forma adaptada a você.
              </p>
              <Button asChild className="mt-6" size="lg">
                <Link href="/contato">Agende uma consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
