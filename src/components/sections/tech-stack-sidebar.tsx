import React from 'react';

const techStackData = [
  {
    category: "Languages",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "C++", "SQL"],
    emoji: "🎨"
  },
  {
    category: "Backend", 
    items: ["Node.js", "Express",  "FastAPI", "GraphQL", "REST APIs"],
    emoji: "⚡"
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Vercel", "Supabase"],
    emoji: "☁️"
  },
  {
    category: "Tools & Others",
    items: ["Git", "VS Code", "Figma", "Postman", "Linear", "Notion", "Jira"],
    emoji: "🛠️"
  },
  {
    category: "Currently Learning",
    items: ["CI/CD", "Machine Learning"],
    emoji: "📚"
  },
];

const TechBadge = ({ name }: { name: string }) => (
  <div className="bg-white/10 border border-white/20 text-white/80 text-xs font-normal px-2 py-1 rounded-lg transition-colors hover:border-white/40 hover:text-white">
    {name}
  </div>
);

const TechStackSidebar = () => {
  return (
    <div className="flex flex-col h-full group text-white pb-2.5">
      <div className="h-max">
        <div className="flex pt-2.5">
          <p className="text-4xl px-2.5 font-bold"> {`{`} </p>
          <p className="text-4xl group-hover:px-2 transition-all duration-200 font-bold">{`}`}</p>
        </div>
        <h1 className="text-5xl font-extrabold py-2 px-2.5 relative w-full">
          TECH <br /> STACK
          <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-1 bg-white rounded-full transition-all duration-500 group-hover:w-[80%]"></span>
        </h1>
      </div>

      <div className="relative mt-2 w-full grid grid-cols-1 overflow-y-auto flex-1 p-2 gap-4">
        {techStackData.map((section) => (
          <div key={section.category} className="flex flex-col p-1 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{section.emoji}</span>
              <p className="text-white text-sm font-medium">{section.category}:</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {section.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSidebar;