// TypeScript Types for Devura Inquiry Form System

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "textarea"
  | "select"
  | "multiselect"
  | "checkbox"
  | "radio"
  | "range"
  | "url"
  | "date";

export type ServiceType =
  | "general-inquiry"
  | "web-development"
  | "ui-ux-design"
  | "custom-systems"
  | "web-maintenance"
  | "hosting-solutions"
  | "cybersecurity-solutions";

export interface FieldOption {
  value: string;
  label: {
    en: string;
    ar: string;
  };
}

export interface FormField {
  id: string;
  type: FieldType;
  label: {
    en: string;
    ar: string;
  };
  placeholder?: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  required: boolean;
  options?: FieldOption[]; // For select, multiselect, radio, checkbox
  validation?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  conditional?: {
    field: string; // Field ID to check
    value: string | string[]; // Value(s) that trigger this field to show
  };
}

export interface FormSection {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  fields: FormField[];
}

export interface ServiceFormSchema {
  serviceId: ServiceType;
  serviceName: {
    en: string;
    ar: string;
  };
  sections: FormSection[];
}

// Form Data Types
export interface BasicInformation {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  preferredContact: "email" | "call" | "whatsapp";
  industry: string;
  description: string;
}

export interface ServiceSelection {
  mainService: ServiceType;
  subServices: string[];
}

export interface ProjectDetails {
  [key: string]: string | string[] | number | boolean;
}

export interface BudgetTimeline {
  budgetRange: string;
  timeline: string;
  paymentPreference?: "one-time" | "monthly" | "flexible";
}

export interface InquiryFormData {
  basicInfo: BasicInformation;
  serviceSelection: ServiceSelection;
  projectDetails: ProjectDetails;
  budgetTimeline: BudgetTimeline;
  additionalComments?: string;
  agreedToPrivacy: boolean;
  submittedAt: string;
}

// Common Field Options (used across multiple services)
export const INDUSTRY_OPTIONS: FieldOption[] = [
  { value: "ecommerce", label: { en: "E-commerce / Retail", ar: "التجارة الإلكترونية / التجزئة" } },
  { value: "restaurant", label: { en: "Restaurant / Food & Beverage", ar: "المطاعم / الأغذية والمشروبات" } },
  { value: "healthcare", label: { en: "Healthcare / Medical", ar: "الرعاية الصحية / الطبية" } },
  { value: "education", label: { en: "Education / Training", ar: "التعليم / التدريب" } },
  { value: "real-estate", label: { en: "Real Estate", ar: "العقارات" } },
  { value: "hospitality", label: { en: "Hospitality / Tourism", ar: "الضيافة / السياحة" } },
  { value: "finance", label: { en: "Finance / Banking", ar: "المالية / البنوك" } },
  { value: "technology", label: { en: "Technology / SaaS", ar: "التكنولوجيا / البرمجيات" } },
  { value: "consulting", label: { en: "Consulting / Professional Services", ar: "الاستشارات / الخدمات المهنية" } },
  { value: "creative", label: { en: "Creative / Design Agency", ar: "الإبداع / وكالة التصميم" } },
  { value: "nonprofit", label: { en: "Non-Profit / NGO", ar: "منظمة غير ربحية" } },
  { value: "other", label: { en: "Other", ar: "أخرى" } },
];

export const BUDGET_RANGES: FieldOption[] = [
  { value: "under-1000", label: { en: "Under $1,000", ar: "أقل من 1,000 دولار" } },
  { value: "1000-3000", label: { en: "$1,000 - $3,000", ar: "1,000 - 3,000 دولار" } },
  { value: "3000-5000", label: { en: "$3,000 - $5,000", ar: "3,000 - 5,000 دولار" } },
  { value: "5000-10000", label: { en: "$5,000 - $10,000", ar: "5,000 - 10,000 دولار" } },
  { value: "10000-25000", label: { en: "$10,000 - $25,000", ar: "10,000 - 25,000 دولار" } },
  { value: "25000-50000", label: { en: "$25,000 - $50,000", ar: "25,000 - 50,000 دولار" } },
  { value: "50000-plus", label: { en: "$50,000+", ar: "أكثر من 50,000 دولار" } },
  { value: "flexible", label: { en: "Flexible / Let's Discuss", ar: "مرن / دعنا نناقش" } },
];

export const TIMELINE_OPTIONS: FieldOption[] = [
  { value: "urgent", label: { en: "Urgent (1-2 weeks)", ar: "عاجل (1-2 أسبوع)" } },
  { value: "1-month", label: { en: "1 Month", ar: "شهر واحد" } },
  { value: "2-3-months", label: { en: "2-3 Months", ar: "2-3 أشهر" } },
  { value: "3-6-months", label: { en: "3-6 Months", ar: "3-6 أشهر" } },
  { value: "6-plus-months", label: { en: "6+ Months", ar: "أكثر من 6 أشهر" } },
  { value: "flexible", label: { en: "Flexible Timeline", ar: "جدول زمني مرن" } },
];

export const CONTACT_METHOD_OPTIONS: FieldOption[] = [
  { value: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
  { value: "call", label: { en: "Phone Call", ar: "مكالمة هاتفية" } },
  { value: "whatsapp", label: { en: "WhatsApp", ar: "واتساب" } },
];

export const PAYMENT_PREFERENCE_OPTIONS: FieldOption[] = [
  { value: "one-time", label: { en: "One-Time Payment", ar: "دفعة واحدة" } },
  { value: "monthly", label: { en: "Monthly Installments", ar: "أقساط شهرية" } },
  { value: "flexible", label: { en: "Let's Discuss", ar: "دعنا نناقش" } },
];

export const SERVICE_CATEGORY_OPTIONS: FieldOption[] = [
  { value: "web-development", label: { en: "Web Development", ar: "تطوير المواقع" } },
  { value: "ui-ux-design", label: { en: "UI/UX Design", ar: "تصميم واجهات المستخدم" } },
  { value: "custom-systems", label: { en: "Custom Systems Development", ar: "تطوير أنظمة مخصصة" } },
  { value: "web-maintenance", label: { en: "Web Maintenance & Support", ar: "صيانة ودعم المواقع" } },
  { value: "hosting-solutions", label: { en: "Hosting & Domain Solutions", ar: "حلول الاستضافة والنطاقات" } },
  { value: "cybersecurity-solutions", label: { en: "Cybersecurity Solutions", ar: "حلول الأمن السيبراني" } },
  { value: "other", label: { en: "Other / Not Sure", ar: "أخرى / غير متأكد" } },
];
