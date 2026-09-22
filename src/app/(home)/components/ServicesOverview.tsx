"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPageUrl } from "@/utils/createPageUrl";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Disc3,
  Search, 
  Zap, 
  Droplet, 
  LifeBuoy,
  Cog, 
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PenTool,
  TowerControlIcon,
  Server
} from "lucide-react";


import { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  { icon: '/car-engine.png', title: "Engine Repair", path: "engine-repair", description: "Expert diagnostics and repair for engine troubles." },
  { icon: '/disc-brake.webp', title: "Brake Service", path: "brake-service", description: "Ensuring your vehicle stops safely and reliably." },
  { icon: '/diagnostics.webp', title: "Diagnostics", path: "diagnostics", description: "Pinpointing issues with check engine lights." },
  { icon: '/electric-system.webp', title: "Electrical Systems", path: "electrical-systems", description: "Fixing shorts, wiring, and battery issues." },
  { icon: '/oil-change.webp', title: "Oil Changes", path: "oil-changes", description: "Essential maintenance for engine longevity." },
  { icon: '/Tire-repairing.webp', title: "Wheel & Tire", path: "wheeltire", description: "Tire rotation, balancing, and replacement." },
  { icon: '/gear-Transmition.webp', title: "Transmission", path: "transmission", description: "Smooth gear shifting and performance." },
  { icon: '/car-engine-diagnostic.webp', title: "NY State Inspection", path: "ny-state-inspection", description: "Official vehicle safety and emissions testing." }
];



