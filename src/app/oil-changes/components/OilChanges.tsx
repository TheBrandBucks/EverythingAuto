"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import OilChangesFAQ from '@/components/services/OilChangesFAQ';

export default function OilChanges() {
    return (
        <ServicePageLayout
            title="Oil Change Service"
            description="Fast and affordable oil change services in Franklin Square using conventional, synthetic-blend, and full synthetic oils."
            imageUrl="https://images.unsplash.com/photo-1606214959239-181a4473c544?w=1200&h=600&fit=crop"
            serviceFAQ={<OilChangesFAQ />}
        >
            <div className='min-h-[500px]'>
 <h2>Professional Oil Change Service in Franklin Square</h2>
            <p>
                Regular oil changes are the single most important maintenance you can perform to protect your engine and ensure a long vehicle life. At Everything Auto, we make it fast, easy, and affordable to get a high-quality oil change.
            </p>
            <h3>More Than Just an Oil Change</h3>
            <p>
                Every oil change at our shop includes:
            </p>
            <ul>
                <li>Draining the old engine oil and replacing it with top-quality oil that meets your manufacturer&apos;s specifications.</li>
                <li>Replacing the oil filter with a new, high-quality filter.</li>
                <li>A complimentary Digital Vehicle Inspection, where we check your tires, brakes, fluids, belts, and hoses to keep you informed about your car&apos;s health.</li>
            </ul>
            </div>
           
        </ServicePageLayout>
    );
}