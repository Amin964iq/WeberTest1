"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import InquiryFormModal from "@/components/inquiry-form-modal";
import { ServiceType } from "@/lib/inquiry-form-types";
import { BorderBeam } from "@/components/ui/border-beam";

interface ContactCTAProps {
  locale: "en" | "ar";
  serviceId?: ServiceType;
  variant?: "default" | "compact";
}

export default function ContactCTA({ locale, serviceId = "general-inquiry", variant = "default" }: ContactCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactOptions = [
    {
      id: "email",
      icon: <Mail className="h-6 w-6" />,
      title: locale === "ar" ? "راسلنا" : "Email Us",
      description: locale === "ar" ? "أرسل لنا بريد إلكتروني" : "Send us an email",
      action: () => window.open("mailto:info@weber.com?subject=Project%20Inquiry", "_blank"),
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "whatsapp",
      icon: <MessageCircle className="h-6 w-6" />,
      title: locale === "ar" ? "واتساب" : "WhatsApp",
      description: locale === "ar" ? "تحدث معنا مباشرة" : "Chat with us directly",
      action: () => window.open("https://wa.me/1234567890?text=Hello%20Weber!%20I'm%20interested%20in%20your%20services.", "_blank"),
      color: "from-green-500 to-green-600",
    },
    {
      id: "form",
      icon: <FileText className="h-6 w-6" />,
      title: locale === "ar" ? "املأ النموذج" : "Fill the Form",
      description: locale === "ar" ? "أخبرنا عن مشروعك" : "Tell us about your project",
      action: () => setIsModalOpen(true),
      color: "from-primary to-secondary",
    },
  ];

  if (variant === "compact") {
    return (
      <>
        <div className="flex flex-wrap gap-3 justify-center">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                onClick={option.action}
                className="bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100"
              >
                <span className="mr-2 rtl:mr-0 rtl:ml-2">{option.icon}</span>
                {option.title}
              </Button>
            </motion.div>
          ))}
        </div>

        <InquiryFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceId={serviceId}
          locale={locale}
        />
      </>
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
              {locale === "ar" ? "مستعد للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "ar"
                ? "اختر الطريقة المفضلة للتواصل معنا"
                : "Choose your preferred way to contact us"}
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
                <Card
                  className="relative group h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden border-2 hover:border-primary/50"
                  onClick={option.action}
                >
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
                      {option.description}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InquiryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceId={serviceId}
        locale={locale}
      />
    </>
  );
}
