
import React, { useEffect, useRef } from "react";

const AnimatedLine: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      
      // Calculate position based on scroll
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const translateValue = scrollPercentage * 100; // Move based on scroll percentage
      
      // Apply the transform to move left/right
      lineRef.current.style.transform = `translateX(${translateValue}%)`;
      lineRef.current.style.opacity = Math.min(0.7 + scrollPercentage * 0.3, 1).toString();
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial position
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[72px] w-full z-40"> {/* Position right under navbar */}
      <div 
        ref={lineRef}
        className="h-[3px] w-full bg-white/60 transform transition-transform duration-300 ease-out animate-line-glow"
        style={{
          boxShadow: "0 0 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4)",
        }}
      />
    </div>
  );
};

export default AnimatedLine;
