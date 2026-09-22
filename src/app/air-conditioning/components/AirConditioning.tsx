"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import AirConditioningFAQ from '@/components/services/AirConditioningFAQ';

export default function AirConditioning() {
    return (
        <ServicePageLayout
            title="Air Conditioning Service"
            description="Stay cool with our professional A/C repair, recharge, and leak detection services in Franklin Square."
            imageUrl="https://images.unsplash.com/photo-1605301149635-f938a9d1e4e0?w=1200&h=600&fit=crop"
            serviceFAQ={<AirConditioningFAQ />}
        >
             <div className='min-h-[500px]'>
            <h2>Car A/C Repair in Long Island</h2>
            <p>
                Don&apos;t suffer through a hot New York summer with a broken air conditioner. The team at Everything Auto can quickly diagnose and repair any issue with your vehicle&apos;s A/C system.
            </p>
            <h3>Our A/C Services:</h3>
            <ul>
                <li><strong>A/C Performance Check:</strong> We test system pressures and vent temperature to assess its health.</li>
                <li><strong>Refrigerant Recharge:</strong> We can recharge your system with the correct type and amount of refrigerant.</li>
                <li><strong>Leak Detection:</strong> Using specialized UV dye and electronic sniffers, we can find and repair refrigerant leaks.</li>
                <li><strong>Component Replacement:</strong> We can replace faulty compressors, condensers, evaporators, and other A/C components.</li>
            </ul>
            </div>
        </ServicePageLayout>
    );
}