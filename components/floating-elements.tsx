"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface FloatingElementsProps {
  density?: "low" | "medium" | "high";
  showCodeSnippets?: boolean; // Only show code snippets boxes if true
}

// Optimized: Generate paths only once and cache them - fixed precision for hydration
const generateSmoothPath = (index: number, seed: number) => {
  // Use seed for deterministic random generation
  const random = (i: number) => {
    const x = Math.sin(seed * i * 12.9898 + i * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const startX = parseFloat((random(index) * 100).toFixed(4));
  const startY = parseFloat((random(index + 100) * 100).toFixed(4));

  // Reduced waypoints for better performance
  const waypoints = 4; // Reduced from 6
  const path = {
    x: Array.from({ length: waypoints }, (_, i) => {
      if (i === 0) return startX;
      if (i === waypoints - 1) return startX;
      return parseFloat((random(index * 10 + i) * 100).toFixed(4));
    }),
    y: Array.from({ length: waypoints }, (_, i) => {
      if (i === 0) return startY;
      if (i === waypoints - 1) return startY;
      return parseFloat((random(index * 10 + i + 50) * 100).toFixed(4));
    })
  };

  return path;
};

const codeSnippets = [
  { text: "const create = () => {\n  render();\n}", color: "from-white/10 to-white/5" },
  { text: "<App>\n  <Router />\n</App>",  color: "from-white/10 to-white/5" },
  { text: "const API_KEY =\n  process.env;", color: "from-white/10 to-white/5" },
  { text: "async push() {\n  await API.push();\n}", color: "from-white/10 to-white/5" },
  { text: "import { useState }\n  from 'react';", color: "from-white/10 to-white/5" },
  { text: "function App() {\n  return <div />;\n}", color: "from-white/10 to-white/5" },
  { text: "export default\n  Component;", color: "from-white/10 to-white/5" },
  { text: "const data =\n  await fetch(url);", color: "from-white/10 to-white/5" },
  { text: "npm install\n  next@latest", color: "from-white/10 to-white/5" },
  { text: "git commit -m\n  'Update'", color: "from-white/10 to-white/5" },
  { text: "interface Props {\n  id: string;\n}", color: "from-white/10 to-white/5" },
  { text: "const config = {\n  api: '/api/v1'\n}", color: "from-white/10 to-white/5" },
];

const floatingSymbols = [
  "html", "</>", "CSS3", "{ }", "React", "[ ]", "npm", "API",
  "JS", "TS", "Vue", "Next", "Git", "Node", "SQL", "PHP",
  "Python", "Java", "C++", "Ruby", "Go", "Rust", "Docker", "AWS",
  "MongoDB", "Redis", "GraphQL", "REST", "JSON", "XML", "YAML",
  "Webpack", "Vite", "Babel", "ESLint", "Jest", "Cypress"
];

export default function FloatingElements({ density = "medium", showCodeSnippets = false }: FloatingElementsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Pause animations when tab is not visible (huge performance boost)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Hide code snippets when scrolling down from hero section
  useEffect(() => {
    if (!showCodeSnippets) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Hide code snippets after scrolling 400px (roughly past hero)
      setIsHeroVisible(scrolled < 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCodeSnippets]);
  
  // Element counts based on density
  const elementCounts = useMemo(() => ({
    snippets: showCodeSnippets && isHeroVisible ? (density === "high" ? 12 : density === "medium" ? 4 : 2) : 0, // Many more snippets for planet
    symbols: density === "high" ? 25 : density === "medium" ? 12 : 6, // More symbols
    dots: density === "high" ? 8 : density === "medium" ? 4 : 2,
    particles: density === "high" ? 15 : density === "medium" ? 8 : 4,
  }), [density, showCodeSnippets, isHeroVisible]);
  
  const visibleSnippets = useMemo(() => codeSnippets.slice(0, elementCounts.snippets), [elementCounts.snippets]);
  const visibleSymbols = useMemo(() => floatingSymbols.slice(0, elementCounts.symbols), [elementCounts.symbols]);
  
  // Don't render if user prefers reduced motion or tab is hidden
  if (prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Code snippet cards with optimized smooth movement */}
      {visibleSnippets.map((snippet, i) => {
        const path = generateSmoothPath(i, 1234); // Use consistent seed
        const duration = 80 + i * 20; // Slower = smoother

        return (
          <motion.div
            key={`snippet-${i}`}
            className="absolute"
            initial={{ 
              left: `${path.x[0]}%`, 
              top: `${path.y[0]}%`,
              opacity: 0,
            }}
            animate={{ 
              left: path.x.map(x => `${x}%`),
              top: path.y.map(y => `${y}%`),
              opacity: 1,
            }}
            transition={{
              left: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              top: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              opacity: { duration: 1, delay: i * 0.3 },
            }}
          >
            <div className={`relative backdrop-blur-md bg-gradient-to-br ${snippet.color} border border-white/10 rounded-xl px-4 py-3 shadow-2xl min-w-[160px] transform -translate-x-1/2 -translate-y-1/2 opacity-40`}>
              {/* Colored dot indicator */}
              <div className="absolute top-3 right-3 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              
              <pre className="text-xs font-mono text-white/60 leading-relaxed whitespace-pre">
                {snippet.text}
              </pre>

              {/* Subtle glow */}
              <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl -z-10" />
            </div>
          </motion.div>
        );
      })}

      {/* Floating code symbols with optimized movement */}
      {visibleSymbols.map((symbol, i) => {
        const path = generateSmoothPath(i + 10, 5678);
        const duration = 70 + i * 10; // Slower and smoother
        
        return (
          <motion.div
            key={`symbol-${i}`}
            className="absolute font-mono text-white/30 text-lg font-bold"
            initial={{ 
              left: `${path.x[0]}%`, 
              top: `${path.y[0]}%`,
              opacity: 0 
            }}
            animate={{ 
              left: path.x.map(x => `${x}%`),
              top: path.y.map(y => `${y}%`),
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              left: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              top: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Colored dots - highly optimized */}
      {[...Array(elementCounts.dots)].map((_, i) => {
        const path = generateSmoothPath(i + 20, 9012);
        const duration = 60 + i * 8;
        const colors = ['bg-white/20', 'bg-white/15'];
        
        return (
          <motion.div
            key={`dot-${i}`}
            className={`absolute w-2 h-2 rounded-full ${colors[i % colors.length]}`}
            initial={{ 
              left: `${path.x[0]}%`, 
              top: `${path.y[0]}%`,
              opacity: 0,
            }}
            animate={{ 
              left: path.x.map(x => `${x}%`),
              top: path.y.map(y => `${y}%`),
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              left: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              top: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        );
      })}

      {/* Small particles - heavily optimized */}
      {[...Array(elementCounts.particles)].map((_, i) => {
        const path = generateSmoothPath(i + 30, 3456);
        const duration = 70 + i * 5;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            initial={{
              left: `${path.x[0]}%`,
              top: `${path.y[0]}%`,
            }}
            animate={{
              left: path.x.map(x => `${x}%`),
              top: path.y.map(y => `${y}%`),
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              left: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              top: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        );
      })}

      {/* Large curved brackets - optimized, no rotation */}
      {['{', '}'].map((bracket, i) => {
        const path = generateSmoothPath(i + 50, 7890);
        const duration = 100 + i * 20;
        
        return (
          <motion.div
            key={`bracket-${i}`}
            className="absolute text-6xl font-mono text-white/5"
            initial={{
              left: `${path.x[0]}%`,
              top: `${path.y[0]}%`,
            }}
            animate={{ 
              left: path.x.map(x => `${x}%`),
              top: path.y.map(y => `${y}%`),
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              left: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              top: { 
                duration, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop",
              },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {bracket}
          </motion.div>
        );
      })}
    </div>
  );
}

