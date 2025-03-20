
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the animation after it completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500); // 3.5 seconds total for the animation

    return () => clearTimeout(timer);
  }, []);

  // If animation is done, don't render anything
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[100]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like bounce effect
        }}
        className="relative w-32 h-32 flex items-center justify-center"
      >
        {/* Custom rhombus/diamond shape logo animation */}
        <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          {/* Top rhombus */}
          <motion.path 
            d="M64 16L96 48L64 80L32 48L64 16Z" 
            fill="white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          
          {/* Middle rhombus */}
          <motion.path 
            d="M64 36L96 68L64 100L32 68L64 36Z" 
            fill="white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          
          {/* Bottom rhombus */}
          <motion.path 
            d="M64 56L96 88L64 120L32 88L64 56Z" 
            fill="white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default LogoAnimation;
