import {
  ServiceFormSchema,
  FormSection,
  INDUSTRY_OPTIONS,
  BUDGET_RANGES,
  TIMELINE_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  PAYMENT_PREFERENCE_OPTIONS,
  SERVICE_CATEGORY_OPTIONS,
  FieldOption,
} from "./inquiry-form-types";

// ============================================
// BASIC INFORMATION SECTION (Common to all services)
// ============================================
const BASIC_INFO_SECTION: FormSection = {
  id: "basic-info",
  title: {
    en: "Let's Get to Know You",
    ar: "دعنا نتعرف عليك",
  },
  description: {
    en: "Tell us about yourself and your business so we can serve you better",
    ar: "أخبرنا عن نفسك وعن عملك حتى نتمكن من خدمتك بشكل أفضل",
  },
  fields: [
    {
      id: "fullName",
      type: "text",
      label: { en: "Your Full Name", ar: "اسمك الكامل" },
      placeholder: { en: "John Smith", ar: "أحمد محمد" },
      required: true,
      validation: { minLength: 2, maxLength: 100 },
    },
    {
      id: "companyName",
      type: "text",
      label: { en: "Company / Business Name", ar: "اسم الشركة / العمل" },
      placeholder: { en: "Your Company Name", ar: "اسم شركتك" },
      required: true,
      validation: { minLength: 2, maxLength: 150 },
    },
    {
      id: "email",
      type: "email",
      label: { en: "Email Address", ar: "البريد الإلكتروني" },
      placeholder: { en: "you@example.com", ar: "you@example.com" },
      required: true,
      validation: { pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" },
    },
    {
      id: "phone",
      type: "tel",
      label: { en: "Phone / WhatsApp Number", ar: "رقم الهاتف / واتساب" },
      placeholder: { en: "+1 (234) 567-890", ar: "+966 50 123 4567" },
      required: true,
      validation: { minLength: 8, maxLength: 20 },
    },
    {
      id: "preferredContact",
      type: "radio",
      label: { en: "Preferred Contact Method", ar: "طريقة التواصل المفضلة" },
      required: true,
      options: CONTACT_METHOD_OPTIONS,
    },
    {
      id: "industry",
      type: "select",
      label: { en: "Your Business Industry", ar: "مجال عملك" },
      placeholder: { en: "Select your industry", ar: "اختر مجال عملك" },
      required: true,
      options: INDUSTRY_OPTIONS,
    },
    {
      id: "description",
      type: "textarea",
      label: { en: "Tell Us About Your Business", ar: "أخبرنا عن عملك" },
      placeholder: {
        en: "A brief description of what you do and what makes your business unique",
        ar: "وصف موجز لما تفعله وما يجعل عملك فريداً",
      },
      required: true,
      validation: { minLength: 20, maxLength: 500 },
    },
  ],
};

// ============================================
// BUDGET & TIMELINE SECTION (Common to all services)
// ============================================
const BUDGET_TIMELINE_SECTION: FormSection = {
  id: "budget-timeline",
  title: {
    en: "Budget & Timeline",
    ar: "الميزانية والجدول الزمني",
  },
  description: {
    en: "Help us understand your budget and timeframe expectations",
    ar: "ساعدنا على فهم ميزانيتك وتوقعات الإطار الزمني",
  },
  fields: [
    {
      id: "budgetRange",
      type: "select",
      label: { en: "Estimated Budget Range", ar: "نطاق الميزانية المقدرة" },
      placeholder: { en: "Select your budget range", ar: "اختر نطاق ميزانيتك" },
      required: true,
      options: BUDGET_RANGES,
    },
    {
      id: "timeline",
      type: "select",
      label: { en: "Desired Project Completion", ar: "الإطار الزمني المطلوب" },
      placeholder: { en: "When do you need it done?", ar: "متى تحتاجه؟" },
      required: true,
      options: TIMELINE_OPTIONS,
    },
    {
      id: "paymentPreference",
      type: "radio",
      label: { en: "Payment Preference", ar: "تفضيل الدفع" },
      description: {
        en: "How would you prefer to structure the payment?",
        ar: "كيف تفضل هيكلة الدفع؟",
      },
      required: false,
      options: PAYMENT_PREFERENCE_OPTIONS,
    },
  ],
};

// ============================================
// FINAL SECTION (Common to all services)
// ============================================
const FINAL_SECTION: FormSection = {
  id: "final",
  title: {
    en: "Almost There!",
    ar: "على وشك الانتهاء!",
  },
  fields: [
    {
      id: "additionalComments",
      type: "textarea",
      label: { en: "Additional Comments or Requirements", ar: "تعليقات أو متطلبات إضافية" },
      placeholder: {
        en: "Anything else you'd like us to know? (Optional)",
        ar: "أي شيء آخر تريد أن نعرفه؟ (اختياري)",
      },
      required: false,
      validation: { maxLength: 1000 },
    },
    {
      id: "preferredContactTime",
      type: "radio",
      label: { en: "When is the best time to contact you?", ar: "ما هو أفضل وقت للتواصل معك؟" },
      description: {
        en: "We'll do our best to reach you during your preferred time",
        ar: "سنبذل قصارى جهدنا للوصول إليك خلال الوقت المفضل لديك"
      },
      required: true,
      options: [
        { value: "morning", label: { en: "Morning (9 AM - 12 PM)", ar: "صباحاً (9 صباحاً - 12 ظهراً)" } },
        { value: "afternoon", label: { en: "Afternoon (12 PM - 5 PM)", ar: "بعد الظهر (12 ظهراً - 5 مساءً)" } },
        { value: "evening", label: { en: "Evening (5 PM - 9 PM)", ar: "مساءً (5 مساءً - 9 مساءً)" } },
        { value: "anytime", label: { en: "Anytime (Flexible)", ar: "في أي وقت (مرن)" } },
      ],
    },
    {
      id: "agreedToPrivacy",
      type: "checkbox",
      label: {
        en: "I agree to Weber's Privacy Policy and Terms of Service",
        ar: "أوافق على سياسة الخصوصية وشروط الخدمة الخاصة بـ ويبر",
      },
      required: true,
    },
  ],
};

// ============================================
// SERVICE SELECTION SECTION (For general inquiry - Step 1: Service Categories)
// ============================================
const SERVICE_SELECTION_SECTION: FormSection = {
  id: "service-selection",
  title: {
    en: "What Services Do You Need?",
    ar: "ما الخدمات التي تحتاجها؟",
  },
  description: {
    en: "Select the service you're interested in",
    ar: "اختر الخدمة التي تهتم بها",
  },
  fields: [
    {
      id: "interestedServices",
      type: "radio",
      label: {
        en: "Which main service are you interested in?",
        ar: "ما هي الخدمة الرئيسية التي تهتم بها؟",
      },
      description: {
        en: "Please select one of our main services",
        ar: "يرجى اختيار إحدى خدماتنا الرئيسية",
      },
      required: true,
      options: [
        { value: "web-development", label: { en: "Web Development", ar: "تطوير المواقع" } },
        { value: "custom-systems", label: { en: "Custom Systems", ar: "الأنظمة المخصصة" } },
        { value: "cybersecurity-solutions", label: { en: "Cybersecurity Solutions", ar: "حلول الأمن السيبراني" } },
        { value: "other", label: { en: "Other / Custom Service", ar: "خدمة أخرى / مخصصة" } },
      ],
    },
    {
      id: "otherServiceDescription",
      type: "textarea",
      label: {
        en: "Please describe the custom service you need",
        ar: "يرجى وصف الخدمة المخصصة التي تحتاجها",
      },
      placeholder: {
        en: "Tell us about your specific requirements or the service you're looking for...",
        ar: "أخبرنا عن متطلباتك المحددة أو الخدمة التي تبحث عنها...",
      },
      required: true,
      validation: { minLength: 1, maxLength: 500 },
      conditional: {
        field: "interestedServices",
        value: ["other"],
      },
    },
  ],
};

// ============================================
// SUB-SERVICE SELECTION SECTION (For general inquiry - Step 2: Specific Sub-Services)
// ============================================
const SUB_SERVICE_SELECTION_SECTION: FormSection = {
  id: "sub-service-selection",
  title: {
    en: "What Specific Solutions?",
    ar: "ما الحلول المحددة؟",
  },
  description: {
    en: "Now let's get more specific about what you need",
    ar: "الآن دعنا نكون أكثر تحديداً بشأن ما تحتاجه",
  },
  fields: [
    {
      id: "webDevSubServices",
      type: "checkbox",
      label: {
        en: "Web Development - Select specific services:",
        ar: "تطوير المواقع - اختر الخدمات المحددة:",
      },
      required: true,
      options: [
        { value: "ecommerce", label: { en: "E-Commerce Website", ar: "موقع تجارة إلكترونية" } },
        { value: "portfolio", label: { en: "Portfolio Website", ar: "موقع ملف شخصي" } },
        { value: "corporate", label: { en: "Corporate Website", ar: "موقع شركة" } },
        { value: "qr-menu", label: { en: "QR Code Digital Menu", ar: "قائمة رقمية برمز QR" } },
      ],
      conditional: {
        field: "interestedServices",
        value: ["web-development"],
      },
    },
    {
      id: "customSystemsSubServices",
      type: "checkbox",
      label: {
        en: "Custom Systems - Select specific services:",
        ar: "أنظمة مخصصة - اختر الخدمات المحددة:",
      },
      required: true,
      options: [
        { value: "hotel-clinic", label: { en: "Hotel / Clinic Reservation System", ar: "نظام حجز فندق / عيادة" } },
        { value: "inventory", label: { en: "Inventory Management", ar: "إدارة المخزون" } },
        { value: "crm", label: { en: "CRM System", ar: "نظام CRM" } },
        { value: "hr", label: { en: "HR & Employee Management", ar: "إدارة الموارد البشرية" } },
        { value: "school", label: { en: "School / University System", ar: "نظام مدرسة / جامعة" } },
        { value: "event", label: { en: "Event Ticketing System", ar: "نظام تذاكر الفعاليات" } },
      ],
      conditional: {
        field: "interestedServices",
        value: ["custom-systems"],
      },
    },
    {
      id: "cyberSecuritySubServices",
      type: "checkbox",
      label: {
        en: "Cybersecurity - Select specific services:",
        ar: "الأمن السيبراني - اختر الخدمات المحددة:",
      },
      required: true,
      options: [
        { value: "penetration-testing", label: { en: "Penetration Testing", ar: "اختبار الاختراق" } },
        { value: "digital-forensics", label: { en: "Digital Forensics", ar: "الطب الشرعي الرقمي" } },
        { value: "security-consultation", label: { en: "Security Consultation", ar: "استشارات أمنية" } },
        { value: "security-monitoring", label: { en: "Security Monitoring", ar: "مراقبة الأمان" } },
        { value: "security-training", label: { en: "Security Training", ar: "تدريب أمني" } },
        { value: "firewall", label: { en: "Firewall & Network Security", ar: "جدار الحماية وأمن الشبكات" } },
      ],
      conditional: {
        field: "interestedServices",
        value: ["cybersecurity-solutions"],
      },
    },
  ],
};

// ============================================
// GENERAL INQUIRY SCHEMA
// ============================================
export const GENERAL_INQUIRY_SCHEMA: ServiceFormSchema = {
  serviceId: "general-inquiry",
  serviceName: { en: "General Inquiry", ar: "استفسار عام" },
  sections: [BASIC_INFO_SECTION, SERVICE_SELECTION_SECTION, SUB_SERVICE_SELECTION_SECTION, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// WEB DEVELOPMENT SERVICE SCHEMA
// ============================================
const WEB_DEV_SUB_SERVICES: FieldOption[] = [
  { value: "ecommerce", label: { en: "E-Commerce Website", ar: "موقع تجارة إلكترونية" } },
  { value: "portfolio", label: { en: "Portfolio / Personal Website", ar: "موقع ملف شخصي" } },
  { value: "blog", label: { en: "Blog / Magazine Website", ar: "موقع مدونة / مجلة" } },
  { value: "restaurant", label: { en: "Restaurant / Menu Website", ar: "موقع مطعم / قائمة طعام" } },
  { value: "corporate", label: { en: "Corporate / Company Website", ar: "موقع شركة / مؤسسة" } },
  { value: "booking", label: { en: "Booking / Appointment Website", ar: "موقع حجز / مواعيد" } },
];

const WEB_DEV_PROJECT_DETAILS: FormSection = {
  id: "project-details",
  title: { en: "Project Details", ar: "تفاصيل المشروع" },
  description: {
    en: "Help us understand your website vision and requirements",
    ar: "ساعدنا على فهم رؤيتك ومتطلباتك للموقع",
  },
  fields: [
    {
      id: "subServices",
      type: "multiselect",
      label: { en: "What type of website do you need?", ar: "ما نوع الموقع الذي تحتاجه؟" },
      description: { en: "You can select multiple if needed", ar: "يمكنك اختيار عدة أنواع إذا لزم الأمر" },
      required: true,
      options: WEB_DEV_SUB_SERVICES,
    },
    {
      id: "websiteGoal",
      type: "select",
      label: { en: "What is the main goal of your website?", ar: "ما هو الهدف الرئيسي لموقعك؟" },
      required: true,
      options: [
        { value: "informational", label: { en: "Informational / Showcase", ar: "إعلامي / عرض" } },
        { value: "sales", label: { en: "Sales / E-commerce", ar: "مبيعات / تجارة إلكترونية" } },
        { value: "leads", label: { en: "Generate Leads / Inquiries", ar: "توليد عملاء محتملين" } },
        { value: "portfolio", label: { en: "Display Work / Portfolio", ar: "عرض الأعمال / الملف الشخصي" } },
        { value: "booking", label: { en: "Bookings / Reservations", ar: "حجوزات / مواعيد" } },
        { value: "community", label: { en: "Community / Blog", ar: "مجتمع / مدونة" } },
      ],
    },
    {
      id: "hasDomainHosting",
      type: "radio",
      label: { en: "Do you already have a domain and hosting?", ar: "هل لديك نطاق واستضافة؟" },
      required: true,
      options: [
        { value: "yes-both", label: { en: "Yes, I have both", ar: "نعم، لدي كلاهما" } },
        { value: "yes-domain", label: { en: "Yes, domain only", ar: "نعم، النطاق فقط" } },
        { value: "no", label: { en: "No, I need both", ar: "لا، أحتاج كلاهما" } },
      ],
    },
    {
      id: "hasBrandAssets",
      type: "checkbox",
      label: { en: "Which brand assets do you already have?", ar: "ما هي أصول العلامة التجارية التي لديك؟" },
      options: [
        { value: "logo", label: { en: "Logo", ar: "شعار" } },
        { value: "colors", label: { en: "Brand Colors", ar: "ألوان العلامة التجارية" } },
        { value: "content", label: { en: "Website Content / Copy", ar: "محتوى الموقع" } },
        { value: "images", label: { en: "Images / Photos", ar: "صور / صور فوتوغرافية" } },
        { value: "none", label: { en: "None of the above", ar: "لا شيء مما سبق" } },
      ],
      required: false,
    },
    {
      id: "pageCount",
      type: "select",
      label: { en: "How many pages do you expect?", ar: "كم عدد الصفحات المتوقعة؟" },
      required: true,
      options: [
        { value: "1-5", label: { en: "1-5 pages", ar: "1-5 صفحات" } },
        { value: "6-10", label: { en: "6-10 pages", ar: "6-10 صفحات" } },
        { value: "11-20", label: { en: "11-20 pages", ar: "11-20 صفحة" } },
        { value: "20-plus", label: { en: "20+ pages", ar: "أكثر من 20 صفحة" } },
        { value: "not-sure", label: { en: "Not sure yet", ar: "غير متأكد بعد" } },
      ],
    },
    {
      id: "designStyle",
      type: "select",
      label: { en: "Preferred Design Style", ar: "نمط التصميم المفضل" },
      required: true,
      options: [
        { value: "modern", label: { en: "Modern / Trendy", ar: "حديث / عصري" } },
        { value: "minimal", label: { en: "Minimal / Clean", ar: "بسيط / نظيف" } },
        { value: "creative", label: { en: "Creative / Bold", ar: "إبداعي / جريء" } },
        { value: "corporate", label: { en: "Corporate / Professional", ar: "مؤسسي / احترافي" } },
        { value: "luxury", label: { en: "Luxury / Premium", ar: "فاخر / متميز" } },
        { value: "playful", label: { en: "Playful / Fun", ar: "مرح / ممتع" } },
      ],
    },
    {
      id: "referenceWebsites",
      type: "textarea",
      label: { en: "Reference Websites You Like", ar: "مواقع مرجعية تعجبك" },
      placeholder: {
        en: "Share links to websites you like (design, features, style, etc.)",
        ar: "شارك روابط لمواقع تعجبك (التصميم، الميزات، النمط، إلخ)",
      },
      required: false,
      validation: { maxLength: 500 },
    },
    {
      id: "needsEcommerce",
      type: "radio",
      label: { en: "Do you need e-commerce functionality?", ar: "هل تحتاج وظائف التجارة الإلكترونية؟" },
      description: { en: "Shopping cart, payment gateway, product management", ar: "سلة تسوق، بوابة دفع، إدارة منتجات" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, full e-commerce", ar: "نعم، تجارة إلكترونية كاملة" } },
        { value: "simple", label: { en: "Yes, but simple (few products)", ar: "نعم، لكن بسيطة (منتجات قليلة)" } },
        { value: "no", label: { en: "No", ar: "لا" } },
      ],
    },
    {
      id: "needsMultilingual",
      type: "radio",
      label: { en: "Do you need multi-language support?", ar: "هل تحتاج دعم متعدد اللغات؟" },
      required: true,
      options: [
        { value: "yes-ar-en", label: { en: "Yes, Arabic & English", ar: "نعم، العربية والإنجليزية" } },
        { value: "yes-multiple", label: { en: "Yes, multiple languages", ar: "نعم، لغات متعددة" } },
        { value: "no", label: { en: "No, one language only", ar: "لا، لغة واحدة فقط" } },
      ],
    },
    {
      id: "needsSEO",
      type: "radio",
      label: { en: "Should we handle SEO setup and optimization?", ar: "هل نتولى إعداد وتحسين SEO؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, please", ar: "نعم، من فضلك" } },
        { value: "maybe", label: { en: "Maybe, let's discuss", ar: "ربما، دعنا نناقش" } },
        { value: "no", label: { en: "No, I'll handle it", ar: "لا، سأتولاه" } },
      ],
    },
  ],
};

export const WEB_DEVELOPMENT_SCHEMA: ServiceFormSchema = {
  serviceId: "web-development",
  serviceName: { en: "Web Development", ar: "تطوير المواقع" },
  sections: [BASIC_INFO_SECTION, WEB_DEV_PROJECT_DETAILS, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// UI/UX DESIGN SERVICE SCHEMA
// ============================================
const UIUX_SUB_SERVICES: FieldOption[] = [
  { value: "web-app", label: { en: "Web App UI Design", ar: "تصميم واجهة تطبيق ويب" } },
  { value: "mobile-app", label: { en: "Mobile App UI Design", ar: "تصميم واجهة تطبيق موبايل" } },
  { value: "wireframing", label: { en: "Wireframing & Prototyping", ar: "الإطارات السلكية والنماذج الأولية" } },
  { value: "brand-style", label: { en: "Brand Style Guidelines", ar: "إرشادات نمط العلامة التجارية" } },
  { value: "dashboard", label: { en: "Dashboard & Admin UI", ar: "لوحة المعلومات وواجهة الإدارة" } },
  { value: "redesign", label: { en: "Product Redesign", ar: "إعادة تصميم المنتج" } },
];

const UIUX_PROJECT_DETAILS: FormSection = {
  id: "project-details",
  title: { en: "Design Project Details", ar: "تفاصيل مشروع التصميم" },
  description: {
    en: "Tell us about your design vision and requirements",
    ar: "أخبرنا عن رؤيتك التصميمية ومتطلباتك",
  },
  fields: [
    {
      id: "subServices",
      type: "multiselect",
      label: { en: "What type of design do you need?", ar: "ما نوع التصميم الذي تحتاجه؟" },
      required: true,
      options: UIUX_SUB_SERVICES,
    },
    {
      id: "interfaceType",
      type: "select",
      label: { en: "What type of interface are you designing?", ar: "ما نوع الواجهة التي تصممها؟" },
      required: true,
      options: [
        { value: "web-app", label: { en: "Web Application", ar: "تطبيق ويب" } },
        { value: "mobile-app", label: { en: "Mobile App (iOS/Android)", ar: "تطبيق موبايل (iOS/Android)" } },
        { value: "dashboard", label: { en: "Dashboard / Admin Panel", ar: "لوحة المعلومات / لوحة الإدارة" } },
        { value: "landing", label: { en: "Landing Page", ar: "صفحة هبوط" } },
        { value: "website", label: { en: "Full Website", ar: "موقع كامل" } },
      ],
    },
    {
      id: "hasWireframe",
      type: "radio",
      label: { en: "Do you have a wireframe or sketch already?", ar: "هل لديك إطار سلكي أو رسم تخطيطي؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, I have wireframes", ar: "نعم، لدي إطارات سلكية" } },
        { value: "rough", label: { en: "Yes, rough sketches", ar: "نعم، رسومات تقريبية" } },
        { value: "no", label: { en: "No, starting from scratch", ar: "لا، أبدأ من الصفر" } },
      ],
    },
    {
      id: "screenCount",
      type: "select",
      label: { en: "Approximately how many screens/pages?", ar: "كم عدد الشاشات/الصفحات تقريباً؟" },
      required: true,
      options: [
        { value: "1-5", label: { en: "1-5 screens", ar: "1-5 شاشات" } },
        { value: "6-10", label: { en: "6-10 screens", ar: "6-10 شاشات" } },
        { value: "11-20", label: { en: "11-20 screens", ar: "11-20 شاشة" } },
        { value: "20-plus", label: { en: "20+ screens", ar: "أكثر من 20 شاشة" } },
        { value: "not-sure", label: { en: "Not sure yet", ar: "غير متأكد بعد" } },
      ],
    },
    {
      id: "targetAudience",
      type: "textarea",
      label: { en: "Who is the target audience?", ar: "من هو الجمهور المستهدف؟" },
      placeholder: {
        en: "Describe your target users (age, interests, tech-savviness, etc.)",
        ar: "صف المستخدمين المستهدفين (العمر، الاهتمامات، المعرفة التقنية، إلخ)",
      },
      required: true,
      validation: { minLength: 10, maxLength: 300 },
    },
    {
      id: "colorTheme",
      type: "select",
      label: { en: "What mood or color theme do you prefer?", ar: "ما هو المزاج أو موضوع اللون المفضل؟" },
      required: true,
      options: [
        { value: "bright", label: { en: "Bright & Energetic", ar: "مشرق ونشيط" } },
        { value: "dark", label: { en: "Dark & Professional", ar: "داكن واحترافي" } },
        { value: "minimal", label: { en: "Minimal & Clean", ar: "بسيط ونظيف" } },
        { value: "colorful", label: { en: "Colorful & Playful", ar: "ملون ومرح" } },
        { value: "elegant", label: { en: "Elegant & Sophisticated", ar: "أنيق ومتطور" } },
        { value: "corporate", label: { en: "Corporate Blue/Grey", ar: "أزرق/رمادي مؤسسي" } },
      ],
    },
    {
      id: "needsPrototyping",
      type: "radio",
      label: { en: "Do you need interactive prototyping?", ar: "هل تحتاج نماذج أولية تفاعلية؟" },
      description: { en: "Clickable prototype to test user flows", ar: "نموذج أولي قابل للنقر لاختبار تدفقات المستخدم" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, interactive prototype", ar: "نعم، نموذج أولي تفاعلي" } },
        { value: "maybe", label: { en: "Maybe, let's discuss", ar: "ربما، دعنا نناقش" } },
        { value: "no", label: { en: "No, static designs only", ar: "لا، تصاميم ثابتة فقط" } },
      ],
    },
    {
      id: "deliverablesFormat",
      type: "checkbox",
      label: { en: "Preferred deliverables format", ar: "تنسيق التسليمات المفضل" },
      required: true,
      options: [
        { value: "figma", label: { en: "Figma", ar: "Figma" } },
        { value: "xd", label: { en: "Adobe XD", ar: "Adobe XD" } },
        { value: "sketch", label: { en: "Sketch", ar: "Sketch" } },
        { value: "pdf", label: { en: "PDF / Images", ar: "PDF / صور" } },
      ],
    },
  ],
};

export const UIUX_DESIGN_SCHEMA: ServiceFormSchema = {
  serviceId: "ui-ux-design",
  serviceName: { en: "UI/UX Design", ar: "تصميم واجهات المستخدم" },
  sections: [BASIC_INFO_SECTION, UIUX_PROJECT_DETAILS, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// CUSTOM SYSTEMS SERVICE SCHEMA
// ============================================
const CUSTOM_SYSTEMS_SUB_SERVICES: FieldOption[] = [
  { value: "hotel-clinic", label: { en: "Hotel / Clinic Reservation System", ar: "نظام حجز فندق / عيادة" } },
  { value: "inventory", label: { en: "Inventory Management", ar: "إدارة المخزون" } },
  { value: "crm", label: { en: "CRM System", ar: "نظام CRM" } },
  { value: "hr", label: { en: "HR & Employee Management", ar: "إدارة الموارد البشرية والموظفين" } },
  { value: "school", label: { en: "School / University System", ar: "نظام مدرسة / جامعة" } },
  { value: "event", label: { en: "Event Ticketing System", ar: "نظام تذاكر الفعاليات" } },
];

const CUSTOM_SYSTEMS_PROJECT_DETAILS: FormSection = {
  id: "project-details",
  title: { en: "System Requirements", ar: "متطلبات النظام" },
  description: {
    en: "Help us understand your custom system needs",
    ar: "ساعدنا على فهم احتياجات نظامك المخصص",
  },
  fields: [
    {
      id: "subServices",
      type: "multiselect",
      label: { en: "What type of system do you need?", ar: "ما نوع النظام الذي تحتاجه؟" },
      required: true,
      options: CUSTOM_SYSTEMS_SUB_SERVICES,
    },
    {
      id: "keyFeatures",
      type: "textarea",
      label: { en: "What are the key features you need?", ar: "ما هي الميزات الرئيسية التي تحتاجها؟" },
      placeholder: {
        en: "E.g., booking calendar, staff dashboard, reports, notifications, payment integration, etc.",
        ar: "مثل: تقويم حجز، لوحة معلومات الموظفين، تقارير، إشعارات، تكامل دفع، إلخ",
      },
      required: true,
      validation: { minLength: 20, maxLength: 1000 },
    },
    {
      id: "existingSystem",
      type: "radio",
      label: { en: "Do you have an existing system?", ar: "هل لديك نظام حالي؟" },
      required: true,
      options: [
        { value: "yes-upgrade", label: { en: "Yes, need upgrade/migration", ar: "نعم، أحتاج ترقية/نقل" } },
        { value: "yes-integrate", label: { en: "Yes, need integration", ar: "نعم، أحتاج تكامل" } },
        { value: "no", label: { en: "No, starting from scratch", ar: "لا، أبدأ من الصفر" } },
      ],
    },
    {
      id: "userCount",
      type: "select",
      label: { en: "How many users will use the system?", ar: "كم عدد المستخدمين الذين سيستخدمون النظام؟" },
      required: true,
      options: [
        { value: "1-10", label: { en: "1-10 users", ar: "1-10 مستخدمين" } },
        { value: "11-50", label: { en: "11-50 users", ar: "11-50 مستخدم" } },
        { value: "51-100", label: { en: "51-100 users", ar: "51-100 مستخدم" } },
        { value: "100-plus", label: { en: "100+ users", ar: "أكثر من 100 مستخدم" } },
      ],
    },
    {
      id: "platformType",
      type: "radio",
      label: { en: "Platform preference", ar: "تفضيل المنصة" },
      required: true,
      options: [
        { value: "web-only", label: { en: "Web-based only", ar: "ويب فقط" } },
        { value: "web-mobile", label: { en: "Web + Mobile responsive", ar: "ويب + متجاوب مع الموبايل" } },
        { value: "web-native", label: { en: "Web + Native mobile apps", ar: "ويب + تطبيقات موبايل أصلية" } },
      ],
    },
    {
      id: "integrations",
      type: "checkbox",
      label: { en: "What integrations do you need?", ar: "ما التكاملات التي تحتاجها؟" },
      required: false,
      options: [
        { value: "payment", label: { en: "Payment Gateways", ar: "بوابات الدفع" } },
        { value: "email", label: { en: "Email Services", ar: "خدمات البريد الإلكتروني" } },
        { value: "sms", label: { en: "SMS Notifications", ar: "إشعارات SMS" } },
        { value: "whatsapp", label: { en: "WhatsApp API", ar: "WhatsApp API" } },
        { value: "accounting", label: { en: "Accounting Software", ar: "برامج محاسبية" } },
        { value: "other", label: { en: "Other (please specify in comments)", ar: "أخرى (حدد في التعليقات)" } },
      ],
    },
    {
      id: "needsAnalytics",
      type: "radio",
      label: { en: "Do you need analytics and reporting?", ar: "هل تحتاج تحليلات وتقارير؟" },
      required: true,
      options: [
        { value: "yes-advanced", label: { en: "Yes, advanced analytics", ar: "نعم، تحليلات متقدمة" } },
        { value: "yes-basic", label: { en: "Yes, basic reports", ar: "نعم، تقارير أساسية" } },
        { value: "no", label: { en: "No analytics needed", ar: "لا حاجة للتحليلات" } },
      ],
    },
  ],
};

export const CUSTOM_SYSTEMS_SCHEMA: ServiceFormSchema = {
  serviceId: "custom-systems",
  serviceName: { en: "Custom Systems Development", ar: "تطوير أنظمة مخصصة" },
  sections: [BASIC_INFO_SECTION, CUSTOM_SYSTEMS_PROJECT_DETAILS, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// WEB MAINTENANCE SERVICE SCHEMA
// ============================================
const WEB_MAINTENANCE_SUB_SERVICES: FieldOption[] = [
  { value: "updates", label: { en: "Regular Updates & Backups", ar: "التحديثات والنسخ الاحتياطية المنتظمة" } },
  { value: "performance", label: { en: "Performance Optimization", ar: "تحسين الأداء" } },
  { value: "security", label: { en: "Security Monitoring", ar: "مراقبة الأمان" } },
  { value: "content", label: { en: "Content Updates", ar: "تحديثات المحتوى" } },
  { value: "bugs", label: { en: "Bug Fixing", ar: "إصلاح الأخطاء" } },
  { value: "seo", label: { en: "Speed & SEO Checks", ar: "فحوصات السرعة وSEO" } },
];

const WEB_MAINTENANCE_PROJECT_DETAILS: FormSection = {
  id: "project-details",
  title: { en: "Maintenance Details", ar: "تفاصيل الصيانة" },
  description: {
    en: "Tell us about your website and maintenance needs",
    ar: "أخبرنا عن موقعك واحتياجات الصيانة",
  },
  fields: [
    {
      id: "subServices",
      type: "multiselect",
      label: { en: "What maintenance services do you need?", ar: "ما خدمات الصيانة التي تحتاجها؟" },
      required: true,
      options: WEB_MAINTENANCE_SUB_SERVICES,
    },
    {
      id: "websiteLive",
      type: "radio",
      label: { en: "Is your website already live?", ar: "هل موقعك مباشر بالفعل؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, it's live", ar: "نعم، إنه مباشر" } },
        { value: "no", label: { en: "No, under development", ar: "لا، قيد التطوير" } },
      ],
    },
    {
      id: "websiteUrl",
      type: "url",
      label: { en: "Website URL", ar: "رابط الموقع" },
      placeholder: { en: "https://yourwebsite.com", ar: "https://yourwebsite.com" },
      required: false,
      conditional: {
        field: "websiteLive",
        value: "yes",
      },
    },
    {
      id: "platform",
      type: "select",
      label: { en: "What platform is your website built on?", ar: "ما المنصة التي بُني عليها موقعك؟" },
      required: true,
      options: [
        { value: "wordpress", label: { en: "WordPress", ar: "WordPress" } },
        { value: "custom", label: { en: "Custom / React / Next.js", ar: "مخصص / React / Next.js" } },
        { value: "shopify", label: { en: "Shopify", ar: "Shopify" } },
        { value: "wix", label: { en: "Wix / Squarespace", ar: "Wix / Squarespace" } },
        { value: "other", label: { en: "Other", ar: "أخرى" } },
        { value: "not-sure", label: { en: "Not sure", ar: "غير متأكد" } },
      ],
    },
    {
      id: "issues",
      type: "textarea",
      label: { en: "What issues or updates do you need help with?", ar: "ما المشاكل أو التحديثات التي تحتاج مساعدة فيها؟" },
      placeholder: {
        en: "Describe any problems, desired updates, or improvements",
        ar: "صف أي مشاكل أو تحديثات أو تحسينات مطلوبة",
      },
      required: true,
      validation: { minLength: 10, maxLength: 500 },
    },
    {
      id: "maintenanceType",
      type: "radio",
      label: { en: "Maintenance frequency", ar: "تكرار الصيانة" },
      required: true,
      options: [
        { value: "monthly", label: { en: "Monthly maintenance plan", ar: "خطة صيانة شهرية" } },
        { value: "one-time", label: { en: "One-time support", ar: "دعم لمرة واحدة" } },
        { value: "as-needed", label: { en: "As needed (on-demand)", ar: "حسب الحاجة (عند الطلب)" } },
      ],
    },
    {
      id: "needsPerformance",
      type: "radio",
      label: { en: "Do you want performance and speed optimization?", ar: "هل تريد تحسين الأداء والسرعة؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, please", ar: "نعم، من فضلك" } },
        { value: "maybe", label: { en: "Maybe, let's discuss", ar: "ربما، دعنا نناقش" } },
        { value: "no", label: { en: "No", ar: "لا" } },
      ],
    },
    {
      id: "needsSecurity",
      type: "radio",
      label: { en: "Should we handle security monitoring and backups?", ar: "هل نتولى مراقبة الأمان والنسخ الاحتياطية؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, please", ar: "نعم، من فضلك" } },
        { value: "maybe", label: { en: "Maybe, let's discuss", ar: "ربما، دعنا نناقش" } },
        { value: "no", label: { en: "No", ar: "لا" } },
      ],
    },
  ],
};

