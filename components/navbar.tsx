"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";
import CardNav from "./CardNav";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      label: t("services"),
      bgColor: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      textColor: "#fff",
      mainHref: "/services",
      links: [
        {
          label: locale === "ar" ? "تطوير المواقع" : "Web Development",
          ariaLabel: "Web Development Services",
          href: "/services/web-development",
        },
        {
          label: locale === "ar" ? "أنظمة مخصصة" : "Custom Systems",
          ariaLabel: "Custom Systems Development",
          href: "/services/custom-systems",
        },
        {
          label: locale === "ar" ? "الأمن السيبراني" : "Cybersecurity",
          ariaLabel: "Cybersecurity Solutions",
          href: "/services/cybersecurity-solutions",
        },
      ],
    },
    {
      label: t("about"),
      bgColor: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
      textColor: "#fff",
      mainHref: "/about",
      links: [
        {
          label: locale === "ar" ? "من نحن" : "Our Story",
          ariaLabel: "About Us",
          href: "/about",
        },
        {
          label: locale === "ar" ? "رؤيتنا" : "Our Vision",
          ariaLabel: "Our Vision",
          href: "/about#vision",
        },
        {
          label: locale === "ar" ? "مشاديعنا" : "Our Portfolio",
          ariaLabel: "Our Portfolio",
          href: "/portfolio",
        },
      ],
    },
    {
      label: t("contact"),
      bgColor: "linear-gradient(135deg, #533483 0%, #16213e 100%)",
      textColor: "#fff",
      mainHref: "/contact",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:info@weber.com",
        },
        {
          label: "WhatsApp",
          ariaLabel: "WhatsApp",
          href: "https://wa.me/1234567890",
        },
        {
          label: locale === "ar" ? "نموذج الاستفسار" : "Inquiry Form",
          ariaLabel: "Contact Form",
          href: "/contact",
        },
      ],
    },
  ];

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    // Save the new language preference to localStorage
    console.log("=== Language Switch ===");
    console.log("Switching from", locale, "to", newLocale);
    localStorage.setItem("preferredLanguage", newLocale);
    console.log("Saved to localStorage:", localStorage.getItem("preferredLanguage"));
    router.replace(pathname, { locale: newLocale });
  };

  const goToHome = () => {
    router.push("/");
  };

  const goToServices = () => {
    router.push("/services");
  };

  return (
    <div data-navbar>
      <CardNav
        logo={
        <div
          className="logo cursor-pointer hover:opacity-80 transition-opacity -mt-5"
          onClick={goToHome}
        >
          <Image
            src="/images/weber-logo-white.png"
            alt="Weber Logo"
            width={200}
            height={67}
            priority
            className="h-16 w-auto"
          />
        </div>
      }
      logoAlt="Weber Logo"
      items={navItems}
      baseColor="rgba(0, 0, 0, 0.8)"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#000"
      buttonLabel={t("services")}
      onButtonClick={goToServices}
      languageIcon={<Globe className="w-5 h-5" />}
      onLanguageClick={switchLanguage}
      ease="power3.out"
      />
    </div>
  );
}
