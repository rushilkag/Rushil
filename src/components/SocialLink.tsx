"use client";

import { ReactNode, useRef } from "react";

type Props = {
  href: string;
  label: string;
  children: ReactNode;
};

/** Icon link with a slight magnetic pull toward the pointer. */
export default function SocialLink({ href, label, children }: Props) {
  const innerRef = useRef<HTMLSpanElement>(null);
  const external = /^https?:/i.test(href) || /\.pdf$/i.test(href);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
    const my = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
    el.style.setProperty("--mx", `${mx.toFixed(1)}px`);
    el.style.setProperty("--my", `${my.toFixed(1)}px`);
  };

  const onLeave = () => {
    const el = innerRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  };

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="social-link h-6 w-6 text-forest"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span ref={innerRef} className="social-inner">
        {children}
      </span>
    </a>
  );
}
