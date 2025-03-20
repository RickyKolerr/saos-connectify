
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
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          {/* Logo mark animation */}
          <div className="relative w-16 h-16">
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
                style={{ top: index * 10 }}
              >
                <motion.svg 
                  width="64" 
                  height="16" 
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

          {/* Text animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src="/lovable-uploads/5f1d099d-fdf0-4de1-aae0-88b2d46418c3.png"
              alt="ORCHESITY"
              className="h-12"
              initial={{ filter: "blur(10px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-xs text-white/50 mt-2"
        >
          Powered by Kolerr Technologies
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoAnimation;
