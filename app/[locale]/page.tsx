import ContactSection from "@/components/contact-section";
import ModernHero from "@/components/modern-hero";
import WhatWeOfferSection from "@/components/what-we-offer-section";
import LuxuryServicesHome from "@/components/luxury-services-home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Modern Hero Section */}
      <ModernHero locale={locale} />

      {/* Spacer */}
      <div className="h-44" />

      {/* What We Offer Section */}
      <WhatWeOfferSection locale={locale} />

      {/* Spacer */}
      <div className="h-32" />

      {/* Luxury Services Sections with Scroll Animations */}
      <LuxuryServicesHome />

      {/* Spacer */}
      <div className="h-32" />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
