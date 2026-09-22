import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const oilChangeFAQs = [
    {
        question: "How often should I get an oil change?",
        answer: "It depends on your vehicle's age, type of oil, and driving habits. While the old rule was every 3,000 miles, many modern cars can go 5,000 to 7,500 miles or more. We can give you a personalized recommendation based on your car manufacturer's specs and our expert assessment."
    },
    {
        question: "What type of oil does my car need?",
        answer: "We offer conventional, synthetic-blend, and full synthetic oils. Full synthetic oil provides the best protection and performance, especially for modern engines. Our technicians will recommend the right type based on your vehicle's needs and your budget to ensure optimal engine health."
    },
    {
        question: "Why is a professional oil change at Everything Auto better than a quick lube place?",
        answer: "An oil change is more than just draining and filling. It's a vital health check. Our ASE-certified technicians perform a complimentary digital vehicle inspection with every oil change, checking tires, brakes, and fluids. This helps you catch small issues before they become expensive problems."
    }
];

export default function OilChangesFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Oil Change FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {oilChangeFAQs.map((faq, index) => (
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