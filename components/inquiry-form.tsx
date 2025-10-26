"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { getServiceFormSchema } from "@/lib/inquiry-form-schemas";
import { getValidationSchema } from "@/lib/inquiry-form-validation";
import { FormField, ServiceType } from "@/lib/inquiry-form-types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface InquiryFormProps {
  serviceId: ServiceType;
  locale: "en" | "ar";
}

export default function InquiryForm({ serviceId, locale }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSchema = getServiceFormSchema(serviceId);
  const validationSchema = getValidationSchema(serviceId);

  const form = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", data);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  if (!formSchema) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          {locale === "ar" ? "لم يتم العثور على النموذج" : "Form not found"}
        </p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">
          {locale === "ar" ? "شكراً لك!" : "Thank You!"}
        </h3>
        <p className="text-muted-foreground">
          {locale === "ar"
            ? "سنتواصل معك قريباً"
            : "We'll get back to you soon"}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Form Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          {formSchema.serviceName[locale]}
        </h2>
        <p className="text-muted-foreground">
          {locale === "ar"
            ? "أكمل النموذج أدناه وسنتواصل معك قريباً"
            : "Fill out the form below and we'll get back to you soon"}
        </p>
      </div>

      {/* Render Sections */}
      {formSchema.sections.map((section, sectionIndex) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.1 }}
        >
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 md:p-8">
              {/* Section Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {section.title[locale]}
                </h3>
                {section.description && (
                  <p className="text-sm text-muted-foreground">
                    {section.description[locale]}
                  </p>
                )}
              </div>

              {/* Section Fields */}
              <div className="space-y-6">
                {section.fields.map((field) => (
                  <FormFieldComponent
                    key={field.id}
                    field={field}
                    locale={locale}
                    form={form}
                  />
                ))}
              </div>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </motion.div>
      ))}

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              {locale === "ar" ? "جاري الإرسال..." : "Submitting..."}
            </>
          ) : (
            <>{locale === "ar" ? "إرسال الطلب" : "Submit Inquiry"}</>
          )}
        </Button>
      </div>
    </form>
  );
}

// Individual Field Component
function FormFieldComponent({
  field,
  locale,
  form,
}: {
  field: FormField;
  locale: "en" | "ar";
  form: any;
}) {
  const {
    register,
    formState: { errors },
  } = form;

  const error = errors[field.id];

  // Check if field should be shown (conditional logic)
  if (field.conditional) {
    const watchedValue = form.watch(field.conditional.field);
    const shouldShow = Array.isArray(field.conditional.value)
      ? field.conditional.value.includes(watchedValue)
      : watchedValue === field.conditional.value;

    if (!shouldShow) return null;
  }

  return (
    <div className="space-y-2">
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

      {/* Input Field */}
      <div>
        {/* Text, Email, Tel, URL */}
        {["text", "email", "tel", "url"].includes(field.type) && (
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder?.[locale]}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            {...register(field.id)}
          />
        )}

        {/* Textarea */}
        {field.type === "textarea" && (
          <textarea
            id={field.id}
            rows={4}
            placeholder={field.placeholder?.[locale]}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
            {...register(field.id)}
          />
        )}

        {/* Select */}
        {field.type === "select" && (
          <select
            id={field.id}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            {...register(field.id)}
          >
            <option value="">
              {field.placeholder?.[locale] || (locale === "ar" ? "اختر..." : "Select...")}
            </option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label[locale]}
              </option>
            ))}
          </select>
        )}

        {/* Radio */}
        {field.type === "radio" && (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
              >
                <input
                  type="radio"
                  value={option.value}
                  className="w-4 h-4 text-primary focus:ring-primary"
                  {...register(field.id)}
                />
                <span className="text-sm">{option.label[locale]}</span>
              </label>
            ))}
          </div>
        )}

        {/* Checkbox (single or multiple) */}
        {field.type === "checkbox" && (
          <div className="space-y-2">
            {field.options ? (
              // Multiple checkboxes
              field.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    className="w-4 h-4 text-primary rounded focus:ring-primary"
                    {...register(field.id)}
                  />
                  <span className="text-sm">{option.label[locale]}</span>
                </label>
              ))
            ) : (
              // Single checkbox
              <label className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary rounded focus:ring-primary"
                  {...register(field.id)}
                />
                <span className="text-sm">{field.label[locale]}</span>
              </label>
            )}
          </div>
        )}

        {/* Multiselect */}
        {field.type === "multiselect" && (
          <div className="space-y-2 border border-border rounded-lg p-4 max-h-64 overflow-y-auto">
            {field.options?.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  className="w-4 h-4 text-primary rounded focus:ring-primary"
                  {...register(field.id)}
                />
                <span className="text-sm">{option.label[locale]}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-500 mt-1">
          {error.message as string}
        </p>
      )}
    </div>
  );
}
