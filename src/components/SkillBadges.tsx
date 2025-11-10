import { motion } from "motion/react";

const skills = [
  "React.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Firebase",
  "REST APIs",
  "GraphQL",
  "Git & GitHub",
  "UI/UX Design",
  "Performance Optimization",
  "Jest & Testing",
  "CI/CD",
  "Agile/Scrum",
];

export function SkillBadges() {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg text-gray-400 mb-4">Tech Stack & Skills</h3>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="relative group"
          >
            {/* Animated Glow Border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            
            {/* Badge */}
            <div className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full px-5 py-2 group-hover:border-transparent transition-all duration-300">
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}