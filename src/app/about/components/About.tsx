"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {motion} from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Heart,
  Star,
  CheckCircle,
  TrendingUp,
  MapPin,
  MessageCircle,
  Phone,
  Calendar
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const values = [
  { icon: Shield, title: "Honesty & Transparency", description: "We provide clear, upfront pricing and honest assessments. No surprises, no hidden fees—just straightforward service you can trust." },
  { icon: Award, title: "Quality Workmanship", description: "Our certified technicians use the latest tools to ensure every repair meets the highest standards of quality and safety." },
  { icon: Heart, title: "Customer Care", description: "We treat every customer like family, providing personalized service and support throughout your vehicle's lifetime." }
];

import Image from "next/image";

const MotionImage = motion(Image);
export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true });


const blueglowAnimation = {
  initial: { x: -500, opacity: 1, scale: 1 },
  animate: {
    x: [-600, 0, 0, 600], // entry → pause → exit
    opacity: [0, 1, 1, 0.7], // fade out on exit
    scale: [1, 1, 1, 1],
    // filter: [
    //   "drop-shadow(0 0 10px rgba(135, 206, 235, 0.5)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))",
    //   "drop-shadow(0 0 30px rgba(135, 206, 235, 0.8)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.6))",
    //   "drop-shadow(0 0 30px rgba(135, 206, 235, 0.8)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.6))",
    //   "drop-shadow(0 0 10px rgba(135, 206, 235, 0.5)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))"
    // ]
  },
  transition: {
    duration: 4.7,
    ease: "easeInOut"as any,
    times: [0, 0.4, 0.7, 1], // slow entry, pause, fast exit
    repeat:0,
    // repeatDelay: 2 // gap before next car
  }
};

const spin = {
  animate: { rotate: [0, 200, 200, 360] },
  transition: {
    duration: 6, // same as car's total animation
    ease: "easeInOut"as any,
    times: [0, 0.4, 0.6, 1], // 0→0.4 spin, 0.4→0.6 pause, 0.6→1 spin again
    repeat: 0,
    // repeatDelay: 0
  }
};
  return (
    <div className="bg-white">
      {/* About hero and stats share one continuous image background. */}
      <div
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(2, 6, 23, 0.72) 0%, rgba(2, 6, 23, 0.9) 100%), url('/Wokshop.jpg')",
        }}
      >
      {/* Hero Section */}
      <section data-scroll-hero className="relative flex min-h-[500px] items-center">
        <div data-scroll-hero-content className="mx-auto grid w-full max-w-screen-2xl items-center gap-12 px-6 pt-32 pb-20 will-change-transform sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-20 lg:pt-36">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
              <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
              Everything Auto since 2008
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your Trusted Partner in Auto Care
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Honest, reliable, and high-quality automotive service for Franklin Square and greater Long Island, built on integrity and technical expertise.
            </p>
       
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden min-h-[300px] items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-sm lg:flex"
          >
            <Image
              src="/every.png"
              alt="Everything Auto Logo"
              width={320}
              height={220}
              className="h-auto w-full max-w-xs object-contain drop-shadow-[0_0_30px_rgba(147,197,253,0.7)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
    <section ref={ref} className="relative text-white section-padding">
  <div className="relative mx-auto max-w-screen-xl px-4">
    <div className="mb-10 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">The Everything Auto difference</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Trusted service, proven results</h2>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
      
      {/* Years of Experience */}
      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
        <div className="text-4xl font-black text-white sm:text-5xl">
          {inView && <CountUp end={17} duration={3} />}+
        </div>
        <div className="mt-2 text-sm text-slate-300 sm:text-base">
          Years of Experience
        </div>
      </div>

      {/* Happy Customers */}
      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
        <div className="text-4xl font-black text-white sm:text-5xl">
          {inView && <CountUp end={5000} duration={3} separator="," />}+
        </div>
        <div className="mt-2 text-sm text-slate-300 sm:text-base">
          Happy Customers
        </div>
      </div>

      {/* Google Rating */}
      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
        <div className="flex items-center justify-center space-x-1">
          <span className="text-4xl font-black text-white sm:text-5xl">
            {inView && <CountUp end={5.0} duration={2} decimals={1} />}
          </span>
          <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 fill-current" />
        </div>
        <div className="mt-2 text-sm text-slate-300 sm:text-base">
          Google Rating
        </div>
      </div>

      {/* Certified Technicians */}
      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
        <div className="text-4xl font-black text-white sm:text-5xl">ASE</div>
        <div className="mt-2 text-sm text-slate-300 sm:text-base">
          Certified Technicians
        </div>
      </div>

    </div>
  </div>
    </section>
  </div>


      {/* Our Values Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 via-white to-blue-50/50">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-800">Our Core Values</p>
            </div>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">The Foundation of Our Service</h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 via-blue-700 to-slate-800" />
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
              These principles guide everything we do and ensure every customer receives the exceptional service they deserve.
            </p>
          </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          
  {values.map((value, index) => (
    
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_18px_35px_rgba(30,64,175,0.14)]"
    >
      <span className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">0{index + 1}</span>
      
      {/* Icon container */}
      
      <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-blue-700 to-gray-800 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
        <value.icon className="h-8 w-8" />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold text-slate-950">{value.title}</h3>

      {/* Description */}
      <p className="leading-7 text-[var(--color-text-light)]">{value.description}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center rounded-2xl "
      
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience the Difference?</h2>
          <p className="text-lg mx-auto mb-8 max-w-2xl text-gray-200">
            Join the thousands of satisfied customers who trust Everything Auto for all their vehicle needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
  <a href="tel:516-775-9724" className="w-full sm:w-auto">
    <Button
      style={{
        boxShadow:
          "inset 0 -2px 5px rgba(249, 195, 195, 0.85), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
      }}
      size="lg"
      className="action-button action-button-call font-semibold 
                 text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 
                 w-full flex items-center justify-center 
                 "
    >
      <Phone className="w-5 h-5 mr-2" />
      CALL NOW: (516) 775-9724
    </Button>
  </a>

  <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
    <Button
      style={{
        boxShadow:
          "inset 0 -2px 5px rgba(138, 193, 252, 0.85), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
      }}
      size="lg"
      className="action-button action-button-book font-semibold 
                 text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 
                 w-full sm:w-auto flex items-center justify-center
                 "
    >
      <Calendar className="w-5 h-5 mr-2" />
      Book Appointment
    </Button>
  </a>
</div>

        </div>
      </section>

    </div>
  );
}
