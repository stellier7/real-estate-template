"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { normalizeWasiImageUrl } from "@/lib/images/wasi-url";
import { useParallaxOffset } from "@/lib/motion/useParallaxOffset";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  minHeightClass?: string;
  imageClassName?: string;
};

export function ParallaxMedia({
  src,
  alt,
  priority,
  children,
  className = "",
  overlayClassName = "bg-gradient-to-t from-background via-background/45 to-background/15",
  minHeightClass = "min-h-[88vh]",
  imageClassName = "",
}: ParallaxMediaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { offset, reduceMotion } = useParallaxOffset(sectionRef, {
    amplitude: 72,
  });

  return (
    <section
      ref={sectionRef}
      className={`hero-shell relative overflow-hidden ${minHeightClass} ${className}`}
    >
      <div
        className="absolute inset-[-4%] will-change-transform motion-reduce:transform-none"
        style={{
          transform: reduceMotion
            ? undefined
            : `translate3d(0, ${offset}px, 0) scale(1.06)`,
        }}
      >
        <Image
          src={normalizeWasiImageUrl(src)}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover ${imageClassName}`.trim()}
        />
      </div>
      <div className={`absolute inset-0 ${overlayClassName}`} />
      {children}
    </section>
  );
}
