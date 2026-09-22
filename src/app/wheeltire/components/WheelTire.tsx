"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import WheelTireFAQ from '@/components/services/WheelTireFAQ';

export default function WheelTire() {
    return (
        <ServicePageLayout
            title="Wheel & Tire Services"
            description="Complete tire and wheel services in Franklin Square, including mounting, balancing, rotation, alignment, and flat repairs."
            imageUrl="https://images.unsplash.com/photo-1599252538977-f133595f68a3?w=1200&h=600&fit=crop"
            serviceFAQ={<WheelTireFAQ />}
        >
             <div className='min-h-[500px]'>
            <h2>Your One-Stop Shop for Tires and Wheels</h2>
            <p>
                Your tires are the only part of your car that touches the road. Proper tire maintenance is critical for safety, performance, and fuel efficiency. We offer a full range of tire services to keep you rolling smoothly.
            </p>
            <h3>Our Tire & Wheel Services:</h3>
            <ul>
                <li><strong>Tire Sales & Installation:</strong> We offer a wide selection of major tire brands to fit your vehicle and budget.</li>
                <li><strong>Tire Rotation & Balancing:</strong> Regular rotations promote even tread wear and extend the life of your tires. Balancing eliminates vibrations for a smoother ride.</li>
                <li><strong>Wheel Alignment:</strong> We perform precise two-wheel and four-wheel alignments to ensure your car drives straight and prevent premature tire wear.</li>
                <li><strong>Tire Repair:</strong> We can often repair punctures, saving you the cost of a new tire.</li>
            </ul>
            </div>
        </ServicePageLayout>
    );
}