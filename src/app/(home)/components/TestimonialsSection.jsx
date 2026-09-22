import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Everything Auto has been taking care of my family's cars for over 3 years. They are honest, reliable, and always explain what needs to be done. I wouldn't trust anyone else with my vehicle!",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Mike Rodriguez", 
    rating: 5,
    text: "Best auto shop in Franklin Square! They fixed my brake issue quickly and for a fair price. The staff is professional and the work is top quality. Highly recommend!",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    rating: 5,
    text: "I've been coming to Everything Auto for 5 years and they never disappoint. They always take the time to explain what's wrong and give me options. True professionals!",
    date: "2024-01-08"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re proud of our 5-star rating on Google. Here&apos;s what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="relative h-[400px] mb-2">
          <TestimonialCarousel items={testimonials} loop showDots showControls />
        </div>
        
        <div className="text-center">
          <a href="https://www.google.com/search?q=everything+auto+franklin+square+reviews" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-primary font-bold text-lg px-8 py-4">
              <ExternalLink className="w-5 h-5 mr-2" />
              Read More Reviews on Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}