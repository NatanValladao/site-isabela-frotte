"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="https://i.imgur.com/cynnrcO.png"
          alt=""
          width={384}
          height={384}
          className="absolute -top-32 -left-32 w-96 h-96 opacity-15"
        />
        <Image
          src="https://i.imgur.com/ECaF4tf.png"
          alt=""
          width={320}
          height={320}
          className="absolute -bottom-48 left-1/4 w-80 h-80 opacity-10"
        />
        <Image
          src="https://i.imgur.com/0hvGc4Q.png"
          alt=""
          width={448}
          height={448}
          className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] opacity-20 -rotate-12"
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-accent font-headline">
                Cuidado psicológico ético e transformador
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Sou {siteConfig.shortName} (CRP 05/77920), psicóloga com formação em TCC e Neuropsicologia. 
                Ofereço um espaço de escuta e acolhimento para adolescentes, adultos e casais.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <div className="interactive-button">
                <Button asChild size="lg" className="font-semibold w-full sm:w-auto">
                  <Link href="/contato">Agende uma Conversa</Link>
                </Button>
              </div>
              <div className="interactive-button">
                <Button asChild variant="secondary" size="lg" className="font-semibold w-full sm:w-auto">
                  <Link href="/sobre">Conheça minha trajetória</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
              <div className="absolute bg-secondary/50 -bottom-6 -left-6 w-full h-full rounded-2xl -rotate-6 -z-10" />
              <div className="interactive-card relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl bg-muted">
                <Image
                  src="https://imgur.com/JmSuTKr.png"
                  alt={`Foto de ${siteConfig.name}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
