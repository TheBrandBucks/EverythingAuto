import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Calendar, CheckCircle, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils/createPageUrl';
import { usePathname } from 'next/navigation';
import FAQSection from '../common/FAQSection';

const otherServices = [
    { name: "Engine Repair", path: "EngineRepair" },
    { name: "Brake Service", path: "BrakeService" },
    { name: "Diagnostics", path: "Diagnostics" },
    { name: "Electrical Systems", path: "ElectricalSystem" },
    { name: "Oil Changes", path: "OilChanges" },
    { name: "Wheel & Tire", path: "WheelTire" },
    { name: "Transmission", path: "Transmission" },
    { name: "Air Conditioning", path: "AirConditioning" },
    { name: "Preventative Maintenance", path: "PreventativeMaintenance" },
    { name: "Battery Services", path: "BatteryServices" },
    { name: "NY State Inspection", path: "NYStateInspection" },
    { name: "Suspension & Steering", path: "SuspensionSteering" }
];
import { ReactNode } from "react";
interface ServicePageLayoutProps {
    title: string;
    description: string;
    imageUrl: string;
    children: ReactNode;
    serviceFAQ?: any; // yaha proper type daalna hoga agar pata ho
}
export default function ServicePageLayout({
    title,
    description,
    imageUrl,
    children,
    serviceFAQ,
}: ServicePageLayoutProps) {
    const pathname = usePathname();
    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section data-scroll-hero className="relative flex min-h-[430px] items-center overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.94) 0%, rgba(2, 6, 23, 0.72) 52%, rgba(2, 6, 23, 0.38) 100%), url(${imageUrl})` }}>
                <div data-scroll-hero-content className="relative mx-auto w-full max-w-screen-2xl px-6 pt-32 pb-20 will-change-transform sm:px-10 lg:px-20 lg:pt-36">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
                            <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                            Everything Auto service center
                        </div>
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">{title}</h1>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{description}</p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="action-button action-button-book flex w-full items-center justify-center px-6 py-4 text-lg sm:w-auto sm:px-8">
                                    <Calendar className="h-5 w-5" />
                                    Book Appointment
                                </Button>
                            </a>
                            <a href="tel:516-775-9724" className="w-full sm:w-auto">
                                <Button size="lg" className="action-button action-button-call flex w-full items-center justify-center px-6 py-4 text-lg sm:w-auto sm:px-8">
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
                <div className="grid items-start gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-8 lg:col-span-2 lg:p-10">
                        <article className="prose max-w-none text-[var(--color-text-light)] prose-headings:tracking-tight prose-h2:text-[var(--color-text)] prose-h3:text-[var(--color-text)] prose-strong:text-[var(--color-text)] prose-p:text-base sm:prose-p:text-lg">
                            {children}

                            {/* CTA Box */}
                            <div className="not-prose mt-10 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 via-white to-slate-50 p-5 text-center shadow-inner sm:p-8">
                                <h3 className="mb-3 text-xl font-black text-slate-950 sm:text-2xl">
                                    Ready for Expert Service?
                                </h3>
                                <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
                                    Schedule your appointment online or give us a call. Our team is ready to provide the 5-star service your vehicle deserves.
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
                                    <a
                                        href="https://myalp.io/nqc45n"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <Button
                                        style={{
                        boxShadow:
                          "inset 0 -2px 5px rgba(249, 195, 195, 0.65), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                      }}
                                            size="lg"
                                            className="action-button action-button-book w-full items-center px-4 py-2 text-sm md:text-sm xl:px-4 xl:py-3 xl:text-sm 2xl:px-6 2xl:text-base"
                                        >
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Book Your Appointment
                                        </Button>
                                    </a>
                                    <a href="tel:516-775-9724" className="w-full sm:w-auto">
                                        <Button
                                            size="lg"
                                            className="action-button action-button-call w-full items-center px-4 py-2 text-sm md:text-sm xl:px-4 xl:py-3 xl:text-sm 2xl:px-6 2xl:text-base"
                                        >
                                            <Phone className="w-5 h-5 mr-2" />
                                            (516) 775-9724
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>


                    {/* Sidebar */}
                    <aside className="space-y-6 lg:space-y-8">
                        {/* CTA Card */}
                        <Card className="overflow-hidden rounded-2xl border-0 bg-gradient-to-b from-blue-800 to-slate-900 text-white shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl lg:text-2xl text-white">Schedule Your Service</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-blue-100">Get expert {title.toLowerCase()} from our ASE-certified technicians.</p>
                                <a href="tel:516-775-9724" className="block">
                                    <Button
                                        style={{
                                            boxShadow:
                                                "inset 0 -2px 5px rgba(249, 195, 195, 0.65), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                                        }}
                                        size="lg" className="action-button action-button-call w-full py-6 font-semibold text-base lg:text-lg">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us Now
                                    </Button>
                                </a>
                                <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer" className="block">
                                    <Button
                                        style={{
                                            boxShadow:
                                                "inset 0 -2px 5px rgba(138, 193, 252, 0.75), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                                        }}
                                        size="lg" className="action-button action-button-book w-full py-6 font-semibold text-base lg:text-lg">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book Appointment
                                    </Button>
                                </a>

                            </CardContent>
                        </Card>

                        {/* Why Choose Us Card */}
                        <Card className="rounded-2xl border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.07)]">
                            <CardHeader>
                                <CardTitle className="text-xl lg:text-2xl text-[var(--color-text)]">Why Choose Us?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Shield className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-text)]">ASE Certified Technicians</h4>
                                        <p className="text-sm text-[var(--color-text-light)]">Expertise you can trust for all makes and models.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-text)]">Transparent Pricing</h4>
                                        <p className="text-sm text-[var(--color-text-light)]">No hidden fees, just honest assessments.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Wrench className="w-6 h-6 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-text)]">Advanced Diagnostics</h4>
                                        <p className="text-sm text-[var(--color-text-light)]">State-of-the-art equipment for accurate repairs.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Other Services */}
                        <Card className="rounded-2xl border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.07)]">
                            <CardHeader>
                                <CardTitle className="text-lg lg:text-xl">Other Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {otherServices.filter(service => {
                                        
                                        const serviceUrl = createPageUrl(service.path);
                                        return pathname !== serviceUrl;
                                     })
                                     .map(service => (
                                        <li key={service.path}>
                                            <Link href={createPageUrl(service.path)} className="text-[var(--color-primary)] hover:underline font-semibold text-sm lg:text-base">
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>

            {/* Service-Specific FAQ */}
            {serviceFAQ && serviceFAQ}

            {/* General FAQ Section */}
            <FAQSection />
        </div>
    );
}