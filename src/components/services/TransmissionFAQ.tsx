import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const transmissionFAQs = [
    {
        question: "What are signs of transmission problems?",
        answer: "Common warning signs include difficulty shifting gears, slipping out of gear, a burning smell, leaking fluid (red or brown), or a whining/clunking noise. If you notice any of these, bring your car to Everything Auto immediately to prevent more severe damage."
    },
    {
        question: "How often do I need a transmission fluid change?",
        answer: "Most manufacturers recommend a transmission fluid flush every 30,000 to 60,000 miles. Clean fluid is essential for lubricating and cooling the transmission's internal parts. We can check your vehicle's specific recommendations and fluid condition."
    },
    {
        question: "Why should I trust Everything Auto for transmission service?",
        answer: "Transmission work is one of the most complex auto repairs. Our ASE-certified technicians have the specialized training and equipment to accurately diagnose and service both automatic and manual transmissions. We provide honest advice on whether a simple service or a more significant repair is needed."
    }
];

export default function TransmissionFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Transmission Service FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {transmissionFAQs.map((faq, index) => (
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