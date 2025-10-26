import { z } from "zod";

// Basic validation schema for all forms
export const basicInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().min(2, "Company name must be at least 2 characters").max(150),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 characters").max(20),
  preferredContact: z.enum(["email", "call", "whatsapp"]),
  industry: z.string().min(1, "Please select your industry"),
  description: z.string().min(20, "Please provide at least 20 characters").max(500),
});

export const budgetTimelineSchema = z.object({
  budgetRange: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  paymentPreference: z.enum(["one-time", "monthly", "flexible"]).optional(),
});

export const finalSchema = z.object({
  additionalComments: z.string().max(1000).optional(),
  preferredContactTime: z.enum(["morning", "afternoon", "evening", "anytime"], {
    message: "Please select your preferred contact time",
  }),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to continue",
  }),
});

// Web Development specific validation
export const webDevelopmentSchema = z.object({
  ...basicInfoSchema.shape,
  subServices: z.array(z.string()).min(1, "Please select at least one service type"),
  websiteGoal: z.string().min(1, "Please select the main goal"),
  hasDomainHosting: z.enum(["yes-both", "yes-domain", "no"]),
  hasBrandAssets: z.array(z.string()).optional(),
  pageCount: z.string().min(1, "Please select page count"),
  designStyle: z.string().min(1, "Please select a design style"),
  referenceWebsites: z.string().max(500).optional(),
  needsEcommerce: z.enum(["yes", "simple", "no"]),
  needsMultilingual: z.enum(["yes-ar-en", "yes-multiple", "no"]),
  needsSEO: z.enum(["yes", "maybe", "no"]),
  ...budgetTimelineSchema.shape,
  ...finalSchema.shape,
});

// UI/UX Design specific validation - REMOVED (no longer a main service)

// Custom Systems specific validation
export const customSystemsSchema = z.object({
  ...basicInfoSchema.shape,
  subServices: z.array(z.string()).min(1, "Please select at least one system type"),
  keyFeatures: z.string().min(20, "Please describe key features (minimum 20 characters)").max(1000),
  existingSystem: z.enum(["yes-upgrade", "yes-integrate", "no"]),
  userCount: z.string().min(1, "Please select user count"),
  platformType: z.enum(["web-only", "web-mobile", "web-native"]),
  integrations: z.array(z.string()).optional(),
  needsAnalytics: z.enum(["yes-advanced", "yes-basic", "no"]),
  ...budgetTimelineSchema.shape,
  ...finalSchema.shape,
});

// Web Maintenance specific validation - REMOVED (now a sub-service of Web Development)

// Hosting Solutions specific validation - REMOVED (now a sub-service of Web Development)

// Type exports for TypeScript
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
export type BudgetTimelineFormData = z.infer<typeof budgetTimelineSchema>;
export type FinalFormData = z.infer<typeof finalSchema>;
export type WebDevelopmentFormData = z.infer<typeof webDevelopmentSchema>;
export type CustomSystemsFormData = z.infer<typeof customSystemsSchema>;
// Removed: UIUXDesignFormData, WebMaintenanceFormData, HostingSolutionsFormData (no longer main services)

// Cybersecurity Solutions specific validation
export const cybersecuritySolutionsSchema = z.object({
  ...basicInfoSchema.shape,
  subServices: z.array(z.string()).min(1, "Please select at least one security service"),
  securityIncident: z.enum(["yes-recent", "yes-past", "no"]),
  currentInfrastructure: z.string().min(20, "Please describe your infrastructure (minimum 20 characters)").max(1000),
  industryCompliance: z.string().min(1, "Please select compliance requirements"),
  dataToProtect: z.array(z.string()).min(1, "Please select at least one data type"),
  organizationSize: z.string().min(1, "Please select organization size"),
  existingSecurity: z.enum(["yes-comprehensive", "yes-basic", "no", "not-sure"]),
  urgencyLevel: z.enum(["critical", "high", "medium", "low"]),
  ...budgetTimelineSchema.shape,
  ...finalSchema.shape,
});

// General Inquiry validation
export const generalInquirySchema = z.object({
  ...basicInfoSchema.shape,
  interestedService: z.string().min(1, "Please select a service"),
  otherServiceDescription: z.string().min(20, "Please provide at least 20 characters").max(500).optional(),
  ...budgetTimelineSchema.shape,
  ...finalSchema.shape,
});

// Type exports
export type CybersecuritySolutionsFormData = z.infer<typeof cybersecuritySolutionsSchema>;
export type GeneralInquiryFormData = z.infer<typeof generalInquirySchema>;

// Dynamic schema selector - Updated to only include 3 main services
export function getValidationSchema(serviceId: string) {
  switch (serviceId) {
    case "general-inquiry":
      return generalInquirySchema;
    case "web-development":
      return webDevelopmentSchema;
    case "custom-systems":
      return customSystemsSchema;
    case "cybersecurity-solutions":
      return cybersecuritySolutionsSchema;
    // Removed: ui-ux-design, web-maintenance, hosting-solutions (no longer main services)
    default:
      throw new Error(`Unknown service ID: ${serviceId}`);
  }
}
