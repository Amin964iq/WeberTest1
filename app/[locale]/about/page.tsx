"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Award, Target, Rocket, Eye } from "lucide-react";
import FloatingElements from "@/components/floating-elements";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import { useParams } from "next/navigation";
import * as React from "react";

const arabicChars = "ابتثجحخدذرزسشصضطظعغفقكلمنهويىءئؤةأإآ";
const englishChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default function AboutPage() {
  const t = useTranslations("about");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const [isHovered, setIsHovered] = React.useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Code Snippets */}
        <FloatingElements density="medium" showCodeSnippets={true} />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TextScramble
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2 block"
              trigger={isHovered}
              duration={0.8}
              speed={0.04}
              characterSet={locale === "ar" ? arabicChars : englishChars}
              as="h1"
            >
              {t("title")}
            </TextScramble>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mt-20"
          >
            {[
              { label: t("stats.efficiency") },
              { label: t("stats.fastDelivery") },
              { label: t("stats.quality") },
              { label: t("stats.security") },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative text-base font-light tracking-[0.15em] uppercase text-foreground/60 group-hover:text-foreground transition-colors">
                    {item.label}
                  </div>
                </div>
                <div className="h-px w-10 mx-auto mt-3 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/10 to-background border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {t("mission.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("mission.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-gradient-to-br from-secondary/20 to-background border-secondary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-secondary mb-6">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {t("vision.title")}
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t("vision.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("values.title")}
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <Code className="h-8 w-8" />,
                key: "quality",
              },
              {
                icon: <Users className="h-8 w-8" />,
                key: "clientFocused",
              },
              {
                icon: <Award className="h-8 w-8" />,
                key: "excellence",
              },
              {
                icon: <Target className="h-8 w-8" />,
                key: "results",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`values.${value.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`values.${value.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/20">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  {t("cta.title")}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("cta.description")}
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <div className="px-8 py-3 rounded-lg bg-white dark:bg-white text-black font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                    {t("cta.button")}
                  </div>
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
