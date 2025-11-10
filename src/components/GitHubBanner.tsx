import { motion } from "motion/react";
import { TechIcons } from "./TechIcons";
import { SkillBadges } from "./SkillBadges";
import { GitHubStats } from "./GitHubStats";
import { SocialLinks } from "./SocialLinks";
import { TypingAnimation } from "./TypingAnimation";
import { ProjectShowcase } from "./ProjectShowcase";
import { ContributionGraph } from "./ContributionGraph";
import { AchievementBadges } from "./AchievementBadges";

export function GitHubBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Banner Section */}
      <div className="relative overflow-hidden rounded-3xl p-1">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 blur-xl animate-pulse" />
        
        {/* Main Content Container */}
        <div className="relative bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#1E1E2F] rounded-3xl p-12">
          {/* Animated Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          
          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Header with Waving Hand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.h1
                  className="text-5xl md:text-6xl text-white"
                  style={{
                    textShadow: "0 0 30px rgba(96, 165, 250, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)"
                  }}
                >
                  Hi
                </motion.h1>
                <motion.span
                  className="text-5xl md:text-6xl inline-block"
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>
                <motion.h1
                  className="text-5xl md:text-6xl text-white"
                  style={{
                    textShadow: "0 0 30px rgba(96, 165, 250, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)"
                  }}
                >
                  , I'm Muhammad Mehroze Khan
                </motion.h1>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 blur-lg opacity-30" />
                <p className="relative text-xl md:text-2xl text-gray-300 px-6">
                  Lead React & React Native Developer | Building Scalable, High-Performance Apps
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>3+ Years of Experience</span>
                </div>
                
                {/* Typing Animation */}
                <TypingAnimation />
              </motion.div>
              
              {/* Social Links */}
              <SocialLinks />
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <TechIcons />
            </motion.div>

            {/* Skill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <SkillBadges />
            </motion.div>
          </div>
        </div>
      </div>

      {/* GitHub Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-8 space-y-8"
      >
        <GitHubStats />
        
        {/* Contribution Graph */}
        <ContributionGraph />
        
        {/* Achievement Badges */}
        <AchievementBadges />
        
        {/* Project Showcase */}
        <ProjectShowcase />
      </motion.div>
    </div>
  );
}