export const WEB_MAINTENANCE_SCHEMA: ServiceFormSchema = {
  serviceId: "web-maintenance",
  serviceName: { en: "Web Maintenance", ar: "صيانة المواقع" },
  sections: [BASIC_INFO_SECTION, WEB_MAINTENANCE_PROJECT_DETAILS, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// HOSTING SOLUTIONS SERVICE SCHEMA
// ============================================
const HOSTING_SUB_SERVICES: FieldOption[] = [
  { value: "domain", label: { en: "Domain Registration", ar: "تسجيل النطاق" } },
  { value: "hosting", label: { en: "Hosting Setup", ar: "إعداد الاستضافة" } },
  { value: "dns", label: { en: "DNS Configuration", ar: "تكوين DNS" } },
  { value: "ssl", label: { en: "SSL Certificate", ar: "شهادة SSL" } },
  { value: "email", label: { en: "Email Hosting", ar: "استضافة البريد الإلكتروني" } },
  { value: "maintenance", label: { en: "Server Maintenance", ar: "صيانة الخادم" } },
];

const HOSTING_PROJECT_DETAILS: FormSection = {
  id: "project-details",
  title: { en: "Hosting Requirements", ar: "متطلبات الاستضافة" },
  description: {
    en: "Tell us about your hosting and domain needs",
    ar: "أخبرنا عن احتياجات الاستضافة والنطاق",
  },
  fields: [
    {
      id: "subServices",
      type: "multiselect",
      label: { en: "What services do you need?", ar: "ما الخدمات التي تحتاجها؟" },
      required: true,
      options: HOSTING_SUB_SERVICES,
    },
    {
      id: "hasDomain",
      type: "radio",
      label: { en: "Do you already have a domain name?", ar: "هل لديك اسم نطاق بالفعل؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, I have one", ar: "نعم، لدي واحد" } },
        { value: "no", label: { en: "No, need to register", ar: "لا، أحتاج للتسجيل" } },
        { value: "not-sure", label: { en: "Not sure", ar: "غير متأكد" } },
      ],
    },
    {
      id: "domainName",
      type: "text",
      label: { en: "Domain name (if you have one)", ar: "اسم النطاق (إذا كان لديك)" },
      placeholder: { en: "example.com", ar: "example.com" },
      required: false,
      conditional: {
        field: "hasDomain",
        value: "yes",
      },
    },
    {
      id: "hasHosting",
      type: "radio",
      label: { en: "Do you already have hosting?", ar: "هل لديك استضافة بالفعل؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, I have hosting", ar: "نعم، لدي استضافة" } },
        { value: "no", label: { en: "No, need hosting", ar: "لا، أحتاج استضافة" } },
      ],
    },
    {
      id: "trafficLevel",
      type: "select",
      label: { en: "Expected website traffic level", ar: "مستوى زيارات الموقع المتوقعة" },
      required: true,
      options: [
        { value: "low", label: { en: "Low (under 1,000 visitors/month)", ar: "منخفض (أقل من 1,000 زائر/شهر)" } },
        { value: "medium", label: { en: "Medium (1,000-10,000 visitors/month)", ar: "متوسط (1,000-10,000 زائر/شهر)" } },
        { value: "high", label: { en: "High (10,000+ visitors/month)", ar: "عالي (أكثر من 10,000 زائر/شهر)" } },
        { value: "not-sure", label: { en: "Not sure", ar: "غير متأكد" } },
      ],
    },
    {
      id: "needsEmail",
      type: "radio",
      label: { en: "Do you need professional email setup?", ar: "هل تحتاج إعداد بريد إلكتروني احترافي؟" },
      description: { en: "E.g., info@yourdomain.com", ar: "مثل: info@yourdomain.com" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, professional email", ar: "نعم، بريد إلكتروني احترافي" } },
        { value: "no", label: { en: "No", ar: "لا" } },
      ],
    },
    {
      id: "hostingType",
      type: "select",
      label: { en: "Preferred hosting type", ar: "نوع الاستضافة المفضل" },
      required: true,
      options: [
        { value: "shared", label: { en: "Shared Hosting (Budget-friendly)", ar: "استضافة مشتركة (اقتصادية)" } },
        { value: "vps", label: { en: "VPS (More power & control)", ar: "VPS (قوة وتحكم أكبر)" } },
        { value: "cloud", label: { en: "Cloud-based (Scalable)", ar: "سحابية (قابلة للتوسع)" } },
        { value: "not-sure", label: { en: "Not sure, recommend for me", ar: "غير متأكد، اقترح لي" } },
      ],
    },
    {
      id: "manageRenewals",
      type: "radio",
      label: { en: "Should we handle renewals and backups for you?", ar: "هل نتولى التجديدات والنسخ الاحتياطية؟" },
      required: true,
      options: [
        { value: "yes", label: { en: "Yes, please manage it", ar: "نعم، من فضلك أدره" } },
        { value: "no", label: { en: "No, I'll manage myself", ar: "لا، سأديره بنفسي" } },
      ],
    },
  ],
};

