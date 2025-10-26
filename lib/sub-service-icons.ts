import {
  ShoppingCart,
  Briefcase,
  Building2,
  Settings,
  Server,
  QrCode,
  Palette,
  Hotel,
  Package,
  Users,
  UserCog,
  School,
  Ticket,
  Bug,
  Search,
  Eye,
  GraduationCap,
  Network,
  Shield,
  type LucideIcon,
} from "lucide-react";

// Icon mapping for all sub-services
export const subServiceIcons: Record<string, LucideIcon> = {
  // Web Development
  "ecommerce": ShoppingCart,
  "portfolio": Briefcase,
  "corporate": Building2,
  "web-maintenance": Settings,
  "ui-ux-design": Palette,
  "qr-menu": QrCode,

  // Custom Systems
  "hotel-clinic-reservation": Hotel,
  "inventory-management": Package,
  "crm": Users,
  "hr-employee": UserCog,
  "school-university": School,
  "event-ticketing": Ticket,

  // Cybersecurity
  "penetration-testing": Bug,
  "digital-forensics": Search,
  "security-consultation": Users,
  "security-monitoring": Eye,
  "security-training": GraduationCap,
  "firewall-network-security": Network,
};

// Get icon for a sub-service, fallback to Shield
export function getSubServiceIcon(subServiceId: string): LucideIcon {
  return subServiceIcons[subServiceId] || Shield;
}
