"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShoppingCart,
  Briefcase,
  Newspaper,
  UtensilsCrossed,
  Building2,
  Target,
  GraduationCap,
  Calendar,
  Layout,
  Smartphone,
  Grid3x3,
  Palette,
  BarChart3,
  RefreshCw,
  Hotel,
  Package,
  Users,
  CreditCard,
  UserCog,
  Home,
  School,
  Ticket,
  RefreshCcw,
  Zap,
  Shield,
  FileEdit,
  Bug,
  Blocks,
  TrendingUp,
  Globe,
  Server,
  Network,
  Lock,
  Mail,
  Settings,
  CalendarClock,
  Search,
  Eye,
  QrCode,
  LucideIcon
} from "lucide-react";
import type { SubService } from "@/lib/sub-services";

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Briefcase,
  Newspaper,
  UtensilsCrossed,
  Building2,
  Target,
  GraduationCap,
  Calendar,
  Layout,
  Smartphone,
  Grid3x3,
  Palette,
  BarChart3,
  RefreshCw,
  Hotel,
  Package,
  Users,
  CreditCard,
  UserCog,
  Home,
  School,
  Ticket,
  RefreshCcw,
  Zap,
  Shield,
  FileEdit,
  Bug,
  Blocks,
  TrendingUp,
  Globe,
  Server,
  Network,
  Lock,
  Mail,
  Settings,
  CalendarClock,
  Search,
  Eye,
  QrCode,
};

interface SubServicesGridProps {
  subServices: SubService[];
  locale: string;
}

function SubServicesGrid({ subServices, locale }: SubServicesGridProps) {
  const isArabic = locale === "ar";
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-16 md:py-24 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic ? "خدماتنا التفصيلية" : "Our Detailed Services"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "نقدم مجموعة شاملة من الخدمات المتخصصة المصممة لتلبية احتياجاتك الفريدة"
              : "We offer a comprehensive range of specialized services designed to meet your unique needs"}
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subServices.map((subService, index) => {
            const IconComponent = iconMap[subService.icon];
            const title = isArabic ? subService.title.ar : subService.title.en;
            const description = isArabic ? subService.description.ar : subService.description.en;
            const usedFor = subService.usedFor
              ? (isArabic ? subService.usedFor.ar : subService.usedFor.en)
              : null;

            // Create alternating entrance animations
            const isEven = index % 2 === 0;
            const isThirdColumn = index % 3 === 2;

            // Different hover movements for variety
            const hoverVariants = [
              { y: -12, rotate: 2 },
              { y: -12, rotate: -2 },
              { y: -10, scale: 1.02 },
              { y: -14, x: 2 },
              { y: -14, x: -2 },
            ];
            const hoverVariant = hoverVariants[index % hoverVariants.length];

            return (
              <motion.div
                key={subService.id}
                initial={{
                  opacity: 0,
                  y: isEven ? 30 : -30,
                  x: isThirdColumn ? 20 : isEven ? -20 : 20,
                  rotate: isEven ? -5 : 5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  ...hoverVariant,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="relative h-auto min-h-[380px] rounded-2xl overflow-hidden border border-border/40 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_25px_80px_-20px_rgba(var(--primary),0.5)] backdrop-blur-sm bg-background/80">
                  {/* Background with Blur Effect */}
                  <div className="absolute inset-0">
                    {/* Animated gradient blob with continuous pulse */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 blur-3xl opacity-0 group-hover:opacity-60"
                      initial={{ scale: 0.8, rotate: 0 }}
                      animate={{
                        scale: [0.8, 0.9, 0.8],
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Icon as background with continuous float animation */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-8 group-hover:opacity-12"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 3, 0, -3, 0],
                        y: [0, -5, 0, 5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {IconComponent && (
                        <IconComponent className="w-64 h-64 text-primary/40" strokeWidth={0.5} />
                      )}
                    </motion.div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85 dark:from-background/98 dark:via-background/95 dark:to-background/90 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/80 dark:group-hover:from-background/95 dark:group-hover:via-background/90 dark:group-hover:to-background/85 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                    {/* Animated color accent */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col z-10">
                    {/* Icon with advanced animation and continuous bounce */}
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-500 mb-4 group-hover:shadow-lg group-hover:shadow-primary/30"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -10, 10, -10, 0],
                        transition: {
                          rotate: { duration: 0.5, ease: "easeInOut" },
                          scale: { duration: 0.3 }
                        }
                      }}
                    >
                      {IconComponent && (
                        <motion.div
                          animate={{
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <IconComponent className="w-7 h-7 text-primary group-hover:text-primary" strokeWidth={1.5} />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Title with animation */}
                    <motion.h3
                      className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-400 leading-tight"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {title}
                    </motion.h3>

                    {/* Description with stagger animation - truncated */}
                    <motion.p
                      className="text-sm text-muted-foreground group-hover:text-foreground/90 leading-relaxed mb-4 flex-grow transition-colors duration-400 line-clamp-3"
                      initial={{ opacity: 0.85 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {description}
                    </motion.p>

                    {/* Used For Badge */}
                    {usedFor && (
                      <div className="mt-auto">
                        <div className="relative">
                          {/* Decorative line */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                          <div className="pt-4">
                            <p className="text-xs font-medium text-primary/80 mb-2 uppercase tracking-wider">
                              {isArabic ? "مثالي لـ:" : "Perfect For:"}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              {usedFor}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Animated Bottom Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>

                  {/* Animated decorative corner elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />

                  {/* Enhanced floating particles effect - always visible but subtle */}
                  <motion.div
                    className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/60 group-hover:w-3 group-hover:h-3 transition-all"
                    animate={{
                      y: [0, -25, 0],
                      x: [0, 15, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-secondary/30 group-hover:bg-secondary/60 group-hover:w-3 group-hover:h-3 transition-all"
                    animate={{
                      y: [0, 25, 0],
                      x: [0, -15, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/25 group-hover:bg-primary/50"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(SubServicesGrid);
