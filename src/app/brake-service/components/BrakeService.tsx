"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import BrakeServiceFAQ from '@/components/services/BrakeServiceFAQ';

export default function BrakeService() {
    return (
        <ServicePageLayout
            title="Brake Service & Repair"
            description="Professional brake inspections, repair, and replacement services in Franklin Square to ensure your vehicle's safety."
            imageUrl="https://images.unsplash.com/photo-1579758694269-a6e395721c40?w=1200&h=600&fit=crop"
            serviceFAQ={<BrakeServiceFAQ />}
        >
            <h2>Reliable Brake Repair in Franklin Square, NY</h2>
            <p>
                Your vehicle&apos;s braking system is its most important safety feature. At Everything Auto, we provide comprehensive brake services to ensure you and your passengers are safe on the road. Our experienced technicians in Franklin Square are equipped to handle all aspects of brake maintenance and repair for any make and model.
            </p>
            <h3>Our Brake Services Include:</h3>
            <ul>
                <li><strong>Brake Pad Replacement:</strong> We replace worn brake pads with high-quality parts to restore stopping power and prevent damage to rotors.</li>
                <li><strong>Brake Rotor Resurfacing & Replacement:</strong> We can resurface or replace warped or worn brake rotors to eliminate vibrations and ensure smooth braking.</li>
                <li><strong>Brake Fluid Flush:</strong> Regular brake fluid flushes are essential to remove contaminants and maintain hydraulic pressure, preventing brake failure.</li>
                <li><strong>Brake Caliper and Hose Inspection/Replacement:</strong> We inspect for leaks and wear, replacing faulty calipers, hoses, and lines to ensure system integrity.</li>
                <li><strong>Anti-lock Brake System (ABS) Diagnostics:</strong> If your ABS light is on, our technicians can diagnose and repair the issue, ensuring your anti-lock brakes function correctly in emergencies.</li>
            </ul>
            <h3>Signs You Need Brake Service</h3>
            <p>
                Don&apos;t ignore the warning signs of failing brakes. If you experience a squealing or grinding noise, a soft or spongy brake pedal, your car pulling to one side when braking, or vibrations, contact us immediately. For trusted brake repair in Franklin Square and Long Island, look no further than Everything Auto.
            </p>
        </ServicePageLayout>
    );
}