import Image from "next/image";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Decorative Waves SVG; hidden on smaller screens */}
      <div className="relative max-sm:hidden self-center w-[90%]">
        <Image
          alt="Decorative blue waves"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/waves-6.svg?"
          width={300}
          height={100}
          className="opacity-90 object-contain w-full"
        />
      </div>

      {/* Album Art with hover effect for play button */}
      <div className="group relative rounded-3xl">
        <Image
          alt="Album art for Fox on the Run by Sweet"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/next-181273-fox.png?"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover rounded-3xl"
        />
        <a
          href="https://open.spotify.com/track/4yJZP61jBhVTesHBZ0gpQn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play Fox on the Run on Spotify"
          className="border border-border/10 absolute size-10 bottom-3 right-3 translate-y-7 scale-50 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all rounded-full flex items-center justify-center duration-300 p-px bg-zinc-800/30 backdrop-blur-2xl backdrop-saturate-200 max-sm:group-hover:scale-150 max-sm:bottom-7 max-sm:right-7 max-sm:translate-y-12"
        >
          <div className="border p-2.5 rounded-full border-border/30">
            <Image
              alt="Play button icon"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/play-7.svg?"
              width={30}
              height={30}
              className="size-full aspect-square invert"
            />
          </div>
        </a>
      </div>

      {/* Song Information */}
      <div className="flex items-start justify-between w-full text-foreground max-sm:items-center">
        <div className="flex flex-col">
          <a
            href="https://open.spotify.com/track/4yJZP61jBhVTesHBZ0gpQn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-md font-bold hover:underline"
          >
            Fox on the Run
            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </a>
          <p className="text-xs text-muted-foreground">By: Sweet</p>
        </div>
        <p className="text-xs text-muted-foreground">2016</p>
      </div>
    </div>
  );
};

export default MusicPlayer;