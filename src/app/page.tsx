import TechStackSidebar from "@/components/sections/tech-stack-sidebar";
import ProfileHeader from "@/components/sections/profile-header";
import DailyToolsSection from "@/components/sections/daily-tools";
import MusicPlayer from "@/components/sections/music-player";
import NarutoQuote from "@/components/sections/naruto-quote";
import ProjectLinks from "@/components/sections/project-links";
import SocialLinks from "@/components/sections/social-links";
import FooterClouds from "@/components/sections/footer-clouds";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-8 sm:grid-rows-5 gap-6 min-h-[calc(100vh-3rem)]">
          {/* Tech Stack Sidebar - Left column, spans multiple rows */}
          <div className="sm:col-span-2 sm:row-span-4">
            <TechStackSidebar />
          </div>

          {/* Profile Header - Main center section */}
          <div className="sm:col-span-4 sm:row-span-2">
            <ProfileHeader />
          </div>

          {/* Project Links - Right side */}
          <div className="sm:col-span-2 sm:row-span-3">
            <ProjectLinks />
          </div>

          {/* Daily Tools - Below tech stack */}
          <div className="sm:col-span-2 sm:row-span-1">
            <div className="h-full border border-[#404040] rounded-xl bg-[#2a2a2a] p-6">
              <DailyToolsSection />
            </div>
          </div>

          {/* Music Player - Center left */}
          <div className="sm:col-span-2 sm:row-span-1">
            <div className="h-full border border-[#404040] rounded-xl bg-[#2a2a2a] p-6">
              <MusicPlayer />
            </div>
          </div>

          {/* Naruto Quote - Center */}
          <div className="sm:col-span-1 sm:row-span-1">
            <div className="h-full border border-[#404040] rounded-xl bg-[#2a2a2a] p-6 flex items-end">
              <NarutoQuote />
            </div>
          </div>

          {/* Social Links - Center right */}
          <div className="sm:col-span-1 sm:row-span-1">
            <div className="h-full border border-[#404040] rounded-xl bg-[#2a2a2a] p-6">
              <SocialLinks />
            </div>
          </div>

          {/* Footer Clouds - Full width bottom */}
          <div className="sm:col-span-8 sm:row-span-1">
            <FooterClouds />
          </div>
        </div>
      </div>
    </div>
  );
}