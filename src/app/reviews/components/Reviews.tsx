"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Quote, Star } from 'lucide-react';
import Image from "next/image";
import { getGoogleReviews } from '@/http/api';
import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motion';

type Review = {
    author_name: string;
    rating: number;
    text: string;
    profile_photo_url?: string;
    time: number;
    relative_time_description: string;
};
const LiveGoogleReviews = () => {
    
    const [reviews, setReviews] = useState<Review[]>([]);

    const [isLoading, setIsLoading] = useState(true);
// Track ki konsa review expanded hai (index handle karega)
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            try {
                const data = await getGoogleReviews();
                const fiveStarReviews = data.reviews.filter(
                    (r: Review) => r.rating === 5
                );
                setReviews(fiveStarReviews);
            } catch (error) {
                console.error("Failed to fetch Google Reviews:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchReviews();
    }, []);
const toggleReadMore = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    if (isLoading) {
        return <div className="text-center p-8 text-gray-800">Loading latest 5-star reviews...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{reviews.map((review, index) => {
                const isExpanded = expandedIndex === index;

                return (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.4, 0.75)}
                    >
                        <div className="flex justify-center p-0 font-sans">
                            <div className="flex w-full max-w-sm flex-col md:max-w-md">

                                {/* Review Bubble Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="relative mb-5 flex min-h-[285px] w-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_35px_rgba(30,64,175,0.14)]"
                                >
                                    <div>
                                        {/* Star Rating */}
                                        <div className="flex justify-center space-x-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < review.rating
                                                            ? "text-yellow-400 fill-current"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Review Text with 4-line Clamp & Read More */}
                                        <Quote className="absolute right-6 top-5 h-8 w-8 text-blue-100 pointer-events-none" />
                                        
                                        <p className={`text-center text-lg leading-relaxed text-slate-700 italic ${
                                            !isExpanded ? 'line-clamp-3' : ''
                                        }`}>
                                            &quot;{review.text}&quot;
                                        </p>

                                        {/* Read More / Show Less Button */}
                                        {review.text.length > 120 && (
                                            <div className="text-center mt-2">
                                                <button
                                                    onClick={() => toggleReadMore(index)}
                                                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none underline"
                                                >
                                                    {isExpanded ? "Show Less" : "Read More"}
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Bubble Tail */}
                                    <div className="absolute left-8 -bottom-2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-200">
                                    </div>
                                </motion.div>

                                {/* User Info Section */}
                                <div className="flex items-center space-x-3 ml-2 px-1">
                                    <Image
                                        src={review?.profile_photo_url || "/mypic.png"}
                                        alt={review.author_name}
                                        width={48}
                                        height={48}
                                        className="rounded-full border border-blue-200 object-cover shadow-sm ring-2 ring-white"
                                    />
                                    <div className="flex flex-col text-left">
                                        <span className="text-lg font-bold text-slate-900">
                                            {review.author_name}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {review.time
                                                ? new Date(review.time * 1000).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })
                                                : review.relative_time_description || 'Recently'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>

    );
};

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section data-scroll-hero className="relative flex min-h-[500px] items-center overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: "linear-gradient(90deg, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.72) 52%, rgba(2, 6, 23, 0.35) 100%), url('/workshop.jpg')" }}>
                <div data-scroll-hero-content className="relative mx-auto w-full max-w-screen-2xl px-6 pt-32 pb-20 will-change-transform sm:px-10 lg:px-20 lg:pt-36">
                    <div className="max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
                        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                        Real customer experiences
                    </div>
                    <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">Customer Testimonials</h1>
                    {/* <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "40rem" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-1 bg-gradient-to-b from-blue-800 to-gray-800 mx-auto mb-6 rounded-full"
                        /> */}
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                        See why over <strong className="font-bold text-white">5,000</strong> customers have trusted us with their vehicles since <strong className="font-bold text-white">2008</strong>.
                        With <strong className="font-bold text-white">17+</strong> years of experience, we&apos;re proud of our <strong className="font-bold text-white">5-star</strong> rating on Google.
                    </p>

                    <div className="mt-7 flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ color: "#b8870b3f" }} // dark golden
                                animate={{ color: "#ffd700" }} // bright golden
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.3, // har star k liye delay left-to-right
                                    ease: "easeInOut",
                                }}
                            >
                                <Star className="w-6 h-6" fill="currentColor" stroke="currentColor" />
                            </motion.div>
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            {/* Video Testimonial - With Sound */}
            <section className="bg-white px-4 py-20 sm:px-8">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">A real service story</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Hear From a Happy Customer</h2>
                    </div>
                    <div className="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-1 shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
                        <iframe
                            src="https://www.youtube.com/embed/MvdLs6wmp-s?autoplay=1&rel=0&modestbranding=1"
                            title="Customer Testimonial Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Live Google Reviews */}
            <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-8">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-12 text-center">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-red-500" />
                            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-800">Google reviews</span>
                        </div>
                        <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 via-blue-700 to-slate-800"></div>
                        <h2 className="text-4xl font-black tracking-tight text-slate-950">Here&apos;s what our customers are saying</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Fresh feedback from drivers who trust Everything Auto with their vehicles.</p>
                        {/* <a href="https://www.google.com/search?q=everything+auto+franklin+square+reviews" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="btn-primary hover:bg-blue-600">
                                <ExternalLink className="w-5 h-5 mr-1" />
                                See All Google Reviews
                            </Button>
                        </a> */}
                        <div className="">
                            {/* Card Container */}
                            <div className="mx-auto mt-8 w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] md:p-6">
                                {/* Google Reviews Header */}
                                <div className="mb-4 flex items-center gap-2">
                                    {/* Google Logo-like text with colors */}
                                    <span className="text-3xl font-semibold">
                                        <span className="text-blue-500">G</span>
                                        <span className="text-red-500">o</span>
                                        <span className="text-yellow-500">o</span>
                                        <span className="text-blue-500">g</span>
                                        <span className="text-green-500">l</span>
                                        <span className="text-red-500">e</span>
                                    </span>
                                    {/* Reviews Text */}
                                    <span className="text-xl font-normal text-gray-800">Reviews</span>
                                </div>

                                {/* Rating and Stars Section */}
                                <div className="mb-0 flex flex-wrap items-center justify-between gap-4">
                                    {/* Rating and Star Icons */}
                                    <div className="flex items-center space-x-3">
                                        <span className="text-3xl font-bold text-gray-800">4.8</span>
                                        <div className="flex">
                                            {/* Star Icons as SVGs */}
                                            <Star
                                                className="w-5 h-5 text-[#ffd700]"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            />
                                            <Star
                                                className="w-5 h-5 text-[#ffd700]"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            />
                                            <Star
                                                className="w-5 h-5 text-[#ffd700]"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            />
                                            <Star
                                                className="w-5 h-5 text-[#ffd700]"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            />
                                            <Star
                                                className="w-5 h-5 text-[#ffd700]"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            />
                                        </div>
                                        <span className="text-lg text-gray-500 font-light">(982)</span>
                                    </div>

                                    {/* "Review us" Button */}
                                    <a href="https://www.google.com/search?q=everything+auto+franklin+square+reviews" target="_blank" rel="noopener noreferrer" className="action-button action-button-book inline-flex px-3 py-2">
                                        Review us on Google
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LiveGoogleReviews />
                </div>
            </section>
        </div>
    );
}
