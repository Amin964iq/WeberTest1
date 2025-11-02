import ContactSection from "@/components/contact-section";
import ModernHero from "@/components/modern-hero";
import WhatWeOfferSection from "@/components/what-we-offer-section";
import LuxuryServicesHome from "@/components/luxury-services-home";
import CodeSpaceBackground from "@/components/code-space-background";

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

      {/* Non-Hero Content with Space Background */}
      <div className="relative">
        <CodeSpaceBackground fixed={false} />

        {/* Spacer */}
        <div className="h-44 relative z-10" />

        {/* What We Offer Section */}
        <div className="relative z-10">
          <WhatWeOfferSection locale={locale} />
        </div>

        {/* Spacer */}
        <div className="h-16 sm:h-20 md:h-32 relative z-10" />

        {/* Luxury Services Sections with Scroll Animations */}
        <div className="relative z-10">
          <LuxuryServicesHome />
        </div>

        {/* Spacer */}
        <div className="h-32 relative z-10" />

        {/* Contact Section */}
        <div className="relative z-10">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
