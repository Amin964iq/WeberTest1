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
      icon: <Mail className="h-6 w-6" />,
      title: t("email"),
      description: "info@weber.com",
      href: "mailto:info@weber.com?subject=Service%20Inquiry&body=Hello%20Weber%20Team,",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t("whatsapp"),
      description: "+1 (234) 567-890",
      href: "https://wa.me/1234567890?text=Hello%20Weber!%20I%27m%20interested%20in%20your%20services.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: t("instagram"),
      description: "@weber",
      href: "https://instagram.com/weber",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: locale === "ar" ? "احجز اجتماعاً" : "Schedule a Meeting",
      description: locale === "ar" ? "30 دقيقة استشارة مجانية" : "Free 30-min consultation",
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
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.div key={method.title} variants={item}>
              <a href={method.href} target="_blank" rel="noopener noreferrer">
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <CardContent className="p-4 text-center space-y-3">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <h3 className="text-base font-semibold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:bg-white/10"
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
          className="text-center mt-10"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/20">
            <CardContent className="py-10 px-8 md:py-12 md:px-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {tCommon("readyToTransform")}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
                {tCommon("discussProject")}
              </p>
              <Button
                className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="mailto:info@weber.com?subject=Project%20Inquiry">
                  {tCommon("startProjectToday")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

    </ScrollSection>
  );
}
