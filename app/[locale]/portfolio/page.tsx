"use client";

import { motion } from "framer-motion";
import PortfolioGrid from "@/components/portfolio-grid";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import * as React from "react";

const arabicChars = "ابتثجحخدذرزسشصضطظعغفقكلمنهويىءئؤةأإآ";
const englishChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default function PortfolioPage() {
  const params = useParams();
  const locale = (params.locale as string) || "ar";
  const isArabic = locale === "ar";
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center overflow-hidden pt-20 sm:pt-28 md:pt-32 pb-12 z-10">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-xs sm:text-sm font-medium text-primary">
                {isArabic ? "محفظتنا" : "Our Portfolio"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-relaxed"
              style={{ lineHeight: "1.2" }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {isArabic
                  ? "استكشف مشاريعنا الناجحة"
                  : "Showcase of Success"}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              {isArabic
                ? "تعرف على المشاريع المتنوعة التي طورناها وساعدنا عملاءنا على تحقيق أهدافهم من خلال الحلول الابتكارية"
                : "Discover the diverse projects we've developed and how we've helped our clients achieve their goals through innovative solutions"}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 sm:pt-6"
            >
              <Link href="/contact">
                <Button className="group bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3 h-auto min-h-[44px] shadow-lg hover:shadow-xl transition-all">
                  {isArabic ? "ابدأ مشروعك الآن" : "Start Your Project"}
                  <ArrowRight className={`${isArabic ? "mr-2 rotate-180" : "ml-2"} h-4 w-4 group-hover:${isArabic ? "-translate-x" : "translate-x"}-1 transition-transform`} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <PortfolioGrid locale={locale} />

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-28 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {isArabic
                  ? "هل أنت مستعد لمشروعك التالي؟"
                  : "Ready for Your Next Project?"}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {isArabic
                ? "دعنا نساعدك في تحقيق رؤيتك. تواصل معنا اليوم لمناقشة متطلبات مشروعك"
                : "Let us help you bring your vision to life. Get in touch with us today to discuss your project needs"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button className="group bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-3 h-auto min-h-[44px] shadow-lg hover:shadow-xl transition-all">
                  {isArabic ? "تواصل معنا" : "Get in Touch"}
                  <ArrowRight className={`${isArabic ? "mr-2 rotate-180" : "ml-2"} h-4 w-4 group-hover:${isArabic ? "-translate-x" : "translate-x"}-1 transition-transform`} />
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 px-6 sm:px-8 py-3 h-auto min-h-[44px] border-2"
                >
                  {isArabic ? "استكشف خدماتنا" : "Explore Services"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
