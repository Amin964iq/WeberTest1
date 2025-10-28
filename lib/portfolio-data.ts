export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  overview: string;
  overviewAr: string;
  category: string;
  categoryAr: string;
  image: string;
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    design: string[];
    deployment?: string[];
  };
  color: string;
  features: string[];
  featuresAr: string[];
  challenges: string[];
  challengesAr: string[];
  outcome: string;
  outcomeAr: string;
  highlights: string[];
  highlightsAr: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: "business-river",
    title: "Business River",
    titleAr: "بيزنس ريفر",
    description:
      "A comprehensive platform designed to connect entrepreneurs and businesses with essential services, resources, and solutions for business growth.",
    descriptionAr:
      "منصة شاملة مصممة لربط رواد الأعمال والشركات بالخدمات والموارد والحلول الأساسية لنمو الأعمال.",
    overview:
      "Business River is a comprehensive platform designed to connect entrepreneurs and businesses with essential services, resources, and solutions. Featuring a modern, professional design with multilingual support, it serves as a marketplace for business services enabling professionals to browse and connect with service providers.",
    overviewAr:
      "منصة شاملة مصممة لربط رواد الأعمال والشركات بالخدمات والموارد والحلول الأساسية. بتصميم حديث واحترافي مع دعم متعدد اللغات، تعمل كسوق للخدمات التجارية.",
    category: "Platform",
    categoryAr: "منصة",
    image: "https://ik.imagekit.io/wq0dxvevx/business-river.png?updatedAt=1760266385644",
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["MongoDB"],
      design: ["Figma"],
      deployment: ["Netlify"],
    },
    color: "from-blue-500/20 to-purple-500/20",
    features: [
      "Service Marketplace - Browse and connect with various business service providers",
      "Multilingual Support - Available in multiple languages for international reach",
      "Responsive Design - Optimized experience across all devices and screen sizes",
      "Modern UI/UX - Clean, professional interface designed for business professionals",
      "Resource Hub - Access to business tools, guides, and essential resources",
      "Contact Integration - Easy communication with service providers and support",
    ],
    featuresAr: [
      "سوق الخدمات - تصفح والتواصل مع مختلف مزودي خدمات الأعمال",
      "دعم متعدد اللغات - متاح بلغات متعددة للوصول الدولي",
      "تصميم متجاوب - تجربة محسنة عبر جميع الأجهزة والشاشات",
      "تصميم واجهة مستخدم حديثة - واجهة احترافية نظيفة للمحترفين",
      "مركز الموارد - الوصول إلى أدوات وأدلة الأعمال",
      "تكامل الاتصال - التواصل السهل مع مزودي الخدمات",
    ],
    challenges: [
      "Implementing robust multilingual support while maintaining performance and SEO optimization",
      "Planning comprehensive service categorization and user flow",
      "Conveying professionalism while remaining accessible to users from various business backgrounds",
    ],
    challengesAr: [
      "تطبيق دعم متعدد اللغات قوي مع الحفاظ على الأداء وتحسين محرك البحث",
      "التخطيط الشامل لتصنيف الخدمات وتدفق المستخدم",
      "نقل الاحترافية مع البقاء في متناول المستخدمين من خلفيات مختلفة",
    ],
    outcome:
      "Successfully delivered a full-stack, multilingual business marketplace platform showcasing full capabilities in service categorization, user flow design, and professional UI/UX implementation. Currently in active development.",
    outcomeAr:
      "تم تسليم منصة سوق أعمال متعددة اللغات بنجاح، مع عرض كامل قدرات تصنيف الخدمات وتصميم تدفق المستخدم.",
    highlights: [
      "Multilingual marketplace platform",
      "Professional service categorization",
      "Performance-optimized design",
      "SEO-friendly architecture",
    ],
    highlightsAr: [
      "منصة سوق متعددة اللغات",
      "تصنيف الخدمات الاحترافي",
      "تصميم محسّن للأداء",
      "بنية صديقة لمحركات البحث",
    ],
    links: {
      github: "https://github.com/KEYAJANI/business-river.git",
      live: "https://business-river.netlify.app/en",
    },
  },
  {
    id: 2,
    slug: "laurenza-beauty",
    title: "Laurenza Beauty",
    titleAr: "لورينزا بيوتي",
    description:
      "Premium salon website with elegant design reflecting luxury positioning, integrated appointment scheduling, and beautiful service galleries.",
    descriptionAr:
      "موقع صالون متميز بتصميم أنيق يعكس الموضع الفاخر، مع جدولة المواعيد المدمجة ومعارض الخدمات الجميلة.",
    overview:
      "Laurenza Beauty is a sophisticated website for a premium beauty salon and spa that reflects the brand's luxury positioning while providing comprehensive booking and service information. The platform features detailed service showcases, online appointment scheduling with calendar functionality, professional staff profiles, and beautiful photo galleries.",
    overviewAr:
      "موقع متطور لصالون تجميل وسبا متميز يعكس موضع العلامة التجارية الفاخرة مع تقديم معلومات حجز وخدمات شاملة. تتضمن المنصة عروض خدمات مفصلة وجدولة المواعيد عبر الإنترنت وملفات تعريف الموظفين.",
    category: "Beauty",
    categoryAr: "الجمال",
    image: "https://ik.imagekit.io/wq0dxvevx/laurenza1.png?updatedAt=1760265995796",
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js"],
      database: ["MongoDB"],
      design: ["Figma"],
    },
    color: "from-purple-500/20 to-indigo-500/20",
    features: [
      "Service Showcase - Detailed presentation of beauty services and treatments",
      "Online Booking System - Integrated appointment scheduling with calendar functionality",
      "Gallery - Beautiful photo gallery showcasing salon work and ambiance",
      "Staff Profiles - Meet the team section with professional bios",
      "Responsive Design - Seamless experience across all devices",
      "Contact Integration - Multiple contact methods including forms, phone, and location",
      "Multilingual Support - Available in multiple languages for broader reach",
    ],
    featuresAr: [
      "عرض الخدمات - عرض مفصل لخدمات التجميل والعلاجات",
      "نظام الحجز عبر الإنترنت - جدولة المواعيد المدمجة",
      "المعرض - معرض صور جميل يعرض أعمال الصالون",
      "ملفات الموظفين - قسم التعرف على الفريق",
      "تصميم متجاوب - تجربة سلسة عبر جميع الأجهزة",
      "تكامل الاتصال - طرق اتصال متعددة",
      "دعم متعدد اللغات - متاح بلغات متعددة",
    ],
    challenges: [
      "Creating a booking system that prevents double-bookings while handling varied service durations",
      "Designing luxury aesthetic while maintaining accessibility and usability",
      "Implementing smooth animations while maintaining performance",
    ],
    challengesAr: [
      "إنشاء نظام حجز يمنع حجز مزدوج مع التعامل مع فترات خدمة مختلفة",
      "تصميم جمالي فاخر مع الحفاظ على الوصول والقابلية للاستخدام",
      "تطبيق الحركات السلسة مع الحفاظ على الأداء",
    ],
    outcome:
      "Delivered a production-ready website with a custom domain (laurenza.beauty) that successfully serves a real beauty salon, handling customer bookings and significantly improving their online presence.",
    outcomeAr:
      "تم تسليم موقع جاهز للإنتاج بنطاق مخصص يخدم صالون تجميل حقيقي بنجاح.",
    highlights: [
      "Custom booking system",
      "Luxury design implementation",
      "Performance-optimized animations",
      "Real-world salon management",
    ],
    highlightsAr: [
      "نظام حجز مخصص",
      "تطبيق التصميم الفاخر",
      "الحركات محسنة للأداء",
      "إدارة صالون واقعية",
    ],
    links: {
      github: "https://github.com/KEYAJANI/laurenza.git",
      live: "https://laurenza.beauty/",
    },
  },
  {
    id: 3,
    slug: "demiland-beauty",
    title: "Demiland Beauty",
    titleAr: "ديميلاند بيوتي",
    description:
      "E-commerce beauty products platform with modern design, beautiful product galleries, and complete shopping functionality.",
    descriptionAr:
      "منصة تجارة إلكترونية لمنتجات التجميل بتصميم حديث ومعارض منتجات جميلة وكامل وظائف التسوق.",
    overview:
      "Demiland Beauty is a full-stack e-commerce application designed for a beauty products retailer. The platform features high-quality product galleries, functional cart systems, categorized product listings with filtering options, and a complete backend infrastructure for inventory and order management.",
    overviewAr:
      "منصة تجارة إلكترونية كاملة مصممة لبائع تجزئة منتجات التجميل. تتضمن المنصة معارض منتجات عالية الجودة وأنظمة عربة وظيفية وقوائم منتجات منظمة.",
    category: "E-Commerce",
    categoryAr: "التجارة الإلكترونية",
    image: "https://ik.imagekit.io/wq0dxvevx/demiland1.png?updatedAt=1760265995753",
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Python/Flask"],
      database: ["MongoDB"],
      design: ["Figma"],
    },
    color: "from-indigo-500/20 to-pink-500/20",
    features: [
      "Product Showcase - High-quality image galleries displaying beauty products",
      "Shopping Experience - Functional cart system with checkout capabilities",
      "Organization - Categorized product listings with filtering options",
      "Cross-device Support - Optimized layouts for desktop, tablet, and mobile",
      "Customer Accounts - Registration, authentication, and order history tracking",
      "Admin Tools - Backend dashboard for product management and inventory control",
      "Payment Integration - Secure payment processing for transactions",
    ],
    featuresAr: [
      "عرض المنتجات - معارض صور عالية الجودة",
      "تجربة التسوق - نظام عربة وظيفي",
      "التنظيم - قوائم منتجات منظمة مع خيارات التصفية",
      "دعم متعدد الأجهزة - تخطيطات محسنة",
      "حسابات العملاء - التسجيل والمصادقة",
      "أدوات الإدارة - لوحة تحكم للإدارة",
      "تكامل الدفع - معالجة الدفع الآمنة",
    ],
    challenges: [
      "Implementing secure payment processing with compliance standards",
      "Optimizing image loading for product galleries",
      "Creating an intuitive admin interface for non-technical users",
    ],
    challengesAr: [
      "تطبيق معالجة الدفع الآمنة مع معايير الامتثال",
      "تحسين تحميل الصور لمعارض المنتجات",
      "إنشاء واجهة إدارة بديهية",
    ],
    outcome:
      "Successfully launched a production e-commerce platform with custom domain (demiland.beauty) serving real customers with operational payment processing and inventory management systems.",
    outcomeAr:
      "تم إطلاق منصة تجارة إلكترونية بنجاح مع نطاق مخصص تخدم عملاء حقيقيين.",
    highlights: [
      "Secure payment processing",
      "Optimized product galleries",
      "Inventory management",
      "Production-ready platform",
    ],
    highlightsAr: [
      "معالجة دفع آمنة",
      "معارض منتجات محسنة",
      "إدارة المخزون",
      "منصة جاهزة للإنتاج",
    ],
    links: {
      github: "https://github.com/KEYAJANI/demiland.git",
      live: "https://demiland.beauty/",
    },
  },
  {
    id: 4,
    slug: "doodle-menu",
    title: "Doodle Menu",
    titleAr: "دودل مينو",
    description:
      "QR code-based digital menu system for restaurants enabling contactless ordering with multilingual support in Arabic, Kurdish, and English.",
    descriptionAr:
      "نظام قائمة رقمية قائم على رمز QR للمطاعم يتيح الطلب بدون تلامس مع دعم متعدد اللغات.",
    overview:
      "Doodle Menu is a modern digital menu platform that allows restaurants to create QR code-accessible menus for their customers. It provides a contactless dining solution that reduces operational costs while improving efficiency. The platform features multilingual support in Arabic, Kurdish, and English, allowing restaurants to serve diverse customer bases.",
    overviewAr:
      "منصة قائمة رقمية حديثة تسمح للمطاعم بإنشاء قوائم يمكن الوصول إليها برمز QR. توفر حلاً للتناول بدون تلامس يقلل التكاليف التشغيلية مع تحسين الكفاءة.",
    category: "RestTech",
    categoryAr: "تقنية المطاعم",
    image: "https://ik.imagekit.io/wq0dxvevx/doodle.png?updatedAt=1760265464948",
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Python/Flask"],
      database: ["MongoDB"],
      design: ["Figma"],
    },
    color: "from-blue-500/20 to-cyan-500/20",
    features: [
      "QR Code Integration - Customers scan codes to access menus instantly",
      "Interactive Menu - Browse dishes with images, descriptions, and pricing",
      "Multilingual Support - Available in Arabic, Kurdish, and English",
      "Real-time Updates - Restaurant staff can modify menus immediately",
      "Mobile-First Design - Optimized for smartphone viewing",
      "Category Organization - Organized by courses and dietary preferences",
      "Admin Management - Staff can customize and update menus without technical expertise",
    ],
    featuresAr: [
      "تكامل رمز QR - المسح الفوري للوصول إلى القوائم",
      "قائمة تفاعلية - تصفح الأطباق مع الصور والأوصاف والأسعار",
      "دعم متعدد اللغات - متاح باللغة العربية والكردية والإنجليزية",
      "تحديثات فورية - يمكن للموظفين تعديل القوائم فوراً",
      "تصميم موجه للهاتف - محسّن للعرض على الهواتف الذكية",
      "تنظيم الفئات - منظمة حسب المقررات والتفضيلات الغذائية",
      "إدارة المسؤولين - يمكن للموظفين تخصيص وتحديث القوائم",
    ],
    challenges: [
      "Creating a seamless multilingual experience across three languages",
      "Optimizing mobile performance on slow connections",
      "Designing an intuitive admin interface for non-technical restaurant staff",
    ],
    challengesAr: [
      "إنشاء تجربة متعددة اللغات سلسة",
      "تحسين أداء الهاتف المحمول على الاتصالات البطيئة",
      "تصميم واجهة إدارة بديهية",
    ],
    outcome:
      "Successfully deployed a production-ready QR menu system serving real restaurants, enhancing customer experience through contactless ordering while reducing printing costs for menu updates.",
    outcomeAr:
      "تم نشر نظام قائمة QR جاهز للإنتاج بنجاح يخدم المطاعم الحقيقية.",
    highlights: [
      "Multilingual QR system",
      "Real-time menu management",
      "Production-ready deployment",
      "Cost-effective solution",
    ],
    highlightsAr: [
      "نظام QR متعدد اللغات",
      "إدارة القائمة الفورية",
      "نشر جاهز للإنتاج",
      "حل فعال من حيث التكلفة",
    ],
    links: {
      github: "https://github.com/KEYAJANI/doodle.git",
      demo: "https://qrmenu.doodle-iq.com/menu",
    },
  },
  {
    id: 5,
    slug: "al-saqi",
    title: "Al Saqi",
    titleAr: "الساقي",
    description:
      "Modern web application featuring clean, contemporary design with attention to detail and responsive layouts optimized across all devices.",
    descriptionAr:
      "تطبيق ويب حديث بتصميم نظيف وعصري مع اهتمام بالتفاصيل وتخطيطات متجاوبة.",
    overview:
      "Al Saqi is a modern web application built with React and deployed on Vercel, featuring a clean and intuitive user interface with smooth interactions and responsive design. The project demonstrates modern frontend development practices with excellent performance and user experience optimization.",
    overviewAr:
      "تطبيق ويب حديث بني بـ React ومنشور على Vercel، مع واجهة مستخدم نظيفة وبديهية مع تفاعلات سلسة.",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    image: "https://ik.imagekit.io/wq0dxvevx/alsaqi.png?updatedAt=1760265464972",
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      backend: [],
      database: [],
      design: ["Figma"],
      deployment: ["Vercel"],
    },
    color: "from-pink-500/20 to-blue-500/20",
    features: [
      "Modern UI/UX Design - Contemporary design with meticulous attention to detail",
      "Responsive Layout - Fully responsive, functioning seamlessly across all devices",
      "Interactive Components - Smooth animations and fluid interactions",
      "Performance Optimized - Fast loading and efficient rendering",
      "Accessibility - Built incorporating accessibility best practices",
      "Clean Code Architecture - Maintainable and scalable codebase",
    ],
    featuresAr: [
      "تصميم واجهة مستخدم حديث - تصميم عصري مع اهتمام بالتفاصيل",
      "تخطيط متجاوب - مستجيب بالكامل في جميع الأجهزة",
      "مكونات تفاعلية - حركات سلسة وتفاعلات سلسة",
      "محسّن للأداء - تحميل سريع وتقديم فعال",
      "إمكانية الوصول - تم بناؤه وفقاً لأفضل الممارسات",
      "بنية كود نظيفة - قاعدة كود قابلة للصيانة والتوسع",
    ],
    challenges: [
      "Constructing interactive React applications while prioritizing user experience",
      "Maintaining excellent performance with smooth animations",
      "Ensuring accessibility standards while maintaining modern design aesthetics",
    ],
    challengesAr: [
      "بناء تطبيقات React تفاعلية مع الأولوية للتجربة",
      "الحفاظ على الأداء الممتاز مع الحركات السلسة",
      "ضمان معايير الوصول مع الحفاظ على جماليات التصميم",
    ],
    outcome:
      "Successfully delivered a polished web application that demonstrates modern frontend development practices with excellent performance, user experience, and code maintainability. Deployed on Vercel with CI/CD pipeline.",
    outcomeAr:
      "تم تسليم تطبيق ويب مصقول بنجاح يوضح أفضل ممارسات تطوير الواجهة الأمامية الحديثة.",
    highlights: [
      "Modern frontend development",
      "Excellent performance optimization",
      "Clean code architecture",
      "Production-ready deployment",
    ],
    highlightsAr: [
      "تطوير واجهة أمامية حديثة",
      "تحسين الأداء الممتاز",
      "بنية كود نظيفة",
      "نشر جاهز للإنتاج",
    ],
    links: {
      github: "https://github.com/KEYAJANI/AlSaqi-FrontEnd.git",
      live: "https://al-saqi-front-end.vercel.app/",
    },
  },
  {
    id: 6,
    slug: "fyay-flowers",
    title: "Fyay Flowers",
    titleAr: "فاي فلاورز",
    description:
      "E-commerce platform for a flower shop featuring online ordering, product catalog, and delivery management.",
    descriptionAr:
      "منصة تجارة إلكترونية لمتجر زهور مع الطلب عبر الإنترنت وكتالوج المنتجات وإدارة التسليم.",
    overview:
      "Fyay Flowers is an e-commerce platform for a flower shop, featuring online ordering, product catalog, and delivery management. This was one of the developer's earlier full-stack projects, completed approximately one year prior. It served as an introduction to real-world e-commerce development principles.",
    overviewAr:
      "منصة تجارة إلكترونية لمتجر زهور تتضمن الطلب عبر الإنترنت وكتالوج المنتجات وإدارة التسليم.",
    category: "E-Commerce",
    categoryAr: "التجارة الإلكترونية",
    image: "https://ik.imagekit.io/wq0dxvevx/fyayflowers.png?updatedAt=1760265464900",
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript", "React"],
      backend: ["Python/Flask", "Node.js"],
      database: ["MongoDB", "SQLite3"],
      design: ["Figma"],
    },
    color: "from-cyan-500/20 to-purple-500/20",
    features: [
      "Product Catalog - Browse flower arrangements and related products",
      "Shopping Cart - Add items and manage orders",
      "Order Management - Track orders and delivery status",
      "Responsive Design - Mobile-friendly interface across devices",
      "Admin Panel - Backend management for products, orders, and inventory",
      "Order Tracking - Real-time delivery status updates",
      "Inventory Control - Stock management system",
    ],
    featuresAr: [
      "فهرس المنتجات - تصفح ترتيبات الزهور والمنتجات ذات الصلة",
      "عربة التسوق - إضافة العناصر وإدارة الطلبات",
      "إدارة الطلبات - تتبع الطلبات وحالة التسليم",
      "تصميم متجاوب - واجهة صديقة للجوال",
      "لوحة الإدارة - إدارة المنتجات والطلبات",
      "تتبع الطلبات - تحديثات حالة التسليم الفورية",
      "التحكم في المخزون - نظام إدارة الأسهم",
    ],
    challenges: [
      "Understanding full-stack architecture and connecting frontend to backend",
      "Handling payment integrations securely",
      "Managing state across the application effectively",
    ],
    challengesAr: [
      "فهم بنية المكدس الكامل وربط الواجهة الأمامية بالخلفية",
      "معالجة تكاملات الدفع بأمان",
      "إدارة الحالة عبر التطبيق بشكل فعال",
    ],
    outcome:
      "Successfully delivered a functional e-commerce platform that streamlined the flower shop's online presence and order management processes. Served as foundational learning for full-stack e-commerce development.",
    outcomeAr:
      "تم تسليم منصة تجارة إلكترونية وظيفية بنجاح، وخدمت كأساس للتعلم.",
    highlights: [
      "Full-stack e-commerce development",
      "Real-world project experience",
      "Order management system",
      "Inventory tracking",
    ],
    highlightsAr: [
      "تطوير تجارة إلكترونية المكدس الكامل",
      "تجربة المشروع الحقيقي",
      "نظام إدارة الطلبات",
      "تتبع المخزون",
    ],
    links: {
      github: "https://github.com/KEYAJANI/Fyay-Flowers.git",
    },
  },
];
