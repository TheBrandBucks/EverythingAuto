"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import BatteryServicesFAQ from '@/components/services/BatteryServicesFAQ';

export default function BatteryServices() {
    return (
        <ServicePageLayout
            title="Battery Services"
            description="Professional car battery testing, replacement, and charging system diagnostics in Franklin Square."
            imageUrl="https://images.unsplash.com/photo-1620027582885-78c6686a6352?w=1200&h=600&fit=crop"
            serviceFAQ={<BatteryServicesFAQ />}
        >
            <div className='min-h-[500px]'>
            <h2>Reliable Car Battery Replacement</h2>
            <p>
                Your car&apos;s battery is the starting point for every journey. If you&apos;re having trouble starting your car, let our experts test your battery and entire charging system to find the problem.
            </p>
            <h3>Our Battery and Charging System Services:</h3>
            <ul>
                <li><strong>Free Battery Testing:</strong> We&apos;ll test your battery&apos;s health and let you know how much life it has left.</li>
                <li><strong>Battery Replacement:</strong> We stock high-quality batteries and will install the correct one for your vehicle.</li>
                <li><strong>Alternator & Starter Testing:</strong> We can diagnose issues with your alternator (which charges the battery) and your starter motor.</li>
            </ul>
            </div>
        </ServicePageLayout>
    );
}