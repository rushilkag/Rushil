import React from 'react';

const MementoQuote = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="relative">
        {/* Main Quote */}
        <div className="mb-3">
          <p className="text-2xl font-serif text-white mb-1 tracking-wide font-medium">
            memento mori,
          </p>
          <p className="text-2xl font-serif text-white tracking-wide font-medium">
            memento vivere
          </p>
        </div>
        
        {/* Translation */}
        <div className="text-xs text-zinc-400 font-mono leading-relaxed">
          <p className="italic mb-1">(phr.) Remember you must</p>
          <p className="italic">die, so remember to live</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/2 -left-8 w-1 h-1 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -right-8 w-1 h-1 bg-white/10 rounded-full"></div>
      </div>
      
      {/* Subtle bottom accent */}
      <div className="mt-4 w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};

export default MementoQuote;