export default function ServicesOverview() {
  
//card 3d rotation
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const serviceControlsRef = useRef<HTMLDivElement | null>(null);
const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const progress = useRef({ value: 0 });
  const dragStartX = useRef(0);
  const dragStartProgress = useRef(0);
  const isDragging = useRef(false);
  const dragProgressTo = useRef<((value: number) => void) | null>(null);
  const activeServiceRef = useRef(0);
  const [radius, setRadius] = useState(326);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [showServiceControls, setShowServiceControls] = useState(false);
// Mobileradius=160;
useEffect(() => {
  // on mount, screen size check
  const updateRadius = () => {
    if (window.innerWidth < 640) {
      // mobile
      setRadius(145);
    } else {
      // tablet/laptop/desktop
      setRadius(326);
    }
  };

  updateRadius(); // initial
  window.addEventListener("resize", updateRadius);

  const animate = () => {
    const images = imagesRef.current;
    if (!images) return;

    const normalizedProgress = ((progress.current.value % 1) + 1) % 1;
    const frontServiceIndex = Math.round(normalizedProgress * images.length) % images.length;
    if (frontServiceIndex !== activeServiceRef.current) {
      activeServiceRef.current = frontServiceIndex;
      setActiveServiceIndex(frontServiceIndex);
    }

    images.forEach((image, index) => {
      const theta = index / images.length - progress.current.value;
      const x = -Math.sin(theta * Math.PI * 2) * radius;
      const y = Math.cos(theta * Math.PI * 2) * radius;
      if (image) {
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${
          360 * -theta
        }deg)`;
      }
    });
  };

  gsap.ticker.add(animate);

  return () => {
    gsap.ticker.remove(animate);
    window.removeEventListener("resize", updateRadius);
  };
}, [radius]); // radius dependency

  useEffect(() => {
    const controls = serviceControlsRef.current;
    if (!controls) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowServiceControls(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(controls);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handlePageScroll = () => {
      const carousel = carouselRef.current;
      const scrollDelta = window.scrollY - previousScrollY;
      previousScrollY = window.scrollY;
      if (!carousel || isDragging.current || scrollDelta === 0) return;

      const bounds = carousel.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;

      gsap.to(progress.current, {
        value: `-=${scrollDelta * 0.00055}`,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", handlePageScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, []);

  const selectService = (index: number) => {
    const normalizedIndex = (index + services.length) % services.length;
    activeServiceRef.current = normalizedIndex;
    setActiveServiceIndex(normalizedIndex);
    gsap.killTweensOf(progress.current);
    gsap.to(progress.current, {
      value: normalizedIndex / services.length,
      duration: 0.85,
      ease: "power3.inOut",
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    isDragging.current = true;
    dragStartX.current = event.clientX;
    dragStartProgress.current = progress.current.value;
    gsap.killTweensOf(progress.current);
    dragProgressTo.current = gsap.quickTo(progress.current, "value", {
      duration: 0.16,
      ease: "power3.out",
    });
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    if (!isDragging.current) return;
    const width = Math.max(event.currentTarget.clientWidth, 1);
    dragProgressTo.current?.(dragStartProgress.current - (event.clientX - dragStartX.current) / width);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    if (!isDragging.current) return;
    isDragging.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragProgressTo.current = null;
    const normalizedProgress = ((progress.current.value % 1) + 1) % 1;
    selectService(Math.round(normalizedProgress * services.length) % services.length);
  };

  return (
    <section className="section-padding section-bg">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="slide-in-up mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
            <p className="app-section-kicker">Our Expertise</p>
          </div>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Comprehensive Auto Repair Services
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 via-blue-700 to-slate-800" />
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">
            From routine maintenance to complex repairs, our ASE-certified technicians have the skills and equipment to handle all your automotive needs with our digital inspection technology.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
            <span className="h-px w-10 bg-slate-900" />
            <span>12 specialist services</span>
            <span className="h-px w-10 bg-slate-900" />
          </div>
        </div>

<div
  ref={carouselRef}
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerEnd}
  onPointerCancel={handlePointerEnd}
  onLostPointerCapture={handlePointerEnd}
  className="carousel services-rotator relative z-10 mt-4 flex touch-pan-y select-none items-center justify-center rounded-[2rem] border border-white/80 bg-white/70 pb-3 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_rgba(15,23,42,0.06)] sm:pb-14"
  style={{
    width: "100%",
    height: "80vh",
    transform: "rotateX(-20deg) translateY(-70px)",
    transformStyle: "preserve-3d",
    perspective: "1400px",
  }}
>
{services.map((service, index) => (
  <div
    key={service.title}
    ref={(el) => {
      imagesRef.current[index] = el;
    }}
    className="
      mt-1
      mb-0
      md:mb-8
      sm:mb-6
      absolute
      w-[120px] h-[250px]        /* mobile */
      sm:w-[220px] sm:h-[260px]  /* tablet */
      md:w-[270px] md:h-[260px]  /* laptop/desktop (same height) */
    "
    style={{ transformOrigin: "50% 50%" }}
  >
    <Link
      href={createPageUrl(service.path)}
      className="block group h-full"
      aria-label={`Learn more about ${service.title}`}
    >
      <article
        className="
          app-panel app-panel-hover rounded-2xl border border-slate-300 bg-white/95 shadow-[0_8px_20px_rgba(15,23,42,0.12)]
          p-4 h-full
          flex flex-col items-center text-center
        "
      >
        {/* Icon */}
        <div className="mb-3">
       <Image
  src={service.icon}
  alt={service.title}
  width={80}
  height={80}
  sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
  className="object-contain"
/>

        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-md font-bold text-black mb-2 line-clamp-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--color-text-light)] mb-4 line-clamp-3 sm:line-clamp-4">
          {service.description}
        </p>

        {/* Button */}
        <div className="mt-auto">
          <span
            className="text-xs sm:text-sm text-[var(--color-primary)]
                       flex items-center justify-center space-x-1 
                       transition-all duration-300 group-hover:translate-x-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  </div>
))}

</div>

        <div ref={serviceControlsRef} className={`relative z-0 mx-auto -mt-20 flex w-fit items-center gap-1.5 rounded-b-full rounded-t-none border border-slate-200 border-t-0 !bg-white px-2.5 pb-0.5 pt-1 shadow-[0_6px_18px_rgba(15,23,42,0.1)] transition-[transform,opacity] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:-mt-[5.25rem] sm:gap-4 sm:px-4 sm:pb-1.5 sm:pt-2 ${
          showServiceControls ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
        }`}>
          <button
            type="button"
            aria-label="Show previous service"
            onClick={() => selectService(activeServiceIndex - 1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 sm:h-8 sm:w-8"
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                aria-label={`Show ${service.title}`}
                aria-current={activeServiceIndex === index ? "true" : undefined}
                onClick={() => selectService(index)}
                className={`h-1.5 rounded-full bg-slate-400 transition-[width,opacity,background-color] duration-300 sm:h-2.5 ${
                  activeServiceIndex === index ? "w-5 bg-slate-500 opacity-100 sm:w-8" : "w-1.5 opacity-30 hover:opacity-70 sm:w-2.5"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Show next service"
            onClick={() => selectService(activeServiceIndex + 1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 sm:h-8 sm:w-8"
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          </button>
        </div>


        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {services.map((service, index) => (
    <Link
      href={createPageUrl(service.path)}
      key={service.title}
      className="block group"
      aria-label={`Learn more about ${service.title}`}
    >
      <article
        className="bg-white p-8 rounded-xl h-full border border-gray-200 luxury-shadow transition-all duration-500 hover:-translate-y-2 fade-in-scale flex flex-col items-center text-center"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="mb-5">
          <img
            src={service.icon}
            alt={service.title}
            className="w-18 h-20 object-contain"
          />
        </div>

        <h3 className="text-xl font-bold text-black mb-2">
          {service.title}
        </h3>

        <p className="text-[var(--color-text-light)] mb-4 text-base">
          {service.description}
        </p>

        <span className="text-[var(--color-primary)] font-semibold flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </article>
    </Link>
  ))}
</div> */}


        <div className="text-center fade-in-scale mt-14">
          <Link href={createPageUrl("Services")} aria-label="View all auto repair services">
            <Button 
                                              style={{
        boxShadow:
          "inset 0 -2px 5px rgba(165, 208, 255, 0.61), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 8px 14px rgba(0, 0, 0, 0.25)",
      }}
            size="lg" className="action-button action-button-book text-lg px-6 py-4">
               <Wrench className="w-5 h-5 mr-2" />
              View All Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}