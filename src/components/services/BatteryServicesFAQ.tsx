import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const batteryFAQs = [
    {
        question: "How do I know if I need a new car battery?",
        answer: "Signs of a failing battery include slow engine cranking, dim lights when the engine is off, a warning light on the dashboard, or the battery case appearing swollen. Car batteries typically last 3-5 years, so it's good to have it tested if it's in that age range."
    },
    {
        question: "Do you offer battery testing?",
        answer: "Yes, we offer professional battery and charging system tests. We can determine if your battery is still holding a proper charge and if your alternator is functioning correctly to keep it charged while you drive."
    },
    {
        question: "Why should I buy my battery from Everything Auto?",
        answer: "We ensure you get the correct battery size and type for your specific vehicle, which is crucial for modern cars with complex electronics. We'll install it professionally, clean the terminals, and properly recycle your old battery. This guarantees a reliable start every time."
    }
];

export default function BatteryServicesFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Battery Services FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {batteryFAQs.map((faq, index) => (
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