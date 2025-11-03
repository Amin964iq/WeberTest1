"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import LuxuryServicesFull from "@/components/luxury-services-full";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles } from "lucide-react";
import VideoBackground from "@/components/video-background";
import CodeSpaceBackground from "@/components/code-space-background";
import { useParams } from "next/navigation";
import * as React from "react";

const arabicChars = "ابتثجحخدذرزسشصضطظعغفقكلمنهويىءئؤةأإآ";
const englishChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <VideoBackground />

        {/* Code Snippets */}



        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t("badge")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            >
              {t("title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-px w-full max-w-md mx-auto mt-12 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Non-Hero Content with Space Background */}
      <div className="relative">
        <CodeSpaceBackground fixed={false} />

        {/* Luxury Services with Scroll Animations */}
        <div className="relative z-10">
          <LuxuryServicesFull />
        </div>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/20 shadow-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
                      {t("cta.title")}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                      {t("cta.description")}
                    </p>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 group text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-all"
                      >
                        {t("cta.button")}
                        <ArrowRight className="ml-3 rtl:mr-3 rtl:ml-0 h-6 w-6 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform rtl:rotate-180" />
                      </Button>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
