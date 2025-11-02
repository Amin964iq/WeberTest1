"use client";

import { motion } from "framer-motion";

export default function LuxuryBackground() {
  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Large nebula orbs */}
      <motion.div
        className="absolute top-1/4 -left-96 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(138, 43, 226, 0.6) 0%, rgba(75, 0, 130, 0.3) 30%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          x: [0, 200, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-96 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.5) 0%, rgba(30, 144, 255, 0.2) 35%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          x: [0, -250, 0],
          y: [0, -180, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mid-size cyan nebula */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 200, 0.4) 0%, rgba(0, 150, 200, 0.15) 40%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -120, 100, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink accent nebula */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, rgba(199, 21, 133, 0.1) 45%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          x: [0, -180, 100, 0],
          y: [0, 160, -80, 0],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle teal accent */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, rgba(0, 200, 200, 0.1) 50%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 120, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles - stars */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: [
              "rgba(138, 43, 226, 0.8)",
              "rgba(0, 191, 255, 0.7)",
              "rgba(255, 20, 147, 0.6)",
              "rgba(0, 255, 200, 0.7)",
              "rgba(255, 255, 255, 0.9)",
            ][particle.id % 5],
            boxShadow: "0 0 20px currentColor",
          }}
          animate={{
            y: [0, -200 - Math.random() * 300, 0],
            x: [0, (Math.random() - 0.5) * 200, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulsing grid overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 191, 255, 0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0, 191, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Slow rotating vignette */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Diagonal light sweep */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(138, 43, 226, 0.05) 20%, rgba(0, 191, 255, 0.05) 50%, rgba(138, 43, 226, 0.05) 80%, transparent 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
