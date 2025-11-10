import { motion } from "motion/react";

// Generate contribution data for the last ~52 weeks
const generateContributions = () => {
  const weeks = 52;
  const daysPerWeek = 7;
  const contributions = [];
  
  for (let week = 0; week < weeks; week++) {
    const weekData = [];
    for (let day = 0; day < daysPerWeek; day++) {
      const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
      weekData.push(level);
    }
    contributions.push(weekData);
  }
  
  return contributions;
};

const getColorClass = (level: number) => {
  const colors = [
    "bg-gray-800/50",
    "bg-green-900/50",
    "bg-green-700/70",
    "bg-green-500/80",
    "bg-green-400",
  ];
  return colors[level];
};

export function ContributionGraph() {
  const contributions = generateContributions();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Card */}
      <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-white flex items-center gap-2">
            <span className="text-green-400">📊</span>
            Contribution Activity
          </h3>
          <span className="text-sm text-gray-400">Last 52 weeks</span>
        </div>
        
        {/* Contribution Grid */}
        <div className="overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((level, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 1.4 + (weekIndex * 0.01),
                      duration: 0.2,
                    }}
                    whileHover={{ scale: 1.5, zIndex: 10 }}
                    className={`w-3 h-3 rounded-sm ${getColorClass(level)} border border-gray-700/30 hover:border-green-400/50 transition-all cursor-pointer`}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-2 mt-4 justify-end">
          <span className="text-xs text-gray-500">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getColorClass(level)} border border-gray-700/30`}
            />
          ))}
          <span className="text-xs text-gray-500">More</span>
        </div>
      </div>
    </motion.div>
  );
}
