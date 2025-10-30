"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

interface ContactCTAProps {
  locale: "en" | "ar";
  variant?: "default" | "compact";
}

export default function ContactCTA({ locale, variant = "default" }: ContactCTAProps) {
  const contactOptions = [
    {
      id: "whatsapp",
      icon: <MessageCircle className="h-6 w-6" />,
      title: locale === "ar" ? "واتساب" : "WhatsApp",
      description: "+964 774 142 4344",
      href: "https://wa.me/9647741424344?text=Hello%20Weber!%20I'm%20interested%20in%20your%20services.",
      color: "from-green-500 to-green-600",
    },
    {
      id: "calendar",
      icon: <Calendar className="h-6 w-6" />,
      title: locale === "ar" ? "احجز استشارة" : "Schedule a Call",
      description: locale === "ar" ? "استشارة مجانية 30 دقيقة" : "Free 30-minute consultation",
      href: "https://cal.com/weberiq/30min",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "email",
      icon: <Mail className="h-6 w-6" />,
      title: locale === "ar" ? "بريد إلكتروني" : "Email",
      description: "weberagancy@gmail.com",
      href: "mailto:weberagancy@gmail.com?subject=Project%20Inquiry",
      color: "from-blue-500 to-blue-600",
    },
  ];

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {contactOptions.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              asChild
              className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100"
            >
              <a href={option.href} target="_blank" rel="noopener noreferrer">
                <span className="mr-2 rtl:mr-0 rtl:ml-2">{option.icon}</span>
                {option.title}
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <>
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === "ar" ? "تواصل معنا الآن" : "Get in Touch with Us"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "ar"
                ? "اختر الطريقة التي تفضلها للتحدث معنا عن مشروعك"
                : "Choose how you'd like to connect with us about your project"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={option.href} target="_blank" rel="noopener noreferrer">
                  <Card className="relative group h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden border-2 hover:border-primary/50">
                    <CardContent className="p-8 text-center space-y-4 relative">
                      {/* Background gradient - removed */}

                      {/* Icon */}
                      <div className="relative w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        {option.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold relative">
                        {option.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground relative">
                        <bdo dir="ltr">{option.description}</bdo>
                      </p>

                      {/* CTA */}
                      <div className="relative pt-2">
                        <span className="text-sm font-medium text-primary group-hover:underline">
                          {locale === "ar" ? "انقر للمتابعة" : "Click to proceed"} →
                        </span>
                      </div>
                    </CardContent>
                    <BorderBeam duration={8} size={100} />
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
