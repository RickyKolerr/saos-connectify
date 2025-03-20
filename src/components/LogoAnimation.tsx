
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
      {/* Logo mark animation - only show the triangles */}
      <div className="relative w-24 h-24">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeOut"
            }}
            className="absolute"
            style={{ top: index * 16 }}
          >
            <motion.svg 
              width="96" 
              height="24" 
              viewBox="0 0 64 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 * index + 0.2,
                ease: "easeOut" 
              }}
            >
              <path d="M32 0L64 16H0L32 0Z" fill="white" />
            </motion.svg>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LogoAnimation;
