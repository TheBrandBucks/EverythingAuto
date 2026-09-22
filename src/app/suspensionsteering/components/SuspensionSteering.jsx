"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import SuspensionSteeringFAQ from '@/components/services/SuspensionSteeringFAQ';

export default function SuspensionSteering() {
    return (
        <ServicePageLayout
            title="Suspension & Steering"
            description="Smooth out your ride with our expert suspension and steering repair services, including shocks, struts, and wheel alignments."
            imageUrl="https://images.unsplash.com/photo-1628212913169-9c59560f7f5c?w=1200&h=600&fit=crop"
            serviceFAQ={<SuspensionSteeringFAQ />}
        >
            <div className='min-h-[500px]'>
            <h2>Expert Suspension and Steering Repair</h2>
            <p>
                Your vehicle&apos;s suspension and steering systems are key to a safe and comfortable ride. They absorb bumps in the road and give you precise control. At Everything Auto, we handle all types of suspension work.
            </p>
            <h3>Our Suspension Services:</h3>
            <ul>
                <li><strong>Shock and Strut Replacement:</strong> We replace worn shocks and struts to restore ride quality and handling.</li>
                <li><strong>Power Steering Repair:</strong> We fix leaks and replace faulty power steering pumps to make steering effortless.</li>
                <li><strong>Ball Joint and Tie Rod Replacement:</strong> These critical components are essential for safe steering and tire alignment.</li>
                <li><strong>Wheel Alignments:</strong> Proper alignment ensures safety, improves handling, and maximizes tire life.</li>
            </ul>
            </div>
        </ServicePageLayout>
    );
}