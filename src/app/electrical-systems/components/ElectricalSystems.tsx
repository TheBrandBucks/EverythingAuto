"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import ElectricalSystemsFAQ from '@/components/services/ElectricalSystemsFAQ';

export default function ElectricalSystems() {
    return (
        <ServicePageLayout
            title="Electrical System Repair"
            description="Expert diagnosis and repair for all automotive electrical issues, including wiring, batteries, alternators, and starters in Franklin Square."
            imageUrl="https://images.unsplash.com/photo-1581092916259-1f26e4177431?w=1200&h=600&fit=crop"
            serviceFAQ={<ElectricalSystemsFAQ />}
        >
            <h2>Advanced Electrical System Service</h2>
            <p>
                Your vehicle&apos;s electrical system is its nerve center, controlling everything from the engine computer to your power windows. At Everything Auto, our technicians are skilled in diagnosing and repairing even the most complex electrical problems.
            </p>
            <h3>Our Electrical Services Include:</h3>
            <ul>
                <li><strong>Battery Testing and Replacement:</strong> We test your battery, starter, and alternator to ensure your car starts reliably every time.</li>
                <li><strong>Wiring Repair:</strong> We can trace and repair faulty wiring, shorts, and bad grounds that cause intermittent issues.</li>
                <li><strong>Lighting Systems:</strong> From headlights and taillights to interior dome lights, we fix any lighting problems.</li>
                <li><strong>Power Accessories:</strong> We repair power windows, door locks, seats, and other electrical comfort features.</li>
            </ul>
        </ServicePageLayout>
    );
}