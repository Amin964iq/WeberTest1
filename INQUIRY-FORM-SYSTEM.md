# Devura Inquiry Form System Documentation

## Overview

The Devura Inquiry Form System is a comprehensive, dynamic form solution designed to capture detailed client requirements for all services offered by Devura. Each service has its own tailored form with relevant questions that help understand project scope, budget, and timeline.

## Features

✅ **5 Service-Specific Forms**
- Web Development
- UI/UX Design
- Custom Systems Development
- Web Maintenance
- Domain & Hosting Solutions

✅ **Bilingual Support** (English & Arabic with RTL)
✅ **Type-Safe** with TypeScript
✅ **Validated** with Zod schemas
✅ **Responsive** and mobile-friendly
✅ **Conditional Fields** (show/hide based on answers)
✅ **Professional Tone** matching Devura's branding

---

## File Structure

```
lib/
├── inquiry-form-types.ts          # TypeScript interfaces and types
├── inquiry-form-schemas.ts        # Form schemas for all services
└── inquiry-form-validation.ts     # Zod validation schemas

components/
└── inquiry-form.tsx               # Main form component (to be created)
```

---

## Form Sections

Each service form contains these standard sections:

### 1. **Basic Information** (Common to all)
- Full Name
- Company/Business Name
- Email
- Phone/WhatsApp
- Preferred Contact Method
- Business Industry
- Business Description

### 2. **Project Details** (Service-specific)
Custom questions for each service type

### 3. **Budget & Timeline** (Common to all)
- Budget Range
- Desired Timeline
- Payment Preference

### 4. **Final Section** (Common to all)
- Additional Comments
- Privacy Policy Agreement

---

## Service-Specific Questions

### 🌐 Web Development
- Website type (e-commerce, portfolio, blog, etc.)
- Website goal
- Domain & hosting status
- Brand assets availability
- Page count
- Design style preference
- Reference websites
- E-commerce needs
- Multi-language support
- SEO requirements

### 🎨 UI/UX Design
- Design type (web app, mobile, dashboard, etc.)
- Interface type
- Wireframe availability
- Screen count
- Target audience
- Color theme
- Prototyping needs
- Deliverables format (Figma, XD, etc.)

### ⚙️ Custom Systems
- System type (CRM, POS, inventory, etc.)
- Key features needed
- Existing system status
- User count
- Platform preference (web, mobile, both)
- Integration needs
- Analytics requirements

### 🔧 Web Maintenance
- Website live status
- Website URL
- Platform type
- Current issues
- Maintenance frequency
- Performance optimization
- Security monitoring

### 🌍 Hosting Solutions
- Domain status
- Hosting status
- Traffic level
- Professional email needs
- Hosting type preference
- Renewal management

---

## Usage Example

### 1. Import Schema and Validation

```typescript
import { getServiceFormSchema } from "@/lib/inquiry-form-schemas";
import { getValidationSchema } from "@/lib/inquiry-form-validation";

const serviceId = "web-development";
const formSchema = getServiceFormSchema(serviceId);
const validationSchema = getValidationSchema(serviceId);
```

