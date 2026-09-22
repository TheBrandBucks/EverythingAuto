"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface KineticTextLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function KineticTextLoader({
  className,
  text = "Loading",
  ...props
}: KineticTextLoaderProps) {
  return (
    <div
      className={cn("relative flex items-center justify-center font-light", className)}
      style={{ fontFamily: "'Roboto', sans-serif" }}
      {...props}
    >
      <style>{`
        @keyframes ktl-dot-move {
          0%, 100% { transform: rotate(180deg) translate(-80px, -10px) rotate(-180deg); }
          50% { transform: rotate(0deg) translate(-81px, 10px) rotate(0deg); }
        }
        @keyframes ktl-letter-stretch {
          0%, 100% { transform: scale(1, 0.35); transform-origin: 100% 75%; }
          8%, 28% { transform: scale(1, 1.4); transform-origin: 100% 67%; }
          37% { transform: scale(1, 0.875); transform-origin: 100% 75%; }
          46% { transform: scale(1, 1.03); transform-origin: 100% 75%; }
          50%, 97% { transform: scale(1); transform-origin: 100% 75%; }
        }
        @keyframes ktl-letter-bounce {
          0%, 45%, 70%, 100% { transform: scaleY(1.11); }
          49% { transform: scaleY(0.31); }
          50% { transform: scaleY(0.16); }
          53% { transform: scaleY(0.63); }
          60% { transform: scaleY(1.275); }
          68% { transform: scaleY(1.04); }
        }
      `}</style>

      <div className="relative scale-75 sm:scale-90 lg:scale-100">
        <div
          className="absolute left-[85px] top-[40px] z-10 h-[6px] w-[6px] rounded-full bg-neutral-800"
          style={{ animation: "ktl-dot-move 1800ms cubic-bezier(0.25,0.25,0.75,0.75) infinite" }}
        />
        <p className="relative m-0 whitespace-nowrap text-[3.75rem] text-neutral-800" aria-label={text}>
          {text.split("").map((character, index) => {
            const baseClassName = "relative inline-block tracking-[8px]";
            if (index === 0 && character.toUpperCase() === "L") {
              return (
                <span key={index} className={baseClassName} style={{ animation: "ktl-letter-bounce 1800ms cubic-bezier(0.25,0.25,0.75,0.75) infinite" }}>
                  {character}
                </span>
              );
            }
            if (index === 4 && character.toLowerCase() === "i") {
              return (
                <span key={index} className={baseClassName} style={{ animation: "ktl-letter-stretch 1800ms cubic-bezier(0.25,0.23,0.73,0.75) infinite" }}>
                  {character === "i" ? "ı" : character}
                </span>
              );
            }
            return <span key={index} className={baseClassName}>{character}</span>;
          })}
        </p>
      </div>
    </div>
  );
}

export default KineticTextLoader;