"use client";

import { useEffect, useRef } from "react";

/**
 * Replaces the native pointer with a small ink dot and a soft trailing glow.
 * Skipped entirely on touch devices and when the user prefers reduced motion.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;
    const light = lightRef.current;
    if (coarse || reduced || !dot || !light) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    let targetX = -100;
    let targetY = -100;
    let dotX = targetX;
    let dotY = targetY;
    let lightX = targetX;
    let lightY = targetY;
    let visible = false;
    let frame = 0;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        dotX = lightX = targetX;
        dotY = lightY = targetY;
        dot.style.opacity = "1";
        light.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const interactive = target?.closest("a, button, [role='button']");
      dot.classList.toggle("is-link", Boolean(interactive));
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      light.style.opacity = "0";
    };

    const tick = () => {
      dotX += (targetX - dotX) * 0.55;
      dotY += (targetY - dotY) * 0.55;
      lightX += (targetX - lightX) * 0.16;
      lightY += (targetY - lightY) * 0.16;
      place(dot, dotX, dotY);
      place(light, lightX, lightY);
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    root.addEventListener("mouseleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      root.removeEventListener("mouseleave", onLeave);
      root.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={lightRef} className="cursor-light" aria-hidden="true" style={{ opacity: 0 }} />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" style={{ opacity: 0 }} />
    </>
  );
}
