"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type UseParallaxOffsetOptions = {
  /** Peak travel in px at the ends of the scroll range. Negative = opposite direction. */
  amplitude?: number;
  /** Lerp factor toward the target each frame (0–1). */
  smoothing?: number;
};

/**
 * Smooth scroll-linked vertical offset for a section element.
 * Returns 0 when the user prefers reduced motion.
 */
export function useParallaxOffset(
  sectionRef: RefObject<HTMLElement | null>,
  { amplitude = 64, smoothing = 0.12 }: UseParallaxOffsetOptions = {},
) {
  const targetOffset = useRef(0);
  const currentOffset = useRef(0);
  const frameRef = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      targetOffset.current = 0;
      currentOffset.current = 0;
      setOffset(0);
      return;
    }

    const tick = () => {
      const delta = targetOffset.current - currentOffset.current;
      if (Math.abs(delta) > 0.15) {
        currentOffset.current += delta * smoothing;
        setOffset(currentOffset.current);
      } else if (currentOffset.current !== targetOffset.current) {
        currentOffset.current = targetOffset.current;
        setOffset(currentOffset.current);
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const scrollProgress = Math.min(
        1,
        Math.max(0, (viewport - rect.top) / (viewport + rect.height)),
      );
      targetOffset.current = (scrollProgress - 0.5) * amplitude;
    };

    frameRef.current = requestAnimationFrame(tick);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [amplitude, reduceMotion, sectionRef, smoothing]);

  return { offset, reduceMotion };
}
