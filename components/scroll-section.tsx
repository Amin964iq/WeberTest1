"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundElements?: React.ReactNode;
  disableAnimation?: boolean;
}

export default function ScrollSection({
  children,
  id,
  className = "",
  backgroundElements,
  disableAnimation = false,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile and disable animations for better performance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Content starts below (100vh) and moves up to center (0vh) then continues up (-100vh)
  // Faster transitions with tighter spacing
  const y = useTransform(scrollYProgress, [0, 0.4, 1], ["80vh", "0vh", "-80vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  // If animations are disabled or on mobile, render simple static section
  if (disableAnimation || isMobile) {
    return (
      <div
        ref={sectionRef}
        id={id}
        className={`relative py-20 ${className}`}
      >
        {/* Background Elements */}
        {backgroundElements && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {backgroundElements}
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      id={id}
      className="relative h-[80vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity, scale }}
          className={`relative w-full ${className}`}
        >
          {/* Background Elements with Animation */}
          {backgroundElements && (
            <div className="absolute inset-0 pointer-events-none z-0">
              {backgroundElements}
            </div>
          )}

          {/* Main Content */}
          <div className="relative z-10 w-full">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
