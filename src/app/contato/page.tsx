"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Plant1 } from "@/components/ui/Plant1";
import { Plant2 } from "@/components/ui/Plant2";
import { Plant3 } from "@/components/ui/Plant3";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function ContatoPage() {
  return (
    <>
      <motion.section 
        className="py-16 md:py-24 bg-secondary/20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight" variants={itemVariants}>Entre em Contato</motion.h1>
          <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground" variants={itemVariants}>
            Estou aqui para ouvir você. Utilize as informações abaixo ou preencha o formulário para agendar uma conversa inicial.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 relative">
          <Plant2 className="absolute -bottom-24 -right-24 w-80 h-80 text-secondary/70 opacity-20 -z-10 transform scale-x-[-1]" />
          <Plant3 className="absolute -top-24 -left-24 w-72 h-72 text-accent/50 opacity-40 -z-10" />
          <Plant1 className="absolute bottom-1/4 -right-36 w-80 h-80 text-primary/10 opacity-30 -z-10 transform rotate-45" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <motion.div className="md:col-span-5" variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", desc: "Envie sua mensagem a qualquer hora.", link: "mailto:contato@isabelapsicologa.com", text: "contato@isabelapsicologa.com" },
                  { icon: Phone, title: "Telefone", desc: "Para contato via WhatsApp ou ligação.", link: "tel:+5511999999999", text: "(11) 99999-9999" },
                  { icon: MapPin, title: "Localização", desc: "Atendimento presencial e online.", text: "Rua Fictícia, 123 - São Paulo, SP", isLink: false }
                ].map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="p-3 bg-accent/20 rounded-full"
                      whileHover={{ scale: 1.2, rotate: 10}}
                    >
                      <info.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground">{info.desc}</p>
                      {info.isLink !== false ? (
                         <a href={info.link} className="text-primary hover:underline font-medium">
                          {info.text}
                        </a>
                      ) : (
                        <p className="font-medium text-primary">{info.text}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="md:col-span-7 bg-card/60 p-8 rounded-2xl shadow-lg border" variants={itemVariants}>
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
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Enviar Mensagem
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
