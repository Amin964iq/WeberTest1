"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, MessageCircle, Sparkles, Code2, Rocket, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";

interface FooterProps {
  locale: string;
}

export default function Footer({ }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const isArabic = locale === "ar";

  const currentYear = new Date().getFullYear();

  // Technologies/Capabilities for sliding marquee
  const capabilities = [
    { icon: Code2, text: { en: "Modern Development", ar: "تطوير حديث" } },
    { icon: Rocket, text: { en: "Fast Performance", ar: "أداء سريع" } },
    { icon: Zap, text: { en: "Cutting-Edge Tech", ar: "تقنيات متطورة" } },
    { icon: Sparkles, text: { en: "Stunning Design", ar: "تصميم مذهل" } },
    { icon: Code2, text: { en: "Scalable Solutions", ar: "حلول قابلة للتوسع" } },
    { icon: Rocket, text: { en: "SEO Optimized", ar: "محسن لمحركات البحث" } },
    { icon: Zap, text: { en: "24/7 Support", ar: "دعم على مدار الساعة" } },
    { icon: Sparkles, text: { en: "Cloud Ready", ar: "جاهز للسحابة" } },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/30 to-muted/50 border-t mt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => {
          // Use deterministic positions based on index
          const leftPos = (i * 17 + 3) % 100;
          const topPos = (i * 23 + 7) % 100;
          const xMovement = ((i * 7) % 20) - 10;

          return (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, xMovement, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
            />
          );
        })}
      </div>

      {/* Sliding Marquee Section */}
      <div className="relative border-b border-border/40 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 overflow-hidden">
        <motion.div
          animate={{
            x: isArabic ? ["-50%", "0%"] : ["0%", "-50%"]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-6"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          {[...capabilities, ...capabilities, ...capabilities].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 group"
            >
              <item.icon className={`h-5 w-5 text-primary group-hover:scale-110 transition-transform ${isArabic ? 'ml-3' : 'mr-3'}`} />
              <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                {item.text[locale as "en" | "ar"]}
              </span>
              <span className="mx-8 text-primary/30">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="h-12 w-auto absolute top-24 left-0 rtl:left-auto rtl:right-0 -mt-24"
            >
              <Image
                src="/images/weber-logo-white.png"
                alt="Weber Logo"
                height={48}
                width={150}
                className="object-contain"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground leading-relaxed pt-16">
              {t("description")}
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <motion.a
                href="https://instagram.com/weber.iq"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
              </motion.a>
              <motion.a
                href="mailto:weberagancy@gmail.com"
                whileHover={{ scale: 1.15, rotate: -5, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-primary group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
              </motion.a>
              <motion.a
                href="https://wa.me/9647741424344"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 text-primary group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
              </motion.a>
              <motion.a
                href="https://cal.com/weberiq/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: -5, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Phone className="h-5 w-5 text-primary group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: tNav("home") },
                { href: "/services", label: tNav("services") },
                { href: "/portfolio", label: isArabic ? "مشاريعنا" : "Our Portfolio" },
                { href: "/about", label: tNav("about") },
                { href: "/contact", label: tNav("contact") },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group relative text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                    </span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      className="ml-1 rtl:mr-1 rtl:ml-0 opacity-0 group-hover:opacity-100 transition-opacity rtl:-scale-x-100"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services/web-development", label: isArabic ? "تطوير المواقع" : "Web Development" },
                { href: "/services/custom-systems", label: isArabic ? "أنظمة مخصصة" : "Custom Systems" },
                { href: "/services/cybersecurity-solutions", label: isArabic ? "حلول الأمن السيبراني" : "Cybersecurity Solutions" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group relative text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                    </span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      className="ml-1 rtl:mr-1 rtl:ml-0 opacity-0 group-hover:opacity-100 transition-opacity rtl:-scale-x-100"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, href: "mailto:weberagancy@gmail.com", label: "weberagancy@gmail.com" },
                { icon: MessageCircle, href: "https://wa.me/9647741424344", label: "+964 774 142 4344", external: true },
                { icon: Instagram, href: "https://instagram.com/weber.iq", label: "@weber.iq", external: true },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="group"
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-muted-foreground hover:text-primary transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span
                      className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                      dir={item.label.startsWith("+") ? "ltr" : undefined}
                    >
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-12 pt-8"
        >
          {/* Animated gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <span>© {currentYear}</span>
              <span className="text-primary">•</span>
              <div className="h-5 w-auto relative -mt-5">
                <Image
                  src="/images/weber-logo-white.png"
                  alt="Weber Logo"
                  height={20}
                  width={60}
                  className="object-contain"
                />
              </div>
              <span className="text-primary">•</span>
              <span>{t("rights")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-xs"
            >
              <span>{isArabic ? "صُنع بشغف" : "Crafted with passion"}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
