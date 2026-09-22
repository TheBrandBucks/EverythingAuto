"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const revealClass = (delay: string) =>
    `transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"
    } ${delay}`;

  return (
    <section ref={sectionRef} className="overflow-hidden bg-gradient-to-b from-blue-900 to-gray-900 px-4 py-20 text-white sm:px-8 lg:py-24">
      <div className="relative mx-auto max-w-4xl text-center">
        <div className={`mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner ${revealClass("delay-0")}`}>
          <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
          Trusted local auto care
        </div>
        <h2 className={`text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl ${revealClass("delay-100")}`}>
          Ready for 5-Star Service?
        </h2>
        <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl ${revealClass("delay-200")}`}>
          Don&apos;t wait for a small problem to become a major repair. Get honest advice and dependable service from our Franklin Square team.
        </p>

        <div className={`mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row ${revealClass("delay-300")}`}>
          <a href="tel:516-775-9724" className="w-full sm:w-auto">
            <Button size="lg" className="action-button action-button-call flex w-full items-center justify-center px-6 py-4 text-lg sm:px-8">
              <Phone className="h-5 w-5" />
              CALL NOW: 516-775-9724
            </Button>
          </a>
          <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="action-button action-button-book flex w-full items-center justify-center px-6 py-4 text-lg sm:px-8">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}