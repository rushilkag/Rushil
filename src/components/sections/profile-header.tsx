"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ProfileHeader = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const timeString = now.toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });
            setCurrentTime(timeString);
        };

        update();
        const timer = setInterval(update, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            role="button"
            aria-label="Draggable element"
            className="relative flex w-full rounded-xl border border-[var(--color-border)] transform-gpu bg-background-primary [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10 max-sm:h-max p-0.5 !border-[var(--color-border)]/70"
        >
            <div className="w-full h-full">
                <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-text-primary border border-[var(--color-border)] rounded-xl bg-[var(--color-background-primary)]">
                    <div className="w-full flex justify-between items-start">
                        <div className="flex gap-3">
                            <Image
                                alt="profile"
                                width="1024"
                                height="1024"
                                className="size-16 rounded-3xl opacity-90 [box-shadow:2px_2px_85px_0px_#ffffff]/90"
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/next-859156-pfp.jpg?"
                            />
                            <div>
                                <p className="font-bold text-lg">Shawn.</p>
                                <p className="text-md font-mono text-zinc-400/80">@zzzzshawn</p>
                            </div>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-9 w-9 rounded-full !border-none bg-transparent">
                            <p className="w-[1.2rem] scale-100 transition-all duration-100 text-white font-bold hover:[box-shadow:1px_1px_50px_-1px_#fff] bg-none rounded-full">夜</p>
                            <p className="absolute w-[1.2rem] scale-0 transition-all duration-100 text-zinc-500 font-bold hover:[box-shadow:1px_1px_50px_20px_#c6c6c650] bg-none rounded-full">朝</p>
                        </button>
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                        <div className="font-bold w-full flex items-center justify-start gap-1">
                            <p className="inline text-lg">I build </p>
                            <div className="min-w-[5.5rem]">
                                <div className="[filter:url(#threshold)_blur(0.6px)] w-full text-lg leading-none text-center relative font-sans font-bold max-w-screen-md mx-auto">
                                    <span className="w-full inline-block inset-x-0 top-0 m-auto">WebApps</span>
                                    <span className="absolute w-full inline-block inset-x-0 top-0 m-auto">Backends</span>
                                    <svg id="filters" className="hidden">
                                        <defs>
                                            <filter id="threshold">
                                                <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <p>.</p>
                        </div>
                        <div className="w-full">
                            <p className="text-sm">Hello, I’m Shawn! a 22 year old developer based in Goa - India.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-5 right-5">
                        <div className="font-mono flex justify-end items-center gap-1 text-sm text-zinc-400">
                            <div className="size-1.5 rounded-full bg-[#00ff00]"></div>
                            <p className="text-xs">Available for work</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <time className="text-[10px] font-light text-zinc-500 font-mono tabular-nums tracking-wider" aria-label="Current time">
                                {currentTime}
                            </time>
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-5 max-sm:hidden">
                        <div className="w-full">
                            <p className="text-xs font-mono text-zinc-400/70">
                                “How do i center <br /> a div again??"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;