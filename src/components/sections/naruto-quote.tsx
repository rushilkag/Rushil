import Image from "next/image";

const PersonalQuote = () => {
  const quotes = [
    "Code, coffee, repeat ☕",
    "Building the future, one line at a time",
    "Dream it. Code it. Ship it. 🚀",
    "Turning ideas into reality",
    "Less talking, more coding"
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className="flex flex-col items-start justify-end gap-2 text-white h-full">
      <div className="flex-1 flex items-start">
        <p className="text-xs italic text-zinc-300 leading-relaxed">"{randomQuote}"</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-sm">💭</span>
        </div>
        <div>
          <p className="text-xs font-medium">Daily Motivation</p>
          <p className="text-xs text-zinc-400">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalQuote;