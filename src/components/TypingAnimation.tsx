import { useState, useEffect } from "react";
import { motion } from "motion/react";

const roles = [
  "Lead React Developer",
  "React Native Expert",
  "TypeScript Enthusiast",
  "UI/UX Engineer",
  "Performance Optimizer",
  "Mobile App Architect",
];

export function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);
  
  return (
    <div className="flex items-center justify-center gap-2 min-h-[2rem]">
      <span className="text-lg text-gray-400">💼</span>
      <motion.span
        className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-purple-400 ml-1"
        />
      </motion.span>
    </div>
  );
}
