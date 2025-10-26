export interface Service {
  id: string;
  slug: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    icon: 'Code',
    image: '/web%20dev1.webp',
  },
  {
    id: 'custom-systems',
    slug: 'custom-systems',
    icon: 'Layers',
    image: '/sys.png',
  },
  {
    id: 'cybersecurity-solutions',
    slug: 'cybersecurity-solutions',
    icon: 'Shield',
    image: '/images/services/cybersecurity.jpg',
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.slug === id);
}
