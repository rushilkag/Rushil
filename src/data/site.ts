// Everything about *you* lives here. Edit copy and links in this file;
// src/app/page.tsx only lays it out.

export const site = {
  name: "Rushil Kagithala",
  title: "Rushil Kagithala",
  description:
    "Rushil Kagithala is a Computer Science student at the University of Michigan, an incoming software engineer at Capital One, and co-founder of Relay, a messaging platform that makes interacting with AI agents as simple as texting.",

  // Canonical URL, e.g. "https://rushilkagithala.com". Used for Open Graph tags.
  // Leave empty to let Vercel fill in the production URL automatically.
  url: "",

  location: {
    label: "Ann Arbor",
    timeZone: "America/Detroit",
  },

  // The word after your name cycles through these.
  focusWords: ["curiosity", "building", "early", "coffee", "relay"],

  quote: {
    text: "The best way to predict the future is to invent it.",
    source: "Alan Kay",
  },

  email: "srkagithala@gmail.com",

  links: [
    { id: "resume", label: "Resume", href: "/resume.pdf" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rushilreddykagithala/" },
    { id: "github", label: "GitHub", href: "https://github.com/rushilkag" },
    { id: "x", label: "X", href: "https://x.com/Rushilkag" },
    { id: "mail", label: "Email", href: "mailto:srkagithala@gmail.com" },
  ],

  relay: { label: "Relay", href: "https://relayapp.im" },

  lastUpdated: "Nov 03, 2026",
} as const;

export type LinkId = (typeof site.links)[number]["id"];
