"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Search, Phone, Calendar } from 'lucide-react';

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
    {
        category: "Air Conditioning",
        faqs: [
            { question: "Why is my car's air conditioning blowing warm air?", answer: "The most common reason is low refrigerant, which usually indicates a leak. Other causes could be a faulty compressor or an electrical issue. Our technicians can perform a leak test and diagnose the exact problem." },
            { question: "Why choose Everything Auto for A/C repair?", answer: "We are licensed to handle refrigerants safely. Our technicians use specialized equipment to properly evacuate and recharge A/C systems, ensuring peak performance. We don't just 'top it off'—we find and fix the root cause." }
        ]
    },
    {
        category: "Preventative Maintenance",
        faqs: [
            { question: "How does preventative maintenance save me money?", answer: "By investing a small amount in regular upkeep (fluid changes, filter replacements), you can avoid catastrophic failures. Replacing a timing belt on schedule is far cheaper than repairing the major engine damage that occurs if it breaks." },
            { question: "Why is Everything Auto the right choice for my car's maintenance?", answer: "We follow your manufacturer's recommended service intervals. With every service, we provide a FREE digital vehicle inspection, giving you a comprehensive health report on your car so you can plan for future needs with no surprises." }
        ]
    },
    {
        category: "Battery Services",
        faqs: [
            { question: "How do I know if I need a new car battery?", answer: "Signs include slow engine cranking, dim lights, a dashboard warning light, or a swollen battery case. Car batteries typically last 3-5 years, so it's good to have it tested if it's in that age range." },
            { question: "Why should I buy my battery from Everything Auto?", answer: "We ensure you get the correct battery size and type for your vehicle, which is crucial for modern cars. We'll install it professionally, clean the terminals, and properly recycle your old battery, guaranteeing a reliable start." }
        ]
    },
    {
        category: "NY State Inspection",
        faqs: [
            { question: "What happens if my car fails the inspection?", answer: "Don't worry. If your vehicle fails, we can handle most necessary repairs right here in our shop, often on the same day. We'll provide a clear report of what failed and a transparent quote for the repairs needed to pass." },
            { question: "Why get my inspection done at Everything Auto?", answer: "We are a full-service repair shop. This means if an issue is found during your inspection, we can fix it on-site, saving you time and the hassle of going to another mechanic. Walk-ins are welcome." }
        ]
    },
    {
        category: "Suspension & Steering",
        faqs: [
            { question: "How do I know if I have a suspension problem?", answer: "Common signs include a bouncy or rough ride, the vehicle pulling to one side, or difficulty steering. If you feel every bump in the road, it's time for an inspection." },
            { question: "Why is a healthy suspension system important?", answer: "Your suspension is critical for safety. It keeps your tires planted on the road for optimal braking and handling. At Everything Auto, we ensure your suspension and steering systems are in top condition, giving you control and confidence." }
        ]
    }
];

export default function FAQPageContent() {
    const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

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
        <div className="bg-[var(--color-background-offset)]">
    <section data-scroll-hero className="relative flex min-h-[500px] items-center overflow-hidden bg-gray-800 text-white">
    {/* Background Image + Dark Gradient */}
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage:
                "linear-gradient(90deg, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.72) 52%, rgba(2, 6, 23, 0.35) 100%), url('/workshop.jpg')",
        }}
    />

    {/* Hero Content */}
    <div data-scroll-hero-content className="relative mx-auto w-full max-w-screen-2xl px-6 pt-32 pb-20 will-change-transform sm:px-10 lg:px-20 lg:pt-36">
        <div className="max-w-4xl">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
                <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                Frequently Asked Questions
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Frequently Asked
                <br />
                Questions
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                Get answers to common questions about auto repair services,
                pricing, and our process at{" "}
                <strong className="font-bold text-white">
                    Everything Auto
                </strong>{" "}
                in Franklin Square, NY.
            </p>
        </div>
    </div>
</section>
         <section className="px-4 py-10 sm:px-8 md:py-12">
    <div className="mx-auto max-w-4xl">
        {/* Section Label */}
        <div className="mb-4 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-700">
                Find Your Answer
            </p>
            <p className="mt-2 text-base text-slate-500">
                Search our frequently asked questions
            </p>
        </div>

        {/* Search Box */}
        <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-lg text-gray-900 shadow-lg placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
        </div>
    </div>
</section>
<section className="bg-gray-800/10 px-4 py-16 sm:px-8 md:py-20">
    <div className="mx-auto max-w-4xl">

        {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category) => (
                <div key={category.category} className="mb-12 last:mb-0">

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
                                    className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
                                        {openItems[key] && (
                                            <div className="border-t border-gray-100 px-6 pb-6 pt-5">
                                                <p className="leading-7 text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}

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
</section>
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg text-[var(--color-text-light)] mb-8">
                        Our friendly team is here to help. Give us a call or schedule your appointment today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:516-775-9724">
                            <Button size="lg" className="btn-accent font-bold text-lg px-8 py-4">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Us: (516) 775-9724
                            </Button>
                        </a>
                        <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="btn-primary font-bold text-lg px-8 py-4">
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
