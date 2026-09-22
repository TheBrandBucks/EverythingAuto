"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import DiagnosticsFAQ from '@/components/services/DiagnosticsFAQ';

export default function Diagnostics() {
    return (
        <ServicePageLayout
            title="Auto Diagnostics"
            description="Advanced vehicle diagnostics in Franklin Square to accurately identify and fix any issue, from check engine lights to electrical problems."
            imageUrl="https://images.unsplash.com/photo-1617150032936-9d3b878b2443?w=1200&h=600&fit=crop"
            serviceFAQ={<DiagnosticsFAQ />}
        >
            <h2>Expert Check Engine Light Diagnostics in Long Island</h2>
            <p>
                A glowing check engine light can be stressful, indicating anything from a minor issue to a potentially serious problem. At Everything Auto, we take the guesswork out of auto repairs with our state-of-the-art diagnostic equipment and expert technicians. We provide accurate, reliable vehicle diagnostics for drivers throughout Franklin Square and Nassau County.
            </p>
            <h3>What Our Diagnostic Service Covers</h3>
            <p>
                Modern vehicles are complex systems of computers, sensors, and mechanical parts. Our diagnostic process involves more than just plugging in a scanner. We perform a full system analysis to pinpoint the exact cause of the problem.
            </p>
            <ul>
                <li><strong>Reading Trouble Codes:</strong> We use advanced OBD-II scanners to retrieve the diagnostic trouble codes (DTCs) from your vehicle&apos;s onboard computer.</li>
                <li><strong>Component Testing:</strong> Based on the codes, we perform tests on specific sensors, circuits, and systems to verify the fault.</li>
                <li><strong>Performance Analysis:</strong> We analyze live data from your vehicle&apos;s engine, transmission, and other systems to identify performance issues that may not trigger a specific code.</li>
                <li><strong>Comprehensive Repair Plan:</strong> Once we&apos;ve identified the root cause, we provide you with a clear, detailed explanation of the problem and a transparent quote for the necessary repairs.</li>
            </ul>
            <h3>Don&apos;t Ignore Your Check Engine Light</h3>
            <p>
                Ignoring a check engine light can lead to more significant and costly repairs down the road, reduced fuel efficiency, and even safety risks. If your check engine light is on, schedule a diagnostic appointment at Everything Auto in Franklin Square today.
            </p>
        </ServicePageLayout>
    );
}