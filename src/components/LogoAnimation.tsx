
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/lovable-uploads/5f1d099d-fdf0-4de1-aae0-88b2d46418c3.png"
          alt="ORCHESITY"
          className="h-24"
          initial={{ filter: "blur(8px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LogoAnimation;
