import React from 'react';

const techStackData = [
  {
    category: "Frontend",
    items: ["React", "Nextjs", "Shadcn", "SCSS", "Tailwindcss", "Framer-Motion", "Recoil", "Tanstack Query"],
  },
  {
    category: "Backend",
    items: ["Nodejs", "Honojs", "Expressjs", "NPM"],
  },
  {
    category: "Db & Services",
    items: ["Cloudflare Workers", "Docker", "Appwrite", "Supabase", "Prisma ORM", "Postman", "Postgres", "MongoDB"],
  },
  {
    category: "Currently Learning",
    items: ["Rust"],
  },
];

const TechBadge = ({ name }: { name: string }) => (
  <div className="bg-secondary border border-border text-muted-foreground text-xs font-normal px-2 py-1 rounded-lg transition-colors hover:border-text-secondary hover:text-text-primary">
    {name}
  </div>
);

const TechStackSidebar = () => {
  return (
    <div className="flex flex-col h-full bg-background-primary border border-border rounded-xl group text-text-primary pb-2.5">
      <div className="h-max">
        <div className="flex pt-2.5">
          <p className="text-4xl px-2.5 font-bold"> {`{`} </p>
          <p className="text-4xl group-hover:px-2 transition-all duration-200 font-bold">{`}`}</p>
        </div>
        <h1 className="text-5xl font-extrabold py-2 px-2.5 relative w-full">
          TECH <br /> STACK
          <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-1 bg-text-primary rounded-full transition-all duration-500 group-hover:w-[80%]"></span>
        </h1>
      </div>

      <div className="relative mt-2 w-full grid grid-cols-1 overflow-y-auto flex-1 p-2 gap-5">
        {techStackData.map((section) => (
          <div key={section.category} className="flex flex-col p-1 gap-1">
            <p className="text-text-primary text-sm">{section.category}:</p>
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