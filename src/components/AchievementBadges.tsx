import { motion } from "motion/react";
import { Trophy, Zap, Target, Award, Rocket, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top Contributor",
    description: "2024",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Zap,
    title: "Fast Coder",
    description: "1000+ commits",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Target,
    title: "Goal Achiever",
    description: "45 projects",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Award,
    title: "Code Quality",
    description: "A+ Rating",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Early Adopter",
    description: "Latest Tech",
    color: "from-red-400 to-orange-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: TrendingUp,
    title: "Growing",
    description: "180+ stars",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
];

export function AchievementBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="space-y-4"
    >
      <h3 className="text-2xl text-white text-center flex items-center justify-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-400" />
        Achievements & Milestones
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              delay: 1.6 + index * 0.1,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300`} />
            
            {/* Badge Card */}
            <div className={`relative ${achievement.bgColor} backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex flex-col items-center text-center group-hover:border-gray-600/50 transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-2 shadow-lg`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xs text-white mb-1">
                {achievement.title}
              </h4>
              <p className="text-xs text-gray-400">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
