
import React from "react";

const AnimatedLine: React.FC = () => {
  return (
    <div className="fixed top-[72px] w-full z-40"> {/* Position right under navbar */}
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
