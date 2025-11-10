import { motion } from "motion/react";
import {
  GitBranch,
  Star,
  GitFork,
  Activity,
  Users,
  GitPullRequest,
} from "lucide-react";

const stats = [
  {
    label: "Total Commits",
    value: "2,500+",
    icon: Activity,
    color: "text-green-400",
    trend: "+12%",
  },
  {
    label: "Repositories",
    value: "45+",
    icon: GitBranch,
    color: "text-blue-400",
    trend: "+8",
  },
  {
    label: "Stars Earned",
    value: "180+",
    icon: Star,
    color: "text-yellow-400",
    trend: "+24",
  },
  {
    label: "Pull Requests",
    value: "320+",
    icon: GitPullRequest,
    color: "text-purple-400",
    trend: "+15",
  },
  {
    label: "Followers",
    value: "1.2K",
    icon: Users,
    color: "text-pink-400",
    trend: "+45",
  },
  {
    label: "Contributions",
    value: "1,200+",
    icon: GitFork,
    color: "text-cyan-400",
    trend: "+18%",
  },
];

const topLanguages = [
  { name: "TypeScript", percentage: 45, color: "bg-blue-500" },
  {
    name: "JavaScript",
    percentage: 30,
    color: "bg-yellow-500",
  },
  {
    name: "CSS/Tailwind",
    percentage: 15,
    color: "bg-cyan-500",
  },
  { name: "Other", percentage: 10, color: "bg-gray-500" },
];

export function GitHubStats() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* GitHub Stats Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card */}
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            GitHub Statistics
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon
                    className={`w-4 h-4 ${stat.color}`}
                  />
                  <span className="text-xs text-gray-400">
                    {stat.label}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div className={`text-2xl ${stat.color}`}>
                    {stat.value}
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                    {stat.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Top Languages Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card */}
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-6 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-purple-400" />
            Most Used Languages
          </h3>

          <div className="space-y-4">
            {topLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.4,
                }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">
                    {lang.name}
                  </span>
                  <span className="text-gray-400">
                    {lang.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.percentage}%` }}
                    transition={{
                      delay: 1.4 + index * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className={`h-full ${lang.color} rounded-full relative`}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}