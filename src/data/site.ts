// Everything about *you* lives here. Edit copy and links in this file;
// src/app/page.tsx only lays it out.

export const site = {
  name: "Rushil Kagithala",
  title: "Rushil Kagithala",
  description:
    "Rushil Kagithala is a Computer Science student at the University of Michigan who helped build Relay, a messaging platform that makes interacting with AI agents as simple as texting, and Swsh.",

  // Canonical URL, e.g. "https://rushilkagithala.com". Used for Open Graph tags.
  // Leave empty to let Vercel fill in the production URL automatically.
  url: "",

  // Favourite word (ikigai), shown above the name.
  word: "生き甲斐",

  email: "srkagithala@gmail.com",

  links: [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rushilreddykagithala/" },
    { id: "github", label: "GitHub", href: "https://github.com/rushilkag" },
    { id: "x", label: "X", href: "https://x.com/Rushilkag" },
    { id: "mail", label: "Email", href: "mailto:srkagithala@gmail.com" },
  ],

  relay: { label: "Relay", href: "https://relayapp.im" },
  swsh: { label: "Swsh", href: "https://www.joinswsh.com" },
} as const;

export type LinkId = (typeof site.links)[number]["id"];
