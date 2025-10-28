"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import FloatingElements from "@/components/floating-elements";
import { TextScramble } from "@/components/motion-primitives/text-scramble";

interface Project {
  id: number;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Business River",
    titleAr: "بيزنس ريفر",
    category: "Web Solutions",
    categoryAr: "حلول ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/business-river.png?updatedAt=1760266385644",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Laurenza",
    titleAr: "لورينزا",
    category: "Web Solutions",
    categoryAr: "حلول ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/laurenza1.png?updatedAt=1760265995796",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: 3,
    title: "Demiland",
    titleAr: "ديميلاند",
    category: "Web Solutions",
    categoryAr: "حلول ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/demiland1.png?updatedAt=1760265995753",
    color: "from-indigo-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Al-Saqi",
    titleAr: "الساقي",
    category: "Web Solutions",
    categoryAr: "حلول ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/alsaqi.png?updatedAt=1760265464972",
    color: "from-pink-500/20 to-blue-500/20",
  },
  {
    id: 5,
    title: "Doodle",
    titleAr: "دودل",
    category: "Web Solutions",
    categoryAr: "حلول ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/doodle.png?updatedAt=1760265464948",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 6,
    title: "Fay Flowers",
    titleAr: "فاي فلاورز",
    category: "Web Solutions",
    categoryAr: "حلول ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/fyayflowers.png?updatedAt=1760265464900",
    color: "from-cyan-500/20 to-purple-500/20",
  },
];

// Arabic character set for text scramble animation
const arabicChars = "ابتثجحخدذرزسشصضطظعغفقكلمنهويىءئؤةأإآ";
const englishChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Component for the hero word scramble with locale-aware character sets
function HeroWordScramble({
  label,
  index,
  locale
}: {
  label: string;
  index: number;
  locale: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const isArabic = locale === "ar";

  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
        <TextScramble
          className="relative text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/60 group-hover:text-foreground transition-colors"
          trigger={isHovered}
          duration={0.8}
          speed={0.04}
          characterSet={isArabic ? arabicChars : englishChars}
          as="div"
        >
          {label}
        </TextScramble>
      </div>
      <div className="h-px w-8 sm:w-10 md:w-12 mx-auto mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </motion.div>
  );
}

interface ModernHeroProps {
  locale: string;
}

export default function ModernHero({ locale }: ModernHeroProps) {
  const t = useTranslations("hero");
  const isRTL = locale === "ar";
  const controls = useAnimation();

  // Triple projects for seamless loop (no gaps)
  const duplicatedProjects = [...projects, ...projects, ...projects];

  React.useEffect(() => {
    // Continuous horizontal scroll animation
    const animateScroll = async () => {
      await controls.start({
        x: isRTL ? ["0%", "66.666%"] : ["0%", "-66.666%"],
        transition: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animateScroll();
  }, [controls, isRTL]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      {/* Code Snippets - Low Density (3-4 boxes) */}
      <FloatingElements density="low" showCodeSnippets={true} />

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-relaxed mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2 px-2 sm:px-4 md:px-0"
            style={{ lineHeight: '1.25' }}
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 group text-xs sm:text-sm px-4 sm:px-6 py-3 sm:py-2.5 h-auto min-h-[44px] sm:min-h-[40px] shadow-lg hover:shadow-xl transition-all"
              >
                {t("cta1")}
                <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-white dark:text-white border-white dark:border-white hover:bg-white/10 dark:hover:bg-white/10 text-xs sm:text-sm px-4 sm:px-6 py-3 sm:py-2.5 border-2 h-auto min-h-[44px] sm:min-h-[40px]"
              >
                {t("exploreServices")}
              </Button>
            </Link>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-3xl mx-auto mt-12 sm:mt-16 md:mt-20 px-4 sm:px-0"
          >
            {[
              { label: locale === "ar" ? "الكفاءة" : "EFFICIENCY" },
              { label: locale === "ar" ? "التسليم السريع" : "FAST DELIVERY" },
              { label: locale === "ar" ? "الجودة" : "QUALITY" },
            ].map((item, index) => (
              <HeroWordScramble
                key={index}
                label={item.label}
                index={index}
                locale={locale}
              />
            ))}
          </motion.div>
        </div>

        {/* Infinite Scrolling Projects Showcase */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12">
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-6 sm:gap-8 items-center"
              animate={controls}
              style={{ width: "fit-content" }}
            >
              {duplicatedProjects.map((project, index) => {
                // Create alternating tilt pattern
                const rotation = index % 3 === 0 ? -3 : index % 3 === 1 ? 2 : -1;
                const yOffset = index % 2 === 0 ? -10 : 10;

                return (
                  <Link href="/services/web-development" key={`${project.id}-${index}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 50, rotate: 0 }}
                      animate={{ opacity: 1, y: yOffset, rotate: rotation }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.08,
                        y: -20,
                        rotate: 0,
                        zIndex: 50,
                      }}
                      className="flex-shrink-0"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Card
                        className={`w-[300px] sm:w-[350px] md:w-[400px] h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden bg-gradient-to-br ${project.color} backdrop-blur-sm border-0 transition-all cursor-pointer group relative shadow-2xl hover:shadow-primary/30`}
                        style={{
                          transform: `perspective(1000px) rotateY(${isRTL ? rotation * 2 : -rotation * 2}deg)`,
                        }}
                      >
                      <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index < 3}
                        quality={75}
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                      {/* Headline Container */}
                      <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} z-10`}>
                        <div className="bg-black/50 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                          <h4 className="text-white font-bold text-sm md:text-base whitespace-nowrap">
                            {isRTL ? "مشاريعنا" : "Our Projects"}
                          </h4>
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                      </div>
                    </div>
                  </Card>
                    </motion.div>
                  </Link>
              );
              })}
            </motion.div>
          </div>

          {/* Subtle Gradient Fades - Hidden on Mobile */}
          <div
            className="hidden md:block absolute inset-y-0 left-0 pointer-events-none z-20"
            style={{
              width: '20%',
              background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.9) 50%, transparent 100%)'
            }}
          />
          <div
            className="hidden md:block absolute inset-y-0 right-0 pointer-events-none z-20"
            style={{
              width: '20%',
              background: 'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0.9) 50%, transparent 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

