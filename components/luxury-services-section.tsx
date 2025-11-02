"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Code, Layers, Shield, Sparkles } from "lucide-react";
import { services } from "@/lib/services";
import { useRef, useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

interface LuxuryServicesSectionProps {
  mode?: "brief" | "detailed"; // brief for homepage, detailed for services page
}

export default function LuxuryServicesSection({ mode = "brief" }: LuxuryServicesSectionProps) {
  const t = useTranslations("services");
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform for parallax effects
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const serviceData = [
    {
      key: "webDev",
      service: services[0],
      icon: <Code className="h-8 w-8" />,
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
      accentColor: "text-blue-400",
      description: mode === "brief"
        ? "Transform your vision into powerful, scalable web applications. From e-commerce to corporate sites, we build experiences that convert."
        : "Elevate your digital presence with cutting-edge web development. We craft responsive, high-performance websites and web applications using the latest technologies like Next.js, React, and Node.js. Whether you need an e-commerce platform, corporate website, or custom web application, we deliver solutions that are fast, secure, and user-centric. Our expertise spans from elegant portfolios to complex booking systems, all optimized for search engines and designed to scale with your business growth.",
    },
    {
      key: "customSystems",
      service: services[1],
      icon: <Layers className="h-8 w-8" />,
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
      accentColor: "text-purple-400",
      description: mode === "brief"
        ? "Custom-built systems tailored to your business needs. CRM, inventory management, booking systems, and more."
        : "Revolutionize your operations with custom-built systems designed specifically for your business. We develop powerful solutions including CRM platforms, inventory management systems, hotel and clinic reservation systems, HR platforms, and event ticketing systems. Our approach combines deep business understanding with technical excellence, delivering systems that streamline your workflows, boost productivity, and provide actionable insights. Each solution is scalable, secure, and designed to integrate seamlessly with your existing infrastructure.",
    },
    {
      key: "cybersecurity",
      service: services[2],
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-red-500/20 via-orange-500/20 to-red-500/20",
      accentColor: "text-red-400",
      description: mode === "brief"
        ? "Protect your digital assets with comprehensive security solutions. Penetration testing, security monitoring, and consultation."
        : "Safeguard your business with enterprise-grade cybersecurity solutions. Our comprehensive services include penetration testing to identify vulnerabilities, digital forensics for incident investigation, 24/7 security monitoring, and expert consultation to build robust security frameworks. We help organizations across industries protect sensitive data, ensure regulatory compliance, and build resilience against cyber threats. From firewall implementation to security awareness training, we provide end-to-end protection for your digital infrastructure.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Header */}
        <motion.div
          style={{ opacity }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium tracking-wider uppercase">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          >
            {mode === "brief" ? t("title") : "Premium Digital Solutions"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-light"
          >
            {mode === "brief"
              ? t("subtitle")
              : "Comprehensive digital services designed to elevate your business to new heights"
            }
          </motion.p>
        </motion.div>

        {/* Luxury Services List */}
        <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
          {serviceData.map((item, index) => (
            <motion.div
              key={item.service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="group relative"
            >
              {/* Service Content Container */}
              <div className={`relative rounded-3xl border border-border/40 bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden`}>

                {/* Number Indicator */}
                <div className="absolute -left-4 -top-4 w-16 h-16 rounded-2xl bg-background border-2 border-primary/40 flex items-center justify-center">
                  <span className="text-2xl font-light text-primary">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Icon and Title Row */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-xl border border-primary/30 flex items-center justify-center ${item.accentColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 group-hover:text-primary transition-colors">
                      {t(`${item.key}.title`)}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Explore Button */}
                <Link
                  href={`/services/${item.service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 text-sm font-medium hover:from-primary/30 hover:to-secondary/30 hover:scale-105 transition-all duration-300 group/btn"
                >
                  <span>Explore {t(`${item.key}.title`)}</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                {/* Decorative gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`} />

                {/* Floating accent on hover */}
                {activeService === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl`}
                  />
                )}

                {/* BorderBeam effect */}
                <BorderBeam duration={12} size={150} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Only on services page */}
        {mode === "detailed" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your business with our premium solutions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
