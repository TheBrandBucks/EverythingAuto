"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import TransmissionFAQ from '@/components/services/TransmissionFAQ';

export default function Transmission() {
    return (
        <ServicePageLayout
            title="Transmission Repair"
            description="Expert automatic and manual transmission service, repair, and fluid changes in Franklin Square, NY."
            imageUrl="https://images.unsplash.com/photo-1616852362331-a6ce39f58a5c?w=1200&h=600&fit=crop"
            serviceFAQ={<TransmissionFAQ />}
        >
              <div className='min-h-[500px]'>
            <h2>Expert Transmission Services</h2>
            <p>
                The transmission is one of your vehicle&apos;s most complex and important components. At Everything Auto, our skilled technicians have the expertise to service and repair automatic and manual transmissions.
            </p>
            <h3>Our Transmission Services Include:</h3>
            <ul>
                <li><strong>Transmission Fluid Flush:</strong> We replace old, degraded fluid to prevent wear and tear and ensure smooth shifting.</li>
                <li><strong>Transmission Diagnostics:</strong> We can accurately diagnose issues causing slipping, hard shifts, or warning lights.</li>
                <li><strong>Minor Repairs & Adjustments:</strong> We can often fix issues with sensors, solenoids, or external components without a full rebuild.</li>
            </ul>
            </div>
        </ServicePageLayout>
    );
}