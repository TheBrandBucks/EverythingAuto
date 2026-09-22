"use client";
import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import { Check, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NYStateInspectionFAQ from '@/components/services/NYStateInspectionFAQ';

export default function NYStateInspection() {
    return (
        <ServicePageLayout
            title="NY State Inspection"
            description="Official New York State vehicle inspection station in Franklin Square. We provide fast, thorough, and reliable safety and emissions inspections for all makes and models."
            imageUrl="https://images.unsplash.com/photo-1521790797524-220049ea3697?w=1200&h=600&fit=crop"
            serviceFAQ={<NYStateInspectionFAQ />}
        >
            <h2>Looking for a New York State Inspection near you?</h2>
            <p>
                You&apos;ve found the most trusted inspection station in Nassau County. At Everything Auto, we&apos;re a certified NYS Inspection Station offering fast, hassle-free vehicle inspections for all makes and models, both gas and electric.
            </p>

            <h3>What Is an NYS Inspection?</h3>
            <p>
                All vehicles registered in New York State are required to pass an annual safety and emissions inspection. This inspection helps ensure your car is roadworthy, safe to drive, and not emitting harmful pollutants. At Everything Auto, we perform both safety and emissions inspections on-site, with no appointment needed in most cases. <strong>Walk-ins are welcome!</strong>
            </p>

            <h3>What’s Checked During a New York State Inspection?</h3>
            <p>
                We follow all official NYS DMV guidelines, checking critical systems and components, including:
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 my-6">
                <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">✅ Safety Inspection:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Brakes (condition & performance)</li>
                        <li>Tires, wheels & tread depth</li>
                        <li>Steering & suspension systems</li>
                        <li>Lights, signals & reflectors</li>
                        <li>Windshield wipers & washers</li>
                        <li>Mirrors, horn & seat belts</li>
                        <li>Emergency/parking brake</li>
                        <li>Body & chassis condition (rust, sharp edges)</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">🌿 Emissions Inspection:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li>OBD-II diagnostics (for 1996+ vehicles)</li>
                        <li>Gas cap & vapor system integrity</li>
                        <li>Emissions-related codes or check engine lights</li>
                        <li>Tailpipe emissions (older vehicles)</li>
                        <li>EV/hybrid system readiness (if applicable)</li>
                    </ul>
                </div>
            </div>

            <h3>How Long Does an Inspection Take?</h3>
            <p>
                Most inspections at Everything Auto are completed in <strong>15–30 minutes</strong>. We understand your time is valuable, so we offer a clean, comfortable waiting area and quick turnaround times.
            </p>

            <Card className="bg-blue-50 border-l-4 border-blue-500 my-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-blue-800">Why Choose Everything Auto for Your NYS Inspection?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {[
                            "Official NYS-Certified Station",
                            "Located in Franklin Square – close to West Hempstead, Elmont, Garden City, and Valley Stream",
                            "Same-day inspections – no appointment needed",
                            "We inspect all vehicles – sedans, SUVs, trucks, EVs, hybrids, luxury cars, commercial vehicles",
                            "We fix what fails — on the spot (in most cases)",
                            "Fair pricing, honest service, and fast results",
                            "Family-owned shop trusted by the community for over 15 years"
                        ].map(item => (
                            <li key={item} className="flex items-start">
                                <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <h3>What Happens If You Fail Inspection?</h3>
            <p>
                Don’t worry. If your vehicle doesn’t pass, our experienced technicians can repair most issues in-house, often on the same day. Whether it’s a faulty sensor, worn brakes, or a cracked windshield, we’ll explain what’s wrong, give you an honest estimate, and get you back on the road.
            </p>

            <h3>When Is My NYS Inspection Due?</h3>
            <p>
                Your inspection is due once every 12 months or upon vehicle registration renewal. If you&apos;re not sure when your last inspection was, call us now — we&apos;ll help you check!
            </p>
            
            <h3>Serving All of Nassau County</h3>
            <p>
                We’re proud to be the go-to NYS inspection station in Franklin Square, serving customers from Elmont, Garden City, West Hempstead, Hempstead, Valley Stream, Mineola, and beyond.
            </p>

            <div className="mt-10 p-6 bg-gray-100 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Get Inspected?</h3>
                <p className="text-lg text-gray-600 mb-6">Call now or stop by Everything Auto today. No stress, no waiting weeks for an appointment — just fast, professional service from the shop your neighbors trust.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-left">
                     <a href="tel:516-775-9724" className="w-full sm:w-auto">
                        <Button size="lg" className="btn-accent w-full font-bold">
                            <Phone className="w-5 h-5 mr-2" />
                            (516) 775-9724
                        </Button>
                     </a>
                     <a href="https://www.google.com/maps/place/980+Washington+St,+Franklin+Square,+NY+11010" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full font-bold">
                            <MapPin className="w-5 h-5 mr-2" />
                            Get Directions
                        </Button>
                     </a>
                </div>
                 <p className="text-sm text-gray-600 mt-4"><Clock className="inline w-4 h-4 mr-1"/>Mon–Sat 8am to 6pm | Walk-ins Welcome</p>
            </div>
        </ServicePageLayout>
    );
}