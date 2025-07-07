import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Users, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute top-0 -left-24 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 -right-24 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Acolhendo sua jornada, transformando seu amanhã.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sou Isabela, psicóloga dedicada a criar um espaço seguro e empático para o seu desenvolvimento pessoal. Juntos, podemos explorar caminhos para uma vida mais plena e consciente.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="font-semibold">
                    <Link href="/servicos">Agende uma Conversa</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="font-semibold">
                    <Link href="/sobre">Conheça minha história</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                 <div className="absolute bg-secondary/50 -bottom-10 -left-10 w-full h-full rounded-2xl transform -rotate-6"></div>
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Espaço de terapia calmo e acolhedor"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-xl"
                    data-ai-hint="calm abstract"
                  />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">Nossos Serviços</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Um caminho para cada necessidade</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofereço diferentes modalidades de terapia para se adaptar à sua busca por bem-estar e autoconhecimento.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
                <CardHeader>
                  <User className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Terapia Individual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Um espaço confidencial para explorar suas emoções, desafios e potenciais.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Terapia de Casal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Fortaleça a comunicação, a confiança e a conexão em seu relacionamento.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
                <CardHeader>
                  <Brain className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Orientação Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Encontre clareza e direção para sua carreira e desenvolvimento profissional.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pronto para dar o primeiro passo?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sua jornada de transformação começa com uma conversa. Entre em contato para agendar sua primeira sessão.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button asChild size="lg" className="font-semibold w-full">
                  <Link href="/contato">
                    Entre em Contato
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
