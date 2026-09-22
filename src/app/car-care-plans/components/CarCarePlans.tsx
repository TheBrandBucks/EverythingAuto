"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PDFDocument} from "pdf-lib"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  CheckCircle,
  Shield,
  Car,
  Wrench,
  Crown,
  Star,
  Award,
  Gem,
  Phone,
  Zap,
  TrendingUp,
  Users,
  Download,
  Loader2
} from "lucide-react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion"
import  {fadeIn}  from '@/utils/motion';
import * as Dialog from "@radix-ui/react-dialog";
import { createPaymentIntent } from "@/http/api";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import GoogleReviews from "@/app/(home)/components/GoogleReviews";

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

  const PaymentForm: React.FC<{ clientSecret: string; processing: boolean; setProcessing: (v: boolean) => void; onClose: () => void; }> = ({ clientSecret, processing, setProcessing, onClose }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardholderName, setCardholderName] = useState("");
    const [line1, setLine1] = useState("");
    const [city, setCity] = useState("");
    const [stateRegion, setStateRegion] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");

    
    
    const handlePay = async () => {
      if (!stripe || !elements || !clientSecret) return;
      setProcessing(true);
      try {
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardNumberElement)!,
            billing_details: {
              name: cardholderName || undefined,
              address: {
                line1: line1 || undefined,
                city: city || undefined,
                state: stateRegion || undefined,
                postal_code: postalCode || undefined,
                country: country || undefined,
              },
            },
          },
        });
        if (result.error) {
          alert(result.error.message);
          return;
        }
        if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
          onClose();
          alert('Payment successful. Thank you!');
        }
      } finally {
        setProcessing(false);
      }
    };
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <input className="border rounded p-2" placeholder="Cardholder name" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
          <input className="border rounded p-2" placeholder="Address line 1" value={line1} onChange={(e) => setLine1(e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <input className="border rounded p-2" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <input className="border rounded p-2" placeholder="State / Region" value={stateRegion} onChange={(e) => setStateRegion(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input className="border rounded p-2" placeholder="Postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            <input className="border rounded p-2" placeholder="Country (e.g., US)" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="border rounded p-2"><CardNumberElement options={{ placeholder: 'Card number' }} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded p-2"><CardExpiryElement options={{ placeholder: 'MM / YY' }} /></div>
            <div className="border rounded p-2"><CardCvcElement options={{ placeholder: 'CVC' }} /></div>
          </div>
        </div>
        <Button disabled={processing || !clientSecret} onClick={handlePay} className="w-full">
          {processing ? 'Processing...' : 'Pay Now'}
        </Button>
      </div>
    );
  };
type Plan = {
  id: number;
  name: string;
  monthly_price: number;
  yearly_price: number;
  is_popular:boolean;
  description: string;
  features: string[];
};
interface PlanCardProps {
  plan: Plan;
  index: number;
}

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-7 h-7 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };
export default function CarCarePlans() {
 const [plans, setPlans] = useState<Plan[]>([]);
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        // Mock data for car care plans
        const mockPlans = [
          {
            id: 1,
            name: "Essential",
            monthly_price: 5,
            yearly_price: 60,
            description: "Basic maintenance coverage for budget-conscious drivers",
            is_popular:false,
            features: [
              "Unlimited NY State Inspections (reg. $37 each!)",
              "Free Warning Light & Check Engine Light Scans",
              "Battery Charging & Basic Battery Testing",
              "Free Air Pressure Checks + Tire Inspection",
              "$20 OFF Any Tire Plug or Light Bulb Replacement",
              "$20 Discount Toward Any Oil Change",
              "FREE DIGITAL Multi-Point Vehicle Inspection Every Visit",
              "Early Access to Promo Deals & Upgrade Discounts",
              "🚨 LIMITED BONUS: First oil change only $49.99 (MSRP $89+)"
            ]
          },
          {
            id: 2,
            name: "Basic",
            monthly_price: 20,
            yearly_price: 200,
            description: "Comprehensive coverage for daily drivers",
            is_popular:false,
            features: [
              "Includes all services in the Essential Plan",
              "Unlimited tire plugs & tire discounts",
              "Unlimited light bulb replacements",
              "Free battery charging & testing",
              "1 synthetic blend oil change per year",
              "Unlimited wiper blade replacements",
              "Unlimited New York State Inspections",
              "Unlimited battery maintenance services",
              "Free Multi-Point Inspections every visit",
              "Unlimited Tire Rotations (every 10k miles)",
              "Free check engine light & warning light scans",
              "$10 Service Deductible on All Above Repairs"
            ]
          },
          {
            id: 3,
            name: "Bronze",
            monthly_price: 50,
            yearly_price: 500,
            description: "Enhanced protection for family vehicles",
            is_popular:true,
            features: [
              "Includes all services in the Basic Plan",
              "1 Full Synthetic oil change per year",
              "Air filter changes every year",
              "Cabin filter changes every year",
              "Unlimited Brake lubrication & grease",
              "Free brake inspections & adjustments",
              "Unlimited diagnosis of any problem",
              "Fluid flushes: Anti-freeze coolant, Hydraulic, Power steering fluid, and engine flush yearly",
              "$20 deductible on all jobs listed in this plan",
              "12-month or 12,000-mile warranty on parts"
            ]
          },
          {
            id: 4,
            name: "Silver",
            monthly_price: 150,
            yearly_price: 1500,
            description: "Premium coverage for luxury vehicles",
            is_popular:false,
            features: [
              "Includes all services in the Basic & Bronze Plan",
              "Two Full Synthetic oil changes per year",
              "TPMS (Tire Pressure Monitoring System) sensor service & full sensor coverage",
              "Fuel injection cleaning service",
              "Drive belt replacement",
              "Free Unlimited alignments",
              "Transmission fluid flush every 2 years",
              "Brake hydraulic system service every 2 years",
              "$60 deductible only on jobs listed in this plan"
            ]
          },
          {
            id: 5,
            name: "Gold",
            monthly_price: 250,
            yearly_price: 2500,
              description: "Ultimate protection for high-performance vehicles",
              is_popular:false,
            features: [
              "Includes all services from Silver Plan",
              "Drive bearing service",
              "Timing belt replacements",
              "Steering & Suspension components",
              "Water pump & cooling fan coverage",
              "Ignition system (ignition coils & spark plugs)",
              "Exhaust system (excluding catalytic converters)",
              "Full belt system drive belt, tensioners etc.",
              "1 annual car detailing (wash, buff & compound)",
              "Full fuel system Fuel pump, fuel injectors etc.",
              "Electronic computer controlled sensors covered",
              "Coverage for transmission components",
              "Coverage for engine components",
              "Air conditioning system coverage",
              "4x4 transfer cases & differential coverage",
              "Brake pads & brake rotors covered",
              "Roadside assistance within 5 miles",
              "Towing service up to 15 miles",
              "$100 deductible on work listed in this plan",
              "24-month or 24,000-mile warranty on parts"

            ]
          },
          {
            id: 6,
            name: "VIP",
            monthly_price: 499,
            yearly_price: 5000,
            description: "Exclusive coverage for premium vehicles",
            is_popular:false,
            features: [
              "Includes all services from all other plans",
              "No deductible & Minimum 10% Discount",
              "Loaner vehicle (whenever required)",
              "Top-tier detailing & cleaning services anytime",
              "Premium Interior coverage for wear & tear",
              "Roadside assistance within 10 miles",
              "Towing service up to 15 miles",
              "50 State Nationwide towing coverage",
              "FULL vehicle coverage (Everything excluding catalytic converters, paint, body panels, and/or anything attached to the exterior of the vehicle)",
              "Access to priority service & expedited part sourcing & Nation-wide shipping FREE!",
              "Unlimited warranty on parts & labor for the duration of the consistent subscription",
              "Unlimited DIGITAL vehicle inspections to assess the condition of the vehicle & prevent future issues!",
              "EXCLUSIVE Concierge team of Auto Professionals, responsible for every facet of your vehicle's upkeep & repair needs."
            ]
          }
        ];
        setPlans(mockPlans);
      } catch (err) {
        console.error('Failed to load plans:', err);
      } finally {
        setLoading(false);
      }
    };
    init();
    
  }, []);
  
  const handleDownloadBrochure = async () => {
    try {
      // Fetch both PNG images from /public
      const img1Bytes = await fetch("/file1.png").then((res) => res.arrayBuffer());
      const img2Bytes = await fetch("/file2.png").then((res) => res.arrayBuffer());
  
      // Create new PDF
      const pdfDoc = await PDFDocument.create();
  
      // Embed images
      const img1 = await pdfDoc.embedPng(img1Bytes);
      const img2 = await pdfDoc.embedPng(img2Bytes);
  
      // Add first page with image1
      const page1 = pdfDoc.addPage([img1.width, img1.height]);
      page1.drawImage(img1, {
        x: 0,
        y: 0,
        width: img1.width,
        height: img1.height,
      });
  
      // Add second page with image2
      const page2 = pdfDoc.addPage([img2.width, img2.height]);
      page2.drawImage(img2, {
        x: 0,
        y: 0,
        width: img2.width,
        height: img2.height,
      });
  
      // Save PDF
      const pdfBytes = await pdfDoc.save();
  
      // Create blob and download
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "images.pdf";
      link.click();
    } catch (error) {
      console.error("Error creating PDF:", error);
    }
  };

  const onSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setOpen(true);
    (async () => {
      try {
        const amount = billingPeriod === 'monthly' ? plan.monthly_price : plan.yearly_price;
        const { data } = await createPaymentIntent({
          planId: plan.id,
          planName: plan.name,
          amountCents: Math.round(amount * 100),
          interval: billingPeriod === 'monthly' ? 'month' : 'year',
          currency: 'usd',
        });
        setClientSecret(data?.clientSecret || null);
      } catch (e) {
        console.error('Failed to init payment', e);
        setClientSecret(null);
      }
    })();
  };

  const  PlanCard: React.FC<PlanCardProps> = ({ plan, index }) =>  {
    const getIcon = (planName: any) => {
        switch(planName) {
            case 'Essential': return <Shield className="w-8 h-8 text-white"/>;
            case 'Basic': return <Wrench className="w-8 h-8 text-white"/>;
            case 'Bronze': return <Shield className="w-8 h-8 text-white"/>;
            case 'Silver': return <Star className="w-8 h-8 text-white"/>;
            case 'Gold': return <Award className="w-8 h-8 text-white"/>;
            case 'VIP': return <Gem className="w-8 h-8 text-white"/>;
            default: return <Car className="w-8 h-8 text-white"/>;
        }
    };

    const getPlanColors = (planName:any) => {
        switch(planName) {
            case 'Essential': return {
                gradient: 'from-green-500 to-emerald-600',
                accent: 'bg-green-500',
                text: 'text-green-800',
                border: 'border-green-400'
            };
            case 'Basic': return {
                gradient: 'from-blue-500 to-blue-600',
                accent: 'bg-blue-500',
                text: 'text-blue-800',
                border: 'border-blue-400'
            };
            case 'Bronze': return {
                gradient: 'from-orange-500 to-amber-600',
                accent: 'bg-orange-500',
                text: 'text-orange-800',
                border: 'border-orange-400'
            };
            case 'Silver': return {
                gradient: 'from-gray-500 to-slate-600',
                accent: 'bg-gray-500',
                text: 'text-gray-800',
                border: 'border-gray-400'
            };
            case 'Gold': return {
                gradient: 'from-yellow-500 to-amber-500',
                accent: 'bg-yellow-500',
                text: 'text-yellow-800',
                border: 'border-yellow-400'
            };
            case 'VIP': return {
                gradient: 'from-purple-600 to-indigo-700',
                accent: 'bg-purple-600',
                text: 'text-purple-800',
                border: 'border-purple-400'
            };
            default: return {
                gradient: 'from-blue-500 to-blue-600',
                accent: 'bg-blue-500',
                text: 'text-blue-800',
                border: 'border-blue-400'
            };
        }
    };

    const isEssential = plan.name === 'Essential';
    const isVIP = plan.name === 'VIP';
    const colors = getPlanColors(plan.name);
    // Ensure monthly_price is not zero to prevent division by zero
    const yearlyDiscount = plan.monthly_price > 0 
        ? Math.round(((plan.monthly_price * 12 - plan.yearly_price) / (plan.monthly_price * 12)) * 100)
        : 0;

    return (
       <div 
  className="flex h-full flex-col transition-all duration-500 hover:-translate-y-2"
 
>
    
<Card className="relative m-0 flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.16)]">

    {/* Gradient Header with Shine Animation */}
  <div className={`relative h-56 overflow-hidden bg-gradient-to-r ${colors.gradient} p-5 text-center text-white`}>
    {/* Overlay Shine Effect */}
    {/* <div className="absolute inset-0 bg-black/10"></div> */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 bg-[length:200%_100%] animate-[shine_3s_linear_infinite]" />
    
    <div className="relative z-10">
        <div className="border-2 w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
            {getIcon(plan.name)}
        </div>
        <h3 className="text-2xl font-bold mb-2 drop-shadow-sm text-gray-700">{plan.name} Plan</h3>
        <p className="text-white/90 text-md h-10">{plan.description}</p>
    </div>
</div>

    <CardContent className="flex flex-grow flex-col p-5 pt-6">
        
        {/* Popular / Essential Badge */}
        {plan?.is_popular && (
            <div className="mb-1 text-center">
                <Badge className={`${colors.accent} text-white px-1 pt-1 py-0 text-sm font-semibold shadow-lg animate-bounce`}>
                    {isEssential ? 'ONLINE EXCLUSIVE' : 'MOST POPULAR'}
                </Badge>
            </div>
        )}

        {/* VIP Highlight */}
        {isVIP && (
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-300 rounded-xl shadow-inner">
                <div className="text-center">
                    <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 text-sm font-bold mb-3 animate-pulse">
                        🌟 PREMIUM COVERAGE 🌟
                    </Badge>
                    <p className="text-purple-900 font-bold text-lg leading-tight">
                        <span className="bg-yellow-300 px-2 py-1 rounded shadow">FULL VEHICLE COVERAGE</span>
                    </p>
                    <p className="text-purple-800 text-sm mt-2 font-semibold">
                        Everything excluding catalytic converters, paint, body panels, and/or anything attached to the exterior of the vehicle
                    </p>
                </div>
            </div>
        )}

        {/* Pricing */}
        <div className="text-center mb-8">
            <div className="flex items-baseline justify-center mb-2">
                <span className="text-2xl font-bold text-gray-900">
                    ${billingPeriod === 'monthly' ? plan.monthly_price : plan.yearly_price}
                </span>
                <span className="text-2xl text-gray-600 ml-2">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                </span>
            </div>

            {billingPeriod === 'yearly' && yearlyDiscount > 0 && (
              <div className="flex flex-col items-center justify-center mb-0 space-y-1">
  <Badge variant="outline" className="text-green-600 border-green-600">
    Save {yearlyDiscount}%
  </Badge>
  <span className="text-sm text-gray-500 line-through">
    ${plan.monthly_price * 12}/year
  </span>
</div>

            )}
            
            {isEssential && (
                <Badge className="bg-green-100 text-green-800 font-semibold shadow-sm">
                    Cancel Anytime!
                </Badge>
            )}
        </div>

        {/* Features List with Glow */}
        {/* Use a fixed height and overflow to prevent layout shifts */}
        <ul className="mb-8 flex-grow space-y-3 overflow-y-auto px-1">
            {Array.isArray(plan.features) && plan.features.map((feature:any, i:any) => (
                <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 animate-pulse" />
                    <span className={`text-sm leading-6 text-slate-700 ${feature.includes('🚨') ? 'font-semibold text-orange-600' : ''}`}>
                        {feature}
                    </span>
                </li>
            ))}
        </ul>

        {/* CTA Button */}
        <div className="space-y-3 mt-auto">
    <Button
      onClick={() => onSelectPlan(plan)}
      className={`w-full rounded-full border-0 bg-gradient-to-r py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${colors.gradient} ${isEssential ? 'animate-pulse hover:animate-none' : ''}`}
    >
      {isEssential ? '' : <Phone className="w-5 h-5 mr-2" />}
      {isEssential ? 'JOIN ONLINE EXCLUSIVE' : 'ENROLL NOW'}
    </Button>
  <p className="text-center text-sm text-gray-500">
  Call{" "}
  <a
    href="tel:516-775-9724"
    className="text-blue-600 hover:underline font-medium"
  >
    (516) 775-9724
  </a>{" "}
  to get started
</p>

</div>
    </CardContent>

    {/* Decorative Bubbles */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
</Card>

  {/* Keyframes for Shine Effect
  <style jsx>{`
    @keyframes shine {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `}</style> */}
</div>

    );
  };

  if (loading) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">Loading our amazing car care plans...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
          <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Add Payment Method</h3>
              <Dialog.Close className="text-gray-500">✕</Dialog.Close>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-gray-700">
                {selectedPlan ? (
                  <>
                    <div className="font-semibold">{selectedPlan.name} Plan</div>
                    <div>
                      {billingPeriod === 'monthly' ? 'Monthly' : 'Yearly'} price: $
                      {billingPeriod === 'monthly' ? selectedPlan.monthly_price : selectedPlan.yearly_price}
                    </div>
                  </>
                ) : null}
              </div>
              {clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <PaymentForm clientSecret={clientSecret} processing={processing} setProcessing={setProcessing} onClose={() => setOpen(false)} />
                </Elements>
              ) : (
                <div className="text-sm text-gray-500">Initializing payment...</div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
        {/* Hero Section */}
            <section data-scroll-hero className="relative flex min-h-[560px] items-center overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: "linear-gradient(90deg, rgba(2, 6, 23, 0.94) 0%, rgba(2, 6, 23, 0.72) 48%, rgba(2, 6, 23, 0.38) 100%), url('/workshop.jpg')" }}>
  {/* Overlays */}
  {/* <div className="absolute inset-0 bg-black/20"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div> */}

  <div data-scroll-hero-content className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pt-32 pb-20 text-left will-change-transform sm:px-10 lg:px-20 lg:pt-36">
    {/* Badge */}
    <div className="mb-5">
   
       <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
                        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                          Premium Auto Care Plans
                    </div>
    </div>

    {/* Heading */}
    <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
      Choose Your Perfect Car Care Plan
    </h1>

    {/* Subheading */}
    <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
      Join thousands of smart drivers who save time and money with our comprehensive maintenance plans. 
      Trusted by Franklin Square and Nassau County since 2008. Starting at just $5/month!
    </p>

    {/* Social Proof */}
    <div className="flex flex-wrap items-center gap-3 text-white">
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
        <Users className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-semibold text-sm sm:text-base lg:text-lg">5,000+ Happy Customers</span>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
        <span className="font-semibold text-sm sm:text-base lg:text-lg">5.0 Google Rating</span>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
        <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-semibold text-sm sm:text-base lg:text-lg">17+ Years Experience</span>
      </div>
    </div>
  </div>

</section>


        {/* Billing Toggle */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Flexible membership options</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Choose the coverage that fits your drive</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Simple plans, practical benefits, and trusted service for every stage of vehicle ownership.</p>
              <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="inline-block">
                <TabsList className="mt-8 rounded-full border border-slate-200 bg-white p-1 shadow-lg">
                  <TabsTrigger 
                    value="monthly" 
                    className="px-3 py-3 font-semibold data-[state=active]:bg-gradient-to-b from-blue-700 to-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-3xl transition-all duration-300"
                  >
                    Monthly Plans
                  </TabsTrigger>
                  <TabsTrigger 
                  
                    value="yearly" 
                    className="px-2 py-3 pl-3 font-semibold data-[state=active]:bg-gradient-to-b from-blue-700 to-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-3xl transition-all duration-300"
                  >
                    <span className="flex items-center space-x-1">
                      <span>Yearly Plans</span>
                      <Badge className="bg-green-500 text-white text-xs animate-pulse">Save up to 20%</Badge>
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Plans Grid - Now 2 columns max for better visibility */}
            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {plans.map((plan, index) => (
                <PlanCard key={plan.id} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Why membership matters</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">
                Why Do You Need A Car Care Plan?
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
                Protect your investment and save money with preventive maintenance
              </p>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-3">
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_10px_25px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Increase Reliability</h3>
                <p className="text-gray-600 text-md p-2 leading-relaxed">
                  Well-maintained vehicles can exceed 200,000 miles, while poorly maintained ones have a much shorter lifespan. Regular care keeps you on the road longer.
                </p>
              </div>
               <div className="group rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_10px_25px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Ensure Safety</h3>
                <p className="text-gray-600 text-md p-2 leading-relaxed">
                   Nearly 40% of car crashes are due to preventable mechanical failures. Our comprehensive inspections and maintenance keep you and your family safe.
               </p>
              </div>
               <div className="group rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_10px_25px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Decrease Costs</h3>
                <p className="text-gray-600 text-md p-2 leading-relaxed">
                  Neglecting routine maintenance can lead to repairs that cost 4x more than regular upkeep. Prevention is always cheaper than repair.
               </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Brochure Download Section */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-100 px-4 py-12 shadow-inner sm:px-6 sm:py-16 lg:px-8 lg:py-20">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_15px_35px_rgba(15,23,42,0.1)] sm:p-8 lg:p-10">
      
      {/* Icon */}
      <Download className="w-12 h-12 sm:w-14 sm:h-14 mx-auto text-blue-800 mb-4" />

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
        Download Our Car Care Brochure
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
        Get a detailed, print-friendly overview of all our car care plans to review at your convenience.
      </p>

      {/* Button */}
      <Button
        style={{
          boxShadow:
            "inset 0 -2px 5px rgba(165, 208, 255, 0.47), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 8px 14px rgba(0, 0, 0, 0.25)",
        }}
        size="lg"
        className="action-button action-button-book w-full px-4 py-3 text-base sm:w-auto sm:px-6 sm:py-4 sm:text-lg lg:px-8"
        onClick={handleDownloadBrochure}
         disabled={isDownloading}
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Downloading...
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Download Brochure (PDF)
          </>
        )}
      </Button>
    </div>
  </div>
</section>


        {/* Testimonial Section */}
        <section className="bg-gradient-to-b from-blue-50 to-slate-50 py-12 sm:py-16 lg:py-20">
  <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
    {/* <div className="flex justify-center font-sans px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-md sm:max-w-xl md:max-w-3xl w-full">
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative bg-gradient-to-b from-white via-gray-100 to-gray-50 
                     p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl 
                     border border-gray-100 mb-4 sm:mb-6 w-full transition-all duration-300"
        >
          <div className="flex justify-center space-x-1 mb-2 sm:mb-3">
            {renderStars(5)}
          </div>

          
          <p className="text-center text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-3 sm:mb-4 italic">
            &quot;Everything Auto&apos;s car care plan has saved me thousands of dollars 
            in unexpected repairs. The digital inspections show me exactly what&apos;s 
            happening with my car. Best investment I&apos;ve made!&quot;
          </p>

         
          <div className="absolute left-6 sm:left-8 -bottom-2 
                          w-3 h-3 sm:w-4 sm:h-4 bg-gray-50 rotate-45 
                          border-r border-b border-gray-200">
          </div>
        </motion.div>

        
        <div className="flex items-center space-x-3 sm:space-x-4 ml-1 sm:ml-2">
       <Image
  src="/mypic.png"
  alt="Sarah Martinez"
  width={64} 
  height={64}
  className="
             rounded-full object-cover border border-gray-100 
             shadow-sm ring-1 ring-gray-200"
/>
          <div className="flex flex-col text-left">
            <span className="text-lg sm:text-xl font-semibold text-gray-800">
              Sarah Martinez
            </span>
            <span className="text-xs sm:text-sm text-gray-500">
              Franklin Square Resident, 3-Year Member
            </span>
          </div>
        </div>
      </div>
    </div> */}
    <GoogleReviews />
  </motion.div>
</section>


        {/* Final CTA */}
        <section className="bg-gradient-to-b from-blue-900 to-gray-900 px-4 py-20 text-white sm:px-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-3xl font-bold mb-6 text-white">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Everything Auto for their vehicle care. Call now to enroll in the perfect plan for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:516-775-9724" className="block w-full sm:w-auto">
  <Button
    style={{
      boxShadow:
        "inset 0 -2px 5px rgba(249, 195, 195, 0.85), inset 0 2px 5px rgba(19, 19, 19, 0.61), 0 8px 14px rgba(0, 0, 0, 0.22)",
    }}
    size="lg"
    className="action-button action-button-call flex w-full items-center justify-center px-4 py-4 text-lg sm:w-auto sm:px-8 sm:py-6 sm:text-xl"
  >
    <Phone className="w-5 h-5 mr-2" />
    <span className="truncate">CALL NOW: 516-775-9724</span>
  </Button>
</a>

              <div className="text-blue-100">
                <p className="font-semibold text-gray-50">Mon-Sat: 8AM-6PM</p>
                <p className="text-sm text-gray-200">Quick enrollment in under 5 minutes</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
