"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <motion.div 
        className="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent font-headline">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sua jornada de transformação começa com uma conversa. Entre em contato para agendar sua primeira sessão online.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2 interactive-button pt-4">
          <Button asChild size="lg" className="font-semibold w-full">
            <Link href="/contato">
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
