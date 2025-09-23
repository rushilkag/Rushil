import Image from "next/image";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full">

      {/* Song Information */}
      <div className="flex items-start justify-between w-full text-foreground max-sm:items-center">
        <div className="flex flex-col">
          <a
            href="https://open.spotify.com/track/2VvdnhGdRYqYCenXLh6rJ4"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-md font-bold hover:underline"
          >
            The Big Goodbye
            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </a>
          <p className="text-xs text-muted-foreground">By: AJR</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs text-muted-foreground">2025</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-xs text-green-400">Now Playing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;