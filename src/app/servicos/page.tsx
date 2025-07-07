"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Lightbulb, User, Users } from "lucide-react";
import Link from "next/link";
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
      <motion.section 
        className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Plant1 className="absolute top-0 -left-24 w-72 h-72 text-accent/30 opacity-30 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight" variants={itemVariants}>Serviços e Abordagem</motion.h1>
          <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground" variants={itemVariants}>
            Ofereço um cuidado terapêutico personalizado para atender às suas necessidades específicas, com base em uma abordagem empática e cientificamente embasada.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="flex flex-col text-center items-center p-6 bg-background/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:bg-background/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl h-full">
                  <CardHeader className="p-0 items-center">
                    <motion.div 
                      className="p-4 bg-background rounded-full mb-4"
                      whileHover={{ scale: 1.15, rotate: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4 flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24 bg-secondary/20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 relative">
          <Plant3 className="absolute -bottom-20 -left-20 w-72 h-72 text-accent/30 opacity-50 -z-10 transform -rotate-12" />
          <Plant2 className="absolute -top-20 -right-20 w-80 h-80 text-secondary/40 opacity-50 -z-10 transform scale-x-[-1] rotate-45" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="relative h-80 md:h-[450px]" variants={itemVariants}>
                <motion.div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-2xl" animate={{ rotate: 3, scale: 1.05 }} transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}/>
                <motion.div className="absolute top-0 left-0 w-full h-full bg-secondary/50 rounded-2xl" animate={{ rotate: -3 }} transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border rounded-2xl shadow-lg flex items-center justify-center p-8">
                    <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                        <HeartHandshake className="w-24 h-24 text-primary mx-auto" />
                        <p className="mt-4 text-xl font-headline text-primary">Cuidado e Parceria</p>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">Minha Abordagem Terapêutica</h2>
              <p className="text-muted-foreground mb-4">
                Minha prática é fundamentada na Abordagem Humanista, que valoriza a experiência única de cada indivíduo e sua capacidade de encontrar as próprias respostas. Vejo a terapia como uma parceria, onde juntos criamos um caminho de autodescoberta e mudança.
              </p>
              <p className="text-muted-foreground">
                Utilizo também ferramentas da Terapia Cognitivo-Comportamental (TCC) para trabalhar de forma prática em pensamentos e comportamentos que possam estar causando sofrimento, sempre de forma adaptada a você.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="mt-6" size="lg">
                  <Link href="/contato">Agende uma consulta</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
