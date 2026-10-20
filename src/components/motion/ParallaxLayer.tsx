"use client";

import { type ReactNode, type RefObject } from "react";
import { useParallaxOffset } from "@/lib/motion/useParallaxOffset";

type ParallaxLayerProps = {
  children: ReactNode;
  /** Section (or other stable root) used to measure scroll progress. */
  rootRef: RefObject<HTMLElement | null>;
  className?: string;
  /** Peak travel in px. Negative values move opposite to scroll. */
  amplitude?: number;
  /** Extra scale so edges don’t clip while translating. */
  scale?: number;
};

/**
 * Lightweight parallax wrapper for backgrounds or accent layers
 * inside a relatively positioned, overflow-hidden parent.
 */
export function ParallaxLayer({
  children,
  rootRef,
  className = "",
  amplitude = 56,
  scale = 1.08,
}: ParallaxLayerProps) {
  const { offset, reduceMotion } = useParallaxOffset(rootRef, { amplitude });

  return (
    <div
      className={`will-change-transform motion-reduce:transform-none ${className}`}
      style={{
        transform: reduceMotion
          ? undefined
          : `translate3d(0, ${offset}px, 0) scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
}
