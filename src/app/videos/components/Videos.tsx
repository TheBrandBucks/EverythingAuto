'use client';
import React from 'react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, YoutubeIcon, Youtube, LucideYoutube } from 'lucide-react';
import VideoModal from './VideoModal';
import Image from "next/image";

const videos = [
    {
        id: 1,
        title: "Customer Testimonial - Sarah's Experience",
        description: "Hear from Sarah about her experience with our brake service and how we saved her money.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Inside Everything Auto - Shop Tour",
        description: "Take a virtual tour of our state-of-the-art facility and meet our certified technicians.",
        youtubeId: "bfDpZval4uQ",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Digital Vehicle Inspection Demo",
        description: "See how our digital inspections provide detailed photos and explanations of your vehicle's condition.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "Engine Diagnostic Process",
        description: "Watch our expert technicians diagnose and solve complex engine problems using advanced tools.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    // {
    //     id: 5,
    //     title: "Customer Success Stories",
    //     description: "Multiple customers share their positive experiences with Everything Auto's honest service.",
    //     youtubeId: "MvdLs6wmp-s",
    //     thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=480&h=360&fit=crop"
    // },
    {
        id: 6,
        title: "Why Choose Everything Auto",
        description: "Learn about our commitment to quality, transparency, and customer satisfaction.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 7,
        title: "Customer Testimonial - Sarah's Experience",
        description: "Hear from Sarah about her experience with our brake service and how we saved her money.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 8,
        title: "Inside Everything Auto - Shop Tour",
        description: "Take a virtual tour of our state-of-the-art facility and meet our certified technicians.",
        youtubeId: "bfDpZval4uQ",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 9,
        title: "Digital Vehicle Inspection Demo",
        description: "See how our digital inspections provide detailed photos and explanations of your vehicle's condition.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 10,
        title: "Engine Diagnostic Process",
        description: "Watch our expert technicians diagnose and solve complex engine problems using advanced tools.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 11,
        title: "Customer Testimonial - Sarah's Experience",
        description: "Hear from Sarah about her experience with our brake service and how we saved her money.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 12,
        title: "Inside Everything Auto - Shop Tour",
        description: "Take a virtual tour of our state-of-the-art facility and meet our certified technicians.",
        youtubeId: "bfDpZval4uQ",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 13,
        title: "Digital Vehicle Inspection Demo",
        description: "See how our digital inspections provide detailed photos and explanations of your vehicle's condition.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
    {
        id: 14,
        title: "Engine Diagnostic Process",
        description: "Watch our expert technicians diagnose and solve complex engine problems using advanced tools.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "/maxresdefault.jpg"
    },
];

export default function Videos() {
  // State to track how many videos to show. Starts with 5.

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const [videosToShow, setVideosToShow] = useState(5);
   // Function to load more videos
  const handleLoadMore = () => {
    setVideosToShow(prevCount => prevCount + 5); // Add 5 more videos
  };


    const handleCardClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };
  const hasMoreVideos = videosToShow < videos.length;
    return (
   <div className="min-h-screen bg-slate-50">

  {/* ================= HERO ================= */}
{/* ================= HERO SECTION ================= */}
<section data-scroll-hero className="relative flex min-h-[500px] items-center overflow-hidden bg-gray-800 text-white">

  {/* Background Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(90deg, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.72) 52%, rgba(2, 6, 23, 0.35) 100%), url('/workshop.jpg')",
    }}
  />

  <div data-scroll-hero-content className="relative mx-auto w-full max-w-screen-2xl px-6 pt-32 pb-20 will-change-transform sm:px-10 lg:px-20 lg:pt-36">

    <div className="max-w-3xl">

      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-inner">
        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
        Explore Our Videos
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
        Our Videos
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
        Take a closer look at our shop, our team, and hear from our happy
        customers. Trusted since{" "}
        <strong className="font-bold text-white">2008</strong> with over{" "}
        <strong className="font-bold text-white">5,000</strong> satisfied
        customers and{" "}
        <strong className="font-bold text-white">17+ years</strong> of
        experience.
      </p>

      {/* Stats */}
      <div className="mt-8 flex flex-wrap gap-3">

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
          <p className="text-2xl font-black text-white">5,000+</p>
          <p className="text-xs uppercase tracking-wider text-slate-300">
            Customers
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
          <p className="text-2xl font-black text-white">17+</p>
          <p className="text-xs uppercase tracking-wider text-slate-300">
            Years Experience
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
          <p className="text-2xl font-black text-white">5★</p>
          <p className="text-xs uppercase tracking-wider text-slate-300">
            Google Rating
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


  {/* ================= VIDEOS ================= */}
<section className="bg-white px-4 py-20 sm:px-8">

  <div className="mx-auto max-w-screen-2xl">

    {/* ================= SECTION HEADING ================= */}
    <div className="mb-12 text-center">

      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 shadow-inner">

        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />

        <span className="text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
          Video Gallery
        </span>

      </div>

      {/* Heading */}
      <h2 className="text-4xl font-black tracking-tight text-gray-800 sm:text-5xl">
        Watch Our Latest Videos
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        Explore our latest videos, customer stories, behind-the-scenes
        moments, and more.
      </p>

      {/* Accent Line */}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-gray-300" />

    </div>


    {/* ================= VIDEO GRID ================= */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {videos.slice(0, videosToShow).map((video) => (

        <Card
          key={video.id}
          className="
            group overflow-hidden rounded-2xl
            border border-white/10
            bg-white
            shadow-[0_10px_30px_rgba(0,0,0,0.20)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-blue-300/50
            hover:shadow-[0_18px_40px_rgba(0,0,0,0.30)]
          "
        >

          {/* ================= THUMBNAIL ================= */}
          <div
            className="relative aspect-video cursor-pointer overflow-hidden bg-slate-950"
            onClick={() => handleCardClick(video.youtubeId)}
          >

            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="
                object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            {/* Dark Overlay */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/75
              via-black/20
              to-transparent
            " />

            {/* Play Button */}
            <div className="
              absolute inset-0
              flex items-center justify-center
            ">

              <div className="
                flex h-16 w-16 items-center justify-center
                rounded-full
                border border-white/40
                bg-gray-800/90
                text-white
                shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                transition-all duration-300
                group-hover:scale-110
                group-hover:bg-blue-700
              ">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </div>

            </div>

            {/* Video Label */}
            <div className="
              absolute bottom-3 left-3
              rounded-full
              border border-white/20
              bg-black/50
              px-3 py-1
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-white
              backdrop-blur-md
            ">
              Watch Video
            </div>

          </div>


          {/* ================= CARD CONTENT ================= */}
          <CardContent className="flex flex-col bg-white p-5">

            <h3 className="
              mb-2
              line-clamp-2
              text-lg
              font-bold
              leading-snug
              text-gray-900
              transition-colors
              group-hover:text-blue-700
            ">
              {video.title}
            </h3>

            <p className="
              mb-5
              line-clamp-3
              text-sm
              leading-6
              text-gray-600
            ">
              {video.description}
            </p>


            {/* Watch Button */}
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >

              <Button
                className="
                  action-button
                  action-button-book
                  w-full
                  border-0
                "
                style={{
                  boxShadow:
                    "inset 0 -2px 5px rgba(138, 193, 252, 0.57), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Watch on YouTube
              </Button>

            </a>

          </CardContent>

        </Card>

      ))}

    </div>


    {/* ================= LOAD MORE ================= */}
    {hasMoreVideos && (
      <div className="mt-12 flex justify-center">

        <Button
          onClick={handleLoadMore}
          className="
            action-button
            action-button-call
            px-8 py-3
            text-base
            font-bold
          "
          style={{
            boxShadow:
              "inset 0 -2px 5px rgba(249, 195, 195, 0.65), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          Load More Videos
        </Button>

      </div>
    )}

  </div>


  {/* ================= VIDEO MODAL ================= */}
  <VideoModal
    isOpen={isModalOpen}
    onClose={closeModal}
    videoId={selectedVideoId}
  />

</section>


  {/* ================= SUBSCRIBE ================= */}
{/* ================= STAY UPDATED ================= */}
<section className="relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-20 text-white sm:px-8">

  {/* Subtle background overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_45%)]" />

  <div className="relative mx-auto max-w-4xl text-center">

    {/* Badge */}
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 shadow-inner">

      <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />

      <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
        Stay Connected
      </span>

    </div>

    {/* Heading */}
    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
      Stay Updated
    </h2>

    {/* Accent Line */}
    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-gray-300" />

    {/* Description */}
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
      Subscribe to our YouTube channel for the latest videos, tips,
      behind-the-scenes content, and customer stories.
    </p>

    {/* Button */}
    <div className="mt-9">

      <a
        href="https://www.youtube.com/@EverythingAutoNY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="action-button action-button-call px-7 py-4 text-lg sm:px-9"
          style={{
            boxShadow:
              "inset 0 -2px 5px rgba(249, 195, 195, 0.85), inset 0 2px 5px rgba(19, 19, 19, 0.61), 0 8px 14px rgba(0, 0, 0, 0.22)",
          }}
        >
          <LucideYoutube className="mr-2 h-5 w-5" />
          Subscribe to Our Channel
        </Button>
      </a>

    </div>

  </div>
</section>

</div>
    );
}
