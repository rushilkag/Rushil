"use client";

import TechStackSidebar from "@/components/sections/tech-stack-sidebar";
import ProfileHeader from "@/components/sections/profile-header";
import DailyToolsSection from "@/components/sections/daily-tools";
import MusicPlayer from "@/components/sections/music-player";
import PersonalQuote from "@/components/sections/naruto-quote";
import ProjectLinks from "@/components/sections/project-links";
import SocialLinks from "@/components/sections/social-links";
import FooterClouds from "@/components/sections/footer-clouds";
import ActivityStats from "@/components/sections/activity-stats";
import { useEffect } from "react";
//import Education from "@/components/sections/education";

export default function Home() {
  useEffect(() => {
    let vantaEffect: any = null;

    const initVanta = () => {
      if (typeof window !== 'undefined' && (window as any).VANTA && (window as any).THREE) {
        try {
          vantaEffect = (window as any).VANTA.FOG({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x21E6C1, // Aurora cyan
            midtoneColor: 0x7DF9FF,   // Light cyan
            lowlightColor: 0x9AE66E,  // Aurora green
            baseColor: 0x0B132B,      // Deep aurora blue
            blurFactor: 0.6,
            speed: 1,
            zoom: 1
          });
          console.log('Vanta effect initialized successfully');
        } catch (error) {
          console.error('Error initializing Vanta effect:', error);
        }
      } else {
        console.log('Waiting for VANTA and THREE.js to load...');
        setTimeout(initVanta, 200);
      }
    };

    // Start initialization after a short delay
    const timer = setTimeout(initVanta, 1000);

    return () => {
      clearTimeout(timer);
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Vanta.js Background */}
      <div id="vanta-bg" className="fixed inset-0 z-0 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B]"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto p-3">
        <div className="grid grid-cols-1 sm:grid-cols-8 sm:grid-rows-4 gap-2 h-[calc(100vh-1.5rem)] relative overflow-hidden">
          {/* Tech Stack Sidebar - Left column */}
          <div className="sm:col-span-2 sm:row-span-4">
            <div className="backdrop-blur-md bg-black/60 rounded-xl border border-white/30 h-full">
              <TechStackSidebar />
            </div>
          </div>

          {/* Profile Header - Main center section */}
          <div className="sm:col-span-4 sm:row-span-1">
            <div className="backdrop-blur-md bg-black/60 rounded-xl border border-white/30 h-full">
              <ProfileHeader />
            </div>
          </div>

          {/* Project Links - Right side */}
          <div className="sm:col-span-2 sm:row-span-4">
            <div className="backdrop-blur-md bg-black/60 rounded-xl border border-white/30 h-full overflow-hidden">
              <ProjectLinks />
            </div>
          </div>

          {/* Education Section - Below profile header */}
          <div className="sm:col-span-4 sm:row-span-1">
            <div className="w-full h-full backdrop-blur-md bg-black/60 border border-white/30 rounded-xl p-6">
              <div className="flex items-center gap-6 h-full">
                {/* University Logo */}
                <div className="flex-shrink-0">
                  <img
                    src="/umich.png"
                    alt="University of Michigan Logo"
                    className="w-24 h-70 rounded-lg object-contain"
                  />
                </div>
                
                {/* Education Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-white text-xl mb-2">University of Michigan</h3>
                  <p className="text-orange-400 text-lg mb-2">B.S.E. Data Science</p>
                  <p className="text-zinc-400 text-md">Ann Arbor, Michigan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Tools - Below education left */}
          <div className="sm:col-span-2 sm:row-span-2">
            <div className="h-full backdrop-blur-md bg-black/60 border border-white/30 rounded-xl p-3">
              <DailyToolsSection />
            </div>
          </div>

          {/* Music Player and Social Links - Stacked vertically */}
          <div className="sm:col-span-2 sm:row-span-2">
            <div className="h-full flex flex-col gap-2">
              {/* Music Player */}
              <div className="h-1/2 backdrop-blur-md bg-black/60 border border-white/30 rounded-xl p-3">
                <MusicPlayer />
              </div>
              
              {/* Social Links */}
              <div className="h-1/2 backdrop-blur-md bg-black/60 border border-white/30 rounded-xl p-3">
                <SocialLinks />
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}