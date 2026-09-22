import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const brakeServiceFAQs = [
    {
        question: "How do I know if my brakes need service in Franklin Square?",
        answer: "Warning signs include squealing or grinding noises, a soft or spongy brake pedal, your car pulling to one side when braking, or vibrations when stopping. At Everything Auto, our brake specialists provide thorough inspections and use our digital inspection system to show you exactly what needs attention with photos and explanations."
    },
    {
        question: "How much does brake service cost at Everything Auto?",
        answer: "Brake pad replacement typically costs $150-$300 per axle, while rotor replacement ranges from $200-$400 per axle. We provide transparent, upfront pricing with no hidden fees. Our digital inspection reports show you exactly what needs repair, helping you make informed decisions about your brake service."
    },
    {
        question: "Can Everything Auto service brakes on my vehicle make and model?",
        answer: "Yes! We service brakes on all makes and models including domestic, import, luxury, hybrid, and electric vehicles. Our ASE-certified technicians have the expertise and equipment to properly service your braking system. We're trusted by Nassau County residents for all brake repairs and maintenance."
    },
    {
        question: "How long does brake service take at Everything Auto?",
        answer: "Most brake pad replacements take 1-2 hours per axle. Rotor replacement or brake fluid flushes may take 2-3 hours. We always provide accurate time estimates upfront and keep you informed throughout the process. We understand the importance of getting you back on the road safely and quickly."
    },
    {
        question: "Why should I choose Everything Auto for brake service in Nassau County?",
        answer: "We're a family-owned shop with 17+ years of experience and over 5,000 satisfied customers. Our brake specialists use quality parts, provide transparent pricing, and offer comprehensive warranties. Our 5-star Google rating reflects our commitment to brake safety and honest service in Franklin Square."
    },
    {
        question: "Do you offer warranties on brake repair work?",
        answer: "Absolutely! We stand behind our brake work with comprehensive warranties on both parts and labor. We always guarantee our workmanship and use quality brake components. We'll explain warranty coverage before any work begins, giving you complete confidence in your brake service."
    }
];

export default function BrakeServiceFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Brake Service FAQ - Franklin Square, NY
                    </h2>
                    <p className="text-lg text-[var(--color-text-light)]">
                        Get answers to common questions about brake service at Everything Auto
                    </p>
                </div>
                
                <div className="space-y-4">
                    {brakeServiceFAQs.map((faq, index) => (
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