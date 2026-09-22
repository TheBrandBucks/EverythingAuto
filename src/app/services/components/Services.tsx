"use client";
import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { createPageUrl } from '@/utils/createPageUrl';
import { Button } from '@/components/ui/button';
import {
  Wrench, Disc3, Search, Zap, Droplet, LifeBuoy, Cog, CheckCircle2,
  Wind, BatteryCharging, ShieldCheck, GitCommitHorizontal, Phone, Calendar, ArrowRight
} from 'lucide-react';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion"
import  {fadeIn}  from '@/utils/motion';
const services = [

    { icon: '/car-engine.png', title: "Engine Repair", path: "EngineRepair", description: "Expert diagnostics and repair for engine troubles." },
  { icon: '/disc-brake.webp', title: "Brake Service", path: "BrakeService", description: "Ensuring your vehicle stops safely and reliably." },
  { icon: '/gear-Transmition.webp', title: "Transmission", path: "Transmission", description: "Smooth gear shifting and performance." },
  { icon: '/CarAC.webp', title: "Air Conditioning", path: "AirConditioning", description: "Stay cool with our A/C repair and recharge services." },
 
  { icon: '/diagnostics.webp', title: "Diagnostics", path: "Diagnostics", description: "Pinpointing issues with check engine lights." },
 
  { icon: '/electric-system.webp', title: "Electrical Systems", path: "ElectricalSystems", description: "Fixing shorts, wiring, and battery issues." },
  { icon: '/oil-change.webp', title: "Oil Changes", path: "OilChanges", description: "Essential maintenance for engine longevity." },
  { icon: '/Tire-repairing.webp', title: "Wheel & Tire", path: "WheelTire", description: "Tire rotation, balancing, and replacement." },
   { icon: '/suspension.webp', title: "Suspension & Steering", path: "SuspensionSteering", description: "Smooth out your ride and maintain control." },

  { icon: '/car-engine-diagnostic.webp', title: "NY State Inspection", path: "NYStateInspection", description: "Official vehicle safety and emissions testing." },
  { icon: '/carMaintain.webp', title: "Preventative Maintenance", path: "PreventativeMaintenance", description: "Keep your car running like new and avoid costly repairs." },
  { icon: '/BatteryService.webp', title: "Battery Services", path: "BatteryServices", description: "Testing, charging, and replacement for all vehicle batteries." },

];

export default function ServicesPage() {
    const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[var(--color-background-offset)]">
<section
  data-scroll-hero
  className=" h-[70vh] relative section-padding bg-cover bg-center bg-no-repeat text-white text-center"
  style={{
    backgroundImage: "url('/workshop.jpg')", // apni image ka path yahan daalo
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
  <div data-scroll-hero-content className="relative mx-auto max-w-5xl px-4 pt-32 pb-20 will-change-transform lg:pt-36">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-2 text-white tracking-tight">
      Our Automotive Services
    </h1>

  <motion.div
      initial={{ width: 0 }}
      animate={{ width: isLaptop ? "35rem" : "17rem" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-1 bg-gradient-to-b from-blue-800 to-gray-800 mx-auto mb-6 rounded-full"
    />


    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      We offer a full range of expert auto repair and maintenance services in Franklin Square
      to keep your vehicle running at its best.
    </p>
  </div>
</section>



      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-3">
  {services.map((service, index) => (
        <motion.div key={service.title} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
<Link
  href={createPageUrl(service.path)}
  className="block group"
  aria-label={`Learn more about ${service.title}`}
>
  <article
    className="bg-gradient-to-b from-white via-gray-100 to-gray-50 p-8 rounded-2xl h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 fade-in-scale flex flex-col items-center text-center"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Icon */}
    <div className="mb-5">
<div className="relative w-[72px] h-[80px]">
  <Image
    src={service.icon}
    alt={service.title}
    fill
    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
  />
</div>
    </div>

    {/* Title */}
    <h3 className="text-2xl font-bold text-black mb-2">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 mb-6 text-base">
      {service.description}
    </p>

    {/* Learn More */}
    <span className="text-[var(--color-primary)] font-semibold flex items-center space-x-2 transition-transform duration-300 group-hover:translate-x-1">
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4" />
    </span>
  </article>
</Link>
 </Tilt>
    </motion.div>

  ))}
</div> 
        </div>
      </section>
      
      <section className="section-padding bg-gradient-to-b from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">Ready for 5-Star Service?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for a small problem to become a major repair. Contact our expert team in Franklin Square today!
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