import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const wheelTireFAQs = [
    {
        question: "When should I get a wheel alignment?",
        answer: "You should get an alignment if you notice your car pulling to one side, uneven tire wear, or a crooked steering wheel. We also recommend an alignment check whenever you get new tires. Proper alignment extends tire life and improves fuel economy."
    },
    {
        question: "How do I know if I need new tires?",
        answer: "Key signs include tread depth below 2/32 of an inch (use the penny test), visible cracks in the sidewall, or bulges and blisters. Our technicians can perform a professional inspection to assess your tire health and safety."
    },
    {
        question: "Why should I choose Everything Auto for tire services?",
        answer: "We offer comprehensive tire services, including rotation, balancing, alignment, and sales. Unlike chain tire shops, we are a full-service repair facility. We ensure your new tires are installed correctly and that any underlying suspension issues causing uneven wear are also addressed."
    }
];

export default function WheelTireFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Wheel & Tire Service FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {wheelTireFAQs.map((faq, index) => (
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