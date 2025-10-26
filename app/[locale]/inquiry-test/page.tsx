"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactCTA from "@/components/contact-cta";
import { ServiceType } from "@/lib/inquiry-form-types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { BorderBeam } from "@/components/ui/border-beam";

const SERVICES = [
  {
    id: "web-development" as ServiceType,
    name: { en: "Web Development", ar: "تطوير المواقع" },
    icon: "🌐",
  },
  {
    id: "ui-ux-design" as ServiceType,
    name: { en: "UI/UX Design", ar: "تصميم واجهات المستخدم" },
    icon: "🎨",
  },
  {
    id: "custom-systems" as ServiceType,
    name: { en: "Custom Systems", ar: "أنظمة مخصصة" },
    icon: "⚙️",
  },
  {
    id: "web-maintenance" as ServiceType,
    name: { en: "Web Maintenance", ar: "صيانة المواقع" },
    icon: "🔧",
  },
  {
    id: "hosting-solutions" as ServiceType,
    name: { en: "Hosting Solutions", ar: "حلول الاستضافة" },
    icon: "🌍",
  },
];

export default function InquiryTestPage() {
  const params = useParams();
  const locale = (params.locale as "en" | "ar") || "en";
  const [selectedService, setSelectedService] = useState<ServiceType>("web-development");

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {locale === "ar" ? "اختبار نموذج الاستفسار" : "Inquiry Form Test"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {locale === "ar"
              ? "اختر خدمة لعرض نموذج الاستفسار الخاص بها"
              : "Select a service to view its inquiry form"}
          </p>
        </motion.div>

        {/* Service Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">
                {locale === "ar" ? "اختر خدمة" : "Select Service"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {SERVICES.map((service) => (
                  <Button
                    key={service.id}
                    variant={selectedService === service.id ? "default" : "outline"}
                    className={`h-auto py-4 px-4 justify-start ${
                      selectedService === service.id
                        ? "bg-gradient-to-r from-primary to-secondary"
                        : ""
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <span className="text-2xl mr-3 rtl:mr-0 rtl:ml-3">
                      {service.icon}
                    </span>
                    <span className="text-sm font-medium">
                      {service.name[locale]}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </motion.div>

        {/* Language Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Card className="relative inline-block overflow-hidden">
            <CardContent className="p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {locale === "ar" ? "اللغة الحالية:" : "Current Language:"}
                </span>
                <span className="font-bold">
                  {locale === "ar" ? "العربية" : "English"}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({locale.toUpperCase()})
                </span>
              </div>
            </CardContent>
            <BorderBeam duration={6} size={80} />
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          key={selectedService} // Re-mount when service changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ContactCTA serviceId={selectedService} locale={locale} />
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="relative bg-muted/50 border-primary/20 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span>ℹ️</span>
                {locale === "ar" ? "ملاحظة" : "Note"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {locale === "ar"
                  ? "هذه صفحة اختبار. انقر على 'املأ النموذج' لفتح النموذج التفاعلي متعدد الخطوات. البيانات المرسلة ستظهر في وحدة التحكم فقط (console.log) ولن يتم حفظها."
                  : "This is a test page. Click 'Fill the Form' to open the interactive multi-step form modal. Submitted data will only appear in the console (console.log) and won't be saved."}
              </p>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
