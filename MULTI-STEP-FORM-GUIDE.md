# Multi-Step Inquiry Form System - User Guide

## 🎉 What's New

You now have a beautiful, interactive multi-step form system with **3 contact options**:

1. **📧 Email Us** - Direct email link
2. **💬 WhatsApp** - Direct WhatsApp chat
3. **📋 Fill the Form** - Interactive multi-step modal form

---

## 🚀 How to Test

### 1. Start Development Server

```bash
npm run dev
```

### 2. Visit Test Page

- **English**: `http://localhost:3000/en/inquiry-test`
- **Arabic**: `http://localhost:3000/ar/inquiry-test`

### 3. Click "Fill the Form" Button

You'll see the beautiful modal with:
- ✨ Space background animation
- 🎨 Floating code elements
- 📝 Multi-step wizard interface

---

## ✨ Features

### Welcome Screen
- Greeting message
- Service badge showing which service form you're filling
- "Let's Start" button to begin

### Multi-Step Form
- **Progress bar** at the top showing completion percentage
- **One section at a time** for better UX
- **Step counter** (e.g., "Step 1 of 4")
- **Section title and description** for each step
- **Next/Previous buttons** for navigation
- **Real-time validation** - can't proceed with errors
- **Conditional fields** - questions appear based on previous answers

### Form Sections
1. **Basic Information** - Name, company, contact details
2. **Project Details** - Service-specific questions
3. **Budget & Timeline** - Budget range and timeframe
4. **Final Section** - Additional comments + privacy agreement

### Success Screen
- ✅ Green checkmark animation
- Thank you message
- Auto-closes after 3 seconds

---

## 🎨 Modal Features

### Design
- **Perfect size** - Not too big, not too small (max-width: 3xl)
- **Space background** - Same animated starfield as website
- **Floating elements** - Code snippets floating in background
- **Backdrop blur** - Professional modal overlay
- **Smooth animations** - Framer Motion transitions

### UX
- **Escape to close** - Press ESC key to close modal
- **Click outside to close** - Click backdrop to close
- **Close button** - X button in top-right corner
- **Keyboard navigation** - Tab through fields
- **Mobile responsive** - Works perfectly on all devices

### Validation
- ✅ **Company name is required** (no skipping)
- ✅ **All required fields** marked with red *
- ✅ **Real-time errors** shown below fields
- ✅ **Can't proceed** to next step with errors
- ✅ **Smart validation** - validates only current step

---

## 🔧 Components Created

### 1. `ContactCTA` Component
**File**: `components/contact-cta.tsx`

Shows 3 contact options in card format:

```tsx
<ContactCTA
  locale="en"
  serviceId="web-development"
  variant="default" // or "compact"
/>
```

**Props**:
- `locale`: "en" | "ar"
- `serviceId`: The service for the form
- `variant`: "default" (full section) or "compact" (just buttons)

**Variants**:
- **default**: Full section with 3 large cards
- **compact**: 3 inline buttons (for tight spaces)

### 2. `InquiryFormModal` Component
**File**: `components/inquiry-form-modal.tsx`

Multi-step wizard modal:

```tsx
<InquiryFormModal
  isOpen={true}
  onClose={() => setIsOpen(false)}
  serviceId="web-development"
  locale="en"
/>
```

**Props**:
- `isOpen`: boolean - Controls modal visibility
- `onClose`: function - Called when modal closes
- `serviceId`: ServiceType - Which service form to show
- `locale`: "en" | "ar" - Language

---

## 📱 How to Use in Your Pages

### Example 1: Service Detail Page

Add to bottom of service detail page:

```tsx
import ContactCTA from "@/components/contact-cta";

// Inside your page component:
<ContactCTA
  serviceId="web-development"
  locale={locale}
/>
```

### Example 2: Homepage CTA

Use compact variant:

```tsx
<ContactCTA
  serviceId="web-development"
  locale={locale}
  variant="compact"
/>
```

### Example 3: Custom Integration

Manual control:

```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import InquiryFormModal from "@/components/inquiry-form-modal";

export default function MyPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Get a Quote
      </Button>

      <InquiryFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        serviceId="web-development"
        locale="en"
      />
    </>
  );
}
```

---

## 🎯 What Changed

### ✅ Company Name is Now Required
Previously optional, now required with validation:
- Minimum 2 characters
- Maximum 150 characters
- Cannot skip this field

### ✅ Multi-Step Instead of Long Form
Before: One long scrolling form
Now: Friendly step-by-step wizard

### ✅ 3 Contact Options
Before: Just a contact form
Now: Email, WhatsApp, or Form

### ✅ Beautiful Modal
Before: Full-page form
Now: Elegant modal with animations

---

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Click each of the 3 contact options
- [ ] Fill the form modal opens smoothly
- [ ] Welcome screen shows correctly
- [ ] Can navigate through all steps
- [ ] Validation works (try leaving fields empty)
- [ ] Can't skip company name
- [ ] Submit button works on final step
- [ ] Success screen appears
- [ ] Modal closes after 3 seconds
- [ ] Can close with ESC key
- [ ] Can close by clicking outside
- [ ] Progress bar updates correctly

