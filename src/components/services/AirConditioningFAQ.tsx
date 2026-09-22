import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const acFAQs = [
    {
        question: "Why is my car's air conditioning blowing warm air?",
        answer: "The most common reason is low refrigerant (Freon), which usually indicates a leak in the system. Other causes could be a faulty compressor, a clogged condenser, or an electrical issue. Our technicians can perform a leak test and diagnose the exact problem."
    },
    {
        question: "How often should I have my A/C system serviced?",
        answer: "We recommend an A/C performance check annually, before the hot summer months. This allows us to catch small leaks or minor issues before they lead to a full system failure, saving you from an uncomfortable ride and costly repairs."
    },
    {
        question: "Why choose Everything Auto for A/C repair?",
        answer: "We are licensed to handle refrigerants safely and in an environmentally friendly way. Our technicians use specialized equipment to properly evacuate and recharge A/C systems, ensuring peak performance. We don't just 'top it off'—we find and fix the root cause of the problem."
    }
];

export default function AirConditioningFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        A/C Service FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {acFAQs.map((faq, index) => (
                        <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-0">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between rounded-md transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-semibold text-[var(--color-text)] pr-4">{faq.question}</h3>
                                    {openIndex === index ? <ChevronUp className="w-5 h-5 text-[var(--color-primary)]" /> : <ChevronDown className="w-5 h-5 text-[var(--color-primary)]" />}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-[var(--color-text-light)] leading-relaxed">{faq.answer}</p>
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