"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function SobreClient() {
  const valores = [
    { text: "Atendimento humano e transformador" },
    { text: "Ética e confidencialidade" },
    { text: "Respeito ao tempo de cada pessoa" },
    { text: "Acolhimento de necessidades emocionais" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
         <Image
          src="https://i.imgur.com/cynnrcO.png"
          alt=""
          width={384}
          height={384}
          className="absolute -bottom-24 -right-24 w-96 h-96 opacity-20 transform scale-x-[-1]"
        />
        <Image
          src="https://i.imgur.com/Zd4DB66.png"
          alt=""
          width={384}
          height={384}
          className="absolute top-1/2 -left-36 w-96 h-96 opacity-10 transform -rotate-45"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <motion.div 
          className="md:col-span-5 lg:col-span-5 relative"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://i.imgur.com/ECaF4tf.png"
            alt=""
            width={256}
            height={256}
            className="absolute -top-16 -left-16 w-64 h-64 opacity-30 -z-20 transform -rotate-45"
          />
          <div className="transition-transform duration-300 hover:scale-105">
            <Card className="overflow-hidden shadow-xl rounded-2xl bg-card">
              <Image
                src="https://i.imgur.com/iBQDcaq.png"
                alt={`Foto de ${siteConfig.name}`}
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
            </Card>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-7 lg:col-span-7 p-8 rounded-2xl bg-card/80 backdrop-blur-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-4">CRP 05/77920</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-accent font-headline">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Sou psicóloga com atuação clínica voltada para adolescentes, adultos e casais. Tenho formação em Terapia Cognitivo-Comportamental (TCC) e sou pós-graduanda em Neuropsicologia.
          </p>
          
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-2xl font-bold text-accent font-headline">Trajetória e Experiência</h3>
            <p>
              Ao longo da minha trajetória, desenvolvi experiência no acompanhamento de pessoas com Transtorno de Personalidade Borderline, Transtorno Afetivo Bipolar e outros transtornos relacionados a personalidade, humor, a neurodiversidade e à regulação emocional.
            </p>
            <p>
              Essas vivências me aprofundaram no cuidado com histórias complexas, subjetividades intensas e relações desafiadoras, sempre com um olhar acolhedor e fundamentado nos teóricos.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-accent font-headline">Meu Compromisso Como Psicóloga</h3>
             <p className="text-muted-foreground mb-6">
              Acredito em um atendimento humano, ético e transformador, que respeita o tempo de cada pessoa e acolhe suas necessidades emocionais com sensibilidade.
            </p>
            <ul className="space-y-3">
              {valores.map((valor, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <div className="transition-transform duration-300 hover:scale-125 hover:rotate-12">
                    <Check className="h-5 w-5 mr-3 text-primary"/>
                  </div>
                  <span className="font-semibold">{valor.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}