export const HOSTING_SOLUTIONS_SCHEMA: ServiceFormSchema = {
  serviceId: "hosting-solutions",
  serviceName: { en: "Domain & Hosting Solutions", ar: "حلول النطاق والاستضافة" },
  sections: [BASIC_INFO_SECTION, HOSTING_PROJECT_DETAILS, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// CYBERSECURITY SOLUTIONS SERVICE SCHEMA
// ============================================
const CYBERSECURITY_SUB_SERVICES: FieldOption[] = [
  { value: "penetration-testing", label: { en: "Penetration Testing", ar: "اختبار الاختراق" } },
  { value: "vulnerability-assessment", label: { en: "Vulnerability Assessment", ar: "تقييم الثغرات الأمنية" } },
  { value: "security-audit", label: { en: "Security Audit & Compliance", ar: "التدقيق الأمني والامتثال" } },
  { value: "digital-forensics", label: { en: "Digital Forensics", ar: "الطب الشرعي الرقمي" } },
  { value: "incident-response", label: { en: "Incident Response & Recovery", ar: "الاستجابة للحوادث والتعافي" } },
  { value: "security-consultation", label: { en: "Security Consultation", ar: "الاستشارات الأمنية" } },
  { value: "security-training", label: { en: "Security Awareness Training", ar: "التدريب على الوعي الأمني" } },
  { value: "firewall-configuration", label: { en: "Firewall & Network Security", ar: "جدار الحماية وأمن الشبكات" } },
];

const CYBERSECURITY_PROJECT_DETAILS: FormSection = {
  id: "project-details",
  title: { en: "Security Requirements", ar: "المتطلبات الأمنية" },
  description: {
    en: "Help us understand your cybersecurity needs and current infrastructure",
    ar: "ساعدنا على فهم احتياجاتك الأمنية والبنية التحتية الحالية",
  },
  fields: [
    {
      id: "subServices",
      type: "multiselect",
      label: { en: "Which cybersecurity services do you need?", ar: "ما هي خدمات الأمن السيبراني التي تحتاجها؟" },
      description: { en: "You can select multiple services", ar: "يمكنك اختيار عدة خدمات" },
      required: true,
      options: CYBERSECURITY_SUB_SERVICES,
    },
    {
      id: "securityIncident",
      type: "radio",
      label: { en: "Have you experienced a security incident?", ar: "هل تعرضت لحادثة أمنية؟" },
      required: true,
      options: [
        { value: "yes-recent", label: { en: "Yes, recently (within 6 months)", ar: "نعم، مؤخراً (خلال 6 أشهر)" } },
        { value: "yes-past", label: { en: "Yes, in the past", ar: "نعم، في الماضي" } },
        { value: "no", label: { en: "No, preventive measures", ar: "لا، إجراءات وقائية" } },
      ],
    },
    {
      id: "currentInfrastructure",
      type: "textarea",
      label: { en: "Describe your current IT infrastructure", ar: "صف بنيتك التحتية لتكنولوجيا المعلومات الحالية" },
      placeholder: {
        en: "E.g., cloud-based (AWS/Azure), on-premise servers, number of endpoints, operating systems, etc.",
        ar: "مثل: قائم على السحابة (AWS/Azure)، خوادم داخلية، عدد نقاط النهاية، أنظمة التشغيل، إلخ",
      },
      required: true,
      validation: { minLength: 20, maxLength: 1000 },
    },
    {
      id: "industryCompliance",
      type: "select",
      label: { en: "Industry compliance requirements", ar: "متطلبات الامتثال الصناعي" },
      required: true,
      options: [
        { value: "none", label: { en: "No specific requirements", ar: "لا توجد متطلبات محددة" } },
        { value: "gdpr", label: { en: "GDPR (EU Data Protection)", ar: "GDPR (حماية البيانات الأوروبية)" } },
        { value: "pci-dss", label: { en: "PCI DSS (Payment Card)", ar: "PCI DSS (بطاقات الدفع)" } },
        { value: "hipaa", label: { en: "HIPAA (Healthcare)", ar: "HIPAA (الرعاية الصحية)" } },
        { value: "iso-27001", label: { en: "ISO 27001", ar: "ISO 27001" } },
        { value: "other", label: { en: "Other compliance", ar: "امتثال آخر" } },
      ],
    },
    {
      id: "dataToProtect",
      type: "multiselect",
      label: { en: "What type of data do you need to protect?", ar: "ما نوع البيانات التي تحتاج لحمايتها؟" },
      required: true,
      options: [
        { value: "customer-data", label: { en: "Customer Personal Data", ar: "بيانات العملاء الشخصية" } },
        { value: "financial", label: { en: "Financial Information", ar: "معلومات مالية" } },
        { value: "health", label: { en: "Health Records", ar: "السجلات الصحية" } },
        { value: "intellectual-property", label: { en: "Intellectual Property", ar: "الملكية الفكرية" } },
        { value: "business-secrets", label: { en: "Business Secrets", ar: "أسرار تجارية" } },
        { value: "other", label: { en: "Other sensitive data", ar: "بيانات حساسة أخرى" } },
      ],
    },
    {
      id: "organizationSize",
      type: "select",
      label: { en: "Organization size", ar: "حجم المنظمة" },
      required: true,
      options: [
        { value: "small", label: { en: "Small (1-50 employees)", ar: "صغيرة (1-50 موظف)" } },
        { value: "medium", label: { en: "Medium (51-250 employees)", ar: "متوسطة (51-250 موظف)" } },
        { value: "large", label: { en: "Large (250+ employees)", ar: "كبيرة (أكثر من 250 موظف)" } },
        { value: "enterprise", label: { en: "Enterprise (1000+ employees)", ar: "مؤسسة (أكثر من 1000 موظف)" } },
      ],
    },
    {
      id: "existingSecurity",
      type: "radio",
      label: { en: "Do you have existing security measures?", ar: "هل لديك إجراءات أمنية حالية؟" },
      required: true,
      options: [
        { value: "yes-comprehensive", label: { en: "Yes, comprehensive", ar: "نعم، شاملة" } },
        { value: "yes-basic", label: { en: "Yes, basic security", ar: "نعم، أمان أساسي" } },
        { value: "no", label: { en: "No security measures", ar: "لا توجد إجراءات أمنية" } },
        { value: "not-sure", label: { en: "Not sure", ar: "غير متأكد" } },
      ],
    },
    {
      id: "urgencyLevel",
      type: "radio",
      label: { en: "How urgent is this security need?", ar: "ما مدى إلحاح هذه الحاجة الأمنية؟" },
      required: true,
      options: [
        { value: "critical", label: { en: "Critical - Immediate action needed", ar: "حرج - يحتاج إجراء فوري" } },
        { value: "high", label: { en: "High - Within 1-2 weeks", ar: "عالي - خلال 1-2 أسبوع" } },
        { value: "medium", label: { en: "Medium - Within 1 month", ar: "متوسط - خلال شهر واحد" } },
        { value: "low", label: { en: "Low - Planning phase", ar: "منخفض - مرحلة التخطيط" } },
      ],
    },
  ],
};

export const CYBERSECURITY_SOLUTIONS_SCHEMA: ServiceFormSchema = {
  serviceId: "cybersecurity-solutions",
  serviceName: { en: "Cybersecurity Solutions", ar: "حلول الأمن السيبراني" },
  sections: [BASIC_INFO_SECTION, CYBERSECURITY_PROJECT_DETAILS, BUDGET_TIMELINE_SECTION, FINAL_SECTION],
};

// ============================================
// EXPORT ALL SCHEMAS
// ============================================
export const SERVICE_FORM_SCHEMAS: Record<string, ServiceFormSchema> = {
  "general-inquiry": GENERAL_INQUIRY_SCHEMA,
  "web-development": WEB_DEVELOPMENT_SCHEMA,
  "ui-ux-design": UIUX_DESIGN_SCHEMA,
  "custom-systems": CUSTOM_SYSTEMS_SCHEMA,
  "web-maintenance": WEB_MAINTENANCE_SCHEMA,
  "hosting-solutions": HOSTING_SOLUTIONS_SCHEMA,
  "cybersecurity-solutions": CYBERSECURITY_SOLUTIONS_SCHEMA,
};

export function getServiceFormSchema(serviceId: string): ServiceFormSchema | undefined {
  return SERVICE_FORM_SCHEMAS[serviceId];
}
