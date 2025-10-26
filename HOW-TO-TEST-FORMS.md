# How to Test the Inquiry Forms

## 🚀 Quick Start

### Method 1: Using the Test Page (Recommended)

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Open the test page in your browser**:
   - English: `http://localhost:3000/en/inquiry-test`
   - Arabic: `http://localhost:3000/ar/inquiry-test`

3. **Select a service** from the buttons at the top

4. **Fill out the form** and click submit

5. **Check the browser console** (F12 → Console tab) to see the submitted data

---

## 🎯 What You Can Test

### ✅ All 5 Service Forms
- 🌐 Web Development (9 custom questions)
- 🎨 UI/UX Design (7 custom questions)
- ⚙️ Custom Systems (7 custom questions)
- 🔧 Web Maintenance (8 custom questions)
- 🌍 Hosting Solutions (8 custom questions)

### ✅ Features to Test

1. **Bilingual Support**
   - Visit `/en/inquiry-test` for English
   - Visit `/ar/inquiry-test` for Arabic
   - All labels, placeholders, and options change language

2. **Form Validation**
   - Try submitting without filling required fields
   - Enter invalid email or phone
   - See error messages appear

3. **Conditional Fields**
   - Some fields show/hide based on previous answers
   - Example: Website URL field only shows if "Website is live" = Yes

4. **Different Field Types**
   - Text inputs
   - Textareas
   - Select dropdowns
   - Radio buttons
   - Checkboxes
   - Multi-select checkboxes

5. **Form Submission**
   - Click submit
   - See loading spinner
   - See success message
   - Form resets after 3 seconds

---

## 📱 Testing on Mobile

1. Open the test page on your phone or tablet
2. Or use Chrome DevTools:
   - Press F12
   - Click the device toggle icon (top-left)
   - Select a mobile device
3. Test form usability on small screens

---

## 🔍 What to Look For

### Design
- ✅ Clean, professional layout
- ✅ Proper spacing and typography
- ✅ Animations on scroll
- ✅ Responsive on all screen sizes

### Functionality
- ✅ All fields work correctly
- ✅ Validation shows proper errors
- ✅ Required fields are marked with *
- ✅ Placeholders provide examples
- ✅ Success message displays after submit

### Arabic (RTL)
- ✅ Text aligns right
- ✅ Form fields flip direction
- ✅ Icons and spacing adjust properly
- ✅ All text in Arabic

---

## 🐛 Debugging

If you see errors:

1. **Check the console** (F12 → Console)
2. **Make sure all dependencies are installed**:
   ```bash
   npm install
   ```
3. **Verify the files exist**:
   - `lib/inquiry-form-types.ts`
   - `lib/inquiry-form-schemas.ts`
   - `lib/inquiry-form-validation.ts`
   - `components/inquiry-form.tsx`

---

## 📊 Viewing Submitted Data

When you submit a form, open the browser console (F12) and you'll see:

```javascript
Form Data: {
  fullName: "John Smith",
  companyName: "Tech Co",
  email: "john@example.com",
  phone: "+1234567890",
  preferredContact: "whatsapp",
  industry: "ecommerce",
  description: "We need an online store...",
  subServices: ["ecommerce"],
  websiteGoal: "sales",
  // ... all other fields
  budgetRange: "5000-10000",
  timeline: "2-3-months",
  agreedToPrivacy: true
}
```

---

## 🎨 Customization Test

Want to test customization? Try:

1. **Add a new field** to a schema in `lib/inquiry-form-schemas.ts`
2. **Refresh the test page** and see it appear
3. **Add validation** in `lib/inquiry-form-validation.ts`
4. **Test the validation** works

---

## ✅ Production Integration

Once you're happy with the forms:

1. **Add forms to service detail pages**:
   ```tsx
   import InquiryForm from "@/components/inquiry-form";

   // Inside your service detail page:
   <InquiryForm
     serviceId="web-development"
     locale={locale}
   />
   ```

2. **Create API route** to handle submissions:
   - Create `app/api/inquiry/route.ts`
   - Validate data on server
   - Send email notifications
   - Store in database (optional)

3. **Remove test page** (optional):
   - Delete `app/[locale]/inquiry-test/page.tsx`

---

## 📞 Need Help?

- Review `INQUIRY-FORM-SYSTEM.md` for detailed documentation
- Check TypeScript types in `lib/inquiry-form-types.ts`
- Look at schemas in `lib/inquiry-form-schemas.ts`
- Examine validation in `lib/inquiry-form-validation.ts`

---

**Happy Testing! 🎉**
