"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

// Generate random star positions
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 3,
  }));
};

// Code symbols to float around
const codeSymbols = [
  { text: "{}", size: "text-lg", delay: 0 },
  { text: "</>", size: "text-lg", delay: 2 },
  { text: "HTML", size: "text-sm", delay: 4 },
  { text: "CSS3", size: "text-sm", delay: 6 },
  { text: "JS", size: "text-base", delay: 8 },
  { text: "React", size: "text-sm", delay: 10 },
  { text: "=>", size: "text-lg", delay: 1 },
  { text: "[];", size: "text-base", delay: 3 },
  { text: "const", size: "text-xs", delay: 5 },
  { text: "async", size: "text-xs", delay: 7 },
  { text: "await", size: "text-xs", delay: 9 },
  { text: "API", size: "text-sm", delay: 2 },
  { text: "<>", size: "text-lg", delay: 11 },
  { text: "ts", size: "text-base", delay: 4 },
  { text: "npm", size: "text-xs", delay: 6 },
  { text: "∞", size: "text-2xl", delay: 8 },
];

interface CodeSymbolItem {
  id: number;
  text: string;
  size: string;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

interface CodeSpaceBackgroundProps {
  fixed?: boolean;
}

export default function CodeSpaceBackground({ fixed = false }: CodeSpaceBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  // Pause animations when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Generate stable positions for elements
  const { stars, floatingSymbols } = useMemo(() => {
    const generatedStars = generateStars(80);
    const symbols: CodeSymbolItem[] = codeSymbols.map((symbol, index) => ({
      id: index,
      text: symbol.text,
      size: symbol.size,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: symbol.delay,
    }));
    return { stars: generatedStars, floatingSymbols: symbols };
  }, []);

  const positionClasses = fixed ? "fixed inset-0" : "absolute inset-0";

  // Don't render animations if user prefers reduced motion or tab is hidden
  if (prefersReducedMotion || !isVisible) {
    return (
      <div className={`${positionClasses} pointer-events-none z-0 overflow-hidden bg-black`} />
    );
  }

  return (
    <div className={`${positionClasses} pointer-events-none z-0 overflow-hidden bg-black`}>
      {/* Pure black space background */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle nebula glow */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 50, 200, 0.15) 0%, rgba(50, 0, 100, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
            left: "-20%",
            top: "-20%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 150, 200, 0.1) 0%, rgba(0, 75, 150, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
            right: "-10%",
            bottom: "-10%",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating code symbols */}
      {floatingSymbols.map((symbol) => {
        const randomXOffset = (Math.random() - 0.5) * 200;
        const randomYOffset = -100 - Math.random() * 200;
        return (
          <motion.div
            key={`symbol-${symbol.id}`}
            className={`absolute font-mono font-bold pointer-events-none ${symbol.size}`}
            style={{
              left: `${symbol.startX}%`,
              top: `${symbol.startY}%`,
              color: "rgba(255, 255, 255, 0.25)",
              textShadow: "0 0 10px rgba(100, 200, 255, 0.3)",
              filter: "drop-shadow(0 0 8px rgba(100, 200, 255, 0.2))",
            }}
            animate={{
              y: [0, randomYOffset * 0.5, randomYOffset, 0],
              x: [0, randomXOffset * 0.5, randomXOffset, 0],
              opacity: [0.1, 0.3, 0.5, 0.3, 0.1],
              scale: [0.7, 0.9, 1.1, 0.9, 0.7],
              rotate: [0, 360],
            }}
            transition={{
              duration: symbol.duration,
              repeat: Infinity,
              delay: symbol.delay,
              ease: "easeInOut",
            }}
          >
            {symbol.text}
          </motion.div>
        );
      })}

      {/* Subtle grid overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(100, 200, 255, 0.02) 1px, transparent 1px),
            linear-gradient(0deg, rgba(100, 200, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "150px 150px",
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
