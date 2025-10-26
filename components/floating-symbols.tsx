"use client";

import { motion } from "framer-motion";
import {
  Code,
  Braces,
  Terminal,
  Database,
  Server,
  Layers,
  Shield,
  Lock,
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

interface FloatingSymbolsProps {
  type: "code" | "system" | "security" | "contact";
}

const symbols = {
  code: [
    { Icon: Code, delay: 0, duration: 20 },
    { Icon: Braces, delay: 1.5, duration: 25 },
    { Icon: Terminal, delay: 3, duration: 22 },
    { Icon: Code, delay: 4.5, duration: 18 },
    { Icon: Braces, delay: 6, duration: 24 },
    { Icon: Terminal, delay: 7.5, duration: 19 },
    { Icon: Code, delay: 9, duration: 21 },
    { Icon: Braces, delay: 10.5, duration: 23 },
    { Icon: Terminal, delay: 12, duration: 20 },
    { Icon: Code, delay: 13.5, duration: 22 },
  ],
  system: [
    { Icon: Database, delay: 0, duration: 20 },
    { Icon: Server, delay: 1.5, duration: 23 },
    { Icon: Layers, delay: 3, duration: 21 },
    { Icon: Database, delay: 4.5, duration: 19 },
    { Icon: Server, delay: 6, duration: 22 },
    { Icon: Layers, delay: 7.5, duration: 24 },
    { Icon: Database, delay: 9, duration: 20 },
    { Icon: Server, delay: 10.5, duration: 21 },
    { Icon: Layers, delay: 12, duration: 23 },
    { Icon: Database, delay: 13.5, duration: 19 },
  ],
  security: [
    { Icon: Shield, delay: 0, duration: 20 },
    { Icon: Lock, delay: 1.5, duration: 24 },
    { Icon: ShieldCheck, delay: 3, duration: 22 },
    { Icon: Shield, delay: 4.5, duration: 18 },
    { Icon: Lock, delay: 6, duration: 21 },
    { Icon: ShieldCheck, delay: 7.5, duration: 23 },
    { Icon: Shield, delay: 9, duration: 19 },
    { Icon: Lock, delay: 10.5, duration: 22 },
    { Icon: ShieldCheck, delay: 12, duration: 20 },
    { Icon: Shield, delay: 13.5, duration: 24 },
  ],
  contact: [
    { Icon: Mail, delay: 0, duration: 20 },
    { Icon: Phone, delay: 1.5, duration: 23 },
    { Icon: MessageCircle, delay: 3, duration: 21 },
    { Icon: Instagram, delay: 4.5, duration: 19 },
    { Icon: Linkedin, delay: 6, duration: 22 },
    { Icon: Github, delay: 7.5, duration: 24 },
    { Icon: Mail, delay: 9, duration: 21 },
    { Icon: Phone, delay: 10.5, duration: 20 },
    { Icon: MessageCircle, delay: 12, duration: 23 },
    { Icon: Instagram, delay: 13.5, duration: 22 },
  ],
};

const positions = [
  { x: "10%", y: "15%" },
  { x: "85%", y: "25%" },
  { x: "15%", y: "70%" },
  { x: "80%", y: "65%" },
  { x: "50%", y: "40%" },
  { x: "25%", y: "50%" },
  { x: "70%", y: "20%" },
  { x: "35%", y: "80%" },
  { x: "60%", y: "55%" },
  { x: "40%", y: "30%" },
];

export default function FloatingSymbols({ type }: FloatingSymbolsProps) {
  const selectedSymbols = symbols[type];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {selectedSymbols.map(({ Icon, delay, duration }, index) => {
        const position = positions[index % positions.length];

        return (
          <motion.div
            key={`${type}-${index}`}
            className="absolute"
            style={{
              left: position.x,
              top: position.y,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: [0, 0.6, 0.4, 0.7, 0],
              scale: [0, 1.2, 0.8, 1, 0],
              rotate: [0, 180, 360],
              y: [0, -100, -200],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon className="w-12 h-12 text-primary/40" />
              </motion.div>
              {/* Main icon */}
              <Icon className="w-12 h-12 text-primary/60 relative z-10" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
