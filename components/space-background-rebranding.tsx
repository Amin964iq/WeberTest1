"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Color palette for rebranding
const COLORS = {
  dark: "#0F0108",      // Very dark brown/black
  red: "#FE1800",       // Bright red
  light: "#D7D8D8",     // Light gray
  pink: "#E0AEAA",      // Dusty pink
};

export default function SpaceBackgroundRebranding() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation settings based on your specs
  const ANIMATION_SETTINGS = {
    speed: 0.45,          // 45% speed
    distortion: 0.66,     // 66% distortion
    swirl: 0.45,          // 45% swirl
    grainMixer: 0.04,     // 4% grain mixer
    grainOverlay: 0.14,   // 14% grain overlay
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || prefersReducedMotion || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    let time = 0;

    const drawWavyBackground = () => {
      time += ANIMATION_SETTINGS.speed * 0.01;

      // Clear canvas with dark background
      ctx.fillStyle = COLORS.dark;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple layers of wavy distortion with different colors
      const layers = [
        { color: COLORS.red, yOffset: 0.2, amplitude: 80 },
        { color: COLORS.pink, yOffset: 0.4, amplitude: 120 },
        { color: COLORS.light, yOffset: 0.6, amplitude: 100 },
      ];

      layers.forEach((layer, layerIndex) => {
        ctx.fillStyle = layer.color;
        ctx.globalAlpha = 0.6 + layerIndex * 0.15;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height * layer.yOffset);

        // Create wavy pattern with distortion and swirl
        const waves = Math.floor(canvas.width / 60);
        for (let i = 0; i <= waves; i++) {
          const x = (i / waves) * canvas.width;

          // Primary wave
          const wave1 = Math.sin(x * 0.005 + time * 2) * layer.amplitude * ANIMATION_SETTINGS.distortion;

          // Secondary wave (creates more complex movement)
          const wave2 = Math.sin(x * 0.003 - time * 1.5 + layerIndex) * layer.amplitude * ANIMATION_SETTINGS.distortion * 0.6;

          // Swirl effect
          const swirl = Math.cos(time * 2 + i) * layer.amplitude * ANIMATION_SETTINGS.swirl * 0.5;

          // Combine all wave effects
          const totalWave = wave1 + wave2 + swirl;
          const y = canvas.height * layer.yOffset + totalWave;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Close the path to fill the wave area
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      });

      // Add grain texture overlay
      ctx.globalAlpha = ANIMATION_SETTINGS.grainOverlay;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Apply grain with mixer strength
      for (let i = 0; i < data.length; i += 4) {
        const grain = (Math.random() - 0.5) * (ANIMATION_SETTINGS.grainMixer * 200);
        data[i] += grain;     // Red
        data[i + 1] += grain; // Green
        data[i + 2] += grain; // Blue
      }

      ctx.putImageData(imageData, 0, 0);
      ctx.globalAlpha = 1;

      // Add subtle floating circles that intercept and create depth
      for (let i = 0; i < 4; i++) {
        const circleX = (canvas.width / 4) * (i + 1) + Math.sin(time + i) * 50;
        const circleY = canvas.height * 0.5 + Math.cos(time * 0.8 + i) * 100;
        const radius = 100 + Math.sin(time * 0.5 + i) * 30;

        const gradient = ctx.createRadialGradient(circleX, circleY, 0, circleX, circleY, radius);
        gradient.addColorStop(0, `${i % 2 === 0 ? COLORS.red : COLORS.pink}66`);
        gradient.addColorStop(1, `${COLORS.dark}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawWavyBackground);
    };

    drawWavyBackground();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [prefersReducedMotion, isVisible]);

  if (prefersReducedMotion || !isVisible) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ backgroundColor: COLORS.dark }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ backgroundColor: COLORS.dark }}
    />
  );
}
