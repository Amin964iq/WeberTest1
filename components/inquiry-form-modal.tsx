"use client";

import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, Loader2, Sparkles, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getServiceFormSchema } from "@/lib/inquiry-form-schemas";
import { getValidationSchema } from "@/lib/inquiry-form-validation";
import { ServiceType, FormField as FormFieldType } from "@/lib/inquiry-form-types";
import { Button } from "@/components/ui/button";
import SpaceBackground from "@/components/space-background";
import FloatingElements from "@/components/floating-elements";

interface InquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: ServiceType;
  locale: "en" | "ar";
}

export default function InquiryFormModal({
  isOpen,
  onClose,
  serviceId,
  locale,
}: InquiryFormModalProps) {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = welcome screen
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSchema = getServiceFormSchema(serviceId);
  const validationSchema = getValidationSchema(serviceId);

  const form = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  // Reset when modal opens and hide navbar/body scroll
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(-1);
      setIsSubmitted(false);
      form.reset();
      // Hide navbar and prevent body scroll
      document.body.style.overflow = 'hidden';
      const navbar = document.querySelector('[data-navbar]');
      if (navbar) navbar.classList.add('hidden');
    } else {
      // Restore navbar and body scroll
      document.body.style.overflow = 'unset';
      const navbar = document.querySelector('[data-navbar]');
      if (navbar) navbar.classList.remove('hidden');
    }
  }, [isOpen, form]);

  // Close on escape key - DISABLED to make form non-cancelable
  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     if (e.key === "Escape" && isOpen) onClose();
  //   };
  //   window.addEventListener("keydown", handleEscape);
  //   return () => window.removeEventListener("keydown", handleEscape);
  // }, [isOpen, onClose]);

  if (!formSchema) return null;

  const totalSteps = formSchema.sections.length;
  const currentSection = currentStep >= 0 ? formSchema.sections[currentStep] : null;

  // Calculate display step number (accounting for skipped sub-service section)
  const getDisplayStep = () => {
    if (serviceId === "general-inquiry" && currentStep > 1) {
      const selectedService = form.getValues("interestedServices" as any);
      if (selectedService === "other") {
        // If "other" is selected and we skipped sub-service section
        return currentStep; // Show step as-is
      }
    }
    return currentStep + 1;
  };

  const getDisplayTotal = () => {
    if (serviceId === "general-inquiry") {
      const selectedService = form.getValues("interestedServices" as any);
      if (selectedService === "other" && currentStep >= 1) {
        // Show one less total when sub-service section is skipped
        return totalSteps - 1;
      }
    }
    return totalSteps;
  };

  const handleNext = async () => {
    if (currentStep === -1) {
      // Start button clicked
      setCurrentStep(0);
      return;
    }

    // Validate current section fields
    if (currentSection) {
      const fieldIds = currentSection.fields.map((f) => f.id);
      const isValid = await form.trigger(fieldIds as any);

      if (!isValid) {
        return; // Stop if validation fails
      }
    }

    // For general inquiry: Skip sub-service section if "other" is selected
    let nextStep = currentStep + 1;
    if (serviceId === "general-inquiry" && currentStep === 0) {
      const selectedService = form.getValues("interestedServices" as any);
      if (selectedService === "other") {
        nextStep = currentStep + 2; // Skip sub-service section (index 1)
      }
    }

    if (nextStep < totalSteps) {
      setCurrentStep(nextStep);
    } else {
      // Last step - submit
      form.handleSubmit(onSubmit)();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      let prevStep = currentStep - 1;
      // For general inquiry: Skip sub-service section if "other" was selected
      if (serviceId === "general-inquiry" && currentStep === 2) {
        const selectedService = form.getValues("interestedServices" as any);
        if (selectedService === "other") {
          prevStep = currentStep - 2; // Skip back to service selection
        }
      }
      setCurrentStep(prevStep);
    }
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      // Add service ID to the form data
      const submitData = {
        ...data,
        serviceId,
        locale,
      };

      // Call API to save inquiry
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry");
      }

      console.log("✅ Inquiry submitted successfully:", result);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("❌ Error submitting inquiry:", error);
      setIsSubmitting(false);

      // Show error to user (you can enhance this with a toast notification)
      alert(
        locale === "ar"
          ? "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى."
          : "An error occurred while submitting the form. Please try again."
      );
    }
  };

  const progressPercentage = currentStep === -1 ? 0 : ((currentStep + 1) / totalSteps) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop - Non-clickable to prevent closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Effects - Hidden to improve visibility */}
            <div className="absolute inset-0 overflow-hidden hidden">
              <SpaceBackground />
              <FloatingElements density="low" showCodeSnippets={false} />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors flex items-center justify-center hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Progress Bar */}
            {currentStep >= 0 && !isSubmitted && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted z-20">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Content */}
            <div className="relative z-10 overflow-y-auto max-h-[90vh]">
              <div className="p-6 md:p-10">
                <AnimatePresence mode="wait">
                  {/* Welcome Screen */}
                  {currentStep === -1 && (
                    <motion.div
                      key="welcome"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center py-12 space-y-8"
                    >
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary"
                      >
                        <Sparkles className="w-10 h-10 text-white" />
                      </motion.div>

                      {/* Welcome Message */}
                      <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                          {locale === "ar"
                            ? "مرحباً بك في ويبر!"
                            : "Welcome to Weber!"}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                          {locale === "ar"
                            ? "نحن متحمسون لمعرفة المزيد عن مشروعك. سيستغرق الأمر 3-5 دقائق فقط للإجابة على بعض الأسئلة التي ستساعدنا على خدمتك بشكل أفضل."
                            : "We're excited to learn more about your project. It'll take just 3-5 minutes to answer a few questions that will help us serve you better."}
                        </p>
                      </div>

                      {/* Start Button */}
                      <Button
                        size="lg"
                        onClick={handleNext}
                        className="min-w-[200px] bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all text-lg py-6"
                      >
                        {locale === "ar" ? "لنبدأ" : "Let's Start"}
                        {locale === "ar" ? (
                          <ChevronLeft className="mr-2 h-5 w-5" />
                        ) : (
                          <ChevronRight className="ml-2 h-5 w-5" />
                        )}
                      </Button>
                    </motion.div>
                  )}

                  {/* Form Steps */}
                  {currentStep >= 0 && !isSubmitted && currentSection && (
                    <motion.div
                      key={`step-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8 py-6"
                    >
                      {/* Step Header */}
                      <div className="text-center mb-8">
                        <p className="text-sm text-muted-foreground mb-2">
                          {locale === "ar" ? "خطوة" : "Step"} {getDisplayStep()}{" "}
                          {locale === "ar" ? "من" : "of"} {getDisplayTotal()}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          {currentSection.title[locale]}
                        </h3>
                        {currentSection.description && (
                          <p className="text-muted-foreground">
                            {currentSection.description[locale]}
                          </p>
                        )}
                      </div>

                      {/* Fields */}
                      <div className="space-y-6 max-w-2xl mx-auto">
                        {currentSection.fields.map((field) => (
                          <FormField
                            key={field.id}
                            field={field}
                            locale={locale}
                            form={form}
                          />
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between items-center pt-8 gap-4">
                        {locale === "ar" ? (
                          <>
                            {/* In Arabic: Next button on the left */}
                            <Button
                              onClick={handleNext}
                              disabled={isSubmitting}
                              className="min-w-[120px] bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                                  جاري الإرسال...
                                </>
                              ) : currentStep === totalSteps - 1 ? (
                                <>
                                  إرسال
                                  <ChevronLeft className="ml-2 h-5 w-5" />
                                </>
                              ) : (
                                <>
                                  التالي
                                  <ChevronLeft className="ml-2 h-5 w-5" />
                                </>
                              )}
                            </Button>

                            {/* In Arabic: Previous button on the right */}
                            <Button
                              variant="outline"
                              onClick={handlePrevious}
                              disabled={currentStep === 0}
                              className="min-w-[120px] border-white/20 text-white hover:bg-white/10 hover:text-white disabled:opacity-50"
                            >
                              السابق
                              <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                          </>
                        ) : (
                          <>
                            {/* In English: Previous button on the left */}
                            <Button
                              variant="outline"
                              onClick={handlePrevious}
                              disabled={currentStep === 0}
                              className="min-w-[120px] border-white/20 text-white hover:bg-white/10 hover:text-white disabled:opacity-50"
                            >
                              <ChevronLeft className="mr-2 h-5 w-5" />
                              Previous
                            </Button>

                            {/* In English: Next button on the right */}
                            <Button
                              onClick={handleNext}
                              disabled={isSubmitting}
                              className="min-w-[120px] bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                  Submitting...
                                </>
                              ) : currentStep === totalSteps - 1 ? (
                                <>
                                  Submit
                                  <CheckCircle2 className="ml-2 h-5 w-5" />
                                </>
                              ) : (
                                <>
                                  Next
                                  <ChevronRight className="ml-2 h-5 w-5" />
                                </>
                              )}
                            </Button>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Success Screen */}
                  {isSubmitted && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16 space-y-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
                      </motion.div>

                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold">
                          {locale === "ar" ? "شكراً لك!" : "Thank You!"}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {locale === "ar"
                            ? "تم إرسال طلبك بنجاح. سنتواصل معك قريباً!"
                            : "Your inquiry has been submitted successfully. We'll get back to you soon!"}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Helper function to translate error messages to Arabic
function translateErrorMessage(message: string, locale: "en" | "ar"): string {
  if (locale !== "ar") return message;

  const errorTranslations: Record<string, string> = {
    "Name must be at least 2 characters": "يجب أن يكون الاسم على الأقل 2 أحرف",
    "Company name must be at least 2 characters": "يجب أن يكون اسم الشركة على الأقل 2 أحرف",
    "Please enter a valid email address": "يرجى إدخال عنوان بريد إلكتروني صحيح",
    "Phone number must be at least 8 characters": "يجب أن يكون رقم الهاتف على الأقل 8 أحرف",
    "Please select your industry": "يرجى اختيار مجال عملك",
    "This field is required": "هذا الحقل مطلوب",
    "Please select a budget range": "يرجى اختيار نطاق الميزانية",
    "Please select a timeline": "يرجى اختيار الإطار الزمني",
    "Please select your preferred contact time": "يرجى اختيار وقتك المفضل للتواصل",
    "You must agree to the privacy policy to continue": "يجب أن توافق على سياسة الخصوصية للمتابعة",
    "Please select at least one service type": "يرجى اختيار نوع خدمة واحد على الأقل",
    "Please select the main goal": "يرجى اختيار الهدف الرئيسي",
    "Please select page count": "يرجى اختيار عدد الصفحات",
    "Please select a design style": "يرجى اختيار نمط التصميم",
    "Please select at least one system type": "يرجى اختيار نوع نظام واحد على الأقل",
    "Please describe key features": "يرجى وصف الميزات الأساسية",
    "Please select user count": "يرجى اختيار عدد المستخدمين",
    "Please select compliance requirements": "يرجى اختيار متطلبات الامتثال",
    "Please select at least one data type": "يرجى اختيار نوع بيانات واحد على الأقل",
    "Please select organization size": "يرجى اختيار حجم المنظمة",
    "Please select at least one security service": "يرجى اختيار خدمة أمان واحدة على الأقل",
    "Please describe your infrastructure": "يرجى وصف البنية التحتية الخاصة بك",
    "Please select a service": "يرجى اختيار خدمة",
    "Please provide at least 20 characters": "يرجى تقديم 20 حرفًا على الأقل",
    "Please select one of our main services": "يرجى اختيار إحدى خدماتنا الرئيسية",
    "Please describe the custom service you need": "يرجى وصف الخدمة المخصصة التي تحتاجها",
  };

  return errorTranslations[message] || message;
}

// Form Field Component (same as before but optimized for modal)
function FormField({
  field,
  locale,
  form,
}: {
  field: FormFieldType;
  locale: "en" | "ar";
  form: any;
}) {
  const {
    register,
    formState: { errors },
  } = form;

  const error = errors[field.id];

  // Check conditional logic
  if (field.conditional) {
    const watchedValue = form.watch(field.conditional.field);
    const shouldShow = Array.isArray(field.conditional.value)
      ? field.conditional.value.includes(watchedValue)
      : watchedValue === field.conditional.value;

    if (!shouldShow) return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      {/* Label */}
      <label
        htmlFor={field.id}
        className="block text-sm font-medium text-foreground"
      >
        {field.label[locale]}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Description */}
      {field.description && (
        <p className="text-xs text-muted-foreground">
          {field.description[locale]}
        </p>
      )}

      {/* Input */}
      <div>
        {/* Text, Email, Tel, URL */}
        {["text", "email", "tel", "url"].includes(field.type) && (
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder?.[locale]}
            className="w-full px-4 py-3 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background/80 backdrop-blur-sm text-white transition-all"
            {...register(field.id)}
          />
        )}

        {/* Textarea */}
        {field.type === "textarea" && (
          <textarea
            id={field.id}
            rows={4}
            placeholder={field.placeholder?.[locale]}
            className="w-full px-4 py-3 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background/80 backdrop-blur-sm text-white resize-none transition-all"
            {...register(field.id)}
          />
        )}

        {/* Select */}
        {field.type === "select" && (
          <select
            id={field.id}
            className="w-full px-4 py-3 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background/80 backdrop-blur-sm text-white transition-all cursor-pointer"
            {...register(field.id)}
          >
            <option value="" className="bg-background text-white">
              {field.placeholder?.[locale] || (locale === "ar" ? "اختر..." : "Select...")}
            </option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value} className="bg-background text-white">
                {option.label[locale]}
              </option>
            ))}
          </select>
        )}

        {/* Radio */}
        {field.type === "radio" && (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <motion.label
                key={option.value}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 rtl:space-x-reverse cursor-pointer p-4 rounded-lg bg-background/40 hover:bg-white/10 border border-border/30 hover:border-primary/50 transition-all group"
              >
                <input
                  type="radio"
                  value={option.value}
                  className="w-5 h-5 mt-0.5 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 bg-background/80 border-border/50 cursor-pointer"
                  {...register(field.id)}
                />
                <span className="text-sm text-white group-hover:text-primary transition-colors flex-1">
                  {option.label[locale]}
                </span>
              </motion.label>
            ))}
          </div>
        )}

        {/* Checkbox or Multiselect */}
        {(field.type === "checkbox" || field.type === "multiselect") && field.options && (
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-background/20">
            {field.options?.map((option, index) => (
              <motion.label
                key={option.value}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 rtl:space-x-reverse cursor-pointer p-4 rounded-lg bg-background/40 hover:bg-white/10 border border-border/30 hover:border-primary/50 transition-all group"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  className="w-5 h-5 mt-0.5 text-primary rounded focus:ring-2 focus:ring-primary focus:ring-offset-0 bg-background/80 border-border/50 cursor-pointer"
                  {...register(field.id)}
                />
                <span className="text-sm text-white group-hover:text-primary transition-colors flex-1">
                  {option.label[locale]}
                </span>
              </motion.label>
            ))}
          </div>
        )}

        {/* Standalone Checkbox (for privacy agreement) */}
        {field.type === "checkbox" && !field.options && (
          <motion.label
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start space-x-3 rtl:space-x-reverse cursor-pointer p-4 rounded-lg bg-background/40 hover:bg-white/10 border border-border/30 hover:border-primary/50 transition-all group"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mt-0.5 text-primary rounded focus:ring-2 focus:ring-primary focus:ring-offset-0 bg-background/80 border-border/50 cursor-pointer flex-shrink-0"
              {...register(field.id)}
            />
            <span className="text-sm text-white group-hover:text-primary transition-colors flex-1">
              {field.label[locale]}
            </span>
          </motion.label>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-500 mt-1">
          {translateErrorMessage(error.message as string, locale)}
        </p>
      )}
    </motion.div>
  );
}
