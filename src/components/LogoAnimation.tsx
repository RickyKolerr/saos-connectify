
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the animation after it completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 4 seconds total for the animation

    return () => clearTimeout(timer);
  }, []);

  // If animation is done, don't render anything
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[100]"
    >
      {/* Background effects */}
      <motion.div 
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-900 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }} 
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-900 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }} 
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 0.5
          }}
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like bounce effect
        }}
        className="relative w-40 h-40 flex items-center justify-center"
      >
        {/* Particles around the logo */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0 
            }}
            animate={{ 
              x: Math.sin(i * 30 * Math.PI / 180) * 80, 
              y: Math.cos(i * 30 * Math.PI / 180) * 80,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              delay: 1 + i * 0.05,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Main logo shapes animation with shimmer effect */}
        <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          {/* Glowing backdrop for top hexagon */}
          <motion.path 
            d="M64 16 L88 30 L88 58 L64 72 L40 58 L40 30 Z" 
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="filter blur-[4px]"
          />
          
          {/* Top hexagon */}
          <motion.path 
            d="M64 16 L88 30 L88 58 L64 72 L40 58 L40 30 Z" 
            fill="white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          
          {/* Glowing backdrop for middle triangle */}
          <motion.path 
            d="M64 42 L94 87 L34 87 Z" 
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="filter blur-[4px]"
          />
          
          {/* Middle triangle */}
          <motion.path 
            d="M64 42 L94 87 L34 87 Z" 
            fill="white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          />
          
          {/* Glowing backdrop for bottom circle */}
          <motion.circle 
            cx="64" 
            cy="102" 
            r="18" 
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="filter blur-[4px]"
          />
          
          {/* Bottom circle */}
          <motion.circle 
            cx="64" 
            cy="102" 
            r="18" 
            fill="white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          />
          
          {/* Shimmer effect overlay */}
          <motion.rect
            x="0"
            y="0"
            width="128"
            height="128"
            fill="url(#shimmer)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: 1.5, 
              delay: 2,
              ease: "easeInOut"
            }}
          />
          
          {/* Define the shimmer gradient */}
          <defs>
            <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Pulsing ring around the logo */}
        <motion.div 
          className="absolute w-full h-full rounded-full border-2 border-white/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 1.5],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 2,
            delay: 2,
            ease: "easeOut" 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LogoAnimation;