### Mobile Testing
- [ ] Modal fits screen properly
- [ ] All buttons are tappable
- [ ] Form fields work on touch devices
- [ ] Keyboard doesn't break layout
- [ ] Can scroll through long field lists
- [ ] Animations are smooth

### Bilingual Testing
- [ ] Test in English (/en/inquiry-test)
- [ ] Test in Arabic (/ar/inquiry-test)
- [ ] All labels translate correctly
- [ ] RTL works properly in Arabic
- [ ] Icons flip correctly for RTL
- [ ] Error messages in correct language

---

## 🔍 Console Output

When you submit the form, open browser console (F12) to see:

```javascript
Form Data: {
  // Basic Info
  fullName: "John Smith",
  companyName: "Tech Co", // Now required!
  email: "john@example.com",
  phone: "+1234567890",
  preferredContact: "whatsapp",
  industry: "ecommerce",
  description: "We need an online store...",

  // Project Details (varies by service)
  subServices: ["ecommerce"],
  websiteGoal: "sales",
  // ... more fields

  // Budget & Timeline
  budgetRange: "5000-10000",
  timeline: "2-3-months",
  paymentPreference: "monthly",

  // Final
  additionalComments: "Looking forward to working together!",
  agreedToPrivacy: true
}
```

---

## 📊 Form Flow

```
User clicks "Fill the Form"
    ↓
Welcome Screen appears
    ↓
User clicks "Let's Start"
    ↓
Step 1: Basic Information (7 fields)
    ↓ (validates before proceeding)
Step 2: Project Details (service-specific)
    ↓ (validates before proceeding)
Step 3: Budget & Timeline (3 fields)
    ↓ (validates before proceeding)
Step 4: Final Section (2 fields)
    ↓
User clicks "Submit"
    ↓
Loading spinner appears
    ↓
Success screen with checkmark
    ↓
Auto-close after 3 seconds
```

---

## 🎨 Customization

### Change Welcome Message

Edit `components/inquiry-form-modal.tsx`:

```tsx
// Line ~230
<h2 className="text-3xl md:text-4xl font-bold">
  {locale === "ar"
    ? "مرحباً بك في ديفورا!"
    : "Welcome to Devura!"}
</h2>
```

### Change Success Message

Edit `components/inquiry-form-modal.tsx`:

```tsx
// Line ~320
<h3 className="text-3xl font-bold">
  {locale === "ar" ? "شكراً لك!" : "Thank You!"}
</h3>
```

### Change Email/WhatsApp Links

Edit `components/contact-cta.tsx`:

```tsx
// Line ~25 - Email
action: () => window.open("mailto:YOUR_EMAIL@domain.com", "_blank"),

// Line ~32 - WhatsApp
action: () => window.open("https://wa.me/YOUR_NUMBER", "_blank"),
```

---

## 🚀 Production Integration

### Step 1: Add to Service Pages

Replace old contact sections with:

```tsx
<ContactCTA serviceId={service.id} locale={locale} />
```

### Step 2: Create API Route

Create `app/api/inquiry/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Validate data
  // Send email notification
  // Store in database
  // Send auto-reply to client

  return NextResponse.json({ success: true });
}
```

### Step 3: Update Form Submission

Edit `components/inquiry-form-modal.tsx` line ~150:

```typescript
const onSubmit = async (data: any) => {
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSubmitted(true);
      // Send to Google Analytics, etc.
    }
  } catch (error) {
    console.error("Error:", error);
    // Show error message
  }

  setIsSubmitting(false);
};
```

---

## ✅ Benefits

### For Users
- ✨ **Less overwhelming** - One step at a time
- 🎯 **Clear progress** - Know how far they've come
- 💡 **Better UX** - Beautiful, modern interface
- ⚡ **Faster** - Can choose quick options (email/WhatsApp)
- 📱 **Mobile-friendly** - Works great on phones

### For You (Devura)
- 📊 **Better data** - Required company name
- 🎨 **Professional** - Impressive first impression
- 📈 **Higher completion** - Step-by-step increases submissions
- 🔄 **Flexible** - 3 contact options = more leads
- 🌍 **Bilingual** - Serves all clients

---

## 🐛 Troubleshooting

**Modal doesn't open?**
- Check console for errors
- Ensure serviceId is valid
- Make sure isOpen state is managed correctly

**Validation not working?**
- Check if Zod is installed: `npm install zod`
- Verify validation schema exists for service

**Animations laggy?**
- Check if too many floating elements
- Reduce density in FloatingElements component
- Test on different device/browser

**Form doesn't submit?**
- Check console for validation errors
- Ensure all required fields are filled
- Check onSubmit function logic

---

## 📚 Related Files

- `components/contact-cta.tsx` - CTA with 3 options
- `components/inquiry-form-modal.tsx` - Multi-step modal
- `lib/inquiry-form-schemas.ts` - Form structure
- `lib/inquiry-form-validation.ts` - Zod schemas
- `lib/inquiry-form-types.ts` - TypeScript types

---

**🎉 Your multi-step inquiry form system is ready!**

Visit `/en/inquiry-test` or `/ar/inquiry-test` to see it in action!
