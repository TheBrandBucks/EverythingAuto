import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const inspectionFAQs = [
    {
        question: "What's included in a NY State Inspection?",
        answer: "A NYS inspection includes a safety check (brakes, tires, lights, steering, seat belts, etc.) and an emissions test for most vehicles. We are an official, certified station qualified to perform both inspections to ensure your vehicle is safe and compliant with state law."
    },
    {
        question: "What happens if my car fails the inspection?",
        answer: "Don't worry. If your vehicle fails, we can handle most necessary repairs right here in our shop, often on the same day. We'll provide you with a clear report of what failed and a transparent quote for the repairs needed to pass."
    },
    {
        question: "Why get my inspection done at Everything Auto?",
        answer: "We offer fast, honest, and convenient inspections with no appointment necessary for most vehicles. Unlike inspection-only stations, we are a full-service repair shop. This means if an issue is found, we can fix it on-site, saving you time and the hassle of going to another mechanic."
    }
];

export default function NYStateInspectionFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        NY State Inspection FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {inspectionFAQs.map((faq, index) => (
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