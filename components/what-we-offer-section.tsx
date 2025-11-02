"use client";

import { motion } from "framer-motion";
import ScrollSection from "@/components/scroll-section";

interface WhatWeOfferSectionProps {
  locale: string;
}

export default function WhatWeOfferSection({ locale }: WhatWeOfferSectionProps) {
  const isRTL = locale === "ar";

  return (
    <ScrollSection id="what-we-offer" className="py-0" disableAnimation={true}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Single Centered Question */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center relative pb-8"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight relative inline-block pb-4"
            >
              {locale === "ar" ? "ماذا نقدم لكم" : "What do we offer"}
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -15, 0, 15, 0],
                  transition: {
                    scale: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    },
                    rotate: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }
                  }
                }}
                className="inline-block ml-2 text-primary"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))"
                }}
              >
                {locale === "ar" ? "؟" : "?"}
              </motion.span>
            </motion.h2>

          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
}
