"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import PreventativeMaintenanceFAQ from '@/components/services/PreventativeMaintenanceFAQ';

export default function PreventativeMaintenance() {
    return (
        <ServicePageLayout
            title="Preventative Maintenance"
            description="Keep your car reliable and avoid costly repairs with our scheduled maintenance services in Franklin Square."
            imageUrl="https://images.unsplash.com/photo-1553754592-a694d6932760?w=1200&h=600&fit=crop"
            serviceFAQ={<PreventativeMaintenanceFAQ />}
        >
            <div className='min-h-[500px]'>
            <h2>Save Money with Routine Maintenance</h2>
            <p>
                The easiest way to avoid expensive auto repairs is to keep up with your vehicle&apos;s preventative maintenance schedule. At Everything Auto, we help you follow your manufacturer&apos;s recommendations to keep your car running like new.
            </p>
            <h3>Our Maintenance Services Include:</h3>
            <ul>
                <li><strong>Fluid Changes:</strong> Brake fluid, coolant, power steering fluid, and differential fluid.</li>
                <li><strong>Filter Replacements:</strong> Engine air filter, cabin air filter, and fuel filter.</li>
                <li><strong>Timing Belt Replacement:</strong> A critical service to prevent catastrophic engine failure.</li>
                <li><strong>Spark Plug Replacement:</strong> Essential for engine performance and fuel economy.</li>
            </ul>
            </div>
        </ServicePageLayout>
    );
}