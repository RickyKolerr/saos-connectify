
import { useEffect, useState } from "react";

const AnimatedNavLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      
      // Calculate scroll percentage (0-100)
      const scrollPercentage = Math.min(
        Math.max((currentScrollY / documentHeight) * 100, 0),
        100
      );
      
      // Determine scroll direction
      setIsScrollingUp(currentScrollY < lastScrollTop);
      setLastScrollTop(currentScrollY);
      
      // Set scroll position for animation
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent overflow-hidden">
      <div 
        className={`h-full transition-all duration-300 ease-out ${
          isScrollingUp ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" : 
                        "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        }`}
        style={{ 
          width: `${scrollPosition}%`,
          opacity: scrollPosition > 3 ? 1 : 0,
          boxShadow: scrollPosition > 3 ? "0 0 8px rgba(168, 85, 247, 0.6)" : "none"
        }}
      />
    </div>
  );
};

export default AnimatedNavLine;
