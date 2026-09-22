import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const electricalFAQs = [
    {
        question: "What are signs of an electrical problem in my car?",
        answer: "Symptoms include dimming headlights, trouble starting the car, a battery that frequently dies, fuses that keep blowing, or the smell of burning plastic. If you notice any of these, it's crucial to get it checked by a professional at Everything Auto to prevent further damage."
    },
    {
        question: "Can you fix the wiring on any car model?",
        answer: "Yes. Modern vehicle electrical systems are incredibly complex, but our ASE-certified technicians are trained to handle wiring, sensor, and computer issues on all makes and models, from classic cars to the latest hybrids and EVs."
    },
    {
        question: "Why trust Everything Auto with my car's electrical system?",
        answer: "Electrical repairs require precision and expertise. A mistake can damage sensitive computer modules. Our technicians have over 17 years of experience and use specialized tools to safely diagnose and repair shorts, bad grounds, and parasitic draws, ensuring a reliable and safe fix."
    }
];

export default function ElectricalSystemsFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Electrical Systems FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {electricalFAQs.map((faq, index) => (
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