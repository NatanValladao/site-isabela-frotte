"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/layout/SplashScreen';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHomePage);

  useEffect(() => {
    // If we navigate to home page, show splash again. 
    // This is a design choice, can be changed to sessionStorage logic.
    if (isHomePage) {
      setIsLoading(true);
    }
  }, [pathname, isHomePage]);

  return (
    <>
      {isLoading && isHomePage ? (
        <SplashScreen onAnimationComplete={() => setIsLoading(false)} />
      ) : null}
      <div className={cn("transition-opacity duration-700 ease-in", (isLoading && isHomePage) ? "opacity-0" : "opacity-100")}>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
