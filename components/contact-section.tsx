"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Instagram, Calendar } from "lucide-react";
import ScrollSection from "@/components/scroll-section";
import FloatingSymbols from "@/components/floating-symbols";

export default function ContactSection() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const params = useParams();
  const locale = (params.locale as "en" | "ar") || "en";

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t("whatsapp"),
      description: "+964 774 142 4344",
      href: "https://wa.me/9647741424344?text=Hello%20Weber!%20I%27m%20interested%20in%20your%20services.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t("email"),
      description: "weberagancy@gmail.com",
      href: "mailto:weberagancy@gmail.com?subject=Service%20Inquiry&body=Hello%20Weber%20Team,",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: t("instagram"),
      description: "@weber.iq",
      href: "https://instagram.com/weber.iq",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: locale === "ar" ? "احجز استشارة" : "Schedule a Call",
      description: locale === "ar" ? "استشارة مجانية مع الفريق" : "Free consultation with our team",
      href: "https://cal.com/weberiq/30min",
      color: "from-purple-500 to-pink-600",
    },
  ];

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
    <ScrollSection
      id="contact"
      className="py-0 bg-muted/30"
      backgroundElements={<FloatingSymbols type="contact" />}
      disableAnimation={true}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.div key={method.title} variants={item}>
              <a href={method.href} target="_blank" rel="noopener noreferrer">
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <CardContent className="p-3 sm:p-4 text-center space-y-2 sm:space-y-3">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold">{method.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <bdo dir="ltr">{method.description}</bdo>
                    </p>
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:bg-white/10 min-h-[40px]"
                    >
                      {tCommon("getInTouch")}
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/20">
            <CardContent className="py-6 px-4 sm:py-8 sm:px-8 md:py-12 md:px-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                {locale === "ar" ? "جاهز لتحقيق حلمك الرقمي؟" : "Ready to bring your vision to life?"}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto px-2 sm:px-0">
                {locale === "ar" ? "احجز استشارة مجانية مع فريقنا لمناقشة مشروعك والحصول على خطة تفصيلية" : "Schedule a free consultation with our team to discuss your project and get a detailed plan"}
              </p>
              <Button
                className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all min-h-[44px] px-4 sm:px-6"
                asChild
              >
                <a href="https://cal.com/weberiq/30min" target="_blank" rel="noopener noreferrer">
                  {locale === "ar" ? "احجز استشارة مجانية" : "Schedule Free Consultation"}
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

    </ScrollSection>
  );
}
