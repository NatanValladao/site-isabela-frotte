import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { InteractivePlant } from "@/components/ui/InteractivePlant";

export default function ContatoPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Entre em Contato</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Estou aqui para ouvir você. Utilize as informações abaixo ou preencha o formulário para agendar uma conversa inicial.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <InteractivePlant className="absolute -bottom-24 -right-24 w-80 h-80 text-secondary opacity-20 -z-10 transform scale-x-[-1]" />
          <InteractivePlant className="absolute -top-24 -left-24 w-72 h-72 text-accent/20 opacity-40 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">Envie sua mensagem a qualquer hora.</p>
                    <a href="mailto:contato@isabelapsicologa.com" className="text-primary hover:underline font-medium">
                      contato@isabelapsicologa.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">Para contato via WhatsApp ou ligação.</p>
                    <a href="tel:+5511999999999" className="text-primary hover:underline font-medium">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Localização</h3>
                    <p className="text-muted-foreground">Atendimento presencial e online.</p>
                    <p className="font-medium text-primary">
                      Rua Fictícia, 123 - São Paulo, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-card/60 p-8 rounded-2xl shadow-lg border">
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
                <Button type="submit" size="lg" className="w-full font-semibold">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
