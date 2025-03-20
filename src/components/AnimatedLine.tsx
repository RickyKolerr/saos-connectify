
import React, { useState, useEffect } from "react";

const AnimatedLine: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show the line when at the top or scrolling up
      // Hide when scrolling down
      setVisible(currentScrollPos <= 0 || prevScrollPos > currentScrollPos);
      
      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Set initial state
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`fixed top-[72px] w-full z-40 transition-opacity duration-300 ${!visible ? 'opacity-0' : 'opacity-100'}`}>
      <div 
        className="h-[3px] w-full bg-white/60 transition-all duration-300 ease-out animate-line-glow"
        style={{
          boxShadow: "0 0 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4)",
        }}
      />
    </div>
  );
};

export default AnimatedLine;
