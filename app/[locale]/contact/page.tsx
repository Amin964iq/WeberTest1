"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import FloatingElements from "@/components/floating-elements";
import { BorderBeam } from "@/components/ui/border-beam";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
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
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          >
            <Card className="relative bg-gradient-to-br from-primary/10 to-background border-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2">
                      {t("availability.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1 break-words">
                      {t("availability.description")}
                    </p>
                    <p className="text-muted-foreground text-sm break-words">
                      {t("availability.weekend")}
                    </p>
                  </div>
                </div>
              </CardContent>
              <BorderBeam duration={8} size={100} />
            </Card>

            <Card className="relative bg-gradient-to-br from-secondary/10 to-background border-secondary/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2">
                      {t("info.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm break-words">
                      {t("info.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
              <BorderBeam duration={8} size={100} />
            </Card>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
