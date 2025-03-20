
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
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>

      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Orbital particles */}
        <div className="absolute inset-0">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/80 rounded-full top-1/2 left-1/2"
              initial={{ 
                x: 0, 
                y: 0,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: Math.sin(i * 15 * Math.PI / 180) * (50 + Math.random() * 10),
                y: Math.cos(i * 15 * Math.PI / 180) * (50 + Math.random() * 10),
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0] 
              }}
              transition={{ 
                duration: 2 + Math.random(),
                delay: 0.8 + i * 0.03,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Main logo container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="relative"
        >
          {/* The logo SVG */}
          <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {/* Pulsing backdrop */}
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 0.9],
                opacity: [0, 0.6, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: 1,
                repeatType: "reverse"
              }}
            />

            {/* Fluid Wave Shape 1 */}
            <motion.path
              d="M30,60 Q45,30 60,60 Q75,90 90,60"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Fluid Wave Shape 2 */}
            <motion.path
              d="M30,50 Q45,80 60,50 Q75,20 90,50"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />
            
            {/* Center point */}
            <motion.circle
              cx="60"
              cy="60"
              r="8"
              fill="white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            />

            {/* Animated gradient overlay */}
            <defs>
              <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            
            <motion.rect
              x="0"
              y="0"
              width="120"
              height="120"
              fill="url(#shineGradient)"
              initial={{ x: -120 }}
              animate={{ x: 120 }}
              transition={{ 
                duration: 1.5, 
                delay: 1.5,
                ease: "easeInOut"
              }}
            />
          </svg>

          {/* Echoing rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ 
              scale: [0.6, 1.5], 
              opacity: [0, 0.5, 0] 
            }}
            transition={{ 
              duration: 1.5, 
              delay: 1.8,
              times: [0, 0.3, 1]
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoAnimation;
