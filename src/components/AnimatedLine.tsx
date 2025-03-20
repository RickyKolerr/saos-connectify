
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
      lineRef.current.style.opacity = Math.min(0.8 + scrollPercentage * 0.4, 1).toString();
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial position
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-40">
      <div 
        ref={lineRef}
        className="h-[2px] w-full bg-white/40 transform transition-transform duration-300 ease-out"
        style={{
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3)",
        }}
      />
    </div>
  );
};

export default AnimatedLine;
