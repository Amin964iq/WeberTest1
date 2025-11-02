"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Code,
  Layers,
  Shield,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingSymbols from "@/components/floating-symbols";
import { getSubServicesByServiceId } from "@/lib/sub-services";
import { getSubServiceIcon } from "@/lib/sub-service-icons";

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

export default function LuxuryServicesFull() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      {services.map((service) => {
        const Icon = service.icon;
        const subServices = getSubServicesByServiceId(service.slug);

        return (
          <section
            key={service.key}
            id={`service-${service.slug}`}
            className="relative py-20 md:py-32 overflow-hidden"
          >
            {/* Floating Symbols Background */}
            <div className="absolute inset-0 pointer-events-none">
              <FloatingSymbols type={service.symbolType} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  {/* Icon with glow */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center justify-center mb-8"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-60 rounded-full scale-150`}
                      />
                      <div className="relative w-24 h-24 flex items-center justify-center bg-background/90 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-2xl">
                        <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 pb-8 leading-relaxed bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                  >
                    {t(`${service.key}.title`)}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                  >
                    {t(`${service.key}.description`)}
                  </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                  {subServices.slice(0, 6).map((subService, idx) => {
                    const Icon = getSubServiceIcon(subService.id);

                    return (
                    <motion.div
                      key={subService.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      className="group relative"
                    >
                      <div className="h-full p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
                        {/* Animated background particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl"
                          />
                          <motion.div
                            animate={{
                              scale: [1.2, 1, 1.2],
                              opacity: [0.05, 0.15, 0.05],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
                          />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start space-x-3 rtl:space-x-reverse mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground mb-2 pb-1 leading-relaxed group-hover:text-primary transition-colors">
                                {isArabic ? subService.title.ar : subService.title.en}
                              </h4>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {(isArabic ? subService.description.ar : subService.description.en).substring(0, 100)}...
                          </p>

                          {/* Show More Button */}
                          <Link href={`/services/${service.slug}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
                            >
                              <span>{tCommon("readMore")}</span>
                              <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform rtl:rotate-180" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                    );
                  })}
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mb-16"
                >
                  <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background border border-primary/20 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-30" />

                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl md:text-3xl font-light text-foreground">
                          {t("whyChoose")}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                        {t(`${service.key}.whyChoose`)}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-center"
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link href={`/services/${service.slug}`}>
                      <Button
                        size="sm"
                        className="group bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 text-sm px-6 py-2.5 h-auto shadow-xl hover:shadow-2xl transition-all"
                      >
                        {t("exploreService")}
                        <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                      </Button>
                    </Link>

                    <Link href="/portfolio">
                      <Button
                        size="sm"
                        variant="outline"
                        className="group border-white/30 text-white hover:bg-white/10 text-sm px-6 py-2.5 h-auto shadow-xl hover:shadow-2xl transition-all border"
                      >
                        {t("ourProjects")}
                        <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                      </Button>
                    </Link>
                  </div>

                  {/* Decorative lines */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-px w-full max-w-2xl mx-auto mt-16 bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
