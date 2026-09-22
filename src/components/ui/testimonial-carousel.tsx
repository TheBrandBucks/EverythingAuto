"use client";

import * as React from "react";
import { motion, type Transition } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCarouselItem {
  name: string;
  text: string;
  rating?: number;
  date?: string;
}

export interface TestimonialCarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TestimonialCarouselItem[];
  activeIndex?: number;
  defaultActiveIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  loop?: boolean;
  slideWidth?: number;
  rotationStep?: number;
  inactiveScale?: number;
  transition?: Transition;
  showControls?: boolean;
  showDots?: boolean;
  viewportClassName?: string;
  slideClassName?: string;
  cardClassName?: string;
  labelClassName?: string;
  controlsClassName?: string;
  onCardsMouseEnter?: () => void;
  onCardsMouseLeave?: () => void;
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  bounce: 0.14,
  duration: 0.9,
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function TestimonialCarousel({
  items,
  activeIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,
  loop = false,
  slideWidth = 280,
  rotationStep = 60,
  inactiveScale = 0.85,
  transition = DEFAULT_TRANSITION,
  showControls = true,
  showDots = true,
  viewportClassName,
  slideClassName,
  cardClassName,
  labelClassName,
  controlsClassName,
  onCardsMouseEnter,
  onCardsMouseLeave,
  className,
  onKeyDown,
  tabIndex,
  ...props
}: TestimonialCarouselProps) {
  const maxIndex = Math.max(0, items.length - 1);
  const [uncontrolledIndex, setUncontrolledIndex] = React.useState(() =>
    clamp(defaultActiveIndex, 0, maxIndex)
  );
  const currentIndex = clamp(activeIndex ?? uncontrolledIndex, 0, maxIndex);
  const safeSlideWidth = Math.max(180, slideWidth);
  const safeInactiveScale = clamp(inactiveScale, 0.5, 1);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  // Fixed pixel sizing (not aspect-ratio) so the card height is never at the mercy of
  // box-sizing/aspect-ratio quirks and always fits fully inside the viewport.
  const cardWidth = safeSlideWidth - 24;
  const cardHeight = Math.round(cardWidth * 1.45);
  const labelHeight = 56;
  const viewportHeight = cardHeight + labelHeight + 40;

  const selectSlide = React.useCallback(
    (nextIndex: number) => {
      if (!items.length) {
        return;
      }

      const resolvedIndex = loop
        ? (nextIndex + items.length) % items.length
        : clamp(nextIndex, 0, maxIndex);

      if (activeIndex === undefined) {
        setUncontrolledIndex(resolvedIndex);
      }

      onActiveIndexChange?.(resolvedIndex);
    },
    [activeIndex, items.length, loop, maxIndex, onActiveIndexChange]
  );

  if (!items.length) {
    return null;
  }

  const isPreviousDisabled = !loop && currentIndex === 0;
  const isNextDisabled = !loop && currentIndex === maxIndex;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectSlide(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(currentIndex + 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials carousel"
      tabIndex={tabIndex ?? 0}
      onKeyDown={handleKeyDown}
      className={cn("flex w-full flex-col items-center gap-6", className)}
      {...props}
    >
      <div
        className={cn("relative isolate w-full overflow-hidden", viewportClassName)}
        style={{ perspective: "1200px", height: viewportHeight }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 flex w-fit items-center"
          initial={false}
          animate={{ x: -(currentIndex * safeSlideWidth + safeSlideWidth / 2), y: "-50%" }}
          transition={transition}
        >
          {items.map((item, index) => {
            const isActive = currentIndex === index;
            const rating = item.rating ?? 5;
            const isExpanded = isActive && expandedIndex === index;
            const canReadMore = item.text.length > 110;

            return (
              <div
                key={`${item.name}-${index}`}
                className="shrink-0 px-3"
                style={{ width: safeSlideWidth, perspective: "1500px" }}
              >
                <motion.div
                  className={cn(
                    "flex w-full flex-col items-center gap-2 will-change-transform",
                    slideClassName
                  )}
                  animate={{
                    rotateY: (currentIndex - index) * rotationStep,
                    scale: isActive ? 1 : safeInactiveScale,
                  }}
                  transition={transition}
                  style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Show review from ${item.name}`}
                    aria-current={isActive ? "true" : undefined}
                    className="w-full cursor-pointer"
                    style={{ height: cardHeight }}
                    onClick={() => selectSlide(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        selectSlide(index);
                      }
                    }}
                    onMouseEnter={isActive ? onCardsMouseEnter : undefined}
                    onMouseLeave={isActive ? onCardsMouseLeave : undefined}
                  >
                    <div
                      style={{
                        boxShadow:
                          "inset 0 -2px 4px rgba(255,255,255,0.9), inset 0 2px 3px rgba(15,23,42,0.06), inset 0 -2px 3px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.08)",
                      }}
                      className={cn(
                        "flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-1 text-center",
                        cardClassName
                      )}
                    >
                      <Quote className="h-5 w-5 shrink-0 text-blue-600" />
                      <div className="flex shrink-0 items-center justify-center gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={cn(
                              "h-3.5 w-3.5",
                              starIndex < rating ? "fill-current text-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      <p
                        className={cn(
                          "text-base italic leading-relaxed text-gray-600",
                          isExpanded ? "overflow-y-auto" : "line-clamp-4"
                        )}
                      >
                        &quot;{item.text}&quot;
                      </p>
                      {canReadMore && isActive && (
                        <button
                          type="button"
                          className="shrink-0 text-xs font-semibold text-blue-600 underline hover:text-blue-800"
                          onClick={(event) => {
                            event.stopPropagation();
                            setExpandedIndex(isExpanded ? null : index);
                          }}
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                        </button>
                      )}
                    </div>
                  </div>

                  <motion.div
                    className={cn("text-center", labelClassName)}
                    animate={{
                      filter: isActive ? "blur(0px)" : "blur(2px)",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={transition}
                    style={{ minHeight: labelHeight }}
                  >
                    <h4 className="truncate font-bold text-gray-900">{item.name}</h4>
                    {item.date && (
                      <p className="whitespace-nowrap text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {showControls && (
        <div
          className={cn(
            "z-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-neutral-300/80 bg-neutral-200/70 px-2 text-neutral-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-100",
            controlsClassName
          )}
        >
          <button
            type="button"
            aria-label="Show previous testimonial"
            disabled={isPreviousDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-white/10"
            onClick={() => selectSlide(currentIndex - 1)}
          >
            <ChevronLeft className="size-5" />
          </button>

          {showDots && (
            <div className="flex items-center justify-center gap-2">
              {items.map((item, index) => (
                <button
                  key={`${item.name}-${index}`}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}: ${item.name}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full bg-current transition-[width,opacity] duration-300",
                    currentIndex === index ? "w-7 opacity-100" : "w-2 opacity-30"
                  )}
                  onClick={() => selectSlide(index)}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Show next testimonial"
            disabled={isNextDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-white/10"
            onClick={() => selectSlide(currentIndex + 1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TestimonialCarousel;
