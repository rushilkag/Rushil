import React from 'react';

const experiences = [
  {
    role: "Co-Founder",
    company: "Raay",
    period: "May 2025 - Present",
    bullets: [
      "Creating the next generation of AI interns dedicated to startups keeping their teams lean and efficient",
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "RouteOne",
    period: "May 2025 - Present",
    bullets: [
      "Changing the car buying experience for the better",
    ]
  },
  {
    role: "Growth",
    company: "OpenNote(YC S25)",
    period: "July 2025 - Present",
    bullets: [
      "Empowering college students to learn better and providing a platform to think better",
    ]
  },
  {
    role: "Vice President",
    company: "180 Degrees Consulting",
    period: "Jan 2025 - Present",
    bullets: [
      "Did consulting work for startups in the AI, Edtech, and FinTech space",
    ]
  },
  {
    role: "Growth",
    company: "Swsh",
    period: "Aug 2024 - Jan 2025",
    bullets: [
      "Onboarded communities to make connections and create a community",
    ]
  },
  {
    role: "Founding Engineer",
    company: "Circlez",
    period: "Jan 2024 - June 2024",
    bullets: [
      "Developed a gamified version of task tracking for friend groups to achieve goals together",
    ]
  },
  {
    role: "VC Scout",
    company: "RevRoad",
    period: "May 2024 - June 2024",
    bullets: [
      "Scouted Edtech startups, met with founders, two companies which I scouted were invested in",
    ]
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-full h-full p-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-white">Experience</h2>
        <a
          href="/Kagithala, Rushil Resume .pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 hover:text-white transition-colors"
        >
          View Resume →
        </a>
      </div>
      
      <div className="space-y-4 h-[calc(100%-2rem)] overflow-y-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-zinc-600 pl-3">
            <div className="mb-2">
              <h3 className="font-semibold text-white text-sm">{exp.role}</h3>
              <p className="text-zinc-300 text-xs">{exp.company}</p>
              <p className="text-zinc-500 text-xs">{exp.period}</p>
            </div>
            <ul className="space-y-1">
              {exp.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="text-zinc-400 text-xs flex items-start font-bold">
                  <span className="mr-2 text-zinc-500">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;