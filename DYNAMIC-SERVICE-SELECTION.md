# Dynamic Service Selection - Updated Inquiry System

## 🎯 What Changed

The inquiry form system has been updated to be **fully dynamic**. Instead of forcing users to a specific service form, they now:

1. Fill in basic information (name, company, email, etc.)
2. **Choose which service they're interested in**
3. **Select "Other" if they need a service not listed**
4. Continue with budget/timeline questions
5. Submit their inquiry

---

## ✨ New Features

### 1. Service Selection After Basic Info

After entering basic information, users see:

**Question:** "Which service are you most interested in?"

**Options:**
- 🌐 Web Development
- 🎨 UI/UX Design
- ⚙️ Custom Systems Development
- 🔧 Web Maintenance & Support
- 🌍 Hosting & Domain Solutions
- ❓ **Other / Not Sure**

### 2. "Other" Service Option

If the user selects "Other / Not Sure", they see an additional text field:

**Field:** "Please describe the service you need"
- Minimum 20 characters
- Maximum 500 characters
- Required if "Other" is selected
- Free-text for custom service requests

This makes Devura **open to discuss any service** the client needs!

### 3. General Inquiry Form

A new "General Inquiry" form type has been created with these sections:

1. **Basic Information** (7 fields)
   - Full Name
   - Company Name
   - Email
   - Phone
   - Preferred Contact Method
   - Industry
   - Project Description

2. **Service Selection** (NEW!)
   - Interested Service (required)
   - Other Service Description (conditional)

3. **Budget & Timeline** (3 fields)
   - Budget Range
   - Timeline
   - Payment Preference

4. **Final Section** (3 fields)
   - Additional Comments
   - Preferred Contact Time
   - Privacy Agreement

---

## 🔄 Form Flow

### Old Flow (Before)
```
User clicks contact button
   ↓
Modal opens with FORCED service (e.g., "Web Development")
   ↓
User fills service-specific questions
   ↓
Submit
```

### New Flow (Now)
```
User clicks "Fill the Form" button
   ↓
Modal opens with GENERAL INQUIRY
   ↓
Step 1: Basic Information
   ↓
Step 2: Service Selection
   ├─→ User selects "Web Development" ✓
   ├─→ User selects "UI/UX Design" ✓
   ├─→ User selects "Custom Systems" ✓
   ├─→ User selects "Web Maintenance" ✓
   ├─→ User selects "Hosting Solutions" ✓
   └─→ User selects "Other" → Text field appears ✓
   ↓
Step 3: Budget & Timeline
   ↓
Step 4: Preferred Contact Time & Privacy
   ↓
Submit with selected service info!
```

---

## 📝 Data Captured

When the form is submitted, you'll receive:

```json
{
  // Basic Information
  "fullName": "John Smith",
  "companyName": "Tech Innovations Inc",
  "email": "john@techinnovations.com",
  "phone": "+1234567890",
  "preferredContact": "whatsapp",
  "industry": "technology",
  "description": "We need to build a comprehensive platform...",

  // NEW: Service Selection
  "interestedService": "custom-systems",
  "otherServiceDescription": null, // Or filled if "other" was selected

  // Budget & Timeline
  "budgetRange": "10000-25000",
  "timeline": "3-6-months",
  "paymentPreference": "monthly",

  // Final
  "additionalComments": "We're looking forward to discussing this...",
  "preferredContactTime": "afternoon",
  "agreedToPrivacy": true,

  // Metadata
  "serviceId": "general-inquiry",
  "locale": "en"
}
```

### Example with "Other" Service

```json
{
  "fullName": "Sarah Ahmed",
  "companyName": "Future Tech",
  "email": "sarah@futuretech.com",
  // ... other basic fields

  "interestedService": "other",
  "otherServiceDescription": "We need a custom AI-powered chatbot integrated with our existing CRM system. The chatbot should handle customer inquiries in multiple languages and provide real-time analytics.",

  // ... rest of the data
}
```

---

## 🧪 How to Test

### 1. Test General Inquiry (NEW!)

Visit the contact page:
- **English**: http://localhost:3003/en/contact
- **Arabic**: http://localhost:3003/ar/contact

Steps:
1. Click the **"Fill the Form"** button (4th contact option)
2. Complete the welcome screen
3. Fill in basic information
4. **Select a service** from the options
5. Try selecting **"Other / Not Sure"** and fill the description
6. Complete budget/timeline
7. Choose preferred contact time
8. Submit and check server console

### 2. Test All Service Options

For each service option, test:
- ✅ Web Development
- ✅ UI/UX Design
- ✅ Custom Systems
- ✅ Web Maintenance
- ✅ Hosting Solutions
- ✅ **Other (with custom description)**

