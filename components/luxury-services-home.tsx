"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Code, Layers, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollSection from "@/components/scroll-section";
import FloatingSymbols from "@/components/floating-symbols";
import { useEffect, useState } from "react";

const services = [
  {
    key: "webDev",
    icon: Code,
    slug: "web-development",
    symbolType: "code" as const,
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    key: "customSystems",
    icon: Layers,
    slug: "custom-systems",
    symbolType: "system" as const,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
  {
    key: "cybersecurity",
    icon: Shield,
    slug: "cybersecurity-solutions",
    symbolType: "security" as const,
    gradient: "from-red-500/20 via-orange-500/20 to-amber-500/20",
  },
];

export default function LuxuryServicesHome() {
  const t = useTranslations("services");
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <ScrollSection
            key={service.key}
            id={`service-${service.slug}`}
            className="py-0"
            backgroundElements={<FloatingSymbols type={service.symbolType} />}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: isMobile ? true : false, amount: 0.3 }}
                  transition={{ duration: isMobile ? 0.5 : 1 }}
                  className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center"
                >
                  {/* Left Side - Icon & Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: isMobile ? true : false, amount: 0.3 }}
                    transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0 : 0.2 }}
                    className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative">
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} ${isMobile ? "blur-xl" : "blur-3xl"} ${isMobile ? "opacity-30" : "opacity-50"} rounded-full`}
                      />

                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative z-10 flex items-center justify-center h-[250px] sm:h-[320px] md:h-[350px] lg:h-[400px]"
                      >
                        <div className="relative">
                          {/* Rotating ring - Hidden on mobile for performance */}
                          {!isMobile && (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="absolute inset-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 border-2 border-primary/30 rounded-full"
                                style={{
                                  boxShadow: "0 0 60px rgba(var(--primary), 0.3)",
                                }}
                              />

                              {/* Counter-rotating ring */}
                              <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                  duration: 15,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="absolute inset-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 border border-secondary/20 rounded-full"
                                style={{ margin: "20px" }}
                              />
                            </>
                          )}

                          {/* Icon */}
                          <div className="relative z-20 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 flex items-center justify-center bg-background/80 backdrop-blur-xl rounded-full border border-primary/20 shadow-2xl">
                            <Icon className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Right Side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: isMobile ? true : false, amount: 0.3 }}
                    transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0 : 0.4 }}
                    className={index % 2 === 1 ? "lg:order-1" : ""}
                  >
                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: isMobile ? true : false, amount: 0.3 }}
                      transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : 0.6 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent py-2"
                      style={{ lineHeight: '1.4' }}
                    >
                      {t(`${service.key}.title`)}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: isMobile ? true : false, amount: 0.3 }}
                      transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : 0.7 }}
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
                    >
                      {t(`${service.key}.description`)}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: isMobile ? true : false, amount: 0.3 }}
                      transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : 0.8 }}
                    >
                      <Link href={`/services/${service.slug}`}>
                        <Button
                          size="sm"
                          className="group bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 text-sm px-5 py-2 h-auto shadow-lg hover:shadow-xl transition-all"
                        >
                          {t("learnMore")}
                          <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                        </Button>
                      </Link>
                    </motion.div>

                    {/* Decorative line */}
                    {!isMobile && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="h-px w-full max-w-md mt-12 bg-gradient-to-r from-primary/50 via-primary to-transparent origin-left rtl:origin-right"
                      />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </ScrollSection>
        );
      })}
    </>
  );
}
