import { motion } from "motion/react";
import { ExternalLink, Star, GitFork, Code } from "lucide-react";

const projects = [
  {
    name: "E-Commerce Mobile App",
    description: "Full-featured shopping app with real-time inventory and payment integration",
    tech: ["React Native", "TypeScript", "Redux"],
    stars: 42,
    forks: 12,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and reporting",
    tech: ["React", "Tailwind", "Recharts"],
    stars: 38,
    forks: 9,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Social Media Platform",
    description: "Feature-rich social platform with messaging and content sharing",
    tech: ["React Native", "Firebase", "Redux"],
    stars: 56,
    forks: 18,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Design System Library",
    description: "Comprehensive UI component library with theming support",
    tech: ["React", "TypeScript", "Tailwind"],
    stars: 64,
    forks: 21,
    color: "from-green-500 to-emerald-500",
  },
];

export function ProjectShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="space-y-4"
    >
      <h3 className="text-2xl text-white flex items-center gap-2 mb-6">
        <Code className="w-6 h-6 text-purple-400" />
        Featured Projects
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative group cursor-pointer"
          >
            {/* Animated Gradient Border */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-xl p-5 h-full group-hover:border-gray-600/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.name}
                </h4>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md border border-gray-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4 text-blue-400" />
                  <span>{project.forks}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