### 3. Test Validation

Try to:
- Leave "Interested Service" unselected → Should show error
- Select "Other" without filling description → Should show error
- Fill description with <20 characters → Should show error

---

## 🎨 Where It's Used

The general inquiry form is now the default for:

1. **Contact Page**
   - `/en/contact` and `/ar/contact`
   - 4th button: "Fill the Form"

2. **Any ContactCTA Component**
   - When no specific serviceId is provided
   - Defaults to "general-inquiry"

3. **Service Detail Pages** (Optional)
   - Can still use service-specific forms if serviceId is provided
   - Example: `<ContactCTA serviceId="web-development" locale={locale} />`

---

## 🔧 Technical Details

### New Files Created:
- None (updated existing files)

### Files Modified:
1. `lib/inquiry-form-types.ts`
   - Added `"general-inquiry"` to ServiceType
   - Added `SERVICE_CATEGORY_OPTIONS` constant

2. `lib/inquiry-form-schemas.ts`
   - Created `SERVICE_SELECTION_SECTION`
   - Created `GENERAL_INQUIRY_SCHEMA`
   - Added to `SERVICE_FORM_SCHEMAS` export

3. `lib/inquiry-form-validation.ts`
   - Added `generalInquirySchema` validation
   - Added `GeneralInquiryFormData` type
   - Updated `getValidationSchema` function

4. `components/contact-section.tsx`
   - Changed serviceId from `"web-development"` to `"general-inquiry"`

5. `components/contact-cta.tsx`
   - Set default serviceId to `"general-inquiry"`
   - Always renders modal (removed conditional)

---

## 🚀 Benefits

### For Clients:
- ✅ **More flexible** - Can request any service, not just what's pre-defined
- ✅ **Less intimidating** - Starts with simple questions before asking specifics
- ✅ **Clear options** - See all services Devura offers in one place
- ✅ **Open discussion** - "Other" option shows you're open to custom requests

### For Devura:
- ✅ **Better lead quality** - Know exactly which service they're interested in
- ✅ **Custom opportunities** - "Other" field captures unique project requests
- ✅ **Organized data** - All inquiries have service category for sorting
- ✅ **Flexibility** - Can still use service-specific forms when needed

---

## 📊 Comparison: Before vs After

| Aspect | Before | After |
|--------|--------|-------|
| **Service Selection** | Forced/Pre-selected | User chooses |
| **Custom Services** | Not supported | "Other" option available |
| **Form Type** | Service-specific only | General + Service-specific |
| **Flexibility** | Limited to 5 services | Open to any service request |
| **User Experience** | Might feel limiting | Feels more welcoming |
| **Lead Categorization** | Based on where they clicked | Based on their selection |

---

## 💡 Usage Examples

### Example 1: General Contact Form (Default)
```tsx
import ContactCTA from "@/components/contact-cta";

// Uses general-inquiry by default
<ContactCTA locale="en" />
```

### Example 2: Service-Specific Form (Optional)
```tsx
// On a specific service detail page
<ContactCTA
  serviceId="web-development"
  locale="en"
/>
// This will show web development specific questions
```

### Example 3: Compact Variant
```tsx
<ContactCTA
  variant="compact"
  locale="ar"
/>
// Shows 3 buttons inline, uses general-inquiry
```

---

## ✅ Testing Checklist

### General Flow:
- [ ] Open contact page
- [ ] Click "Fill the Form" button
- [ ] Complete basic information
- [ ] Service selection screen appears
- [ ] All 6 service options visible
- [ ] Can select each option
- [ ] "Other" shows text field when selected
- [ ] Text field validates (min 20 chars)
- [ ] Can proceed to next step
- [ ] Budget/timeline questions appear
- [ ] Preferred contact time appears
- [ ] Can submit successfully
- [ ] Data logged to console
- [ ] Success screen shows
- [ ] Modal closes after 3 seconds

### "Other" Service:
- [ ] Select "Other / Not Sure"
- [ ] Description field appears
- [ ] Field is required
- [ ] Shows error if <20 characters
- [ ] Accepts valid description (20-500 chars)
- [ ] Submits successfully
- [ ] Data includes service description

### Bilingual:
- [ ] Test in English mode
- [ ] Test in Arabic mode
- [ ] All labels translate correctly
- [ ] Service options in correct language
- [ ] Validation errors in correct language

---

## 🎉 You're Ready!

The inquiry system is now **fully dynamic** and ready for production!

**Quick Test:** Visit http://localhost:3003/en/contact and click "Fill the Form"

The form will now ask users which service they need, including an "Other" option for services not listed. Perfect for capturing all types of client inquiries! 🚀
