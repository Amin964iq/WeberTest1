export interface SubService {
  id: string;
  icon: string;
  image?: string; // Optional - we'll use icon-based backgrounds
  gradient?: string; // Optional gradient colors
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  extendedDescription?: {
    en: string;
    ar: string;
  };
  usedFor?: {
    en: string;
    ar: string;
  };
}

export interface ServiceWithSubServices {
  serviceId: string;
  subServices: SubService[];
}

export const subServicesData: Record<string, SubService[]> = {
  "web-development": [
    {
      id: "ecommerce",
      icon: "ShoppingCart",
      title: {
        en: "E-Commerce Websites",
        ar: "مواقع التجارة الإلكترونية",
      },
      description: {
        en: "Full-featured online stores with product catalogs, shopping cart functionality, secure checkout, payment gateway integration, inventory management, and order tracking. Built to scale with your business growth.",
        ar: "متاجر إلكترونية كاملة المميزات مع كتالوجات المنتجات، سلة التسوق، الدفع الآمن، تكامل بوابات الدفع، إدارة المخزون، وتتبع الطلبات. مبنية لتتوسع مع نمو عملك.",
      },
      extendedDescription: {
        en: "Transform your retail business with a powerful e-commerce platform designed to maximize sales and customer satisfaction. Our solutions include advanced product filtering and search, customer reviews and ratings, wishlist functionality, multi-currency support, shipping cost calculation, discount codes and promotions, abandoned cart recovery, email marketing integration, analytics and reporting dashboards, mobile-responsive design, SEO optimization, and social media integration. We integrate with leading payment gateways like Stripe, PayPal, and local payment providers to ensure secure transactions.",
        ar: "حوّل عملك التجاري بمنصة تجارة إلكترونية قوية مصممة لتعظيم المبيعات ورضا العملاء. تشمل حلولنا تصفية وبحث متقدم عن المنتجات، تقييمات ومراجعات العملاء، قائمة الرغبات، دعم متعدد العملات، حساب تكاليف الشحن، أكواد الخصم والعروض الترويجية، استرداد عربة التسوق المهجورة، تكامل التسويق عبر البريد الإلكتروني، لوحات التحليلات والتقارير، تصميم متجاوب مع الأجهزة المحمولة، تحسين محركات البحث، وتكامل وسائل التواصل الاجتماعي. نتكامل مع بوابات الدفع الرائدة مثل Stripe و PayPal ومزودي الدفع المحليين لضمان معاملات آمنة.",
      },
      usedFor: {
        en: "Perfect for online retailers, fashion brands, electronics stores, and any business selling products online",
        ar: "مثالي لتجار التجزئة عبر الإنترنت، العلامات التجارية للأزياء، متاجر الإلكترونيات، وأي عمل يبيع منتجات عبر الإنترنت",
      },
    },
    {
      id: "portfolio",
      icon: "Briefcase",
      title: {
        en: "Portfolio & Personal Websites",
        ar: "مواقع الملف الشخصي والشخصية",
      },
      description: {
        en: "Stunning portfolio websites that showcase your work beautifully. Features include project galleries, case studies, client testimonials, contact forms, and blog integration. Designed to leave a lasting impression on potential clients.",
        ar: "مواقع ملفات شخصية مذهلة تعرض عملك بشكل جميل. تشمل معارض المشاريع، دراسات الحالة، شهادات العملاء، نماذج الاتصال، ودمج المدونات. مصممة لترك انطباع دائم على العملاء المحتملين.",
      },
      usedFor: {
        en: "Ideal for freelancers, designers, photographers, artists, consultants, and creative professionals",
        ar: "مثالي للمستقلين، المصممين، المصورين، الفنانين، المستشارين، والمحترفين المبدعين",
      },
    },
    {
      id: "corporate",
      icon: "Building2",
      title: {
        en: "Corporate & Company Websites",
        ar: "مواقع الشركات والمؤسسات",
      },
      description: {
        en: "Professional business websites that build credibility and trust. Includes company overview, services showcase, team profiles, case studies, client logos, news & updates, career opportunities, and investor relations sections.",
        ar: "مواقع أعمال احترافية تبني المصداقية والثقة. تشمل نظرة عامة على الشركة، عرض الخدمات، ملفات الفريق، دراسات الحالة، شعارات العملاء، الأخبار والتحديثات، الفرص الوظيفية، وأقسام علاقات المستثمرين.",
      },
      usedFor: {
        en: "Designed for corporations, startups, B2B companies, professional services firms, and enterprises",
        ar: "مصمم للشركات، الشركات الناشئة، شركات B2B، شركات الخدمات المهنية، والمؤسسات",
      },
    },
    {
      id: "web-maintenance",
      icon: "Settings",
      title: {
        en: "Web Maintenance & Support",
        ar: "صيانة ودعم المواقع",
      },
      description: {
        en: "Continuous monitoring and updating of your website's core software, plugins, and dependencies. Includes security updates, performance optimization, bug fixing, regular backups, and technical support to keep your website running smoothly.",
        ar: "المراقبة والتحديث المستمر للبرامج الأساسية لموقعك والإضافات والتبعيات. تشمل تحديثات الأمان، تحسين الأداء، إصلاح الأخطاء، النسخ الاحتياطية المنتظمة، والدعم الفني للحفاظ على تشغيل موقعك بسلاسة.",
      },
      usedFor: {
        en: "Critical for all websites to prevent data loss, security vulnerabilities, and compatibility issues",
        ar: "حاسم لجميع المواقع لمنع فقدان البيانات، الثغرات الأمنية، ومشاكل التوافق",
      },
    },
    {
      id: "ui-ux-design",
      icon: "Palette",
      title: {
        en: "UI/UX Design",
        ar: "تصميم واجهة المستخدم وتجربة المستخدم",
      },
      description: {
        en: "Beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions. User research, wireframing, prototyping, visual design, and usability testing to create interfaces that users love and that achieve your business goals.",
        ar: "واجهات جميلة وبديهية توفر تجارب مستخدم استثنائية وتزيد التحويلات. بحث المستخدم، الإطارات السلكية، النماذج الأولية، التصميم المرئي، واختبار قابلية الاستخدام لإنشاء واجهات يحبها المستخدمون وتحقق أهداف عملك.",
      },
      usedFor: {
        en: "Essential for creating engaging digital products, improving user satisfaction, reducing bounce rates, and increasing conversions",
        ar: "ضروري لإنشاء منتجات رقمية جذابة، تحسين رضا المستخدم، تقليل معدلات الارتداد، وزيادة التحويلات",
      },
    },
    {
      id: "qr-menu",
      icon: "QrCode",
      title: {
        en: "QR Code Digital Menu",
        ar: "قائمة رقمية برمز QR",
      },
      description: {
        en: "Modern contactless digital menu system for restaurants and cafes. Customers scan QR codes to browse your menu on their phones. Features real-time menu updates, multi-language support, item images, allergen information, and easy ordering integration.",
        ar: "نظام قائمة رقمية حديث بدون تلامس للمطاعم والمقاهي. يمسح العملاء رموز QR لتصفح قائمتك على هواتفهم. يتضمن تحديثات القائمة في الوقت الفعلي، دعم متعدد اللغات، صور الأصناف، معلومات المواد المسببة للحساسية، وتكامل سهل للطلب.",
      },
      usedFor: {
        en: "Perfect for restaurants, cafes, bars, hotels, and any food service business wanting a modern, hygienic menu solution",
        ar: "مثالي للمطاعم والمقاهي والحانات والفنادق وأي عمل خدمات طعام يريد حل قائمة حديث وصحي",
      },
    },
  ],
  "custom-systems": [
    {
      id: "hotel-clinic-reservation",
      icon: "Hotel",
      title: {
        en: "Hotel & Clinic Reservation Systems",
        ar: "أنظمة حجز الفنادق والعيادات",
      },
      description: {
        en: "Complete booking management systems with real-time availability, room/appointment scheduling, automated confirmations, payment processing, customer profiles, reporting, and integration with calendars and third-party booking platforms.",
        ar: "أنظمة إدارة حجز كاملة مع التوفر في الوقت الفعلي، جدولة الغرف/المواعيد، التأكيدات التلقائية، معالجة الدفع، ملفات العملاء، التقارير، والتكامل مع التقويمات ومنصات الحجز الخارجية.",
      },
      usedFor: {
        en: "Essential for hotels, medical clinics, dental offices, wellness centers, and hospitality businesses",
        ar: "ضروري للفنادق، العيادات الطبية، عيادات الأسنان، مراكز الصحة، وأعمال الضيافة",
      },
    },
    {
      id: "inventory-management",
      icon: "Package",
      title: {
        en: "Inventory Management System",
        ar: "نظام إدارة المخزون",
      },
      description: {
        en: "Smart inventory tracking with barcode scanning, stock level monitoring, automated reorder alerts, supplier management, warehouse organization, multi-location support, and detailed analytics to prevent stockouts and optimize inventory costs.",
        ar: "تتبع مخزون ذكي مع مسح الباركود، مراقبة مستويات المخزون، تنبيهات إعادة الطلب التلقائية، إدارة الموردين، تنظيم المستودعات، دعم متعدد المواقع، وتحليلات تفصيلية لمنع نفاد المخزون وتحسين تكاليف المخزون.",
      },
      usedFor: {
        en: "Perfect for retail stores, warehouses, distribution centers, manufacturers, and e-commerce businesses",
        ar: "مثالي لمتاجر التجزئة، المستودعات، مراكز التوزيع، المصنعين، وأعمال التجارة الإلكترونية",
      },
    },
    {
      id: "crm",
      icon: "Users",
      title: {
        en: "CRM - Customer Relationship Management",
        ar: "إدارة علاقات العملاء - CRM",
      },
      description: {
        en: "Centralized customer data platform with contact management, sales pipeline tracking, communication history, task automation, email integration, reporting dashboards, and analytics to nurture customer relationships and close more deals.",
        ar: "منصة بيانات عملاء مركزية مع إدارة جهات الاتصال، تتبع خط أنابيب المبيعات، تاريخ الاتصالات، أتمتة المهام، تكامل البريد الإلكتروني، لوحات التقارير، والتحليلات لرعاية علاقات العملاء وإغلاق المزيد من الصفقات.",
      },
      usedFor: {
        en: "Crucial for sales teams, marketing departments, customer service, and business development",
        ar: "حاسم لفرق المبيعات، أقسام التسويق، خدمة العملاء، وتطوير الأعمال",
      },
    },
    {
      id: "hr-employee",
      icon: "UserCog",
      title: {
        en: "HR & Employee Management System",
        ar: "نظام إدارة الموارد البشرية والموظفين",
      },
      description: {
        en: "Comprehensive HR platform with employee records, attendance tracking, leave management, payroll integration, performance reviews, document management, onboarding workflows, and self-service portals for employees.",
        ar: "منصة موارد بشرية شاملة مع سجلات الموظفين، تتبع الحضور، إدارة الإجازات، تكامل كشوف المرتبات، تقييمات الأداء، إدارة المستندات، سير عمل التوظيف، وبوابات الخدمة الذاتية للموظفين.",
      },
      usedFor: {
        en: "Essential for growing companies, enterprises, startups, and any organization managing multiple employees",
        ar: "ضروري للشركات النامية، المؤسسات، الشركات الناشئة، وأي منظمة تدير موظفين متعددين",
      },
    },
    {
      id: "school-university",
      icon: "School",
      title: {
        en: "School & University Management System",
        ar: "نظام إدارة المدارس والجامعات",
      },
      description: {
        en: "Complete education management platform with student enrollment, grade management, attendance tracking, course scheduling, parent portals, fee management, library system, examination management, and communication tools.",
        ar: "منصة إدارة تعليم كاملة مع تسجيل الطلاب، إدارة الدرجات، تتبع الحضور، جدولة الدورات، بوابات أولياء الأمور، إدارة الرسوم، نظام المكتبة، إدارة الامتحانات، وأدوات الاتصال.",
      },
      usedFor: {
        en: "Designed for schools, colleges, universities, training centers, and educational institutions",
        ar: "مصمم للمدارس، الكليات، الجامعات، مراكز التدريب، والمؤسسات التعليمية",
      },
    },
    {
      id: "event-ticketing",
      icon: "Ticket",
      title: {
        en: "Event Registration & Ticketing System",
        ar: "نظام تسجيل وتذاكر الفعاليات",
      },
      description: {
        en: "Powerful event management platform with online registration, multiple ticket types, seating arrangements, QR code tickets, check-in systems, attendee management, promotional codes, analytics, and integration with payment gateways.",
        ar: "منصة إدارة فعاليات قوية مع التسجيل عبر الإنترنت، أنواع تذاكر متعددة، ترتيبات الجلوس، تذاكر رمز QR، أنظمة تسجيل الوصول، إدارة الحضور، رموز ترويجية، تحليلات، وتكامل مع بوابات الدفع.",
      },
      usedFor: {
        en: "Ideal for event organizers, conference planners, theaters, sports venues, and entertainment businesses",
        ar: "مثالي لمنظمي الفعاليات، مخططي المؤتمرات، المسارح، الأماكن الرياضية، وأعمال الترفيه",
      },
    },
  ],
  "cybersecurity-solutions": [
    {
      id: "penetration-testing",
      icon: "Bug",
      title: {
        en: "Penetration Testing",
        ar: "اختبار الاختراق",
      },
      description: {
        en: "Comprehensive ethical hacking services to identify security vulnerabilities before malicious attackers do. We simulate real-world attacks on your systems, networks, and applications to discover weaknesses and provide detailed remediation reports.",
        ar: "خدمات قرصنة أخلاقية شاملة لتحديد نقاط الضعف الأمنية قبل أن يقوم المهاجمون الضارون بذلك. نحاكي الهجمات الواقعية على أنظمتك وشبكاتك وتطبيقاتك لاكتشاف نقاط الضعف وتقديم تقارير إصلاح مفصلة.",
      },
      usedFor: {
        en: "Essential for financial institutions, healthcare providers, e-commerce platforms, and organizations handling sensitive data",
        ar: "ضروري للمؤسسات المالية، مقدمي الرعاية الصحية، منصات التجارة الإلكترونية، والمنظمات التي تتعامل مع البيانات الحساسة",
      },
    },
    {
      id: "digital-forensics",
      icon: "Search",
      title: {
        en: "Digital Forensics Investigation",
        ar: "التحقيق في الطب الشرعي الرقمي",
      },
      description: {
        en: "Expert investigation and analysis of cyber incidents. We collect, preserve, and examine digital evidence to determine how security breaches occurred, identify perpetrators, assess damage, and support legal proceedings. Includes comprehensive forensic reports.",
        ar: "تحقيق وتحليل خبير للحوادث السيبرانية. نجمع ونحفظ ونفحص الأدلة الرقمية لتحديد كيفية حدوث الاختراقات الأمنية، وتحديد الجناة، وتقييم الضرر، ودعم الإجراءات القانونية. يتضمن تقارير طب شرعي شاملة.",
      },
      usedFor: {
        en: "Vital after security incidents, data breaches, insider threats, or for legal evidence collection",
        ar: "حيوي بعد الحوادث الأمنية، اختراقات البيانات، التهديدات الداخلية، أو لجمع الأدلة القانونية",
      },
    },
    {
      id: "security-consultation",
      icon: "Users",
      title: {
        en: "Security Consultation",
        ar: "الاستشارات الأمنية",
      },
      description: {
        en: "Strategic cybersecurity guidance tailored to your business. Our experts help you develop security strategies, assess risks, choose appropriate security solutions, plan security budgets, and build a security-aware culture within your organization.",
        ar: "إرشادات أمن سيبراني استراتيجية مصممة خصيصًا لعملك. يساعدك خبراؤنا على تطوير استراتيجيات الأمان، وتقييم المخاطر، واختيار حلول الأمان المناسبة، وتخطيط ميزانيات الأمان، وبناء ثقافة واعية بالأمان داخل مؤسستك.",
      },
      usedFor: {
        en: "Ideal for companies building security programs, upgrading existing security, or seeking expert security advice",
        ar: "مثالي للشركات التي تبني برامج أمنية، أو ترقي الأمان الحالي، أو تسعى للحصول على مشورة أمنية خبيرة",
      },
    },
    {
      id: "security-monitoring",
      icon: "Eye",
      title: {
        en: "Security Monitoring",
        ar: "مراقبة الأمان",
      },
      description: {
        en: "24/7 continuous security monitoring with malware scanning, firewall protection, brute force prevention, vulnerability detection, SSL certificate management, and immediate threat response. We protect your systems from hackers and cyber attacks round the clock.",
        ar: "مراقبة أمنية مستمرة على مدار الساعة مع مسح البرامج الضارة، حماية جدار الحماية، منع القوة الغاشمة، كشف الثغرات، إدارة شهادة SSL، واستجابة فورية للتهديدات. نحمي أنظمتك من المتسللين والهجمات السيبرانية على مدار الساعة.",
      },
      usedFor: {
        en: "Vital for protecting digital assets, maintaining trust, and preventing costly security breaches",
        ar: "حيوي لحماية الأصول الرقمية، الحفاظ على الثقة، ومنع الاختراقات الأمنية المكلفة",
      },
    },
    {
      id: "security-training",
      icon: "GraduationCap",
      title: {
        en: "Security Awareness Training",
        ar: "التدريب على الوعي الأمني",
      },
      description: {
        en: "Interactive employee training programs to reduce human-related security risks. Covers phishing recognition, password security, social engineering tactics, data handling best practices, and incident reporting. Includes simulated phishing campaigns to test readiness.",
        ar: "برامج تدريب تفاعلية للموظفين لتقليل المخاطر الأمنية المتعلقة بالبشر. يغطي التعرف على التصيد، أمان كلمات المرور، تكتيكات الهندسة الاجتماعية، أفضل ممارسات معالجة البيانات، والإبلاغ عن الحوادث. يتضمن حملات تصيد محاكاة لاختبار الجاهزية.",
      },
      usedFor: {
        en: "Essential for all organizations to strengthen the human firewall and meet compliance training requirements",
        ar: "ضروري لجميع المنظمات لتعزيز جدار الحماية البشري وتلبية متطلبات التدريب على الامتثال",
      },
    },
    {
      id: "firewall-network-security",
      icon: "Network",
      title: {
        en: "Firewall & Network Security",
        ar: "جدار الحماية وأمن الشبكات",
      },
      description: {
        en: "Design, implementation, and management of enterprise-grade firewalls and network security solutions. Includes network segmentation, intrusion detection systems (IDS), intrusion prevention systems (IPS), VPN setup, secure Wi-Fi configuration, and continuous monitoring.",
        ar: "تصميم وتنفيذ وإدارة جدران الحماية على مستوى المؤسسات وحلول أمن الشبكات. يتضمن تجزئة الشبكة، أنظمة كشف التطفل (IDS)، أنظمة منع التطفل (IPS)، إعداد VPN، تكوين Wi-Fi الآمن، والمراقبة المستمرة.",
      },
      usedFor: {
        en: "Protects network perimeter, prevents unauthorized access, and monitors network traffic for threats",
        ar: "يحمي محيط الشبكة، ويمنع الوصول غير المصرح به، ويراقب حركة مرور الشبكة بحثًا عن التهديدات",
      },
    },
  ],
};

export function getSubServicesByServiceId(serviceId: string): SubService[] {
  return subServicesData[serviceId] || [];
}
