"use client";

import { useState, useMemo, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Service } from "@/lib/services";
import { ServiceDetail } from "@/lib/service-details";
import dynamic from "next/dynamic";
import { subServicesData } from "@/lib/sub-services";

// Lazy load heavy components for better performance
// Note: loading message will use the common translations via the parent component
const SubServicesGrid = dynamic(() => import("@/components/sub-services-grid"));
const SpaceBackground = dynamic(() => import("@/components/space-background"), {
  ssr: false, // Client-side only for performance
});
const FloatingElements = dynamic(() => import("@/components/floating-elements"), {
  ssr: false, // Client-side only for performance
});

interface ServiceDetailClientProps {
  service: Service;
  detail: ServiceDetail;
  locale: string;
}

export default function ServiceDetailClient({ service, detail, locale }: ServiceDetailClientProps) {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Memoize service images to prevent recalculation
  const serviceImages = useMemo(() => {
    switch (service.id) {
      case "web-development":
        return ["/images/proj1.png", "/images/proj2.png", "/images/proj3.png", "/images/proj4.png"];
      case "custom-systems":
        return ["/sys.png", "/sys.png"];
      case "cybersecurity-solutions":
        return ["/images/services/cybersecurity-hero.jpg", "/images/services/cybersecurity.jpg"];
      default:
        return ["/images/proj1.png", "/images/proj2.png"];
    }
  }, [service.id]);

  // Memoize sub-services to prevent recalculation
  const subServices = useMemo(() => subServicesData[service.id] || [], [service.id]);

  // Optimized event handlers with useCallback
  const handleImageHover = useCallback((index: number) => {
    setHoveredImage(index);
  }, []);

  const handleImageLeave = useCallback(() => {
    setHoveredImage(null);
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Space Background - Same as Homepage */}
      <SpaceBackground />

      {/* Floating Code Elements - no code snippets boxes */}
      <FloatingElements density="low" showCodeSnippets={false} />

      {/* Hero Section with Enhanced Layered Images */}
      <motion.section 
        className="relative py-20 md:py-32 overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background decorative elements */}
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    {t(`${service.id}.title`)}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t(`${service.id}.description`)}
                </p>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100px", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </motion.div>

            {/* Grid Images for Web Development - Luxurious Hover Effect */}
            {service.id === "web-development" ? (
              <motion.div
                className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] order-1 lg:order-2 perspective"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                {serviceImages.map((image, index) => {
                  const isHovered = hoveredImage === index;
                  const otherIsHovered = hoveredImage !== null && hoveredImage !== index;

                  // Calculate position for stacked effect
                  const baseRotation = (index - 1.5) * 8; // -12, -4, 4, 12 degrees
                  const baseOffset = index * 15; // Progressive offset
                  const baseScale = 1 - (index * 0.05); // Slight scale decrease for depth

                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0 cursor-pointer group"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                      }}
                      animate={{
                        opacity: otherIsHovered ? 0.2 : 1,
                        scale: isHovered ? 1.12 : baseScale,
                        rotateZ: isHovered ? 0 : baseRotation,
                        x: isHovered ? 0 : (index % 2 === 0 ? -baseOffset : baseOffset),
                        y: isHovered ? 0 : baseOffset,
                        zIndex: isHovered ? 50 : (serviceImages.length - index),
                        filter: otherIsHovered
                          ? "blur(12px) brightness(0.6) saturate(0.7)"
                          : "blur(0px) brightness(1) saturate(1)",
                      }}
                      transition={{
                        opacity: { duration: 0.4, ease: "easeInOut" },
                        scale: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 },
                        rotateZ: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 },
                        x: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 },
                        y: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 },
                        filter: { duration: 0.4, ease: "easeInOut" },
                        zIndex: { duration: 0 },
                      }}
                      onMouseEnter={() => handleImageHover(index)}
                      onMouseLeave={handleImageLeave}
                    >
                      <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                        <Image
                          src={image}
                          alt={`${service.id} project ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700"
                          style={{
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          }}
                          sizes="(max-width: 768px) 80vw, 50vw"
                          priority={index < 2}
                          quality={85}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                          loading={index < 2 ? "eager" : "lazy"}
                        />

                        {/* Base gradient overlay - always present */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

                        {/* Enhanced gradient overlays on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15"
                          animate={{
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                        />

                        {/* Luxury shine effect on hover - wider and more elegant */}
                        {isHovered && (
                          <motion.div
                            className="absolute inset-0 opacity-100"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          >
                            <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                          </motion.div>
                        )}

                        {/* Corner accent lights on hover */}
                        {isHovered && (
                          <>
                            <motion.div
                              className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4 }}
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            />
                          </>
                        )}

                        {/* Elevated border glow on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
                          animate={{
                            boxShadow: isHovered
                              ? '0 20px 60px rgba(var(--primary),0.5), inset 0 0 30px rgba(255,255,255,0.15), 0 0 60px rgba(var(--secondary),0.3)'
                              : '0 0 0px rgba(var(--primary),0)',
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />

                        {/* Frame border effect on hover */}
                        {isHovered && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-primary/30 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl opacity-50" />

                {serviceImages.map((image, index) => {
                  const isFirst = index === 0;
                  const isHovered = hoveredImage === index;
                  const otherIsHovered = hoveredImage !== null && hoveredImage !== index;

                  return (
                    <motion.div
                      key={index}
                      className="absolute cursor-pointer"
                      style={{
                        // Better spacing - both images fully visible
                        left: isFirst ? '0' : '15%',
                        top: isFirst ? '0' : '12%',
                        right: isFirst ? '15%' : '0',
                        bottom: isFirst ? '12%' : '0',
                        transformOrigin: "center center",
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                        rotate: isFirst ? -2 : 2,
                      }}
                      animate={{
                        opacity: otherIsHovered ? 0.5 : 1,
                        scale: isHovered ? 1.05 : 1,
                        rotate: isHovered ? 0 : (isFirst ? -2 : 2),
                        zIndex: isHovered ? 30 : (isFirst ? 20 : 10),
                        filter: otherIsHovered ? "blur(5px) brightness(0.5)" : "blur(0px) brightness(1)",
                      }}
                      transition={{
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
                        rotate: { duration: 0.5 },
                        filter: { duration: 0.3 },
                        zIndex: { duration: 0 }
                      }}
                      onMouseEnter={() => handleImageHover(index)}
                      onMouseLeave={handleImageLeave}
                    >
                      <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                        <Image
                          src={image}
                          alt={`${service.id} example ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          quality={85}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                          loading={index === 0 ? "eager" : "lazy"}
                        />

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Shine effect on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        </motion.div>

                        {/* Border glow on hover */}
                        <div className={`absolute inset-0 rounded-2xl md:rounded-3xl transition-all duration-500 ${isHovered ? 'ring-2 ring-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.3)]' : ''}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* What Is Section */}
      <section className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {t(`${service.id}.whatIs.title`)}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {detail.whatIs[locale as "en" | "ar"]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-Services Grid - The Missing Section! */}
      {subServices.length > 0 && (
        <SubServicesGrid subServices={subServices} locale={locale} />
      )}

      {/* Why Your Business Needs It Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t(`${service.id}.whyNeed.title`)}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {detail.whyNeed[locale as "en" | "ar"].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4 rtl:space-x-reverse gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground flex-1">{reason}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Execute Section */}
      <section className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t(`${service.id}.howWeDo.title`)}
            </h2>
            <div className="space-y-8">
              {detail.howWeDo[locale as "en" | "ar"].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6 rtl:space-x-reverse gap-6"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t(`${service.id}.faq.title`)}
            </h2>
            <div className="space-y-4">
              {detail.faqs[locale as "en" | "ar"].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl border shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                        id={`faq-answer-${index}`}
                        role="region"
                      >
                        <div className="p-6 pt-0 text-muted-foreground">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(`${service.id}.cta.title`)}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t(`${service.id}.cta.description`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-white text-black rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors shadow-lg"
              >
                {t(`${service.id}.cta.primary`)}
              </motion.a>
              <motion.a
                href="https://wa.me/1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t(`${service.id}.cta.secondary`)}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
