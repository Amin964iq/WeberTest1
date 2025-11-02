"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioProjects } from "@/lib/portfolio-data";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = (params.locale as string) || "ar";
  const isArabic = locale === "ar";

  // Find the project by slug
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <motion.section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-28 md:pt-32 pb-12 z-10">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
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

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
          >
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit"
            >
              <span className="text-xs sm:text-sm font-medium text-primary">
                {isArabic ? project.categoryAr : project.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {isArabic ? project.titleAr : project.title}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl"
            >
              {isArabic ? project.overviewAr : project.overview}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 w-full sm:w-auto px-6 py-3 h-auto min-h-[44px]">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              )}
              {(project.links.live || project.links.demo) && (
                <a href={project.links.live || project.links.demo} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="group text-white border-white/20 hover:bg-white/10 w-full sm:w-auto px-6 py-3 h-auto min-h-[44px] border-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {isArabic ? "زيارة المشروع" : "Visit Project"}
                  </Button>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Image - Large Featured Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-0`} />
              <Image
                src={project.image}
                alt={isArabic ? project.titleAr : project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                priority
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border border-primary/10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {isArabic ? "نظرة عامة" : "Overview"}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                {isArabic ? project.overviewAr : project.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {isArabic ? "المميزات الرئيسية" : "Key Features"}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {isArabic
                  ? "اكتشف المميزات التي تجعل هذا المشروع فريداً"
                  : "Discover the features that make this project special"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {(isArabic ? project.featuresAr : project.features).map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 sm:p-6 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">✓</span>
                    </div>
                    <p className="text-sm sm:text-base text-foreground">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {isArabic ? "مكدس التكنولوجيا" : "Technology Stack"}
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Frontend */}
              {project.techStack.frontend.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20"
                >
                  <h3 className="text-lg font-bold mb-4 text-blue-400">
                    {isArabic ? "الواجهة الأمامية" : "Frontend"}
                  </h3>
                  <div className="space-y-2">
                    {project.techStack.frontend.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-sm text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Backend */}
              {project.techStack.backend.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20"
                >
                  <h3 className="text-lg font-bold mb-4 text-purple-400">
                    {isArabic ? "الواجهة الخلفية" : "Backend"}
                  </h3>
                  <div className="space-y-2">
                    {project.techStack.backend.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-sm text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Database */}
              {project.techStack.database && project.techStack.database.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20"
                >
                  <h3 className="text-lg font-bold mb-4 text-green-400">
                    {isArabic ? "قاعدة البيانات" : "Database"}
                  </h3>
                  <div className="space-y-2">
                    {project.techStack.database.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-sm text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Design */}
              {project.techStack.design.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20"
                >
                  <h3 className="text-lg font-bold mb-4 text-pink-400">
                    {isArabic ? "التصميم" : "Design"}
                  </h3>
                  <div className="space-y-2">
                    {project.techStack.design.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-400" />
                        <span className="text-sm text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Deployment */}
              {project.techStack.deployment && project.techStack.deployment.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20"
                >
                  <h3 className="text-lg font-bold mb-4 text-orange-400">
                    {isArabic ? "النشر" : "Deployment"}
                  </h3>
                  <div className="space-y-2">
                    {project.techStack.deployment.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400" />
                        <span className="text-sm text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {isArabic ? "التحديات والحلول" : "Challenges & Learnings"}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {isArabic
                  ? "اكتشف التحديات التي واجهناها والحلول الإبداعية التي طورناها"
                  : "Discover the challenges we faced and the innovative solutions we developed"}
              </p>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {(isArabic ? project.challengesAr : project.challenges).map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 sm:p-8 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:border-primary/40 hover:bg-primary/10 transition-all"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">{idx + 1}</span>
                    </div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      {(project.links.github || project.links.live || project.links.demo) && (
        <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    {isArabic ? "الروابط" : "Links"}
                  </span>
                </h2>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                  >
                    <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-slate-600/10 to-slate-600/5 border border-slate-500/20 hover:border-slate-500/40 hover:bg-slate-600/20 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                            {isArabic ? "مستودع GitHub" : "GitHub Repository"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {isArabic ? "اطلع على الكود المصدري" : "View the source code"}
                          </p>
                        </div>
                        <Github className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </motion.a>
                )}

                {(project.links.live || project.links.demo) && (
                  <motion.a
                    href={project.links.live || project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex-1"
                  >
                    <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                            {isArabic ? "الموقع المباشر" : "Live Website"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {isArabic ? "جرب المشروع الآن" : "Experience the project live"}
                          </p>
                        </div>
                        <ExternalLink className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Outcome Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/20"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {isArabic ? "النتيجة والتأثير" : "Project Outcome"}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                {isArabic ? project.outcomeAr : project.outcome}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16 text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {isArabic ? "المشاريع ذات الصلة" : "Related Projects"}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {isArabic
                  ? "اكتشف المزيد من المشاريع المشابهة"
                  : "Discover more similar projects"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {portfolioProjects
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((relatedProject, idx) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.slug}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group cursor-pointer h-full"
                    >
                      <div className="relative h-[250px] sm:h-[300px] overflow-hidden rounded-2xl mb-4 sm:mb-6">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${relatedProject.color} z-0`}
                        />
                        <Image
                          src={relatedProject.image}
                          alt={
                            isArabic
                              ? relatedProject.titleAr
                              : relatedProject.title
                          }
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
                        />
                        {/* Desktop Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 z-10 flex items-center justify-center transition-all duration-300 hidden md:flex">
                          <div className="text-center text-white space-y-3">
                            <p className="text-sm font-medium uppercase tracking-wider">
                              {isArabic
                                ? "اعرض المشروع"
                                : "View Project"}
                            </p>
                            <ArrowRight className="w-6 h-6 mx-auto" />
                          </div>
                        </div>

                        {/* Mobile View Project Button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 flex flex-col items-center justify-end pb-4 md:hidden">
                          <button className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 px-4 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5 transition-all">
                            <ArrowRight className="w-3.5 h-3.5" />
                            {isArabic ? "اعرض المشروع" : "View Project"}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {isArabic
                              ? relatedProject.categoryAr
                              : relatedProject.category}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {isArabic
                            ? relatedProject.titleAr
                            : relatedProject.title}
                        </h3>

                        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                          {isArabic
                            ? relatedProject.descriptionAr
                            : relatedProject.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mt-12 sm:mt-16 text-center"
            >
              <Link href="/portfolio">
                <Button className="group bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 px-8 py-3 h-auto min-h-[44px]">
                  {isArabic ? "عرض جميع المشاريع" : "View All Projects"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
