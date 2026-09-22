"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const engineRepairFAQs = [
    {
        question: "How do I know if my engine needs repair in Franklin Square?",
        answer: "Common signs include check engine lights, unusual noises (knocking, grinding), loss of power, overheating, or excessive smoke. At Everything Auto, our ASE-certified technicians use advanced diagnostic equipment to accurately identify engine problems. We've been diagnosing engine issues in Nassau County for over 17 years."
    },
    {
        question: "How much does engine repair cost at Everything Auto?",
        answer: "Engine repair costs vary depending on the issue. Simple repairs like sensor replacements may cost $150-$300, while major rebuilds can range from $2,500-$4,000. We provide transparent, upfront estimates and explain all options. Our digital inspection reports show you exactly what needs attention with photos and explanations."
    },
    {
        question: "Can Everything Auto handle engine repair for my car's make and model?",
        answer: "Yes! We service all makes and models including domestic, import, luxury, hybrid, and electric vehicles. From Honda and Toyota to BMW and Mercedes-Benz, our technicians have the expertise and equipment to properly service your engine. We're trusted by Franklin Square residents for all engine repairs."
    },
    {
        question: "How long does engine repair take at Everything Auto?",
        answer: "Simple engine repairs like sensor replacements typically take 1-3 hours. Complex issues such as head gasket repairs may take 1-2 days. We always provide accurate time estimates upfront and keep you informed throughout the process. Most customers appreciate our honest communication about repair timelines."
    },
    {
        question: "Why should I choose Everything Auto for engine repair in Nassau County?",
        answer: "We're a family-owned shop with 17+ years of experience and over 5,000 satisfied customers. Our ASE-certified technicians use the latest diagnostic equipment, provide transparent pricing, and offer comprehensive warranties. Our 5-star Google rating reflects our commitment to quality engine repair and honest service."
    },
    {
        question: "Do you offer warranties on engine repair work?",
        answer: "Absolutely! We stand behind our engine repair work with comprehensive warranties that vary by service type. We always guarantee our workmanship and use quality parts. We'll explain warranty coverage before any work begins, giving you complete peace of mind with your engine repair."
    }
];

export default function EngineRepairFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Engine Repair FAQ - Franklin Square, NY
                    </h2>
                    <p className="text-lg text-[var(--color-text-light)]">
                        Get answers to common questions about engine repair services at Everything Auto
                    </p>
                </div>
                
                <div className="space-y-4">
                    {engineRepairFAQs.map((faq, index) => (
                        <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-0">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between rounded-md transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-semibold text-[var(--color-text)] pr-4">
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-[var(--color-text-light)] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}