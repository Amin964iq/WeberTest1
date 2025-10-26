import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { services, getServiceById } from "@/lib/services";
import { serviceDetails } from "@/lib/service-details";
import ServiceDetailClient from "@/components/service-detail-client";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const service = getServiceById(id);
  const t = await getTranslations({ locale, namespace: "services" });

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  // Get service title based on id
  const getServiceTitleKey = (id: string) => {
    const keyMap: Record<string, string> = {
      'web-development': 'webDev',
      'web-maintenance': 'maintenance',
      'ui-ux-design': 'uiux',
      'custom-systems': 'customSystems',
      'hosting-solutions': 'hosting',
      'cybersecurity-solutions': 'cybersecurity',
    };
    return keyMap[id] || 'webDev';
  };

  const titleKey = getServiceTitleKey(id);

  return {
    title: t(`${titleKey}.title`),
    description: t(`${titleKey}.description`),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const service = getServiceById(id);
  const detail = serviceDetails[id];

  if (!service || !detail) {
    notFound();
  }

  return <ServiceDetailClient service={service} detail={detail} locale={locale} />;
}
