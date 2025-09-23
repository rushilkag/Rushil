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
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/motion-3.svg?",
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
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/t3-5.svg?",
    alt: "tools",
    padding: "p-[5px]",
    opacityClass: "opacity-80",
  },
];

const DailyToolsSection = () => {
  return (
    <div className="w-full h-full bg-transparent border-none">
      <div className="h-full grid grid-cols-1 sm:grid-cols-5 max-sm:gap-2">
        <div className="row-start-2 sm:row-start-auto sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-8">
          <div className="h-full p-px border w-max mx-auto rounded-3xl border-border bg-transparent">
            <div className="relative w-max border border-border rounded-3xl flex flex-col items-center justify-center h-full gap-2.5 max-sm:px-3 px-2 py-2 mx-auto max-sm:flex-row flex-wrap max-sm:w-full bg-zinc-800/10 backdrop-blur-2xl">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white aspect-square w-[3rem] max-sm:max-w-[2.75rem] p-0 rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/40 opacity-90"
                >
                  <Image
                    alt={tool.alt}
                    width={40}
                    height={40}
                    className={`w-full aspect-square ${tool.padding} ${tool.opacityClass}`}
                    src={tool.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3">
          <div className="flex flex-col items-start justify-center gap-0 text-white">
            <h1 className="text-4xl max-sm:text-5xl font-extrabold font-mono">
              DAILY
            </h1>
            <p className="text-3xl max-sm:text-4xl">Tool</p>
            <h1 className="text-[2.7rem] max-sm:text-7xl leading-[2.8rem] font-bold">
              STACK.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyToolsSection;