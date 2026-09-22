import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const maintenanceFAQs = [
    {
        question: "What is preventative maintenance?",
        answer: "Preventative maintenance involves routine services like oil changes, tire rotations, fluid checks, and filter replacements. The goal is to keep your car running reliably and to catch small issues before they become major, expensive repairs."
    },
    {
        question: "How does preventative maintenance save me money?",
        answer: "By investing a small amount in regular upkeep, you can avoid catastrophic failures. For example, replacing a timing belt on schedule is far cheaper than repairing the major engine damage that occurs if it breaks while you're driving."
    },
    {
        question: "Why is Everything Auto the right choice for my car's maintenance?",
        answer: "We follow your vehicle manufacturer's recommended service intervals to maintain your warranty and ensure longevity. With every service, we provide a FREE digital vehicle inspection, giving you a comprehensive health report on your car so you can plan for future needs with no surprises."
    }
];

export default function PreventativeMaintenanceFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Preventative Maintenance FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {maintenanceFAQs.map((faq, index) => (
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