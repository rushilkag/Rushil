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
            className="relative flex w-full h-full cursor-grab"
        >
            <div className="w-full h-full">
                <div className="flex flex-col overflow-hidden size-full relative z-10 p-4 items-start justify-between text-white">
                    <div className="w-full flex justify-between items-start">
                        <div className="flex gap-3">
                            <div className="relative">
                                <Image
                                    alt="profile"
                                    width="1024"
                                    height="1024"
                                    className="size-16 rounded-3xl opacity-90 [box-shadow:2px_2px_85px_0px_#ffffff]/90"
                                    src="/pfp.png"
                                />
                                <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 rounded-full border-2 border-[#1a1a1a] animate-pulse"></div>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Rushil Kagithala</p>
                                <p className="text-md font-mono text-zinc-400/80">@rushilkag</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-white font-bold text-sm leading-tight">
                            <div className="flex">
                                <span>生</span>
                                <span>き</span>
                            </div>
                            <div className="flex">
                                <span>甲</span>
                                <span>斐</span>
                            </div>
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex flex-col gap-2 flex-1 mt-4">
                        <div className="w-full">
                            <p className="text-sm font-bold">Hello! My name is Rushil Kagithala and I am a student at the University of Michigan. I am currently a junior studying Data Science. I have a passion for building things!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;