"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortfolioProject } from "@/lib/portfolio-data";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "@/i18n/routing";

interface PortfolioCardProps {
  project: PortfolioProject;
  locale: string;
  index: number;
}

export default function PortfolioCard({
  project,
  locale,
  index,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isArabic = locale === "ar";

  return (
    <Link href={`/portfolio/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-pointer h-full"
      >
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-2xl mb-4 sm:mb-6">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} z-0`}
          />

          <Image
            src={project.image}
            alt={isArabic ? project.titleAr : project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            quality={80}
          />

          {/* Desktop Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center hidden md:flex"
          >
            <div className="text-center text-white space-y-3 px-4">
              <p className="text-sm font-medium uppercase tracking-wider">
                {isArabic ? "اعرض المشروع" : "View Project"}
              </p>
              <ArrowRight className="w-6 h-6 mx-auto group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Mobile View Project Button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 flex flex-col items-center justify-end pb-4 md:hidden">
            <button className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 px-6 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all">
              <ArrowRight className="w-4 h-4" />
              {isArabic ? "اعرض المشروع" : "View Project"}
            </button>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {isArabic ? project.categoryAr : project.category}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {isArabic ? project.titleAr : project.title}
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
            {isArabic ? project.descriptionAr : project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {[
              ...project.techStack.frontend,
              ...project.techStack.backend,
              ...(project.techStack.database || []),
            ]
              .slice(0, 3)
              .map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                >
                  {tech}
                </span>
              ))}
          </div>

          <div className="pt-2 space-y-1">
            {(isArabic ? project.highlightsAr : project.highlights)
              .slice(0, 2)
              .map((highlight, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span>{highlight}</span>
                </p>
              ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
