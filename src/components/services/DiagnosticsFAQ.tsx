import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const diagnosticsFAQs = [
    {
        question: "What does a check engine light mean?",
        answer: "A check engine light can indicate a wide range of issues, from a loose gas cap to a serious engine problem. At Everything Auto, our ASE-certified technicians use advanced OBD-II scanners to read the specific trouble codes from your car's computer, ensuring an accurate diagnosis instead of guesswork."
    },
    {
        question: "How much does a car diagnostic test cost in Franklin Square?",
        answer: "We offer comprehensive diagnostic services that are often more affordable than dealerships. The cost depends on the complexity, but we provide a clear estimate before starting. An accurate diagnosis saves you money by fixing the right problem the first time, preventing unnecessary repairs."
    },
    {
        question: "Why should I trust Everything Auto for vehicle diagnostics?",
        answer: "For over 17 years, we've invested in the latest diagnostic technology. Unlike parts stores that just read codes, we perform a full system analysis to pinpoint the root cause. Our digital inspections show you photos and data, so you see what we see, ensuring complete transparency."
    }
];

export default function DiagnosticsFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Auto Diagnostics FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {diagnosticsFAQs.map((faq, index) => (
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