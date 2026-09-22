'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { getGoogleReviews } from '@/http/api';
import { TestimonialCarousel, type TestimonialCarouselItem } from '@/components/ui/testimonial-carousel';
import { KineticTextLoader } from '@/components/ui/kinetic-text-loader';
type Review = {
  author_name: string;
  text?: string;
  rating: number;
  time: number;
  relative_time_description?: string;
  profile_photo_url?: string;
  author_url?: string;
  language?: string;
};

type GoogleReviewsResponse = {
  reviews: Review[];
  rating?: number;
  user_ratings_total?: number;
  place_id?: string;
  place_name?: string;
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [googleRating, setGoogleRating] = useState(5);
  const [totalRatings, setTotalRatings] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Shrink the carousel cards on smaller/mobile viewports
  useEffect(() => {
    const updateCardWidth = () => setCardWidth(window.innerWidth < 640 ? 220 : 280);
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);
  // ✅ Run Google Ads conversion config only once
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "AW-17073409546/IXiOCMjWqsgaEIqcns0_", {
        phone_conversion_number: "5167759724",
      });
    }
  }, []);

  // ✅ Fetch reviews from API
  useEffect(() => {
  const fetchReviews = async () => {
    try {
      setLoading(true);

      // ✅ Fetch data from centralized API handler
      const data: GoogleReviewsResponse = await getGoogleReviews();

      if (!data?.reviews || !Array.isArray(data.reviews)) {
        throw new Error("Invalid data format from API");
      }

      // ✅ Filter only 5-star reviews
      const fiveStarReviews = data.reviews.filter(
        (review) => review.rating === 5
      );

      setReviews(fiveStarReviews);
      setGoogleRating(data.rating || 5);
      setTotalRatings(data.user_ratings_total || data.reviews.length);

      console.log("Total reviews from API:", data.reviews.length);
      console.log("5-star reviews:", fiveStarReviews.length);
    } catch (error) {
      console.error("Error fetching Google Reviews:", error);
      // Optionally: fallback data
      // setReviews(mockReviews);
    } finally {
      setLoading(false);
    }
  };

  fetchReviews();
}, []);

  // ✅ Force carousel mode when we have more than one review
  const shouldShowCarousel = reviews.length > 1;

  // ✅ Auto-play carousel
  useEffect(() => {
    if (!shouldShowCarousel || !isAutoPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change every 4 seconds for better engagement

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [shouldShowCarousel, reviews.length, isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleActiveIndexChange = (index: number) => {
    setCurrentIndex(index);
    // Pause auto-play briefly when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const reviewItems: TestimonialCarouselItem[] = reviews.map((review) => ({
    name: review.author_name,
    text: review.text || "",
    rating: review.rating,
    date: review.time ? new Date(review.time * 1000).toISOString() : undefined,
  }));

  if (loading) {
    return (
      <section className="section-padding bg-gradient-to-b from-slate-50 via-white to-blue-50/60 py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
              Customer love
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">
              What Our Customers Say
            </h2>
          </div>
          <KineticTextLoader text="Loading" className="min-h-20 scale-75" />
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/60 py-20">
      <div className="relative mx-auto max-w-screen-xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-800">
              Testimonials
            </p>
          </div>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
            We&apos;re proud of our 5-star rating on Google. Here&apos;s what our
            satisfied customers have to say about their experience.
          </p>
          <div className="mx-auto mt-7 flex w-fit flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-2">
              <strong className="text-2xl font-black text-slate-950">{googleRating.toFixed(1)}</strong>
              <div className="flex" aria-label={`${googleRating} out of 5 stars`}>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="h-5 w-px bg-slate-200" />
            <span className="text-sm font-semibold text-slate-600">
              {totalRatings > 0 ? `${totalRatings.toLocaleString()} Google reviews` : "5-star service"}
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        {reviewItems.length > 0 && (
          <div className="relative isolate mb-12 rounded-[2rem] border border-slate-200 bg-slate-100/70 p-4 pb-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:p-6 sm:pb-2">
            {/* Inner white panel holding the cards */}
            <div className="relative z-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 pb-2 shadow-sm sm:p-10 sm:pb-3">
              {/* Auto-play Toggle - overlay, doesn't push the carousel off-center */}
              {shouldShowCarousel && (
                <button
                  onClick={toggleAutoPlay}
                  style={{
                    boxShadow:
                      "inset 0 -2px 4px rgba(255,255,255,0.9), inset 0 2px 3px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.08)",
                  }}
                  className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white p-0 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 active:translate-y-0 active:shadow-inner sm:right-6 sm:top-6 sm:w-auto sm:px-4 sm:py-2"
                  aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
                >
                  {isAutoPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  <span className="hidden text-sm font-semibold sm:inline">
                    {isAutoPlaying ? 'Auto-play: On' : 'Auto-play: Off'}
                  </span>
                </button>
              )}

              <div className="relative w-full">
                <TestimonialCarousel
                  items={reviewItems}
                  activeIndex={currentIndex}
                  onActiveIndexChange={handleActiveIndexChange}
                  loop
                  slideWidth={cardWidth}
                  showDots={false}
                  showControls={false}
                  onCardsMouseEnter={() => setIsAutoPlaying(false)}
                  onCardsMouseLeave={() => setIsAutoPlaying(true)}
                />
              </div>

            </div>

            {/* Nav controls - connected tab beneath the review panel */}
            {shouldShowCarousel && (
              <div className="relative z-0 mx-auto -mt-1 flex w-fit items-center justify-center gap-1.5 rounded-b-full rounded-t-none border border-slate-200 border-t-0 !bg-white px-2.5 pb-1 pt-1.5 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.9),inset_0_2px_3px_rgba(15,23,42,0.07),0_8px_18px_rgba(15,23,42,0.16)] sm:-mt-3 sm:gap-4 sm:px-4 sm:pb-1.5 sm:pt-3">
                  <button
                    type="button"
                    aria-label="Show previous testimonial"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 sm:h-8 sm:w-8"
                    onClick={() =>
                      handleActiveIndexChange(
                        (currentIndex - 1 + reviewItems.length) % reviewItems.length
                      )
                    }
                  >
                    <ChevronLeft className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                  </button>
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    {reviewItems.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentIndex === index ? "true" : undefined}
                        className={`h-1.5 rounded-full bg-slate-400 transition-[width,opacity] duration-300 sm:h-2.5 ${
                          currentIndex === index ? "w-5 opacity-100 sm:w-8" : "w-1.5 opacity-30 sm:w-2.5"
                        }`}
                        onClick={() => handleActiveIndexChange(index)}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="Show next testimonial"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 sm:h-8 sm:w-8"
                    onClick={() => handleActiveIndexChange((currentIndex + 1) % reviewItems.length)}
                  >
                    <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                  </button>
              </div>
            )}
          </div>
        )}

        {/* Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=everything+auto+franklin+square+reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{
                boxShadow:
                  "inset 0 -2px 5px rgba(249, 195, 195, 0.57), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 8px 14px rgba(0, 0, 0, 0.22)",
              }}
              size="lg"
              className="action-button action-button-call text-lg px-8 py-4"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Read More Reviews
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
