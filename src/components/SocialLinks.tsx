import { motion } from "motion/react";
import { Github, Linkedin, Mail, Globe, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "github.com/muhammadmehrozekhan",
    color: "hover:text-white hover:bg-gray-700",
    glow: "group-hover:from-gray-500 group-hover:to-gray-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/muhammadmehrozekhan/",
    color: "hover:text-white hover:bg-blue-600",
    glow: "group-hover:from-blue-500 group-hover:to-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mehrozeyounus@gmail.com",
    color: "hover:text-white hover:bg-red-600",
    glow: "group-hover:from-red-500 group-hover:to-red-600",
  },
  {
    name: "Portfolio",
    icon: Globe,
    url: "mehrozekhan.dev",
    color: "hover:text-white hover:bg-purple-600",
    glow: "group-hover:from-purple-500 group-hover:to-purple-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "@muhammadmehrozekhan",
    color: "hover:text-white hover:bg-sky-500",
    glow: "group-hover:from-sky-400 group-hover:to-sky-600",
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex items-center justify-center gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={`https://${link.url}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7 + index * 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${link.glow} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-all duration-300`} />
          
          {/* Icon Container */}
          <div className={`relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-3 ${link.color} transition-all duration-300`}>
            <link.icon className="w-5 h-5 text-gray-400 group-hover:text-inherit transition-colors" />
          </div>
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
          >
            {link.url}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
}