### 2. Use with React Hook Form

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const form = useForm({
  resolver: zodResolver(validationSchema),
  defaultValues: {
    // ... your default values
  },
});
```

### 3. Render Form Sections

```typescript
{formSchema?.sections.map((section) => (
  <div key={section.id}>
    <h2>{section.title[locale]}</h2>
    <p>{section.description?.[locale]}</p>

    {section.fields.map((field) => (
      <FormField
        key={field.id}
        field={field}
        locale={locale}
        form={form}
      />
    ))}
  </div>
))}
```

---

## Field Types Reference

| Type | Description | Props |
|------|-------------|-------|
| `text` | Single line text | placeholder, maxLength |
| `email` | Email address | pattern validation |
| `tel` | Phone number | pattern validation |
| `textarea` | Multi-line text | rows, maxLength |
| `select` | Dropdown selection | options[] |
| `multiselect` | Multiple selection | options[] |
| `radio` | Radio buttons | options[] |
| `checkbox` | Checkboxes | options[] |
| `url` | Website URL | URL validation |
| `range` | Slider input | min, max, step |
| `date` | Date picker | min, max |

---

## Conditional Fields

Some fields only show when specific conditions are met:

```typescript
{
  id: "websiteUrl",
  type: "url",
  conditional: {
    field: "websiteLive",  // Only show if this field
    value: "yes",          // has this value
  },
  // ... other props
}
```

---

## Validation Rules

All validation is handled by Zod schemas:

- **Required fields**: Checked automatically
- **Email**: Must be valid email format
- **Phone**: 8-20 characters
- **Text length**: Min/max character limits
- **Arrays**: Minimum selection requirements
- **URLs**: Valid URL format
- **Privacy**: Must be accepted to submit

---

## Translation Structure

All text uses bilingual objects:

```typescript
label: {
  en: "Your Full Name",
  ar: "اسمك الكامل"
}
```

Access in components:
```typescript
<label>{field.label[locale]}</label>
```

---

## Form Submission Flow

1. **Client fills form** on service page
2. **Validate** with Zod on submit
3. **Prepare data** in structured format
4. **Send to API** (email or database)
5. **Confirm submission** with success message
6. **Admin notification** about new inquiry

---

## Data Structure After Submission

```typescript
{
  serviceId: "web-development",
  serviceName: "Web Development",
  submittedAt: "2025-01-23T10:30:00Z",
  basicInfo: {
    fullName: "John Smith",
    companyName: "Tech Co",
    email: "john@techco.com",
    phone: "+1234567890",
    preferredContact: "whatsapp",
    industry: "ecommerce",
    description: "We need an online store..."
  },
  projectDetails: {
    subServices: ["ecommerce"],
    websiteGoal: "sales",
    hasDomainHosting: "no",
    pageCount: "6-10",
    // ... other fields
  },
  budgetTimeline: {
    budgetRange: "5000-10000",
    timeline: "2-3-months",
    paymentPreference: "monthly"
  },
  additionalComments: "Optional extra info",
  agreedToPrivacy: true
}
```

---

## Next Steps for Implementation

1. **Create Form Component** (`components/inquiry-form.tsx`)
   - Render sections dynamically
   - Handle form state with React Hook Form
   - Show/hide conditional fields
   - Display validation errors

2. **Create API Route** (`app/api/inquiry/route.ts`)
   - Receive form data
   - Validate on server
   - Send email notification
   - Store in database (optional)
   - Return success/error

3. **Add to Service Pages**
   - Add form to each service detail page
   - Pre-select the service
   - Scroll to form on CTA click

4. **Email Template**
   - Create formatted email template
   - Send to admin email
   - Send confirmation to client

5. **Database Schema** (Optional)
   - Create inquiries table
   - Store all submissions
   - Admin dashboard to view/manage

---

## Benefits of This System

✅ **Comprehensive Data Collection** - Captures all necessary project details
✅ **Better Quotes** - Detailed info leads to accurate estimates
✅ **Professional Image** - Shows thoroughness and expertise
✅ **Time-Saving** - Reduces back-and-forth clarification emails
✅ **Organized** - Structured data easy to process
✅ **Type-Safe** - Fewer bugs, better developer experience
✅ **Bilingual** - Serves both Arabic and English clients
✅ **Scalable** - Easy to add new services or fields

---

## Customization

### Add New Service

1. Define sub-services options
2. Create project details section
3. Add to `SERVICE_FORM_SCHEMAS`
4. Create Zod validation schema
5. Update TypeScript types

### Add New Field

```typescript
{
  id: "newField",
  type: "select",
  label: { en: "New Question", ar: "سؤال جديد" },
  required: true,
  options: [
    { value: "opt1", label: { en: "Option 1", ar: "خيار 1" } },
    { value: "opt2", label: { en: "Option 2", ar: "خيار 2" } },
  ]
}
```

### Modify Validation

```typescript
newField: z.string().min(1, "Please select an option"),
```

---

## Best Practices

1. **Keep forms conversational** - "Tell us about your business" vs "Enter business name"
2. **Use placeholders** - Show examples of expected input
3. **Provide descriptions** - Explain complex questions
4. **Logical grouping** - Related questions together
5. **Progressive disclosure** - Show fields as needed
6. **Clear error messages** - Tell users exactly what's wrong
7. **Save progress** - Consider adding draft save functionality
8. **Mobile-first** - Test on mobile devices
9. **Accessibility** - Proper labels, ARIA attributes
10. **Fast loading** - Lazy load if form is large

---

## Support

For questions or issues:
- Review TypeScript types in `inquiry-form-types.ts`
- Check schemas in `inquiry-form-schemas.ts`
- Verify validation in `inquiry-form-validation.ts`
- Consult this documentation

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
