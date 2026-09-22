"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import EngineRepairFAQ from '@/components/services/EngineRepairFAQ';

export default function EngineRepair() {
    return (
        <ServicePageLayout
            title="Engine Repair"
            description="Expert engine diagnostics, repair, and maintenance for all vehicle makes and models in Franklin Square, NY."
            imageUrl="https://images.unsplash.com/photo-1543946207-639a6d96572e?w=1200&h=600&fit=crop"
            serviceFAQ={<EngineRepairFAQ />}
        >
            <h2>Comprehensive Engine Repair Services in Long Island</h2>
            <p>
                The engine is the heart of your vehicle, and its health is critical for performance, reliability, and safety. At Everything Auto in Franklin Square, our ASE-certified technicians specialize in comprehensive engine services, from routine maintenance to complex diagnostics and major repairs. We handle everything from check engine light diagnostics to complete engine overhauls.
            </p>
            <h3>Common Engine Problems We Solve</h3>
            <ul>
                <li><strong>Check Engine Light Diagnostics:</strong> Using advanced scanning tools, we accurately identify the cause of your check engine light, from a loose gas cap to a serious sensor issue.</li>
                <li><strong>Engine Overheating:</strong> We diagnose and repair issues with your cooling system, including radiators, thermostats, water pumps, and hoses to prevent catastrophic engine damage.</li>
                <li><strong>Lack of Power or Poor Performance:</strong> Our experts troubleshoot problems with fuel injection, ignition systems, and exhaust to restore your vehicle&apos;s performance.</li>
                <li><strong>Unusual Noises (Knocking, Ticking):</strong> We can pinpoint the source of engine noises, addressing issues with bearings, lifters, or timing belts before they become major failures.</li>
                <li><strong>Timing Belt and Chain Replacement:</strong> This is a critical maintenance item. We provide timing belt and chain replacement services to prevent severe engine damage.</li>
            </ul>
            <h3>Your Trusted Engine Repair Shop in Franklin Square</h3>
            <p>
                When you bring your car to Everything Auto for engine repair, you&apos;re trusting a team dedicated to quality and transparency. We proudly serve Franklin Square, Hempstead, Elmont, Garden City, and surrounding areas in Nassau County. We provide detailed explanations and transparent quotes before any work begins. Trust us to keep your engine running smoothly and reliably for years to come.
            </p>
        </ServicePageLayout>
    );
}