import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const suspensionFAQs = [
    {
        question: "How do I know if I have a suspension problem?",
        answer: "Common signs include a bouncy or rough ride, the vehicle pulling to one side, one corner of the car sitting lower than the others, or difficulty steering. If you feel every bump in the road, it's time for an inspection."
    },
    {
        question: "What parts are included in the suspension system?",
        answer: "The suspension system includes shocks, struts, coil springs, control arms, and ball joints. Steering components include the steering rack, tie rods, and power steering pump. We service and repair all of these components."
    },
    {
        question: "Why is a healthy suspension system important?",
        answer: "Your suspension doesn't just provide a comfortable ride; it's critical for safety. It keeps your tires planted on the road for optimal braking and handling. At Everything Auto, we ensure your suspension and steering systems are in top condition, giving you control and confidence behind the wheel."
    }
];

export default function SuspensionSteeringFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
                        Suspension & Steering FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {suspensionFAQs.map((faq, index) => (
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