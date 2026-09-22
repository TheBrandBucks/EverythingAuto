"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils/createPageUrl";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function HeroSection() {
  const videoUrl = "https://www.youtube.com/embed/bfDpZval4uQ?autoplay=1&mute=1&loop=1&playlist=bfDpZval4uQ&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0";
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const video = videoRef.current;
    if (!hero || !content || !video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame = 0;
    const updateHeroScrollAnimation = () => {
      animationFrame = 0;
      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-bounds.top / Math.max(window.innerHeight * 0.65, 1), 0), 1);

      content.style.transform = `translate3d(0, ${progress * -180}px, 0) scale(${1 - progress * 0.06})`;
      content.style.opacity = `${1 - progress}`;
      video.style.transform = `translate3d(-50%, calc(-50% + ${progress * 84}px), 0) scale(${1.08 + progress * 0.18})`;
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateHeroScrollAnimation);
    };

    updateHeroScrollAnimation();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative isolate z-0 -mt-20 flex min-h-[calc(110vh-9rem)] items-center justify-center overflow-hidden bg-slate-950 text-white sm:min-h-[680px]">
      <div className="absolute inset-0 overflow-hidden bg-slate-950">
        <iframe
          ref={videoRef}
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Everything Auto Background Video"
          className="absolute left-1/2 top-1/2 z-0 h-full min-h-[100%] w-full min-w-[1100px] -translate-x-1/2 -translate-y-1/2 scale-[1.08] opacity-70"
        ></iframe>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(105deg,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.78)_42%,rgba(15,23,42,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-20 mx-auto w-full max-w-6xl px-4 pt-32 pb-20 will-change-transform sm:px-8 lg:pt-36 lg:pb-24">
        <div className="max-w-3xl text-left">
          <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-black/25 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)] sm:h-2 sm:w-2" />
            Trusted Auto Care in Franklin Square
          </p>
          <h1 className="hero-title-reveal max-w-3xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Honest, Quality Auto Repair
          </h1>
          <p className="hero-description-reveal mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Your family-owned shop with 17+ years of experience. We service all makes and models with a commitment to excellence and transparent pricing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:516-775-9724" className="w-full sm:w-auto">
              <Button
                style={{
                  boxShadow:
                    "inset 0 -2px 5px rgba(249, 195, 195, 0.65), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                }}
                size="lg"
                className="action-button action-button-call flex w-full items-center justify-center px-7 py-6 text-base sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (516) 775-9724
              </Button>
            </a>
            <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                style={{
                  boxShadow:
                    "inset 0 -2px 5px rgba(138, 193, 252, 0.57), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                }}
                size="lg"
                className="action-button action-button-book flex w-full items-center justify-center px-7 py-6 text-base sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/35 pt-5 text-left">
            <div className="border-r border-white/30 pr-3">
              <p className="text-xl font-bold text-white sm:text-2xl">17+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">Years Experience</p>
            </div>
            <div className="border-r border-white/30 px-3">
              <p className="text-xl font-bold text-white sm:text-2xl">5-Star</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">Local Service</p>
            </div>
            <div className="pl-3">
              <p className="text-xl font-bold text-white sm:text-2xl">All Makes</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">Models Welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}