"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Search, Phone, Calendar, ExternalLink } from 'lucide-react';

const allFAQs = [
    {
        category: "General Auto Repair",
        faqs: [
            { question: "How long does an auto repair take at Everything Auto in Franklin Square?", answer: "Most routine services like oil changes and inspections take 15-30 minutes. Brake repairs typically take 1-2 hours, while engine diagnostics can take 1-3 hours depending on complexity. We always provide accurate time estimates upfront and keep you informed throughout the process." },
            { question: "Do you work on all car makes and models?", answer: "Yes! Our ASE-certified technicians are trained to work on all makes and models, including domestic, import, luxury, hybrid, and electric vehicles. From Honda and Toyota to BMW and Mercedes-Benz, we have the expertise and equipment to service your vehicle properly." },
            { question: "Do you offer warranties on your auto repair work?", answer: "Absolutely! We stand behind our work with comprehensive warranties. Parts and labor warranties vary by service type, but we always guarantee our workmanship. We'll explain warranty coverage before any work begins so you have complete peace of mind." },
        ]
    },
    {
        category: "Engine Repair",
        faqs: [
            { question: "How do I know if my engine needs repair in Franklin Square?", answer: "Common signs include check engine lights, unusual noises (knocking, grinding), loss of power, overheating, or excessive smoke. At Everything Auto, our ASE-certified technicians use advanced diagnostic equipment to accurately identify engine problems." },
            { question: "Why should I choose Everything Auto for engine repair in Nassau County?", answer: "We're a family-owned shop with 17+ years of experience and over 5,000 satisfied customers. Our ASE-certified technicians use the latest diagnostic equipment, provide transparent pricing, and offer comprehensive warranties. Our 5-star Google rating reflects our commitment to quality engine repair and honest service." },
        ]
    },
    {
        category: "Brake Service",
        faqs: [
            { question: "How do I know if my brakes need service in Franklin Square?", answer: "Warning signs include squealing or grinding noises, a soft or spongy brake pedal, your car pulling to one side when braking, or vibrations when stopping. Our brake specialists provide thorough inspections and use our digital inspection system to show you exactly what needs attention." },
            { question: "How much does brake service cost at Everything Auto?", answer: "Brake pad replacement typically costs $150-$300 per axle, while rotor replacement ranges from $200-$400 per axle. We provide transparent, upfront pricing with no hidden fees and show you what needs repair with our digital inspections." },
        ]
    },
    {
        category: "Diagnostics",
        faqs: [
            { question: "What does a check engine light mean?", answer: "A check engine light can indicate anything from a loose gas cap to a serious engine problem. Our ASE-certified technicians use advanced OBD-II scanners to read the specific trouble codes from your car's computer for an accurate diagnosis." },
            { question: "Why should I trust Everything Auto for vehicle diagnostics?", answer: "We invest in the latest diagnostic technology. Unlike parts stores that just read codes, we perform a full system analysis to pinpoint the root cause. Our digital inspections show you photos and data, ensuring complete transparency." }
        ]
    },
    {
        category: "Electrical Systems",
        faqs: [
            { question: "What are signs of an electrical problem in my car?", answer: "Symptoms include dimming headlights, trouble starting, a battery that frequently dies, or the smell of burning plastic. It's crucial to get it checked by a professional at Everything Auto to prevent further damage." },
            { question: "Why trust Everything Auto with my car's electrical system?", answer: "Electrical repairs require precision. Our technicians have over 17 years of experience and use specialized tools to safely diagnose and repair shorts, bad grounds, and parasitic draws, ensuring a reliable and safe fix." }
        ]
    },
    {
        category: "Oil Changes",
        faqs: [
            { question: "How often should I get an oil change?", answer: "It depends on your vehicle, oil type, and driving habits. Many modern cars can go 5,000 to 7,500 miles. We can give you a personalized recommendation based on your car manufacturer's specs." },
            { question: "Why is a professional oil change at Everything Auto better?", answer: "An oil change is a vital health check. Our ASE-certified technicians perform a complimentary digital vehicle inspection with every oil change, checking tires, brakes, and fluids to help you catch small issues early." }
        ]
    },
    {
        category: "Wheel & Tire",
        faqs: [
            { question: "When should I get a wheel alignment?", answer: "Get an alignment if you notice your car pulling, uneven tire wear, or a crooked steering wheel. Proper alignment extends tire life and improves fuel economy. We also recommend it when you get new tires." },
            { question: "Why should I choose Everything Auto for tire services?", answer: "We are a full-service repair facility. We ensure your new tires are installed correctly and that any underlying suspension issues causing uneven wear are also addressed, unlike chain tire shops." }
        ]
    },
    {
        category: "Transmission",
        faqs: [
            { question: "What are signs of transmission problems?", answer: "Common signs include difficulty shifting, slipping out of gear, a burning smell, or leaking fluid. If you notice any of these, bring your car to Everything Auto immediately to prevent more severe damage." },
            { question: "Why should I trust Everything Auto for transmission service?", answer: "Transmission work is highly complex. Our ASE-certified technicians have the specialized training to accurately diagnose and service both automatic and manual transmissions, providing honest advice on the necessary repairs." }
        ]
    },
 
];

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
    const [isFaqVisible, setIsFaqVisible] = useState(false);
    const [visibleFaqItems, setVisibleFaqItems] = useState<Set<string>>(() => new Set());
    const faqSectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = faqSectionRef.current;
        if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsFaqVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsFaqVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.12 });

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const section = faqSectionRef.current;
        if (!section || !isFaqVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-faq-reveal]'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const key = entry.target.getAttribute('data-faq-reveal');
                if (key) setVisibleFaqItems((items) => new Set(items).add(key));
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.2 });

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, [isFaqVisible]);

    const toggleFAQ = (category:any, index:any) => {
        const key = `${category}-${index}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const filteredFAQs = allFAQs.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.faqs.length > 0);

    return (
        <div ref={faqSectionRef} className="bg-[var(--color-background-offset)]">

  {/* ================= SECTION HEADING ================= */}
    <div className={`mb-6 mt-8 text-center transition-[transform,opacity,filter] duration-700 ease-out ${isFaqVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"}`}>

      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white px-4 py-2 shadow-inner">

        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />

        <span className="text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
          Frequently Asked Questions
        </span>

      </div>

      {/* Heading */}
      <h2 className="text-4xl font-black tracking-tight text-gray-800 sm:text-5xl">
      Frequently Asked Questions
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
      Get answers to common questions about auto repair services, pricing, and our process at Everything Auto in Franklin Square, NY.
      </p>

      {/* Accent Line */}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-gray-300" />

    </div>

<section className="bg-gray-100/10 px-4 py-16 sm:px-8 md:py-20">
    <div className="mx-auto max-w-4xl">

        {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, categoryIndex) => (
                <div
                    key={category.category}
                    className={`mb-12 transition-[transform,opacity,filter] duration-700 ease-out last:mb-0 ${isFaqVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-12 opacity-0 blur-sm"}`}
                    style={{ transitionDelay: `${150 + categoryIndex * 110}ms` }}
                >

                    {/* Category Heading */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />

                            <h2 className="text-2xl font-black tracking-tight text-gray-800 sm:text-3xl">
                                {category.category}
                            </h2>
                        </div>

                        <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-gray-500" />
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {category.faqs.map((faq, index) => {
                            const key = `${category.category}-${index}`;

                            return (
                                <Card
                                    key={index}
                                    data-faq-reveal={key}
                                    className={`overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-lg ${visibleFaqItems.has(key) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                >
                                    <CardContent className="p-0">

                                        {/* Question */}
                                        <button
                                            onClick={() =>
                                                toggleFAQ(category.category, index)
                                            }
                                            className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                                        >
                                            <h3 className="pr-6 text-base font-bold leading-6 text-gray-900 sm:text-lg">
                                                {faq.question}
                                            </h3>

                                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                                                {openItems[key] ? (
                                                    <ChevronUp className="h-5 w-5 text-blue-600" />
                                                ) : (
                                                    <ChevronDown className="h-5 w-5 text-blue-600" />
                                                )}
                                            </div>
                                        </button>

                                        {/* Answer */}
                                        <div
                                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                                                openItems[key] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="border-t border-gray-100 px-6 pb-6 pt-5">
                                                    <p className="leading-7 text-gray-600">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            ))
        ) : (
            /* No Results */
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-sm">
                <p className="text-lg font-semibold text-white">
                    No FAQs found matching your search.
                </p>

                <p className="mt-2 text-sm text-slate-400">
                    Try searching with a different keyword.
                </p>
            </div>
        )}

    </div>
    {/* ================= LOAD MORE ================= */}
      {/* Button */}
           <div className={`mt-14 text-center transition-[transform,opacity] duration-700 ease-out ${isFaqVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: '450ms' }}>
             <a
               href="/faqs"
            //    target="_blank"
               rel="noopener noreferrer"
             >
               <Button
                 style={{
                   boxShadow:
                     "inset 0 -2px 5px rgba(249, 195, 195, 0.57), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 8px 14px rgba(0, 0, 0, 0.22)",
                 }}
                 size="lg"
                 className="action-button action-button-call text-lg px-8 py-4"
               >
                 <ExternalLink className="w-5 h-5 mr-2" />
                 View All Faqs
               </Button>
             </a>
           </div>

</section>
        
        </div>
    );
}