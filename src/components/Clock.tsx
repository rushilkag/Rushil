"use client";

import { useEffect, useState } from "react";

type Props = { timeZone: string };

/** Live wall-clock for a fixed time zone. Renders a placeholder until mounted so SSR and client markup match. */
export default function Clock({ timeZone }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time ?? "  :  :     "}
    </span>
  );
}
