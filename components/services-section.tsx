"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowUpRight, Code, Settings, Palette, Layers, Server, Shield } from "lucide-react";
import { services } from "@/lib/services";
import { BorderBeam } from "@/components/ui/border-beam";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6" />,
  Settings: <Settings className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
};

export default function ServicesSection() {
  const t = useTranslations("services");

  const serviceKeys = [
    { key: "webDev", service: services[0], featured: true, image: "/web%20dev1.webp" },
    { key: "customSystems", service: services[1], image: "/sys.png" },
    { key: "cybersecurity", service: services[2], image: "/images/services/cybersecurity.jpg" },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Enhanced Bento Grid Layout with Focus Effect */}
        <div className="relative">
          {/* Backdrop overlay when any card is hovered */}
          <div className="absolute inset-0 -inset-x-20 -inset-y-20 bg-background/30 dark:bg-background/40 backdrop-blur-[2px] opacity-0 group-has-[.service-card:hover]/grid:opacity-100 transition-all duration-700 pointer-events-none z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto auto-rows-[280px] sm:auto-rows-[300px] md:auto-rows-[320px] group/grid relative">
          {serviceKeys.map(({ key, service, featured, image }, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${featured 
                  ? "md:col-span-4 lg:col-span-4 md:row-span-2" 
                  : index === 1 
                    ? "md:col-span-2 lg:col-span-2" 
                    : index === 2 
                      ? "md:col-span-2 lg:col-span-2"
                      : "md:col-span-2 lg:col-span-3"
                }
                transition-all duration-700 ease-out
                group-has-[.service-card:hover]/grid:opacity-40
                group-has-[.service-card:hover]/grid:blur-[1px]
                group-has-[.service-card:hover]/grid:brightness-75
                hover:!opacity-100
                hover:!blur-0
                hover:!brightness-100
                hover:!scale-[1.03]
                hover:!z-[100]
                [&:has(.service-card:hover)]:translate-y-0
              `}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className={`service-card group relative h-full rounded-2xl md:rounded-3xl overflow-hidden border border-border/40 hover:border-primary/60 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.4)] hover:ring-2 hover:ring-primary/20 ${
                  featured
                    ? 'hover:translate-y-4'
                    : index === 1
                      ? 'hover:-translate-x-5 hover:translate-y-4'
                      : index === 2
                        ? 'hover:-translate-x-5'
                        : index === 3
                          ? 'hover:translate-x-4 hover:-translate-y-4'
                          : 'hover:-translate-x-4 hover:-translate-y-4'
                }`}>
                  {/* Background Image with Enhanced Visibility */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 brightness-95 dark:brightness-80"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                    {/* Optimized gradient overlay - Better visibility in light mode */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/75 dark:from-background/75 dark:via-background/70 dark:to-background/65 group-hover:from-background/80 group-hover:via-background/75 group-hover:to-background/70 dark:group-hover:from-background/70 dark:group-hover:via-background/65 dark:group-hover:to-background/60 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/40 dark:from-background/85 dark:via-background/50 dark:to-background/20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between z-10">
                    <div>
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-background/90 dark:bg-background/95 backdrop-blur-xl border border-primary/30 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300 mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 shadow-xl">
                        <div className="text-primary">
                          {iconMap[service.icon]}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`font-semibold md:font-light mb-2 sm:mb-3 md:mb-4 text-foreground dark:text-foreground group-hover:text-primary transition-colors ${featured ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl' : 'text-lg sm:text-xl md:text-2xl'}`}>
                        {t(`${key}.title`)}
                      </h3>

                      {/* Description */}
                      <p className={`text-foreground dark:text-foreground/80 font-light leading-relaxed ${featured ? 'text-sm sm:text-base md:text-lg max-w-2xl' : 'text-xs sm:text-sm md:text-base'}`}>
                        {t(`${key}.description`)}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground dark:text-foreground/80 group-hover:text-primary transition-all mt-3 sm:mt-4 md:mt-6">
                      <span className="tracking-wider uppercase">Explore</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                    {/* Decorative gradient orb */}
                    <div className="absolute top-1/2 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                  </div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* BorderBeam effect */}
                  <BorderBeam duration={10} size={120} />
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
