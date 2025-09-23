import React from 'react';

const ActivityStats = () => {
  const stats = [
    { label: "Projects", value: "12+", icon: "🚀" },
    { label: "Coffee Cups", value: "∞", icon: "☕" },
    { label: "GitHub Commits", value: "500+", icon: "📝" },
    { label: "Years Experience", value: "[X]", icon: "⭐" }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="bg-zinc-800/50 rounded-lg p-3 text-center hover:bg-zinc-700/50 transition-colors">
            <div className="text-xl mb-1">{stat.icon}</div>
            <div className="text-sm font-bold text-white">{stat.value}</div>
            <div className="text-xs text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityStats;
