"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

// Generate star positions once and cache them - fixed precision for consistent hydration
const generateStarPositions = (count: number, seed: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.sin(seed * i * 12.9898 + i * 78.233) * 43758.5453;
    const y = Math.sin(seed * i * 45.164 + i * 91.653) * 43758.5453;
    const xFrac = x - Math.floor(x);
    const yFrac = y - Math.floor(y);
    stars.push({
      left: parseFloat((xFrac * 100).toFixed(4)),
      top: parseFloat((yFrac * 100).toFixed(4)),
      delay: parseFloat((xFrac * 3).toFixed(4)),
      duration: parseFloat((2 + (yFrac * 3)).toFixed(4)),
    });
  }
  return stars;
};

export default function SpaceBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  
  // Pause animations when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
  
  // Dramatically reduced star counts for performance
  const starPositions = useMemo(() => ({
    small: generateStarPositions(50, 1234), // Further reduced for better performance
    large: generateStarPositions(8, 5678), // Further reduced for better performance
  }), []);
  
  // Don't render animations if user prefers reduced motion or tab is hidden
  if (prefersReducedMotion || !isVisible) {
    return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Pure black space background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Small twinkling stars - heavily optimized */}
      {starPositions.small.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-[1px] h-[1px] bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}
      
      {/* Larger glowing stars - heavily optimized */}
      {starPositions.large.map((star, i) => (
        <motion.div
          key={`glow-star-${i}`}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            boxShadow: '0 0 4px 1px rgba(255,255,255,0.3)',
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: star.duration + 1,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}

      {/* Special Shining Stars - 3 Prominent Stars (Optimized) */}
      <motion.div
        className="absolute w-2.5 h-2.5 bg-white rounded-full"
        style={{
          left: '25%',
          top: '20%',
          boxShadow: '0 0 15px 5px rgba(255,255,255,0.5)',
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      />

      <motion.div
        className="absolute w-2.5 h-2.5 bg-white rounded-full"
        style={{
          left: '70%',
          top: '35%',
          boxShadow: '0 0 15px 5px rgba(255,255,255,0.5)',
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
          repeatType: "loop",
        }}
      />

      <motion.div
        className="absolute w-2.5 h-2.5 bg-white rounded-full"
        style={{
          left: '45%',
          top: '65%',
          boxShadow: '0 0 15px 5px rgba(255,255,255,0.5)',
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
          repeatType: "loop",
        }}
      />

      {/* Code Planet 1 - Top Left Area (Optimized - Slower rotation) */}
      <motion.div
        className="absolute left-[15%] top-[25%]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120, // Doubled duration for slower, smoother rotation
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="relative w-28 h-28">
          {/* Planet core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/8 to-white/4 border border-white/15" />
          
          {/* Code symbols orbiting - reduced count */}
          {['{', '}', '<', '>'].map((symbol, i) => {
            const angle = (360 / 4) * i;
            const radius = 45;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={i}
                className="absolute text-white/30 font-mono text-sm"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {symbol}
              </div>
            );
          })}
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/5 blur-lg" />
        </div>
      </motion.div>

      {/* Code Planet 2 - Bottom Right Area (Optimized - Slower rotation) */}
      <motion.div
        className="absolute right-[20%] bottom-[30%]"
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 150, // Slower rotation
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="relative w-32 h-32">
          {/* Planet core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/7 to-white/3 border border-white/12" />
          
          {/* Code symbols orbiting - reduced count */}
          {['[', ']', '=', '+'].map((symbol, i) => {
            const angle = (360 / 4) * i;
            const radius = 50;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={i}
                className="absolute text-white/30 font-mono text-xs"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {symbol}
              </div>
            );
          })}
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/5 blur-lg" />
        </div>
      </motion.div>
    </div>
  );
}
