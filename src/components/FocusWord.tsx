"use client";

import { useEffect, useState } from "react";

type Props = {
  words: readonly string[];
  intervalMs?: number;
  className?: string;
};

/** Cycles through a list of words; each new word fades in (the `key` restarts the CSS animation). */
export default function FocusWord({ words, intervalMs = 3400, className = "" }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs]);

  const word = words[index] ?? "";

  return (
    <span key={word} className={`focus-word ${className}`}>
      {word}
    </span>
  );
}
