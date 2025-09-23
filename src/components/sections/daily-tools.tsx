"use client";

import Image from "next/image";

const tools = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/next-867662-vscode.png?",
    alt: "tools",
    padding: "p-2.5",
    opacityClass: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/v0-1.svg?",
    alt: "tools",
    padding: "p-1.5",
    opacityClass: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/dia-2.svg?",
    alt: "tools",
    padding: "p-2",
    opacityClass: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/figma_logo-4.svg?",
    alt: "tools",
    padding: "p-2",
    opacityClass: "",
  },
];

const DailyToolsSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Tools Stack */}
      <div className="flex flex-col items-center justify-center gap-2 mb-4">
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-[200px]">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white aspect-square w-[3rem] p-0 rounded-xl hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/40 opacity-90"
            >
              <Image
                alt={tool.alt}
                width={48}
                height={48}
                className={`w-full aspect-square ${tool.padding} ${tool.opacityClass}`}
                src={tool.src}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold font-mono text-white leading-tight">
          DAILY
        </h1>
        <p className="text-2xl text-white">Tool</p>
        <h1 className="text-3xl leading-tight font-bold text-white">
          STACK.
        </h1>
      </div>
    </div>
  );
};

export default DailyToolsSection;