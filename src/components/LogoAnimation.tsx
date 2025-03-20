
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the animation after it completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds total for the animation

    return () => clearTimeout(timer);
  }, []);

  // If animation is done, don't render anything
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[100]"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like bounce effect
        }}
        className="relative w-32 h-32 flex items-center justify-center"
      >
        {/* Logo mark animation with staggered triangle reveal */}
        <svg width="128" height="128" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          {/* First triangle */}
          <motion.path 
            d="M32 8L48 32H16L32 8Z" 
            fill="white"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />
          {/* Second triangle */}
          <motion.path 
            d="M32 24L48 48H16L32 24Z" 
            fill="white"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          {/* Third triangle */}
          <motion.path 
            d="M32 40L48 64H16L32 40Z" 
            fill="white"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default LogoAnimation;
