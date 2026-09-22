"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendContactForm } from '@/http/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Star, Users, Award, Shield } from 'lucide-react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    service_type: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: any) => {
    setFormData(prev => ({ ...prev, service_type: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus({ message: "Sending...", type: "info" });

  try {
    const result = await sendContactForm(formData); // ✅ using centralized function

    setFormStatus({
      message:
        result.message ||
        "Thank you for contacting Everything Auto! We have received your message and will get back to you within 24 hours.",
      type: "success",
    });

    setFormData({
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      service_type: "",
      message: "",
    });
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    setFormStatus({
      message: error.message,
      type: "error",
    });
  }
};


  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "AW-17073409546/IXiOCMjWqsgaEIqcns0_", {
        phone_conversion_number: "5167759724"
      })
    }
  })

  return (
    <div className="bg-[var(--bg-light)]">
      {/* SEO Hero Section */}
      {/* ================= CONTACT HERO ================= */}
{/* ================= CONTACT HERO + TRUST INDICATORS ================= */}
<section data-scroll-hero className="relative overflow-hidden bg-gray-800 text-white">

  {/* Background Image + Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(90deg, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.72) 52%, rgba(2, 6, 23, 0.35) 100%), url('/workshop.jpg')",
    }}
  />

  {/* Hero Content */}
  <div data-scroll-hero-content className="relative mx-auto w-full max-w-screen-2xl px-6 pt-32 pb-20 will-change-transform sm:px-10 lg:px-20 lg:pt-36">

    <div className="max-w-4xl">

      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />

        Get In Touch
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
        Contact Everything Auto
        <br />
        <span className="text-white">
          Franklin Square&apos;s Trusted Auto Repair Shop
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
        Get in touch with Franklin Square&apos;s most trusted auto repair
        experts. With{" "}
        <strong className="font-bold text-white">17+ years</strong> of
        experience and over{" "}
        <strong className="font-bold text-white">5,000</strong> satisfied
        customers since{" "}
        <strong className="font-bold text-white">2008</strong>, we&apos;re
        here to keep your vehicle running smoothly.
      </p>

      <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
        Located at{" "}
        <strong className="font-bold text-white">980 Washington St</strong>,
        we proudly serve Franklin Square, Hempstead, Garden City, and all of
        Nassau County.
      </p>

    </div>

    {/* ================= TRUST INDICATORS ================= */}
    <div
      ref={ref}
      className="mt-14 rounded-2xl border border-white/15 bg-white/10 px-5 py-8 shadow-2xl backdrop-blur-md sm:px-8"
    >
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

        {/* Google Rating */}
        <div className="flex flex-col items-center">
          <Star className="mb-3 h-12 w-12 text-yellow-400" />

          <div className="text-3xl font-bold text-white">
            {inView && (
              <CountUp
                end={5.0}
                duration={2}
                decimals={1}
              />
            )}
          </div>

          <div className="text-sm text-slate-300">
            Google Rating
          </div>
        </div>

        {/* Years Experience */}
        <div className="flex flex-col items-center">
          <Award className="mb-3 h-12 w-12 text-blue-400" />

          <div className="text-3xl font-bold text-white">
            {inView && (
              <CountUp
                end={17}
                duration={3}
              />
            )}
            +
          </div>

          <div className="text-sm text-slate-300">
            Years Experience
          </div>
        </div>

        {/* Happy Customers */}
        <div className="flex flex-col items-center">
          <Users className="mb-3 h-12 w-12 text-blue-400" />

          <div className="text-3xl font-bold text-white">
            {inView && (
              <CountUp
                end={5000}
                duration={3}
                separator=","
              />
            )}
            +
          </div>

          <div className="text-sm text-slate-300">
            Happy Customers
          </div>
        </div>

        {/* Licensed & Insured */}
        <div className="flex flex-col items-center">
          <Shield className="mb-3 h-12 w-12 text-green-400" />

          <div className="text-3xl font-bold text-white">
            Licensed
          </div>

          <div className="text-sm text-slate-300">
            & Insured
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
       {/* ================= CONTACT / BOOKING SECTION ================= */}
<section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">

  {/* Soft Background Decorations */}

  <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">

    {/* Section Header */}
    <div className="mx-auto mb-12 max-w-3xl text-center">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        Schedule Your Service
      </div>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Schedule Your Auto Repair Service
        <span className="block text-blue-700">
          in Franklin Square, NY
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
        Ready to experience the difference that{" "}
        <strong className="font-bold text-slate-900">
          17+ years
        </strong>{" "}
        of automotive expertise makes?
        Fill out the form below or call us directly at{" "}
        <a
          href="tel:5167759724"
          className="font-bold text-blue-600 transition hover:text-blue-800 hover:underline"
        >
          (516) 775-9724
        </a>
        .
      </p>

      <p className="mt-3 text-base leading-7 text-slate-600">
        We provide honest estimates, quality repairs, and exceptional
        customer service for all makes and models.
      </p>

    </div>

    {/* Form Card */}
    <div className="mx-auto max-w-4xl">

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">

        {/* Form Top */}
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Get Your Free Estimate
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Tell us about your vehicle and the service you need.
            </p>
          </div>

          <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            ✓ No Obligation
          </div>

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name + Phone */}
          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <label
                htmlFor="customer_name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>

              <Input
                id="customer_name"
                placeholder="Your Full Name"
                value={formData.customer_name}
                onChange={handleInputChange}
                required
                className="h-12 rounded-xl border-slate-200 bg-slate-50 text-base transition focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="customer_phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number
              </label>

              <Input
                id="customer_phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.customer_phone}
                onChange={handleInputChange}
                required
                className="h-12 rounded-xl border-slate-200 bg-slate-50 text-base transition focus:bg-white"
              />
            </div>

          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="customer_email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>

            <Input
              id="customer_email"
              type="email"
              placeholder="Email Address"
              value={formData.customer_email}
              onChange={handleInputChange}
              required
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-base transition focus:bg-white"
            />
          </div>

          {/* Service Type */}
          <div>
            <label
              htmlFor="service_type"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Service Needed
            </label>

            <Select
              onValueChange={handleSelectChange}
              value={formData.service_type}
            >
              <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50 text-base transition focus:bg-white">
                <SelectValue placeholder="What automotive service do you need?" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="general-inquiry">
                  General Inquiry
                </SelectItem>

                <SelectItem value="engine-repair">
                  Engine Repair & Diagnostics
                </SelectItem>

                <SelectItem value="brake-service">
                  Brake Service & Repair
                </SelectItem>

                <SelectItem value="diagnostics">
                  Check Engine Light Diagnostics
                </SelectItem>

                <SelectItem value="oil-change">
                  Oil Change Service
                </SelectItem>

                <SelectItem value="transmission">
                  Transmission Repair
                </SelectItem>

                <SelectItem value="electrical">
                  Electrical System Repair
                </SelectItem>

                <SelectItem value="ny-inspection">
                  NY State Inspection
                </SelectItem>

                <SelectItem value="other">
                  Other Auto Repair Service
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Tell Us About Your Vehicle
            </label>

            <Textarea
              id="message"
              placeholder="Tell us about your vehicle's issue or what service you need..."
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="resize-none rounded-xl border-slate-200 bg-slate-50 text-base transition focus:bg-white"
            />
          </div>

          {/* Submit */}
          <Button
            style={{
              boxShadow:
                "inset 0 -2px 5px rgba(138, 193, 252, 0.57), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 4px 10px rgba(0, 0, 0, 0.12)",
            }}
            type="submit"
            size="lg"
            className="action-button action-button-book h-14 w-full rounded-xl px-6 text-base font-bold sm:text-lg"
          >
            Get Your Free Estimate Today
          </Button>

          {/* Form Status */}
          {formStatus.message && (
            <p
              className={`rounded-xl px-4 py-3 text-center text-base font-medium ${
                formStatus.type === "success"
                  ? "bg-green-50 text-green-600"
                  : formStatus.type === "error"
                  ? "bg-red-50 text-red-600"
                  : "bg-slate-50 text-slate-600"
              }`}
            >
              {formStatus.message}
            </p>
          )}

        </form>

        {/* Bottom Trust Text */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Honest estimates • Quality repairs • All makes & models
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Prefer to speak with us directly?{" "}
            <a
              href="tel:5167759724"
              className="font-bold text-blue-600 hover:underline"
            >
              Call (516) 775-9724
            </a>
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

          {/* Contact Info & Map */}



          {/* Contact Info & Map */}
          <div className="space-y-8">
         <Card
  className="h-full rounded-3xl border border-slate-200 bg-white"
  style={{
    boxShadow:
      "inset 0 -3px 8px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(0, 0, 0, 0.05), 0 8px 20px rgba(15, 23, 42, 0.08)",
  }}
>
  <CardContent className="p-4 sm:p-6 lg:p-8">

    <div className="mb-5">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
        <MapPin className="h-3.5 w-3.5" />
        Visit Us
      </div>

      <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
        Visit Franklin Square&apos;s Most Trusted Auto Shop
      </h3>
    </div>

    <ul className="space-y-3 sm:space-y-4">

      {/* Address */}
      <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 sm:items-center sm:gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <MapPin className="h-5 w-5 text-blue-600" />
        </div>

        <a
          href="https://www.google.com/maps/place/980+Washington+St,+Franklin+Square,+NY+11010"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium leading-5 text-gray-700 transition hover:text-blue-600 sm:text-base"
        >
          980 Washington St, Franklin Square, NY 11010
        </a>
      </li>

      {/* Phone */}
      <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 sm:items-center sm:gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <Phone className="h-5 w-5 text-blue-600" />
        </div>

        <a
          href="tel:516-775-9724"
          className="text-sm font-semibold leading-5 text-gray-700 transition hover:text-blue-600 sm:text-base"
        >
          (516) 775-9724
          <span className="block text-xs font-medium text-green-600 sm:text-sm">
            Call Now for Same-Day Service
          </span>
        </a>
      </li>

      {/* Email */}
      <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 sm:items-center sm:gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <Mail className="h-5 w-5 text-blue-600" />
        </div>

        <a
          href="mailto:EverythingAutoNewYork@gmail.com"
          className="break-all text-sm font-medium leading-5 text-gray-700 transition hover:text-blue-600 sm:text-base"
        >
          EverythingAutoNewYork@gmail.com
        </a>
      </li>

      {/* Hours */}
      <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 sm:items-center sm:gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <Clock className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <div className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
            Monday - Saturday: 8:00 AM - 6:00 PM
          </div>

          <div className="text-sm text-red-500">
            Sunday: Closed
          </div>
        </div>
      </li>

    </ul>

  </CardContent>
</Card>


            {/* Google Map */}
            <div className="luxury-shadow rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.532393390715!2d-73.68369498459516!3d40.70613397933256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2627e1f6aa39b%3A0x889b9a3f2c168c7e!2s980%20Washington%20St%2C%20Franklin%20Square%2C%20NY%2011010%2C%20USA!5e0!3m2!1sen!2s!4v1678886655443!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Everything Auto Location - 980 Washington St, Franklin Square, NY"
              ></iframe>
            </div>

            {/* Service Areas */}
       <Card
  className="h-full rounded-3xl border border-slate-200 bg-white"
  style={{
    boxShadow:
      "inset 0 -3px 8px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(0, 0, 0, 0.05), 0 8px 20px rgba(15, 23, 42, 0.08)",
  }}
>
  <CardContent className="p-4 sm:p-6 lg:p-8">

    {/* Heading */}
    <div className="mb-4">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
        <MapPin className="h-3.5 w-3.5" />
        Service Area
      </div>

      <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
        Serving Long Island Communities
      </h3>
    </div>

    {/* Description */}
    <p className="mb-4 text-sm leading-6 text-slate-600 sm:text-base">
      We proudly serve customers throughout Nassau County including:
    </p>

    {/* Locations */}
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Franklin Square
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Hempstead
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Garden City
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Elmont
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        West Hempstead
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Uniondale
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Mineola
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        Floral Park
      </div>

    </div>

  </CardContent>
</Card>

          </div>
        </div>
      </div>
    </div>
  );
}
