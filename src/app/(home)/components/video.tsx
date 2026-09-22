'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from 'lucide-react';
import VideoModal from './VideoModal';
import Image from "next/image";

const videos = [
    {
        id: 1,
        title: "Customer Testimonial - Sarah's Experience",
        description: "Hear from Sarah about her experience with our brake service and how we saved her money.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=85"
    },
    {
        id: 2,
        title: "Inside Everything Auto - Shop Tour",
        description: "Take a virtual tour of our state-of-the-art facility and meet our certified technicians.",
        youtubeId: "bfDpZval4uQ",
        thumbnail: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=85"
    },
    {
        id: 3,
        title: "Digital Vehicle Inspection Demo",
        description: "See how our digital inspections provide detailed photos and explanations of your vehicle's condition.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85"
    },
    {
        id: 4,
        title: "Engine Diagnostic Process",
        description: "Watch our expert technicians diagnose and solve complex engine problems using advanced tools.",
        youtubeId: "MvdLs6wmp-s",
        thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: 5,
      title: "Customer Success Stories",
      description: "Multiple customers share their positive experiences with Everything Auto's honest service.",
      youtubeId: "MvdLs6wmp-s",
      thumbnail: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85"
    },
  
];

export default function Videos() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


    const handleCardClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };
  const changeVideo = (direction: -1 | 1) => {
    setActiveVideoIndex((currentIndex) => (currentIndex + direction + videos.length) % videos.length);
  };
  const selectVideo = (index: number) => {
    setActiveVideoIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => changeVideo(1), 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

    return (
  <div className="min-h-screen overflow-x-hidden bg-slate-50">




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


    {/* ================= 3D VIDEO CARDS ================= */}
    <div className="relative isolate mx-auto mb-12 max-w-6xl rounded-[2rem] border border-slate-200 bg-slate-100/70 p-3 pb-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:p-6 sm:pb-2">
      <div className="relative z-10 h-[360px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm [perspective:1200px] sm:h-[460px] sm:rounded-[1.75rem] sm:p-6">
      <div className="pointer-events-none absolute inset-x-[12%] bottom-8 h-24 rounded-full bg-slate-900/15 blur-3xl sm:inset-x-[18%] sm:bottom-10 sm:h-32" />
      <button
        type="button"
        onClick={() => setIsAutoPlaying((playing) => !playing)}
        aria-label={isAutoPlaying ? "Pause video carousel" : "Start video carousel"}
        style={{
          boxShadow:
            "inset 0 -2px 4px rgba(255,255,255,0.9), inset 0 2px 3px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.12)",
        }}
        className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center !rounded-full border border-slate-200 bg-white p-0 text-slate-600 shadow-[0_4px_12px_rgba(15,23,42,0.1)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 sm:right-6 sm:top-6 sm:w-auto sm:gap-2 sm:px-4"
      >
        {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="hidden text-sm font-semibold sm:inline">Auto-play: {isAutoPlaying ? "On" : "Off"}</span>
      </button>
      {videos.map((video, index) => {
        const offset = ((index - activeVideoIndex + videos.length + 2) % videos.length) - 2;
        const isActive = offset === 0;
        const isVisible = Math.abs(offset) <= 2;

        return (
          <button
            key={video.id}
            type="button"
            aria-label={isActive ? `Play ${video.title}` : `Show ${video.title}`}
            onClick={() => isActive ? handleCardClick(video.youtubeId) : selectVideo(index)}
            onMouseEnter={isActive ? () => setIsAutoPlaying(false) : undefined}
            onMouseLeave={isActive ? () => setIsAutoPlaying(true) : undefined}
            className={`video-carousel-card group absolute left-1/2 top-1/2 w-[min(52vw,350px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-slate-300 bg-white text-left shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85),0_24px_50px_rgba(15,23,42,0.28)] [clip-path:inset(0_round_0.75rem)] transition-[transform,opacity,filter,border-color,box-shadow] duration-500 ease-out hover:border-slate-400 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9),0_28px_58px_rgba(15,23,42,0.26)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 sm:w-[min(78vw,350px)] ${Math.abs(offset) === 2 ? "video-carousel-card--outer" : ""}`}
            style={{
              "--video-card-offset": offset,
              "--video-card-depth": `${isActive ? 105 : -180}px`,
              "--video-card-rotation": `${offset * -30}deg`,
              "--video-card-scale": isActive ? 1 : 0.78,
              opacity: isVisible ? 1 : 0,
              filter: isActive ? "none" : "brightness(0.88) saturate(0.9)",
              boxShadow: isActive
                ? "inset 0 0 0 1px rgba(255,255,255,0.9), 0 24px 40px rgba(15,23,42,0.24)"
                : "inset 0 0 0 1px rgba(255,255,255,0.7), 0 16px 28px rgba(15,23,42,0.16)",
              zIndex: 10 - Math.abs(offset),
              pointerEvents: isVisible ? "auto" : "none",
            } as React.CSSProperties}
          >
            <div className="relative aspect-video overflow-hidden rounded-t-[0.7rem] bg-slate-950">
              <Image
                src={video.thumbnail}
                alt=""
                fill
                sizes="(max-width: 640px) 52vw, 350px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {isActive ? "Play video" : "Select video"}
              </span>
            </div>
            <div className="bg-white p-3 sm:p-5">
              <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 sm:text-lg">{video.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">{video.description}</p>
            </div>
          </button>
        );
      })}

      </div>

    <div className="relative z-0 mx-auto -mt-2 flex w-fit items-center justify-center gap-1.5 rounded-b-full rounded-t-none border border-slate-200 border-t-0 bg-white px-2.5 pb-1 pt-2.5 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.9),inset_0_2px_3px_rgba(15,23,42,0.07),0_8px_18px_rgba(15,23,42,0.16)] sm:-mt-5 sm:gap-4 sm:px-4 sm:pb-1.5 sm:pt-5">
      <button type="button" aria-label="Show previous video" onClick={() => { changeVideo(-1); setIsAutoPlaying(false); }} className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 sm:h-8 sm:w-8">
        <ChevronLeft className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </button>
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        {videos.map((video, index) => (
          <button
            key={video.id}
            type="button"
            aria-label={`Show ${video.title}`}
            aria-current={activeVideoIndex === index ? "true" : undefined}
            onClick={() => selectVideo(index)}
            className={`h-1.5 rounded-full bg-slate-400 transition-[width,opacity] duration-300 sm:h-2.5 ${activeVideoIndex === index ? "w-5 opacity-100 sm:w-8" : "w-1.5 opacity-30 hover:opacity-70 sm:w-2.5"}`}
          />
        ))}
      </div>
      <button type="button" aria-label="Show next video" onClick={() => { changeVideo(1); setIsAutoPlaying(false); }} className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 sm:h-8 sm:w-8">
        <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </button>
    </div>
    </div>


    {/* ================= LOAD MORE ================= */}
      {/* Button */}
           <div className="text-center mt-14">
             <a
               href="/videos"
            //    target="_blank"
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
                 View All Videos
               </Button>
             </a>
           </div>

  </div>


  {/* ================= VIDEO MODAL ================= */}
  <VideoModal
    isOpen={isModalOpen}
    onClose={closeModal}
    videoId={selectedVideoId}
  />

</section>



</div>
    );
}
