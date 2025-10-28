"use client";

import { portfolioProjects } from "@/lib/portfolio-data";
import PortfolioCard from "./portfolio-card";
import { motion } from "framer-motion";

interface PortfolioGridProps {
  locale: string;
}

export default function PortfolioGrid({ locale }: PortfolioGridProps) {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {locale === "ar" ? "أحدث مشاريعنا" : "Our Latest Projects"}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            {locale === "ar"
              ? "استكشف محفظة مشاريعنا المتنوعة التي تعكس خبرتنا وإبداعنا"
              : "Explore our diverse portfolio of projects that showcase our expertise and creativity"}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
