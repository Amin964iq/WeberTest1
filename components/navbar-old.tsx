"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronDown, Mail, MessageCircle, Instagram, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "@/i18n/routing";
import { Dock, DockItem, DockIcon } from "@/components/motion-primitives/dock";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const services = [
    { name: locale === "ar" ? "تطوير المواقع" : "Web Development", slug: "web-development" },
    { name: locale === "ar" ? "تطوير أنظمة مخصصة" : "Custom Systems", slug: "custom-systems" },
    { name: locale === "ar" ? "حلول الأمن السيبراني" : "Cybersecurity Solutions", slug: "cybersecurity-solutions" },
  ];

  const contactOptions = [
    { name: "Email", href: "mailto:info@devura.com", icon: Mail },
    { name: "WhatsApp", href: "https://wa.me/1234567890", icon: MessageCircle },
    { name: "Instagram", href: "https://instagram.com/devura", icon: Instagram },
    { name: locale === "ar" ? "نموذج الاستفسار" : "Inquiry Form", href: "/contact", icon: FileText, isInternal: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-white"
            >
              DEVURA
            </motion.div>
          </Link>

          {/* Desktop Navigation - Dock */}
          <div className="hidden md:flex items-center">
            <Dock magnification={60} distance={100} className="bg-background/80">
              <Link href="/">
                <DockItem>
                  <DockIcon>
                    <span className="text-sm font-medium text-white">{t("home")}</span>
                  </DockIcon>
                </DockItem>
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services">
                  <DockItem>
                    <DockIcon>
                      <span className="text-sm font-medium text-white flex items-center gap-1">
                        {t("services")}
                        <ChevronDown className="h-3 w-3" />
                      </span>
                    </DockIcon>
                  </DockItem>
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5, scaleY: 0.95 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -5, scaleY: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 w-64 bg-background/80 backdrop-blur-lg border-l border-r border-b border-border rounded-b-lg shadow-2xl z-50 mt-2"
                    >
                      <div className="py-2">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              className="block px-4 py-2.5 text-sm text-white hover:bg-white/10 hover:text-primary transition-colors"
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about">
                <DockItem>
                  <DockIcon>
                    <span className="text-sm font-medium text-white">{t("about")}</span>
                  </DockIcon>
                </DockItem>
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <Link href="/contact">
                  <DockItem>
                    <DockIcon>
                      <span className="text-sm font-medium text-white flex items-center gap-1">
                        {t("contact")}
                        <ChevronDown className="h-3 w-3" />
                      </span>
                    </DockIcon>
                  </DockItem>
                </Link>

                <AnimatePresence>
                  {contactOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5, scaleY: 0.95 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -5, scaleY: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 w-64 bg-background/80 backdrop-blur-lg border-l border-r border-b border-border rounded-b-lg shadow-2xl z-50 mt-2"
                    >
                      <div className="py-2">
                        {contactOptions.map((option, index) => (
                          <motion.div
                            key={option.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {option.isInternal ? (
                              <Link
                                href={option.href}
                                className="flex items-center px-4 py-2.5 text-sm text-white hover:bg-white/10 hover:text-primary transition-colors"
                              >
                                <option.icon className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
                                {option.name}
                              </Link>
                            ) : (
                              <a
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2.5 text-sm text-white hover:bg-white/10 hover:text-primary transition-colors"
                              >
                                <option.icon className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
                                {option.name}
                              </a>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Dock>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">{t("language")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact">
              <Button size="sm" className="bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                {t("contact")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                  {t("home")}
                </Button>
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                    {t("services")}
                  </Button>
                </Link>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-white/80 hover:bg-white/10">
                        → {service.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                  {t("about")}
                </Button>
              </Link>

              {/* Mobile Contact */}
              <div className="space-y-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                    {t("contact")}
                  </Button>
                </Link>
                <div className="pl-4 space-y-1">
                  {contactOptions.map((option) => (
                    <a key={option.name} href={option.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-white/80 hover:bg-white/10">
                        <option.icon className="mr-2 h-4 w-4" />
                        {option.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>

              {/* Language Switcher Mobile */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      switchLanguage("en");
                      setIsOpen(false);
                    }}
                    className="flex-1 text-white hover:bg-white/10"
                  >
                    English
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      switchLanguage("ar");
                      setIsOpen(false);
                    }}
                    className="flex-1 text-white hover:bg-white/10"
                  >
                    العربية
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
