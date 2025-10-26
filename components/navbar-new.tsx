"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import CardNav from "./CardNav";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const router = useRouter();

  const navItems = [
    {
      label: t("services"),
      bgColor: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      textColor: "#fff",
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
      ],
    },
    {
      label: t("contact"),
      bgColor: "linear-gradient(135deg, #533483 0%, #16213e 100%)",
      textColor: "#fff",
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

  const handleGetStarted = () => {
    router.push("/contact");
  };

  return (
    <CardNav
      logo={
        <div className="logo text-white font-bold text-2xl tracking-tight">
          WEBER
        </div>
      }
      logoAlt="Weber Logo"
      items={navItems}
      baseColor="rgba(0, 0, 0, 0.8)"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#000"
      buttonLabel={t("contact")}
      onButtonClick={handleGetStarted}
      ease="power3.out"
    />
  );
}
