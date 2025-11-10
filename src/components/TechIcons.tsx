import { motion } from "motion/react";

const techStack = [
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "React Native", icon: "📱", color: "from-blue-400 to-cyan-500" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
  { name: "Redux", icon: "🔮", color: "from-purple-500 to-purple-600" },
  { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-teal-500" },
  { name: "Firebase", icon: "🔥", color: "from-orange-400 to-yellow-500" },
  { name: "Figma", icon: "🎨", color: "from-pink-400 to-purple-500" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
  { name: "GraphQL", icon: "◇", color: "from-pink-500 to-purple-600" },
];

export function TechIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7 + index * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
          />
          
          {/* Icon Container */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 w-20 h-20 flex items-center justify-center group-hover:border-gray-500/50 transition-all duration-300">
            <span className="text-4xl filter drop-shadow-lg">{tech.icon}</span>
          </div>
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {tech.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}